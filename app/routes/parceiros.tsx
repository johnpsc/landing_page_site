import React, { useCallback, useEffect, useRef, useState } from "react";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import { useAfiliado } from "../hooks/useAfiliado";
import { ConfigSite, Textos } from "../lib/config";
import { Cores, Fontes, Sombras } from "../lib/theme";
import { enviarFormularioParceiro } from "../services/ServicoApi";
import { maskCNPJ, maskPhone } from "../utils/formatacao";

// ─── Ícones inline ───────────────────────────────────────────────────────────

function IconCheck() {
    return (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function IconSend() {
    return (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
    );
}

// ─── Dados do flavor ─────────────────────────────────────────────────────────

const P = Textos.parceiros;
const VANTAGENS = P.vantagens;
const COMO_FUNCIONA = P.comoFunciona;

// ─── Componente principal ────────────────────────────────────────────────────

export function meta() {
    return [
        { title: `Seja Parceiro - ${ConfigSite.name}` },
        { name: "description", content: `Torne-se parceiro ${ConfigSite.name} e ganhe comissões recorrentes indicando nosso sistema.` },
    ];
}

export default function PaginaParceiros() {
    const afiliado = useAfiliado();
    const [form, setForm] = useState({
        nome_completo: "",
        empresa: "",
        cnpj: "",
        celular: "",
        email: "",
        cidade: "",
        estado: "",
        mensagem: "",
    });

    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState("");
    const [sucesso, setSucesso] = useState(false);

    // ── Cidades por estado (IBGE) ───────────────────────────────────────
    const [cidadesDoEstado, setCidadesDoEstado] = useState<string[]>([]);
    const [cidadesFiltradas, setCidadesFiltradas] = useState<string[]>([]);
    const [mostrarSugestoes, setMostrarSugestoes] = useState(false);
    const [carregandoCidades, setCarregandoCidades] = useState(false);
    const cidadeRef = useRef<HTMLDivElement>(null);

    // Busca cidades quando o estado muda
    useEffect(() => {
        if (!form.estado) {
            setCidadesDoEstado([]);
            setCidadesFiltradas([]);
            return;
        }
        let cancelado = false;
        setCarregandoCidades(true);
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.estado}/municipios?orderBy=nome`)
            .then((res) => res.json())
            .then((dados: { nome: string }[]) => {
                if (!cancelado) {
                    const nomes = dados.map((c) => c.nome);
                    setCidadesDoEstado(nomes);
                    setCidadesFiltradas(nomes);
                }
            })
            .catch(() => { if (!cancelado) setCidadesDoEstado([]); })
            .finally(() => { if (!cancelado) setCarregandoCidades(false); });
        return () => { cancelado = true; };
    }, [form.estado]);

    // Filtra cidades conforme o usuário digita
    useEffect(() => {
        if (!form.cidade.trim()) {
            setCidadesFiltradas(cidadesDoEstado);
            return;
        }
        const termo = form.cidade.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        setCidadesFiltradas(
            cidadesDoEstado.filter((c) =>
                c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(termo)
            )
        );
    }, [form.cidade, cidadesDoEstado]);

    // Fecha sugestões ao clicar fora
    useEffect(() => {
        function handleClickFora(e: MouseEvent) {
            if (cidadeRef.current && !cidadeRef.current.contains(e.target as Node)) {
                setMostrarSugestoes(false);
            }
        }
        document.addEventListener("mousedown", handleClickFora);
        return () => document.removeEventListener("mousedown", handleClickFora);
    }, []);

    const selecionarCidade = useCallback((nome: string) => {
        setForm((s) => ({ ...s, cidade: nome }));
        setFieldErrors((s) => ({ ...s, cidade: "" }));
        setMostrarSugestoes(false);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        let { name, value } = e.target;
        if (name === "cnpj") value = maskCNPJ(value);
        if (name === "celular") value = maskPhone(value);
        // Limpa cidade quando troca de estado
        if (name === "estado") {
            setForm((s) => ({ ...s, estado: value, cidade: "" }));
            setFieldErrors((s) => ({ ...s, estado: "", cidade: "" }));
            return;
        }
        setForm((s) => ({ ...s, [name]: value }));
        setFieldErrors((s) => ({ ...s, [name]: "" }));
    }

    function validate() {
        const errors: Record<string, string> = {};
        if (!form.nome_completo.trim()) errors.nome_completo = "Nome é obrigatório";
        if (!form.email.includes("@")) errors.email = "E-mail inválido";
        if (form.celular.replace(/\D/g, "").length < 10) errors.celular = "Celular inválido";
        if (!form.cidade.trim()) errors.cidade = "Cidade é obrigatória";
        if (!form.estado.trim()) errors.estado = "Estado é obrigatório";
        return errors;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitError("");
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }
        setLoading(true);
        try {
            const res = await enviarFormularioParceiro({ ...form, id_afiliado: afiliado });
            if (res.sucesso) {
                setSucesso(true);
            } else {
                setSubmitError(res.mensagem || "Erro ao enviar. Tente novamente.");
            }
        } catch (err: any) {
            setSubmitError(String(err));
        } finally {
            setLoading(false);
        }
    }

    const ESTADOS_BR = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
        "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
    ];

    // ── Tela de sucesso ─────────────────────────────────────────────────────
    if (sucesso) {
        return (
            <div className="w-full min-h-screen flex flex-col" style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara }}>
                <CabecalhoSite />
                <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-10">
                    <div className="text-center max-w-lg">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: Cores.escura }}>
                            Cadastro recebido!
                        </h1>
                        <p className="text-lg mb-8" style={{ color: Cores.textoSuave }}>
                            Obrigado pelo interesse em ser parceiro {ConfigSite.name}! Nossa equipe comercial entrará em contato em até 48H úteis.
                        </p>
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base transition-all hover:-translate-y-0.5"
                            style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                        >
                            Voltar ao início
                            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
                <RodapeSite />
            </div>
        );
    }

    // ── Página principal ────────────────────────────────────────────────────
    return (
        <div className="w-full min-h-screen flex flex-col" style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara }}>
            <CabecalhoSite />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="pt-40 pb-20 px-4 md:px-8 text-center relative overflow-hidden">
                <div className="absolute top-20 left-0 md:left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ backgroundColor: Cores.primaria }} />
                <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ backgroundColor: Cores.destaque, animationDelay: "2s" }} />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm mb-8 border shadow-sm" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria, borderColor: `${Cores.primaria}22` }}>
                        <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: Cores.primaria }} />
                        <span>{P.seloPagina}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: Cores.escura }}>
                        {P.tituloPagina.split(ConfigSite.name)[0]}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.primariaEscura})` }}>
                            {ConfigSite.name}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed" style={{ color: Cores.textoSuave }}>
                        {P.subtituloPagina}
                    </p>
                </div>
            </section>

            {/* ── Sobre a empresa ───────────────────────────────────────────────── */}
            <section className="py-20 px-4 md:px-8" style={{ backgroundColor: Cores.primariaClara }}>
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                            {P.seloSobre}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: Cores.escura }}>
                            {P.tituloSobre}
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: Cores.textoSuave }}>
                            {P.descricaoSobre}
                        </p>
                    </div>

                    {/* Números da empresa */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {P.numeros.map((stat) => (
                            <div
                                key={stat.rotulo}
                                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:-translate-y-1 transition-all duration-300"
                                style={{ boxShadow: Sombras.cardFuncionalidade }}
                            >
                                <div className="text-3xl mb-2">{stat.icone}</div>
                                <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: Cores.primaria }}>{stat.valor}</div>
                                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: Cores.textoSuave }}>{stat.rotulo}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card — Sobre a empresa */}
                        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: Sombras.cardFuncionalidade }}>
                            <div className="flex items-center gap-4 mb-5">
                                <img src={ConfigSite.logo} alt={`Logo ${ConfigSite.name}`} className="h-12 object-contain" />
                                <div>
                                    <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{ConfigSite.name}</h3>
                                    <p className="text-sm" style={{ color: Cores.textoSuave }}>{ConfigSite.slogan}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: Cores.textoSuave }}>
                                {ConfigSite.description} Somos a <strong style={{ color: Cores.escura }}>{ConfigSite.companyName}</strong>, {P.descricaoEmpresa}
                            </p>

                            {/* Sede e contato */}
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <div className="flex items-start gap-3">
                                    <span className="text-lg mt-0.5">📍</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: Cores.escura }}>Sede</p>
                                        <p className="text-sm" style={{ color: Cores.textoSuave }}>{P.sede}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-lg mt-0.5">🏢</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: Cores.escura }}>CNPJ</p>
                                        <p className="text-sm" style={{ color: Cores.textoSuave }}>{P.cnpjLabel}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-lg mt-0.5">🌐</span>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: Cores.escura }}>Atuação</p>
                                        <p className="text-sm" style={{ color: Cores.textoSuave }}>{P.atuacao}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card — Por que ser parceiro? */}
                        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: Sombras.cardFuncionalidade }}>
                            <h3 className="text-lg font-bold mb-5" style={{ color: Cores.escura }}>Por que ser parceiro?</h3>
                            <ul className="space-y-3">
                                {P.motivosParceiro.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                                            <IconCheck />
                                        </div>
                                        <span className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Vantagens ─────────────────────────────────────────────────────── */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                            Vantagens
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: Cores.escura }}>
                            O que você ganha sendo parceiro
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Benefícios exclusivos para nossos parceiros comerciais
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VANTAGENS.map((v) => (
                            <div key={v.titulo} className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: Sombras.cardFuncionalidade }}>
                                <div className="text-3xl mb-4">{v.icone}</div>
                                <h3 className="font-bold text-lg mb-2" style={{ color: Cores.escura }}>{v.titulo}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{v.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Como funciona ─────────────────────────────────────────────────── */}
            <section className="py-20 px-4 md:px-8" style={{ backgroundColor: Cores.primariaClara }}>
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-14">
                        <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                            Passo a passo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: Cores.escura }}>
                            Como funciona
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {COMO_FUNCIONA.map((item) => (
                            <div key={item.passo} className="text-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4"
                                    style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.ctaPadrao }}
                                >
                                    {item.passo}
                                </div>
                                <h3 className="font-bold text-base mb-2" style={{ color: Cores.escura }}>{item.titulo}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{item.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Formulário de parceria ────────────────────────────────────────── */}
            <section id="formulario" className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                        {/* Form (3/5) */}
                        <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: Sombras.imagemPainel }}>
                            <div className="mb-8">
                                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                                    Cadastro de Parceiro
                                </span>
                                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: Cores.escura }}>
                                    Envie seus dados
                                </h2>
                                <p className="text-sm mt-1.5" style={{ color: Cores.textoSuave }}>
                                    Preencha o formulário abaixo e nossa equipe entrará em contato.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <FormField label="Nome completo" error={fieldErrors.nome_completo} required>
                                    <InputField
                                        name="nome_completo"
                                        placeholder="Ex: João Silva"
                                        value={form.nome_completo}
                                        onChange={handleChange}
                                        hasError={!!fieldErrors.nome_completo}
                                        icon={
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        }
                                    />
                                </FormField>

                                <FormField label="Empresa (opcional)" error={fieldErrors.empresa}>
                                    <InputField
                                        name="empresa"
                                        placeholder="Nome da sua empresa"
                                        value={form.empresa}
                                        onChange={handleChange}
                                        hasError={!!fieldErrors.empresa}
                                        icon={
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        }
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <FormField label="CNPJ (opcional)" error={fieldErrors.cnpj}>
                                        <InputField
                                            name="cnpj"
                                            placeholder="00.000.000/0000-00"
                                            value={form.cnpj}
                                            onChange={handleChange}
                                            hasError={!!fieldErrors.cnpj}
                                            icon={
                                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                                    <path d="M8 21h8m-4-4v4" />
                                                </svg>
                                            }
                                        />
                                    </FormField>

                                    <FormField label="Celular / WhatsApp" error={fieldErrors.celular} required>
                                        <InputField
                                            name="celular"
                                            placeholder="(00) 00000-0000"
                                            value={form.celular}
                                            onChange={handleChange}
                                            hasError={!!fieldErrors.celular}
                                            icon={
                                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            }
                                        />
                                    </FormField>
                                </div>

                                <FormField label="E-mail" error={fieldErrors.email} required>
                                    <InputField
                                        name="email"
                                        type="email"
                                        placeholder="voce@exemplo.com.br"
                                        value={form.email}
                                        onChange={handleChange}
                                        hasError={!!fieldErrors.email}
                                        icon={
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        }
                                    />
                                </FormField>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <FormField label="Estado" error={fieldErrors.estado} required>
                                        <div
                                            className="flex items-center rounded-xl border-2 bg-white transition-colors focus-within:border-(--color-primary)"
                                            style={{ borderColor: fieldErrors.estado ? "#EF4444" : Cores.borda }}
                                        >
                                            <span className="pl-3.5 shrink-0" style={{ color: Cores.textoDesabilitado }}>
                                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h18v18H3z" />
                                                </svg>
                                            </span>
                                            <select
                                                name="estado"
                                                value={form.estado}
                                                onChange={handleChange}
                                                className="flex-1 bg-transparent px-3 py-3 text-sm outline-none min-w-0 appearance-none"
                                                style={{ color: form.estado ? Cores.escura : "#D1D5DB" }}
                                            >
                                                <option value="" disabled>Selecione</option>
                                                {ESTADOS_BR.map((uf) => (
                                                    <option key={uf} value={uf}>{uf}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </FormField>

                                    <FormField label="Cidade" error={fieldErrors.cidade} required>
                                        <div ref={cidadeRef} className="relative">
                                            <div
                                                className="flex items-center rounded-xl border-2 bg-white transition-colors focus-within:border-(--color-primary)"
                                                style={{ borderColor: fieldErrors.cidade ? "#EF4444" : Cores.borda }}
                                            >
                                                <span className="pl-3.5 shrink-0" style={{ color: Cores.textoDesabilitado }}>
                                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    name="cidade"
                                                    placeholder={!form.estado ? "Selecione o estado primeiro" : carregandoCidades ? "Carregando cidades..." : "Digite para buscar..."}
                                                    value={form.cidade}
                                                    disabled={!form.estado || carregandoCidades}
                                                    onChange={(e) => {
                                                        setForm((s) => ({ ...s, cidade: e.target.value }));
                                                        setFieldErrors((s) => ({ ...s, cidade: "" }));
                                                        setMostrarSugestoes(true);
                                                    }}
                                                    onFocus={() => form.estado && setMostrarSugestoes(true)}
                                                    autoComplete="off"
                                                    className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder-gray-300 min-w-0 disabled:cursor-not-allowed"
                                                    style={{ color: Cores.escura }}
                                                />
                                                {carregandoCidades && (
                                                    <span className="pr-3 shrink-0">
                                                        <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${Cores.primaria}40`, borderTopColor: Cores.primaria }} />
                                                    </span>
                                                )}
                                            </div>

                                            {/* Dropdown de sugestões */}
                                            {mostrarSugestoes && cidadesFiltradas.length > 0 && (
                                                <ul
                                                    className="absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-y-auto rounded-xl border bg-white py-1"
                                                    style={{ borderColor: Cores.borda, boxShadow: Sombras.cardFuncionalidade }}
                                                >
                                                    {cidadesFiltradas.slice(0, 80).map((cidade) => {
                                                        const selecionada = cidade === form.cidade;
                                                        return (
                                                            <li
                                                                key={cidade}
                                                                onMouseDown={() => selecionarCidade(cidade)}
                                                                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${selecionada ? "font-semibold" : ""
                                                                    }`}
                                                                style={{
                                                                    color: selecionada ? Cores.primaria : Cores.escura,
                                                                    backgroundColor: selecionada ? Cores.primariaClara : undefined,
                                                                }}
                                                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = Cores.primariaClara)}
                                                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = selecionada ? Cores.primariaClara : "transparent")}
                                                            >
                                                                {cidade}
                                                            </li>
                                                        );
                                                    })}
                                                    {cidadesFiltradas.length > 80 && (
                                                        <li className="px-4 py-2 text-xs text-center" style={{ color: Cores.textoSuave }}>
                                                            Continue digitando para refinar...
                                                        </li>
                                                    )}
                                                </ul>
                                            )}

                                            {mostrarSugestoes && form.cidade.trim() && cidadesFiltradas.length === 0 && !carregandoCidades && (
                                                <div
                                                    className="absolute z-50 left-0 right-0 mt-1 rounded-xl border bg-white px-4 py-3 text-sm"
                                                    style={{ borderColor: Cores.borda, color: Cores.textoSuave, boxShadow: Sombras.cardFuncionalidade }}
                                                >
                                                    Nenhuma cidade encontrada para "{form.cidade}"
                                                </div>
                                            )}
                                        </div>
                                    </FormField>
                                </div>

                                <FormField label="Mensagem (opcional)" error={fieldErrors.mensagem}>
                                    <textarea
                                        name="mensagem"
                                        rows={4}
                                        placeholder="Conte-nos um pouco sobre você, sua experiência com vendas ou por que deseja ser parceiro..."
                                        value={form.mensagem}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-2 bg-white px-4 py-3 text-sm outline-none placeholder-gray-300 transition-colors resize-none focus:border-(--color-primary)"
                                        style={{ borderColor: Cores.borda, color: Cores.escura }}
                                    />
                                </FormField>

                                {/* Erro geral */}
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">{submitError}</div>
                                )}

                                {/* Botão */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Quero ser parceiro
                                            <IconSend />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* ── Painel lateral (2/5) ────────────────────────────────────── */}
                        <div className="lg:col-span-2 rounded-3xl p-8 text-white flex flex-col gap-6 relative overflow-hidden lg:sticky lg:top-8" style={{ backgroundColor: Cores.escura }}>
                            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-20" style={{ backgroundColor: Cores.primaria, filter: "blur(60px)" }} />
                            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full opacity-20" style={{ backgroundColor: Cores.destaque, filter: "blur(60px)" }} />

                            <div className="relative z-10">
                                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${Cores.primaria}40`, color: Cores.primariaClara }}>
                                    {P.seloPagina}
                                </span>
                                <h2 className="text-xl font-extrabold leading-snug">
                                    Junte-se a dezenas de parceiros que já faturam com o {ConfigSite.name}
                                </h2>
                            </div>

                            <ul className="relative z-10 space-y-3">
                                {P.itensLateral.map((item) => {
                                    const parts = item.split(/\*\*(.+?)\*\*/);
                                    return (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/20">
                                                <svg width="11" height="11" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span className="text-sm leading-relaxed text-white/80">
                                                {parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="relative z-10 pt-4 border-t border-white/10">
                                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: Cores.primariaClara }}>
                                    Ideal para
                                </p>
                                <div className="grid grid-cols-1 gap-y-2 gap-x-3">
                                    {P.perfisIdeais.map((perfil) => (
                                        <div key={perfil} className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: Cores.primaria }} />
                                            {perfil}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-4 border-t border-white/10 text-xs text-white/30 leading-relaxed">
                                © {ConfigSite.companyName}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RodapeSite />
        </div>
    );
}

// ─── Sub-componentes ─────────────────────────────────────────────────────────

function FormField({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: Cores.escura }}>
                {label}
                {required && (
                    <span className="ml-0.5" style={{ color: Cores.primaria }}>
                        {" "}*
                    </span>
                )}
            </label>
            {children}
            {error && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    );
}

function InputField({
    icon,
    suffix,
    hasError,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ReactNode;
    suffix?: React.ReactNode;
    hasError?: boolean;
}) {
    return (
        <div className="flex items-center rounded-xl border-2 bg-white transition-colors focus-within:border-(--color-primary)" style={{ borderColor: hasError ? "#EF4444" : Cores.borda }}>
            {icon && (
                <span className="pl-3.5 shrink-0" style={{ color: Cores.textoDesabilitado }}>
                    {icon}
                </span>
            )}
            <input {...props} className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder-gray-300 min-w-0" style={{ color: Cores.escura }} />
            {suffix && <span className="pr-2 shrink-0">{suffix}</span>}
        </div>
    );
}
