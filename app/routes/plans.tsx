import React, { useEffect, useState, useRef } from "react";
// Importe o componente filho aqui
import CardPlanosPainel, { type ModeloPlanos, type ModeloTipoDeMensalidade } from "../components/CardPlanosPainel";
import { ServicosPlanos } from "~/services/ServicoPlanos";

// Assumindo que você tem uma função fetchPlans no seu arquivo api.ts
// import { fetchPlans } from "../lib/api";

export interface Modulo {
    id: string;
    nome: string;
    planosemqueestaativo: string[];
}

export interface ModeloComparacaoDeModulosCad {
    id: string;
    nome: string;
    modulos: Modulo[];
}

export interface FetchPlansResponse {
    planospainel: ModeloPlanos[];
    tipodemensalidade: ModeloTipoDeMensalidade[];
    comparacaodemoduloscad: ModeloComparacaoDeModulosCad[];
}


export default function PaginaPlanos({ mostrarPlanoCliente = false }: { mostrarPlanoCliente?: boolean }) {
    const [data, setData] = useState<FetchPlansResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [tipodemensalidadeSelecionado, setTipodemensalidadeSelecionado] = useState<ModeloTipoDeMensalidade | null>(null);

    // Refs de navegação da interface
    const plansScrollRef = useRef<HTMLDivElement>(null);
    const tabelaComparacaoRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        let mounted = true;

        // Substitua fetchPlansMock() pela sua função real fetchPlans()
        ServicosPlanos.listar()
            .then((res) => {
                if (!mounted) return;
                setData(res);

                if (res.tipodemensalidade && res.tipodemensalidade.length > 0) {
                    const usuarioMensalidadeId = "0";

                    if (mostrarPlanoCliente && usuarioMensalidadeId !== "0") {
                        const tipoUsuario = res.tipodemensalidade.find((el) => el.id === usuarioMensalidadeId);
                        setTipodemensalidadeSelecionado(tipoUsuario || res.tipodemensalidade[0]);
                    } else {
                        setTipodemensalidadeSelecionado(res.tipodemensalidade[0]);
                    }
                }
            })
            .catch((e) => {
                if (!mounted) return;
                setError(String(e));
            })
            .finally(() => {
                if (!mounted) return;
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, [mostrarPlanoCliente]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div className="p-8 text-red-600 flex justify-center w-full min-h-screen items-center font-bold text-xl">{error}</div>;
    }

    const listaplanospainel = data?.planospainel ?? [];
    const listatipodemensalidade = data?.tipodemensalidade ?? [];
    const listacomparacaodemoduloscad = data?.comparacaodemoduloscad ?? [];

    const scrollPlanos = (direction: "left" | "right") => {
        if (plansScrollRef.current) {
            const scrollAmount = direction === "left" ? -350 : 350;
            plansScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const getValorCalculado = (valorStr: string): { inteiro: string; decimal: string; valorOriginal: number } => {
        const valorConvertido = parseFloat(valorStr.replace(',', '.'));
        const valorNumerico = isNaN(valorConvertido) ? 0 : valorConvertido;
        const percentual = parseFloat(tipodemensalidadeSelecionado?.percentualdedesconto ?? "0");

        let valorFinal = valorNumerico;
        if (percentual > 0) {
            valorFinal = valorNumerico - (valorNumerico * percentual) / 100;
        }

        const formatado = valorFinal.toFixed(2).split(".");
        return {
            inteiro: formatado[0],
            decimal: formatado[1] ?? "00",
            valorOriginal: valorFinal
        };
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex justify-center overflow-x-hidden">
            <div className="w-full flex flex-col items-center">

                {/* Cabeçalho */}
                <div className="mt-[30px] w-full max-w-[450px]">
                    <h1 className="text-black text-[30px] leading-[1.1] font-semibold text-center">
                        ERP Big Chef: encontre o plano ideal para o seu negócio
                    </h1>
                </div>

                <div className="mt-[10px] text-center max-w-2xl px-4 text-gray-700">
                    <p>Comece gratuitamente por 10 dias, sem cadastro de cartão de crédito, e tenha acesso a todos os módulos do sistema!</p>
                </div>

                {/* Botões de Tipo de Mensalidade */}
                <div className="mt-[30px] flex flex-row justify-center items-center flex-wrap gap-x-4 gap-y-6 px-4">
                    {listatipodemensalidade.map((tipo) => {
                        const isSelected = tipodemensalidadeSelecionado?.id === tipo.id;
                        const hasDiscount = parseFloat(tipo.percentualdedesconto) > 0;

                        return (
                            <div key={tipo.id} className="relative mt-2">
                                {hasDiscount && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#B21512] text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-sm z-10 whitespace-nowrap">
                                        -{tipo.percentualdedesconto}%
                                    </div>
                                )}
                                <div className="px-2">
                                    <button
                                        onClick={() => setTipodemensalidadeSelecionado(tipo)}
                                        className={`h-[50px] px-6 text-[18px] font-medium rounded-[3px] border border-black transition-colors duration-200
                      ${isSelected ? 'bg-[#091D33] text-white' : 'bg-white text-black hover:bg-gray-100'}
                    `}
                                    >
                                        {tipo.nome}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Slider de Planos (Renderizando o CardPlanosPainel) */}
                <div className="mt-[30px] flex flex-row items-center justify-center w-full max-w-auto px-2">
                    <button
                        onClick={() => scrollPlanos("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors mr-2 shrink-0"
                        aria-label="Voltar planos"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div
                            // ref={plansScrollRef}
                            className="flex no-scrollbar gap-0 py-5 items-stretch"
                            // style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {listaplanospainel.map((item) => (
                                <div key={item.id} className="shrink-0 flex items-stretch">
                                    <CardPlanosPainel
                                        item={item}
                                        tipodemensalidadeSelecionado={tipodemensalidadeSelecionado}
                                        mostrarPlanoCliente={mostrarPlanoCliente}
                                        targetRef={tabelaComparacaoRef}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => scrollPlanos("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors ml-2 shrink-0"
                        aria-label="Avançar planos"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>

                {/* Seção de Comparação */}
                <div className="mt-[90px] w-full max-w-[650px] px-4" ref={tabelaComparacaoRef}>
                    <h2 className="text-black text-[40px] leading-[1.1] text-center font-normal">
                        Compare nossos planos e descubra a solução certa para sua empresa
                    </h2>
                </div>

                {/* Tabela de Comparação Completa */}
                <div className="mt-[50px] w-full overflow-x-auto pb-20 flex flex-col items-center">

                    <div className="flex flex-row justify-end mb-2">
                        <div className="w-[285px] shrink-0"></div>

                        {listaplanospainel.map((plano) => {
                            const valorFormatado = getValorCalculado(plano.valordoplano);

                            return (
                                <div key={plano.id} className="px-[5px] shrink-0">
                                    <div className="border border-gray-400 rounded-[5px] p-[8px] w-[200px] h-[115px] flex flex-col items-center justify-center bg-white">
                                        <span className="text-[18px] text-gray-800 font-medium truncate w-full text-center">{plano.nome}</span>

                                        <div className="flex flex-row justify-center items-end mt-1">
                                            <span className="text-[16px] font-semibold leading-tight mb-[2px]">R$</span>
                                            <span className="text-[25px] font-semibold leading-[1.2] mx-[2px]">{valorFormatado.inteiro}</span>
                                            <span className="text-[16px] font-semibold leading-tight mb-[2px]">,{valorFormatado.decimal}</span>
                                            <span className="text-[16px] font-semibold leading-tight mb-[2px] ml-1">/mês</span>
                                        </div>

                                        <div className="w-full h-[30px] mt-[5px]">
                                            <button
                                                className="w-full h-full bg-[#205295] text-white rounded-[3px] text-[17px] hover:bg-[#194175] transition-colors flex items-center justify-center"
                                                onClick={() => {
                                                    console.log("Navegar para PaginaNovoCadastro", {
                                                        idplanospainel: plano.id,
                                                        idtipodemensalidade: tipodemensalidadeSelecionado?.id,
                                                        valordamensalidade: valorFormatado.valorOriginal.toFixed(2)
                                                    });
                                                }}
                                            >
                                                Comece grátis
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col">
                        {listacomparacaodemoduloscad.map((categoria) => (
                            <div key={categoria.id} className="flex flex-col items-center">

                                <div
                                    className="bg-[#D8E8FE] h-[40px] flex items-center"
                                    style={{ width: `${300 + (210 * listaplanospainel.length)}px` }}
                                >
                                    <div className="pl-[10px] w-full text-left">
                                        <span className="text-[18px] text-[#14427F] font-bold">{categoria.nome}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    {categoria.modulos.map((modulo) => (
                                        <div key={modulo.id} className="flex flex-row justify-center">

                                            <div className="w-[285px] h-[40px] border-b border-[#D8E8FE] flex items-center pl-[10px] shrink-0 bg-white">
                                                <span className="truncate w-full text-gray-700 text-sm font-medium pr-2" title={modulo.nome}>
                                                    {modulo.nome}
                                                </span>
                                            </div>

                                            {listaplanospainel.map((plano) => {
                                                const ativo = modulo.planosemqueestaativo.includes(plano.id);

                                                return (
                                                    <div key={`${modulo.id}-${plano.id}`} className="w-[210px] h-[40px] border-b border-l border-[#D8E8FE] flex items-center justify-center shrink-0 bg-white">
                                                        {ativo ? (
                                                            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                            </div>
                                                        ) : (
                                                            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}

                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}