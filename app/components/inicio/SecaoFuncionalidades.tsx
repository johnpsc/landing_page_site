/**
 * SecaoFuncionalidades — variantes de layout para a seção de funcionalidades.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Grid 3 colunas de cards com ícone, título e descrição.  │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ listagem        │ Lista vertical com ícone à esquerda e texto à direita,  │
 * │                 │ alternando lados. Visual mais editorial/storytelling.    │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ destaque        │ Grid 2+1: primeiro card maior em destaque, demais em    │
 * │                 │ grid 2 colunas abaixo. Visual de feature showcase.      │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ icones          │ Layout compacto com ícones grandes e descrições curtas  │
 * │                 │ em fundo colorido suave. Visual moderno tipo dashboard. │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { Cores } from "../../lib/theme";
import { ModernFeatureCard } from "./compartilhados";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────

function FuncionalidadesPadrao(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="funcionalidades" className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Cores.escura }}>
                        {textos.funcionalidades.titulo}
                    </h2>
                    <p className="text-xl" style={{ color: Cores.textoSuave }}>
                        {textos.funcionalidades.subtitulo}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {textos.funcionalidades.cartoes.map((card) => (
                        <ModernFeatureCard key={card.titulo} icon={card.icone} title={card.titulo} desc={card.descricao} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Listagem ──────────────────────────────────────────────────────
// Itens empilhados verticalmente, visual mais "storytelling".

function FuncionalidadesListagem(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="funcionalidades" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Cores.escura }}>
                        {textos.funcionalidades.titulo}
                    </h2>
                    <p className="text-xl" style={{ color: Cores.textoSuave }}>
                        {textos.funcionalidades.subtitulo}
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {textos.funcionalidades.cartoes.map((card, i) => (
                        <div
                            key={card.titulo}
                            className={`flex items-center gap-6 p-6 rounded-2xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
                        >
                            <div className="w-16 h-16 text-3xl flex items-center justify-center rounded-2xl shrink-0" style={{ backgroundColor: Cores.primariaClara }}>
                                {card.icone}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: Cores.escura }}>{card.titulo}</h3>
                                <p className="leading-relaxed" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Destaque ──────────────────────────────────────────────────────
// Primeiro card grande em destaque, demais em grid 2 colunas abaixo.

function FuncionalidadesDestaque(_props: SecaoProps) {
    const textos = useTextosInicio();
    const [primeiro, ...restante] = textos.funcionalidades.cartoes;
    return (
        <section id="funcionalidades" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Cores.escura }}>
                        {textos.funcionalidades.titulo}
                    </h2>
                    <p className="text-xl" style={{ color: Cores.textoSuave }}>
                        {textos.funcionalidades.subtitulo}
                    </p>
                </div>

                {/* Card principal em destaque */}
                {primeiro && (
                    <div
                        className="p-10 rounded-3xl mb-8 border-2 relative overflow-hidden group"
                        style={{ borderColor: Cores.primaria, backgroundColor: Cores.primariaClara }}
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: Cores.primaria }} />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-20 h-20 text-4xl flex items-center justify-center rounded-2xl shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: Cores.primaria }}>
                                <span className="grayscale-0 brightness-0 invert">{primeiro.icone}</span>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-3" style={{ color: Cores.escura }}>{primeiro.titulo}</h3>
                                <p className="text-lg leading-relaxed" style={{ color: Cores.textoSuave }}>{primeiro.descricao}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid de cards restantes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restante.map((card) => (
                        <div
                            key={card.titulo}
                            className="p-6 rounded-2xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 text-2xl flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 group-hover:bg-(--color-primary) group-hover:text-white transition-all duration-300" style={{ backgroundColor: Cores.primariaClara }}>
                                {card.icone}
                            </div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{card.titulo}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Ícones ────────────────────────────────────────────────────────
// Layout compacto em fundo suave, ícones grandes, visual tipo dashboard moderno.

function FuncionalidadesIcones(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="funcionalidades" className="py-24 px-6" style={{ backgroundColor: Cores.primariaClara }}>
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Cores.escura }}>
                        {textos.funcionalidades.titulo}
                    </h2>
                    <p className="text-xl" style={{ color: Cores.textoSuave }}>
                        {textos.funcionalidades.subtitulo}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {textos.funcionalidades.cartoes.map((card) => (
                        <div
                            key={card.titulo}
                            className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white group"
                            style={{ boxShadow: `0 2px 12px ${Cores.primaria}08` }}
                        >
                            <div
                                className="w-16 h-16 text-3xl flex items-center justify-center rounded-2xl mx-auto mb-5 group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: Cores.primariaClara }}
                            >
                                {card.icone}
                            </div>
                            <h3 className="text-base font-bold mb-2" style={{ color: Cores.escura }}>{card.titulo}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{card.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Registro ────────────────────────────────────────────────────────────────

export const funcionalidadesVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: FuncionalidadesPadrao,
    listagem: FuncionalidadesListagem,
    destaque: FuncionalidadesDestaque,
    icones: FuncionalidadesIcones,
};
