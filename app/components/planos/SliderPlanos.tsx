import React, { useRef, useState } from "react";
import { Colors } from "../../lib/theme";
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
 * – Mobile: carrossel snap com indicadores de ponto e setas táteis.
 * – Desktop: slider horizontal com botões de navegação.
 */
export default function SliderPlanos({
    planos,
    tipodemensalidadeSelecionado,
    mostrarPlanoCliente,
    scrollRef,
    tabelaComparacaoRef,
    onScroll,
}: PlanSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const mobileRef = useRef<HTMLDivElement>(null);

    function handleMobileScroll() {
        const el = mobileRef.current;
        if (!el || planos.length === 0) return;
        // cada item ocupa 85vw + gap de 5vw = ~90vw efetivos
        const itemWidth = el.scrollWidth / planos.length;
        const idx = Math.min(
            Math.round(el.scrollLeft / itemWidth),
            planos.length - 1
        );
        setCurrentIndex(idx);
    }

    function scrollToIndex(idx: number) {
        const el = mobileRef.current;
        if (!el) return;
        const itemWidth = el.scrollWidth / planos.length;
        el.scrollTo({ left: idx * itemWidth, behavior: "smooth" });
        setCurrentIndex(idx);
    }

    return (
        <>
            {/* ─── Mobile: carrossel snap ─────────────────────────────── */}
            <div className="md:hidden w-full mt-8">
                {/* faixa de scroll */}
                <div
                    ref={mobileRef}
                    onScroll={handleMobileScroll}
                    className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
                >
                    {planos.map((item) => (
                        <div
                            key={item.id}
                            className="snap-center shrink-0 w-screen flex items-center justify-center py-6 px-4"
                        >
                            <CardPlanosPainel
                                item={item}
                                tipodemensalidadeSelecionado={tipodemensalidadeSelecionado}
                                mostrarPlanoCliente={mostrarPlanoCliente}
                                targetRef={tabelaComparacaoRef}
                            />
                        </div>
                    ))}
                </div>

                {/* setas mobile */}
                <div className="flex items-center justify-center gap-4 mt-2 px-4">
                    <button
                        onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 disabled:opacity-30 transition-colors hover:bg-(--color-primary-light)"
                        aria-label="Plano anterior"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    {/* dots */}
                    <div className="flex items-center gap-2">
                        {planos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                aria-label={`Plano ${i + 1}`}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: currentIndex === i ? 28 : 8,
                                    height: 8,
                                    backgroundColor: currentIndex === i ? Colors.primary : "#D1D5DB",
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scrollToIndex(Math.min(planos.length - 1, currentIndex + 1))}
                        disabled={currentIndex === planos.length - 1}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 disabled:opacity-30 transition-colors hover:bg-(--color-primary-light)"
                        aria-label="Próximo plano"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* contador textual */}
                <p className="text-center text-sm mt-1" style={{ color: Colors.textMuted }}>
                    {currentIndex + 1} de {planos.length}
                </p>
            </div>

            {/* ─── Desktop: slider com setas ──────────────────────────── */}
            <div className="hidden md:flex flex-row items-center justify-center w-full px-2 mt-8">
                <NavButton direction="left" onClick={() => onScroll("left")} />

                <div className="flex-1 overflow-hidden" ref={scrollRef}>
                    <div className="flex no-scrollbar gap-0 py-5 items-stretch">
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
