import React from "react";
import type { ModeloPlanos, ModeloTipoDeMensalidade } from "../../models/ModeloPlanos";
import CardPlanosPainel from "../CardPlanosPainel";

interface PlanSliderProps {
    planos: ModeloPlanos[];
    tipodemensalidadeSelecionado: ModeloTipoDeMensalidade | null;
    mostrarPlanoCliente: boolean;
    scrollRef: React.RefObject<HTMLDivElement | null>;
    tabelaComparacaoRef: React.RefObject<HTMLDivElement | null>;
    onScroll: (direction: "left" | "right") => void;
}

/**
 * Slider de cards de planos.
 * – Mobile: lista vertical ocupando as laterais.
 * – Desktop: slider horizontal centralizado com botões de navegação.
 */
export default function SliderPlanos({
    planos,
    tipodemensalidadeSelecionado,
    mostrarPlanoCliente,
    scrollRef,
    tabelaComparacaoRef,
    onScroll,
}: PlanSliderProps) {

    return (
        <>
            {/* ─── Mobile: carrossel snap ─────────────────────────────── */}
            <div className="md:hidden w-full mt-8 px-3">
                <div className="flex flex-col gap-3">
                    {planos.map((item) => (
                        <div key={item.id} className="w-full">
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

            {/* ─── Desktop: slider com setas centralizado ───────────────── */}
            <div className="hidden md:flex flex-row items-center justify-center w-full px-2 mt-8">
                <div className="flex items-center max-w-full">
                    <NavButton direction="left" onClick={() => onScroll("left")} />

                    {/* Removido flex-1 para não forçar expansão desnecessária e adicionado justify-center */}
                    <div
                        className="overflow-hidden mx-2"
                        ref={scrollRef}
                        style={{ maxWidth: 'fit-content' }}
                    >
                        <div className="flex no-scrollbar gap-0 py-5 items-stretch justify-center">
                            {planos.map((item) => (
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

                    <NavButton direction="right" onClick={() => onScroll("right")} />
                </div>
            </div>
        </>
    );
}

// ── Botão de navegação (desktop) ────────────────────────────────────────────

function NavButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
    const isLeft = direction === "left";
    return (
        <button
            onClick={onClick}
            aria-label={isLeft ? "Voltar planos" : "Avançar planos"}
            className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-(--color-primary-light) hover:text-(--color-primary) transition-colors shrink-0 border border-gray-200 ${isLeft ? "mr-2" : "ml-2"}`}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={isLeft ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
            </svg>
        </button>
    );
}