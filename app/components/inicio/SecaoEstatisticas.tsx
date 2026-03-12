/**
 * SecaoEstatisticas — variantes de layout para a seção de estatísticas/depoimentos.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Fundo escuro com grid de stats + 3 depoimentos.         │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ claro           │ Fundo branco, stats coloridos, depoimentos em cards     │
 * │                 │ com borda da cor primária.                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ lateral         │ Stats à esquerda em coluna, depoimentos à direita       │
 * │                 │ em carrossel empilhado. Visual assimétrico moderno.     │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { Cores } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão (fundo escuro) ────────────────────────────────────────

function EstatisticasPadrao(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section style={{ backgroundColor: Cores.escura }} className="py-20 px-6 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: Cores.primaria, filter: "blur(100px)" }}></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: Cores.destaque, filter: "blur(100px)" }}></div>
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="font-bold tracking-wider uppercase text-sm mb-3 block" style={{ color: Cores.primaria }}>
                        {textos.estatisticas.selo}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{textos.estatisticas.titulo}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {textos.estatisticas.itens.map((stat) => (
                        <div key={stat.rotulo} className="rounded-2xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="text-3xl mb-3">{stat.icone}</div>
                            <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: Cores.primaria }}>
                                {stat.valor}
                            </div>
                            <div className="text-sm font-medium text-white/60">{stat.rotulo}</div>
                        </div>
                    ))}
                </div>

                {/* Depoimentos */}
                <div className="grid md:grid-cols-3 gap-6">
                    {textos.estatisticas.depoimentos.map((t) => (
                        <div key={t.nome} className="rounded-2xl p-7 border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <svg className="w-7 h-7 mb-4 opacity-40" style={{ color: Cores.primaria }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-white/80 leading-relaxed text-sm">{t.citacao}</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: Cores.primaria }}>
                                    {t.iniciais}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{t.nome}</p>
                                    <p className="text-xs text-white/50">{t.papel}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Claro ─────────────────────────────────────────────────────────
// Fundo claro com stats em cards coloridos + depoimentos com borda primária.

function EstatisticasClaro(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: Cores.primariaClara }}>
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="font-bold tracking-wider uppercase text-sm mb-3 block" style={{ color: Cores.primaria }}>
                        {textos.estatisticas.selo}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: Cores.escura }}>{textos.estatisticas.titulo}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {textos.estatisticas.itens.map((stat) => (
                        <div key={stat.rotulo} className="rounded-2xl p-6 text-center bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: `${Cores.primaria}22` }}>
                            <div className="text-3xl mb-3">{stat.icone}</div>
                            <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: Cores.primaria }}>
                                {stat.valor}
                            </div>
                            <div className="text-sm font-medium" style={{ color: Cores.textoSuave }}>{stat.rotulo}</div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {textos.estatisticas.depoimentos.map((t) => (
                        <div key={t.nome} className="rounded-2xl p-7 bg-white border-l-4 shadow-sm flex flex-col justify-between" style={{ borderColor: Cores.primaria }}>
                            <div>
                                <svg className="w-7 h-7 mb-4 opacity-30" style={{ color: Cores.primaria }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="leading-relaxed text-sm" style={{ color: Cores.textoSuave }}>{t.citacao}</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6 pt-5 border-t" style={{ borderColor: Cores.borda }}>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: Cores.primaria }}>
                                    {t.iniciais}
                                </div>
                                <div>
                                    <p className="text-sm font-bold" style={{ color: Cores.escura }}>{t.nome}</p>
                                    <p className="text-xs" style={{ color: Cores.textoSuave }}>{t.papel}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Lateral ───────────────────────────────────────────────────────
// Stats em coluna à esquerda, depoimentos empilhados à direita.

function EstatisticasLateral(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="font-bold tracking-wider uppercase text-sm mb-3 block" style={{ color: Cores.primaria }}>
                        {textos.estatisticas.selo}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: Cores.escura }}>{textos.estatisticas.titulo}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Coluna esquerda — Stats */}
                    <div className="grid grid-cols-2 gap-5">
                        {textos.estatisticas.itens.map((stat) => (
                            <div
                                key={stat.rotulo}
                                className="rounded-2xl p-6 text-center border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                style={{ borderColor: `${Cores.primaria}15`, backgroundColor: Cores.primariaClara }}
                            >
                                <div className="text-3xl mb-2">{stat.icone}</div>
                                <div className="text-3xl font-extrabold mb-1" style={{ color: Cores.primaria }}>{stat.valor}</div>
                                <div className="text-xs font-medium" style={{ color: Cores.textoSuave }}>{stat.rotulo}</div>
                            </div>
                        ))}
                    </div>

                    {/* Coluna direita — Depoimentos empilhados */}
                    <div className="flex flex-col gap-5">
                        {textos.estatisticas.depoimentos.map((t) => (
                            <div key={t.nome} className="rounded-2xl p-6 bg-gray-50 border border-gray-100 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 mt-1" style={{ backgroundColor: Cores.primaria }}>
                                    {t.iniciais}
                                </div>
                                <div>
                                    <p className="text-sm leading-relaxed mb-3" style={{ color: Cores.textoSuave }}>{t.citacao}</p>
                                    <p className="text-sm font-bold" style={{ color: Cores.escura }}>{t.nome}</p>
                                    <p className="text-xs" style={{ color: Cores.textoSuave }}>{t.papel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Registro ────────────────────────────────────────────────────────────────

export const estatisticasVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: EstatisticasPadrao,
    claro: EstatisticasClaro,
    lateral: EstatisticasLateral,
};
