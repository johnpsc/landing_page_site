import { Cores } from "../../lib/theme";
import type { ModeloTipoDeMensalidade } from "../../models/ModeloPlanos";

interface PlanTypeSelectorProps {
    tipos: ModeloTipoDeMensalidade[];
    selecionado: ModeloTipoDeMensalidade | null;
    onChange: (tipo: ModeloTipoDeMensalidade) => void;
}

/** 10.00 → "10" | 10.20 → "10.20" | 10.21 → "10.21" */
function formatDesconto(value: string): string {
    const n = parseFloat(value);
    return n % 1 === 0 ? String(Math.round(n)) : n.toFixed(2);
}

/**
 * Botões de seleção de tipo de mensalidade (mensal, trimestral, anual…).
 * Exibe badge de desconto acima do botão quando aplicável.
 */
export default function PlanTypeSelector({
    tipos,
    selecionado,
    onChange,
}: PlanTypeSelectorProps) {
    return (
        <div className="mt-2 md:mt-10 flex justify-center px-4 w-full max-w-full">
            <div
                className="grid grid-cols-2 gap-3 gap-y-6 md:gap-y-3 w-full max-w-sm pt-4 pb-1 md:pt-1 md:w-auto md:max-w-none md:gap-0 md:inline-flex md:flex-row md:items-center md:rounded-full md:border md:p-1 md:bg-white"
                style={{ borderColor: Cores.borda }}
            >
                {tipos.map((tipo) => {
                    const isSelected = selecionado?.id === tipo.id;
                    const hasDiscount = parseFloat(tipo.percentualdedesconto) > 0;

                    return (
                        <div key={tipo.id} className="relative md:shrink md:w-auto">
                            {hasDiscount && (
                                <div
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-sm z-10 whitespace-nowrap"
                                    style={{ backgroundColor: Cores.primaria }}
                                >
                                    -{formatDesconto(tipo.percentualdedesconto)}%
                                </div>
                            )}

                            <button
                                onClick={() => onChange(tipo)}
                                className={`h-12 md:px-8 rounded-full text-[14px] md:text-[14px] font-bold uppercase leading-none transition-all duration-200 w-full md:w-auto md:min-w-36 cursor-pointer ${isSelected ? 'shadow-md md:shadow-none' : 'bg-white border md:border-0 md:bg-transparent shadow-sm md:shadow-none'}`}
                                style={{
                                    backgroundColor: isSelected ? Cores.primaria : undefined,
                                    color: isSelected ? "white" : Cores.primaria,
                                    borderColor: Cores.borda
                                }}
                            >
                                {tipo.nome}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}