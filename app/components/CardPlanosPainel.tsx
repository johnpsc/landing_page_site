import React from "react";
import { useCardPlano } from "../hooks/useCardPlano";
import { Cores } from "../lib/theme";
import type { ModeloPlanos, ModeloTipoDeMensalidade } from "../models/ModeloPlanos";
import { usePlataforma } from "./inicio/PlataformaContext";

export type { ModeloPlanos, ModeloTipoDeMensalidade };

export interface CardPlanosPainelProps {
    item: ModeloPlanos;
    tipodemensalidadeSelecionado?: ModeloTipoDeMensalidade | null;
    targetRef?: React.RefObject<HTMLDivElement | null>;
    mostrarPlanoCliente: boolean;
}

/**
 * Card visual de plano. Toda lógica de cálculo e navegação está em
 * `hooks/useCardPlano.ts` — aqui existe apenas presentação.
 */
export default function CardPlanosPainel({
    item,
    tipodemensalidadeSelecionado,
    targetRef,
    mostrarPlanoCliente,
}: CardPlanosPainelProps) {
    const { textos } = usePlataforma();
    const t = textos.planos;

    if (!item) return null;

    const {
        valorF,
        valorTotalF,
        economiaFormatada,
        percentual,
        isMaisVendido,
        isSelecionado,
        carregando,
        escolherPlano,
    } = useCardPlano({ item, tipodemensalidadeSelecionado, mostrarPlanoCliente });

    const textClass = (ativo: string, inativo: string) =>
        isMaisVendido ? ativo : inativo;

    function rolarParaComparacao() {
        if (!targetRef?.current) return;
        const y =
            targetRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            50;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    return (
        <div className="relative pt-2 px-0 md:pl-2 md:pr-2">
            {isMaisVendido && <BadgeMaisVendido rotuloMaisVendido={t.rotuloMaisVendido} />}

            <div className="h-full px-4 md:px-5">
                <div
                    className={`w-full md:w-75 md:h-262.5 rounded-[10px] border ${isSelecionado ? "border-(--color-primary)" : "border-gray-200"
                        }`}
                    style={isMaisVendido ? { backgroundColor: Cores.escura } : { backgroundColor: "white" }}
                >
                    <div className="p-3.75 h-full flex flex-col relative">
                        {isSelecionado && <CheckmarkSelecionado />}

                        <div className="flex flex-col items-center grow">
                            {/* Nome */}
                            <h3 className={`text-[24px] font-semibold ${textClass("text-white/60", "text-gray-900")}`}>
                                {item.nome ?? "Plano"}
                            </h3>

                            {/* Descrição */}
                            <div className="mt-3.75 w-full">
                                <p
                                    className={`text-center line-clamp-3 text-sm ${textClass("text-white/70", "text-gray-600")}`}
                                    title={item.descricaodoplano ?? ""}
                                >
                                    {item.descricaodoplano ?? "Sem descrição disponível."}
                                </p>
                            </div>

                            {/* Badge de economia — sempre ocupa espaço, visível só quando há desconto */}
                            <div
                                className="transition-opacity duration-300"
                                style={{ opacity: percentual > 0 ? 1 : 0, pointerEvents: percentual > 0 ? "auto" : "none" }}
                            >
                                <BadgeEconomia texto={`${t.prefixoEconomize} ${economiaFormatada}`} />
                            </div>

                            {/* Preço mensal */}
                            <div className="flex justify-center items-end mt-3.75">
                                <span className={`text-[18px] font-semibold mb-1.5 ${textClass("text-white/60", "text-gray-500")}`}>R$</span>
                                <span className={`text-[50px] font-bold leading-[1.05] mx-1 ${textClass("text-white", "text-gray-900")}`}>
                                    {valorF.inteiro}
                                </span>
                                <span className={`text-[18px] font-semibold mb-1.5 ${textClass("text-white/60", "text-gray-500")}`}>
                                    ,{valorF.decimal}
                                </span>
                                <span className={`text-[18px] mb-1.5 ml-1 ${textClass("text-white/60", "text-gray-400")}`}>{t.sufixoMes}</span>
                            </div>

                            {/* Botão CTA */}
                            <div className="mt-3.75 w-full h-12.5">
                                <button
                                    disabled={isSelecionado}
                                    onClick={escolherPlano}
                                    className={`w-full h-full rounded-xl text-[16px] font-semibold transition-all flex items-center justify-center hover:-translate-y-0.5 ${isSelecionado ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                                        }`}
                                    style={{
                                        backgroundColor: isSelecionado ? Cores.textoDesabilitado : Cores.primaria,
                                        color: "white",
                                    }}
                                >
                                    {carregando ? (
                                        <div className="w-3.75 h-3.75 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : isSelecionado ? (
                                        t.botaoPlanoAtual
                                    ) : (
                                        t.botaoEscolher
                                    )}
                                </button>
                            </div>

                            {/* Box de features fixas */}
                            <FeaturesBox isMaisVendido={isMaisVendido} quantidadeUsuarios={item.quantidadedeusuario} rotuloUsuarios={t.rotuloUsuarios} rotuloPainelAdmin={t.rotuloPainelAdmin} rotuloAppMobile={t.rotuloAppMobile} rotuloEspacoIlimitado={t.rotuloEspacoIlimitado} />

                            {/* Modalidades incluídas */}
                            <div className="mt-3.75 w-full flex flex-col">
                                {(item.modalidadedosplanos ?? []).map((mod) => (
                                    <div key={mod.id} className="flex items-center px-2 py-1">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isMaisVendido ? "bg-white/20" : ""}`} style={!isMaisVendido ? { backgroundColor: Cores.primariaClara } : {}}>
                                            <svg className="w-3 h-3" fill="none" stroke={Cores.primaria} strokeWidth="3" viewBox="0 0 24 24">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className={`ml-2.5 text-sm ${textClass("text-white/70", "text-gray-700")}`}>
                                            {mod.nome}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="grow" />

                            {/* Total do período — sempre ocupa espaço, visível só quando há desconto */}
                            <div
                                className="flex justify-center items-end mt-4 transition-opacity duration-300"
                                style={{ opacity: percentual > 0 ? 1 : 0, pointerEvents: percentual > 0 ? "auto" : "none" }}
                            >
                                <span className={`text-[16px] font-semibold mb-1.5 ${textClass("text-white/60", "text-gray-500")}`}>R$</span>
                                <span className={`text-[40px] font-bold leading-[1.05] mx-1 ${textClass("text-white", "text-gray-900")}`}>
                                    {valorTotalF.inteiro}
                                </span>
                                <span className={`text-[16px] font-semibold mb-1.5 ${textClass("text-white/60", "text-gray-500")}`}>
                                    ,{valorTotalF.decimal}
                                </span>
                                <span className={`text-[16px] mb-1.5 ml-1 ${textClass("text-white/60", "text-gray-400")}`}>{t.sufixoTotal}</span>
                            </div>

                            {/* Link para tabela comparativa */}
                            <button
                                onClick={rolarParaComparacao}
                                className={`mt-2 mb-2 text-[13px] underline bg-transparent border-none cursor-pointer transition-colors ${isMaisVendido ? "text-white/60 hover:text-white" : "hover:text-(--color-primary)"
                                    }`}
                                style={!isMaisVendido ? { color: Cores.primaria } : {}}
                            >
                                {t.linkCompararPlanos}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Sub-componentes visuais internos ────────────────────────────────────────

function BadgeMaisVendido({ rotuloMaisVendido }: { rotuloMaisVendido: string }) {
    return (
        <div className="absolute top-0 -right-2.5 z-10 w-25 h-7.5 flex items-center justify-center">
            <div className="relative w-full h-full">
                <svg
                    className="absolute -top-px left-1/2 -translate-x-1/2 w-12.5 h-12.5 z-[-1]"
                    fill={Cores.primaria}
                    viewBox="0 0 24 24"
                >
                    <path d="M7 10l5 5 5-5z" />
                </svg>
                <div
                    className="w-30 rounded-[5px] px-2.5 py-0.5 text-white text-sm text-center -translate-x-2.5"
                    style={{ backgroundColor: Cores.primaria }}
                >
                    {rotuloMaisVendido}
                </div>
            </div>
        </div>
    );
}

function CheckmarkSelecionado() {
    return (
        <div className="absolute -top-2.5 right-5">
            <svg
                className="w-12.5 h-12.5"
                fill="none"
                stroke={Cores.primaria}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}

function BadgeEconomia({ texto }: { texto: string }) {
    return (
        <div className="mt-7.5 relative w-full flex justify-center items-center">
            <svg
                className="absolute -top-3.75 w-12.5 h-12.5 z-0"
                fill={Cores.primaria}
                viewBox="0 0 24 24"
            >
                <path d="M7 10l5 5 5-5z" />
            </svg>
            <div
                className="rounded-[5px] px-2.5 py-0.5 text-white text-sm font-medium z-10 whitespace-nowrap"
                style={{ backgroundColor: Cores.primaria }}
            >
                {texto}
            </div>
        </div>
    );
}

function FeaturesBox({
    isMaisVendido,
    quantidadeUsuarios,
    rotuloUsuarios,
    rotuloPainelAdmin,
    rotuloAppMobile,
    rotuloEspacoIlimitado,
}: {
    isMaisVendido: boolean;
    quantidadeUsuarios?: string;
    rotuloUsuarios: string;
    rotuloPainelAdmin: string;
    rotuloAppMobile: string;
    rotuloEspacoIlimitado: string;
}) {
    const spanClass = isMaisVendido ? "text-white/70" : "text-gray-700";
    const boxClass = isMaisVendido
        ? "bg-white/10"
        : "";

    const items: { icon: React.ReactNode; label: string }[] = [
        {
            icon: (
                <svg className="w-4.5 h-4.5" fill={Cores.primaria} viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
            label: `${quantidadeUsuarios ?? "0"} ${rotuloUsuarios}`,
        },
        {
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke={Cores.primaria} strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            label: rotuloPainelAdmin,
        },
        {
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke={Cores.primaria} strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            label: rotuloAppMobile,
        },
        {
            icon: (
                <svg className="w-4.5 h-4.5" fill="none" stroke={Cores.primaria} strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            label: rotuloEspacoIlimitado,
        },
    ];

    return (
        <div className={`mt-3.75 rounded-xl p-2.5 w-full ${boxClass}`} style={!isMaisVendido ? { backgroundColor: Cores.primariaClara, border: `1px solid ${Cores.primaria}22` } : {}}>
            {items.map(({ icon, label }) => (
                <div key={label} className="flex items-center mb-1.25 last:mb-0">
                    <span className="mr-1.25">{icon}</span>
                    <span className={`text-sm ${spanClass}`}>{label}</span>
                </div>
            ))}
        </div>
    );
}
