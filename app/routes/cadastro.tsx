import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import { useAfiliado } from "../hooks/useAfiliado";
import { ConfigSite, Textos } from "../lib/config";
import { normalizarDestinoDownload } from "../lib/downloadDestino";
import { Cores, Fontes, Sombras } from "../lib/theme";
import { signup } from "../services/ServicoApi";
import { maskCNPJ, maskPhone } from "../utils/formatacao";

// ─── Ícones inline ───────────────────────────────────────────────────────────

function IconEye({ open }: { open: boolean }) {
  return open ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/20">
        <svg width="11" height="11" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="text-sm leading-relaxed" style={{ color: `${Cores.primaria}DD` }}>{children}</span>
    </li>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────

export default function PaginaNovoCadastro() {
  const [searchParams] = useSearchParams();
  const destinoCampanha = searchParams.get("plataforma")?.trim();
  const destinoDownload = normalizarDestinoDownload(destinoCampanha);
  const afiliado = useAfiliado();

  const [form, setForm] = useState({
    nome_da_empresa: "",
    nome_do_responsavel: "",
    cnpj: "",
    celular: "",
    email: "",
    senha: "",
    confirmar_senha: "",
    id_planos_painel: searchParams.get("plano") ?? "",
    id_tipo_de_mensalidade: searchParams.get("mensalidade") ?? "",
    valor_da_mensalidade: searchParams.get("valor") ?? "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;
    if (name === "cnpj") value = maskCNPJ(value);
    if (name === "celular") value = maskPhone(value);
    setForm((s) => ({ ...s, [name]: value }));
    setFieldErrors((s) => ({ ...s, [name]: "" }));
  }

  function validate() {
    const errors: Record<string, string> = {};
    if (!form.nome_da_empresa.trim()) errors.nome_da_empresa = "Nome da empresa é obrigatório";
    if (!form.nome_do_responsavel.trim()) errors.nome_do_responsavel = "Seu nome é obrigatório";
    if (form.cnpj.replace(/\D/g, "").length < 14) errors.cnpj = "CNPJ inválido";
    if (form.celular.replace(/\D/g, "").length < 10) errors.celular = "Celular inválido";
    if (!form.email.includes("@")) errors.email = "E-mail inválido";
    if (form.senha.length < 3) errors.senha = "Mínimo 3 caracteres";
    if (form.senha !== form.confirmar_senha) errors.confirmar_senha = "As senhas não coincidem";
    if (!accepted) errors.accepted = "Você precisa aceitar os termos";
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
      const res = await signup({ ...(form as any), id_afiliado: afiliado });
      if (res.sucesso) {
        const params = new URLSearchParams();
        params.set("cadastro", "1");
        params.set("plataforma", destinoDownload);
        navigate(`/baixar?${params.toString()}`);
      } else {
        setSubmitError(res.mensagem || "Falha ao cadastrar. Tente novamente.");
      }
    } catch (err: any) {
      setSubmitError(String(err));
    } finally {
      setLoading(false);
    }
  }

  // ── Formulário ────────────────────────────────────────────────────────────
  return (
    <div className="w-full min-h-screen flex flex-col" style={{ fontFamily: Fontes.principal, backgroundColor: Cores.primariaClara }}>
      <CabecalhoSite />

      {/* Body */}
      <div className="flex-1 flex items-start justify-center px-4 pt-28 pb-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* ── Formulário (3/5) ─────────────────────────────────────────── */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: Sombras.imagemPainel }}>
            <div className="mb-8">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                {ConfigSite.diasTeste} {Textos.cadastro.seloTeste}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: Cores.escura }}>
                {Textos.cadastro.tituloFormulario}
              </h1>
              <p className="text-sm mt-1.5" style={{ color: Cores.textoSuave }}>
                {Textos.cadastro.subtituloFormulario}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <FormField label={Textos.cadastro.campoEstabelecimento} error={fieldErrors.nome_da_empresa} required>
                <InputField
                  name="nome_da_empresa"
                  placeholder={Textos.cadastro.placeholderCampoEstabelecimento}
                  value={form.nome_da_empresa}
                  onChange={handleChange}
                  hasError={!!fieldErrors.nome_da_empresa}
                  icon={
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  }
                />
              </FormField>

              <FormField label="Seu nome (responsável)" error={fieldErrors.nome_do_responsavel} required>
                <InputField
                  name="nome_do_responsavel"
                  placeholder="Ex: João Silva"
                  value={form.nome_do_responsavel}
                  onChange={handleChange}
                  hasError={!!fieldErrors.nome_do_responsavel}
                  icon={
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="CNPJ" error={fieldErrors.cnpj} required>
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
                <FormField label="Senha" error={fieldErrors.senha} required>
                  <InputField
                    name="senha"
                    type={showSenha ? "text" : "password"}
                    placeholder="Mín. 6 caracteres"
                    value={form.senha}
                    onChange={handleChange}
                    hasError={!!fieldErrors.senha}
                    icon={
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    }
                    suffix={
                      <button type="button" onClick={() => setShowSenha((v) => !v)} className="text-gray-400 hover:text-gray-600 transition-colors pr-1">
                        <IconEye open={showSenha} />
                      </button>
                    }
                  />
                </FormField>
                <FormField label="Confirmar senha" error={fieldErrors.confirmar_senha} required>
                  <InputField
                    name="confirmar_senha"
                    type={showConfirmar ? "text" : "password"}
                    placeholder="Repita a senha"
                    value={form.confirmar_senha}
                    onChange={handleChange}
                    hasError={!!fieldErrors.confirmar_senha}
                    icon={
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    }
                    suffix={
                      <button type="button" onClick={() => setShowConfirmar((v) => !v)} className="text-gray-400 hover:text-gray-600 transition-colors pr-1">
                        <IconEye open={showConfirmar} />
                      </button>
                    }
                  />
                </FormField>
              </div>

              {/* Checkbox Termos */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => {
                        setAccepted(e.target.checked);
                        setFieldErrors((s) => ({ ...s, accepted: "" }));
                      }}
                      className="sr-only"
                    />
                    <div
                      className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                      style={{
                        borderColor: fieldErrors.accepted ? "#EF4444" : accepted ? Cores.primaria : Cores.borda,
                        backgroundColor: accepted ? Cores.primaria : "white",
                      }}
                    >
                      {accepted && (
                        <svg width="11" height="11" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>
                    Li e concordo com os{" "}
                    <a href="#" className="font-semibold hover:underline" style={{ color: Cores.primaria }}>
                      Termos de Uso
                    </a>{" "}
                    e a{" "}
                    <a href="#" className="font-semibold hover:underline" style={{ color: Cores.primaria }}>
                      Política de Privacidade
                    </a>
                  </span>
                </label>
                {fieldErrors.accepted && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.accepted}
                  </p>
                )}
              </div>

              {/* Erro geral */}
              {submitError && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">{submitError}</div>}

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
                    Criando conta...
                  </>
                ) : (
                  <>
                    Começar {ConfigSite.diasTeste} dias grátis
                    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Painel lateral (2/5) ──────────────────────────────────────── */}
          <div className="lg:col-span-2 rounded-3xl p-8 text-white flex flex-col gap-6 relative overflow-hidden lg:sticky lg:top-8" style={{ backgroundColor: Cores.escura }}>
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-20" style={{ backgroundColor: Cores.primaria, filter: "blur(60px)" }}></div>
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full opacity-20" style={{ backgroundColor: Cores.destaque, filter: "blur(60px)" }}></div>

            <div className="relative z-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(255,122,0,0.25)", color: "#FDBA74" }}>
                {Textos.cadastro.seloRiscoLateral}
              </span>
              <h2 className="text-xl font-extrabold leading-snug">{Textos.cadastro.tituloLateral}</h2>
            </div>

            <ul className="relative z-10 space-y-3">
              {Textos.cadastro.itensLateral.map((item) => {
                const parts = item.split(/\*\*(.+?)\*\*/);
                return (
                  <CheckItem key={item}>
                    {parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : p)}
                  </CheckItem>
                );
              })}
            </ul>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#FDBA74" }}>
                {Textos.cadastro.rotuloModulosLateral}
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                {Textos.cadastro.modulosLateral.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm" style={{ color: `${Cores.primaria}CC` }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: Cores.primaria }}></span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 text-xs text-white/30 leading-relaxed">© {ConfigSite.companyName}</div>
          </div>
        </div>
      </div>
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
            {" "}
            *
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

// ─── (SecaoDownload extraída para app/components/SecaoDownload.tsx) ────────

