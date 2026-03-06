import { Colors } from "../../lib/theme";
import type { ModeloTipoDeMensalidade } from "../../models/ModeloPlanos";

interface PlanTypeSelectorProps {
    tipos: ModeloTipoDeMensalidade[];
    selecionado: ModeloTipoDeMensalidade | null;
    onChange: (tipo: ModeloTipoDeMensalidade) => void;
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
        <div className="mt-10 flex justify-center px-4">
            <div
                className="inline-flex items-center rounded-full border p-1"
                style={{ borderColor: Colors.border, backgroundColor: "white" }}
            >
                {tipos.map((tipo) => {
                    const isSelected = selecionado?.id === tipo.id;
                    const hasDiscount = parseFloat(tipo.percentualdedesconto) > 0;

                    return (
                        <div key={tipo.id} className="relative">
                            {hasDiscount && (
                                <div
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-sm z-10 whitespace-nowrap"
                                    style={{ backgroundColor: Colors.primary }}
                                >
                                    -{tipo.percentualdedesconto}%
                                </div>
                            )}

                            <button
                                onClick={() => onChange(tipo)}
                                className="h-12 min-w-36 px-8 rounded-full text-[17px] font-bold uppercase leading-none transition-all duration-200"
                                style={
                                    isSelected
                                        ? { backgroundColor: Colors.primary, color: "white" }
                                        : { backgroundColor: "transparent", color: Colors.primary }
                                }
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
