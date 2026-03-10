import React from "react";
import { useLocation, useNavigate } from "react-router";
import { obterDestinoDownloadDaSearchParams, obterDestinoOriginalDaSearchParams } from "../../lib/downloadDestino";
import { Colors } from "../../lib/theme";
import type {
    ModeloComparacaoDeModulosCad,
    ModeloPlanos,
    ModeloTipoDeMensalidade,
} from "../../models/ModeloPlanos";
import { calcularValorFormatado } from "../../utils/calculoPlanos";

interface ComparisonTableProps {
    planos: ModeloPlanos[];
    comparacao: ModeloComparacaoDeModulosCad[];
    tipodemensalidadeSelecionado: ModeloTipoDeMensalidade | null;
    tableRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Seção de comparação de planos: cabeçalho com preços + tabela de módulos.
 */
export default function ComparisonTable({
    planos,
    comparacao,
    tipodemensalidadeSelecionado,
    tableRef,
}: ComparisonTableProps) {
    const navigate = useNavigate();
    const { search } = useLocation();
    const destinoAtual = obterDestinoDownloadDaSearchParams(new URLSearchParams(search));
    const destinoOriginalAtual = obterDestinoOriginalDaSearchParams(new URLSearchParams(search));

    function handleEscolherPlano(plano: ModeloPlanos) {
        const valorFormatado = calcularValorFormatado(
            plano.valordoplano,
            tipodemensalidadeSelecionado
        );
        const params = new URLSearchParams();
        params.set("plano", plano.id);
        params.set("mensalidade", tipodemensalidadeSelecionado?.id ?? "");
        params.set("valor", valorFormatado.valorOriginal.toFixed(2));
        if (destinoOriginalAtual) {
            params.set("destino_original", destinoOriginalAtual);
        } else if (destinoAtual) {
            params.set("destino_original", destinoAtual);
        }
        navigate(`/cadastro?${params.toString()}`);
    }

    return (
        <>
            {/* Título da seção */}
            <div
                className="mt-20 w-full max-w-162.5 mx-auto px-4 text-center"
                ref={tableRef}
            >
                <span
                    className="font-bold tracking-wider uppercase text-sm mb-3 block"
                    style={{ color: Colors.primary }}
                >
                    Comparativo
                </span>
                <h2
                    className="text-4xl font-bold leading-tight"
                    style={{ color: Colors.dark }}
                >
                    Compare nossos planos e descubra a solução certa para sua empresa
                </h2>
            </div>

            {/* Tabela */}
            <div className="mt-12 w-full overflow-x-auto pb-20">
                {/* scroll hint no mobile */}
                <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-xs font-medium" style={{ color: Colors.textMuted }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
                    Role para comparar os planos
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
                </div>

                <div className="flex flex-col items-center min-w-max mx-auto">
                    {/* Cabeçalho com preços */}
                    <div className="flex flex-row justify-end mb-2">
                        <div className="w-71.25 shrink-0" />

                        {planos.map((plano) => {
                            const vf = calcularValorFormatado(
                                plano.valordoplano,
                                tipodemensalidadeSelecionado
                            );
                            return (
                                <div key={plano.id} className="px-1.25 shrink-0">
                                    <div className="rounded-xl p-2 w-50 h-28.75 flex flex-col items-center justify-center bg-white shadow-sm" style={{ border: `1px solid ${Colors.primary}33` }}>
                                        <span
                                            className="text-[18px] font-semibold truncate w-full text-center"
                                            style={{ color: Colors.dark }}
                                        >
                                            {plano.nome}
                                        </span>

                                        <div className="flex flex-row justify-center items-end mt-1">
                                            <span className="text-[14px] font-semibold leading-tight mb-0.5 text-gray-500">
                                                R$
                                            </span>
                                            <span
                                                className="text-[25px] font-bold leading-[1.2] mx-0.5"
                                                style={{ color: Colors.dark }}
                                            >
                                                {vf.inteiro}
                                            </span>
                                            <span className="text-[14px] font-semibold leading-tight mb-0.5 text-gray-500">
                                                ,{vf.decimal}
                                            </span>
                                            <span className="text-[14px] font-semibold leading-tight mb-0.5 ml-1 text-gray-500">
                                                /mês
                                            </span>
                                        </div>

                                        <div className="w-full h-7.5 mt-1.25">
                                            <button
                                                className="w-full h-full text-white rounded-lg text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center cursor-pointer"
                                                style={{ backgroundColor: Colors.primary }}
                                                onClick={() => handleEscolherPlano(plano)}
                                            >
                                                Comece grátis
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Linhas da tabela por categoria */}
                    <div className="flex flex-col">
                        {comparacao.map((categoria) => (
                            <div key={categoria.id} className="flex flex-col items-center">
                                {/* Header de categoria */}
                                <div
                                    className="h-10 flex items-center"
                                    style={{
                                        width: `${300 + 210 * planos.length}px`,
                                        backgroundColor: Colors.primaryLight,
                                    }}
                                >
                                    <div className="pl-2.5 w-full text-left">
                                        <span
                                            className="text-[17px] font-bold"
                                            style={{ color: Colors.primary }}
                                        >
                                            {categoria.nome}
                                        </span>
                                    </div>
                                </div>

                                {/* Linhas de módulo */}
                                <div className="flex flex-col">
                                    {categoria.modulos.map((modulo) => (
                                        <div
                                            key={modulo.id}
                                            className="flex flex-row justify-center"
                                        >
                                            <div className="w-71.25 h-10 border-b flex items-center pl-2.5 shrink-0 bg-white" style={{ borderColor: `${Colors.primary}22` }}>
                                                <span
                                                    className="truncate w-full text-gray-600 text-sm font-medium pr-2"
                                                    title={modulo.nome}
                                                >
                                                    {modulo.nome}
                                                </span>
                                            </div>

                                            {planos.map((plano) => {
                                                const ativo = modulo.planosemqueestaativo.includes(plano.id);
                                                return (
                                                    <div
                                                        key={`${modulo.id}-${plano.id}`}
                                                        className="w-52.5 h-10 border-b border-l flex items-center justify-center shrink-0 bg-white"
                                                        style={{ borderColor: `${Colors.primary}22` }}
                                                    >
                                                        <ModuleIcon ativo={ativo} />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>{/* min-w-max */}
            </div>{/* overflow-x-auto */}
        </>
    );
}

// ── Sub-componente ──────────────────────────────────────────────────────────

function ModuleIcon({ ativo }: { ativo: boolean }) {
    return ativo ? (
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: Colors.primaryLight }}>
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={Colors.primary}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    ) : (
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={Colors.textDisabled}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
    );
}
