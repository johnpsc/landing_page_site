/**
 * SecaoSuporte — variantes de layout para a seção de suporte.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Grid 3 colunas de cards + tabela de horários.            │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ simples         │ Layout simplificado com ícones inline e sem tabela de    │
 * │                 │ horários (útil para plataformas com suporte 24/7).       │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { ConfigSite } from "../../lib/config";
import { Cores } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────

function SuportePadrao(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                        {textos.suporte.selo}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: Cores.escura }}>
                        {textos.suporte.titulo}
                    </h2>
                    <p className="text-xl leading-relaxed" style={{ color: Cores.textoSuave }}>
                        {textos.suporte.subtitulo}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
                    {textos.suporte.cartoes.map((card) =>
                        card.destaque ? (
                            <div key={card.titulo} className="flex flex-col items-center text-center p-8 rounded-2xl border-2 shadow-md transition-all duration-300 group relative overflow-hidden" style={{ borderColor: Cores.primaria, backgroundColor: Cores.primariaClara }}>
                                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: Cores.primaria }} />
                                <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: Cores.primaria }}>
                                    {card.rotuloDestaque}
                                </span>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl relative z-10 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: Cores.primaria }}>
                                    <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                                        <path d="M9 10l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: Cores.escura }}>{card.titulo}</h3>
                                <p className="text-sm leading-relaxed relative z-10" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                            </div>
                        ) : (
                            <div key={card.titulo} className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:bg-(--color-primary) group-hover:scale-110 transition-all duration-300 group-hover:text-white" style={{ backgroundColor: Cores.primariaClara }}>
                                    {card.icone}
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{card.titulo}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                            </div>
                        )
                    )}
                </div>

                {/* Horários */}
                <div className="max-w-3xl mx-auto rounded-2xl border overflow-hidden" style={{ backgroundColor: Cores.primariaClara, borderColor: `${Cores.primaria}22` }}>
                    <div className="px-8 py-5 border-b flex items-center gap-3" style={{ borderColor: `${Cores.primaria}22` }}>
                        <span className="text-xl">🕐</span>
                        <span className="font-bold text-lg" style={{ color: Cores.escura }}>{textos.suporte.tituloHorario}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1, '--tw-divide-color': `${Cores.primaria}22` } as React.CSSProperties}>
                        <div className="px-8 py-6 flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Cores.primaria }}>Segunda a sexta</span>
                            <span className="text-2xl font-extrabold" style={{ color: Cores.escura }}>{ConfigSite.suporte.horarios.diasUteis}</span>
                            <span className="text-sm" style={{ color: Cores.textoSuave }}>{textos.suporte.notaSuporteCompleto}</span>
                        </div>
                        <div className="px-8 py-6 flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Cores.primaria }}>Sábado</span>
                            <span className="text-2xl font-extrabold" style={{ color: Cores.escura }}>{ConfigSite.suporte.horarios.sabado}</span>
                            <span className="text-sm" style={{ color: Cores.textoSuave }}>{textos.suporte.notaSuporteCompleto}</span>
                        </div>
                        <div className="px-8 py-6 flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Cores.textoSuave }}>{textos.suporte.rotuloDomingo}</span>
                            <span className="text-2xl font-extrabold" style={{ color: Cores.escura }}>{textos.suporte.valorDomingo}</span>
                            <span className="text-sm" style={{ color: Cores.textoSuave }}>{textos.suporte.notaDomingo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Simples ──────────────────────────────────────────────────────
// Sem tabela de horários, cards centralizados em faixa clean.

function SuporteSimples(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                    {textos.suporte.selo}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: Cores.escura }}>
                    {textos.suporte.titulo}
                </h2>
                <p className="text-lg leading-relaxed mb-12" style={{ color: Cores.textoSuave }}>
                    {textos.suporte.subtitulo}
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                    {textos.suporte.cartoes.map((card) => (
                        <div key={card.titulo} className="flex flex-col items-center p-6 rounded-2xl bg-gray-50 hover:bg-(--color-primary-light) transition-colors">
                            <div className="text-3xl mb-4">{card.icone}</div>
                            <h3 className="text-base font-bold mb-1" style={{ color: Cores.escura }}>{card.titulo}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Registro ────────────────────────────────────────────────────────────────

export const suporteVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: SuportePadrao,
    simples: SuporteSimples,
};
