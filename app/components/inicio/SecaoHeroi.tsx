/**
 * SecaoHeroi — variantes de layout para a seção herói da página inicial.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Centralizado: badge + título + subtítulo + 2 CTAs +     │
 * │                 │ imagem do dashboard em largura total.                    │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ lateral         │ Duas colunas: texto à esquerda, imagem à direita.       │
 * │                 │ Visual profissional estilo SaaS/ERP.                     │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ minimalista     │ Fundo com gradiente sutil, tipografia grande, sem       │
 * │                 │ imagem. CTA único e visual clean.                        │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ vidro           │ Glassmorphism: card translúcido flutuante sobre fundo   │
 * │                 │ com gradiente vibrante. Moderno e imersivo.              │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ gradiente       │ Fundo com gradiente diagonal ousado na cor primária,    │
 * │                 │ texto branco, CTAs com contraste invertido.              │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ cartoes         │ Texto centralizado + linha horizontal de mini-cards de  │
 * │                 │ preview de funcionalidades flutuando abaixo.             │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 *
 * Para adicionar uma nova variante:
 *   1. Crie a função React abaixo
 *   2. Registre no objeto `heroiVariantes` no final do arquivo
 *   3. Defina o nome no `variantesInicio.heroi` do flavor desejado
 */

import { Link } from "react-router";
import { ConfigSite } from "../../lib/config";
import { Cores, Imagens, Sombras } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────
// Layout centralizado com badge, título grande, subtítulo, 2 CTAs e imagem.

function HeroiPadrao({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="pt-40 pb-28 w-full px-4 md:px-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-20 left-0 md:left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ backgroundColor: Cores.primaria }}></div>
            <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ backgroundColor: Cores.destaque, animationDelay: "2s" }}></div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm mb-8 border shadow-sm" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria, borderColor: `${Cores.primaria}22` }}>
                <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: Cores.primaria }}></span>
                <span>{textos.heroi.selo}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight max-w-5xl tracking-tight" style={{ color: Cores.escura }}>
                {textos.heroi.tituloAntes}{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.primariaEscura})` }}>
                    {textos.heroi.tituloDestaque}
                </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed" style={{ color: Cores.textoSuave }}>
                {textos.heroi.subtitulo}
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <Link
                    to={cadastroUrl}
                    style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                    className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                    {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                </Link>
                <a
                    href="#funcionalidades"
                    style={{ color: Cores.escura }}
                    className="px-8 py-4 rounded-xl font-bold text-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    {textos.heroi.ctaSecundario}
                </a>
            </div>

            <div className="w-full max-w-350 rounded-4xl overflow-hidden border border-gray-100 relative group" style={{ boxShadow: Sombras.imagemPainel }}>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img src={Imagens.preVisualizacaoPainel} alt={`Dashboard ${ConfigSite.nome}`} className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]" />
            </div>
        </section>
    );
}

// ─── Variante: Lateral ───────────────────────────────────────────────────────
// Duas colunas — texto à esquerda, mockup do dashboard à direita.
// Visual profissional estilo SaaS.

function HeroiLateral({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-10 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-[160px] opacity-15" style={{ backgroundColor: Cores.primaria }}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-[160px] opacity-10" style={{ backgroundColor: Cores.destaque }}></div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Coluna esquerda — texto */}
                    <div className="max-w-xl">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm mb-8 border shadow-sm" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria, borderColor: `${Cores.primaria}22` }}>
                            <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: Cores.primaria }}></span>
                            <span>{textos.heroi.selo}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: Cores.escura }}>
                            {textos.heroi.tituloAntes}{" "}
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.primariaEscura})` }}>
                                {textos.heroi.tituloDestaque}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: Cores.textoSuave }}>
                            {textos.heroi.subtitulo}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={cadastroUrl}
                                style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                                className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                            >
                                {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                            </Link>
                            <a
                                href="#funcionalidades"
                                style={{ color: Cores.escura }}
                                className="px-8 py-4 rounded-xl font-bold text-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center"
                            >
                                {textos.heroi.ctaSecundario}
                            </a>
                        </div>
                    </div>

                    {/* Coluna direita — imagem do dashboard */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-3xl opacity-20 blur-3xl -z-10"
                            style={{ backgroundColor: Cores.primaria }}
                        ></div>
                        <div
                            className="rounded-3xl overflow-hidden border border-gray-100 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500"
                            style={{ boxShadow: Sombras.imagemPainel }}
                        >
                            <img
                                src={Imagens.preVisualizacaoPainel}
                                alt={`Dashboard ${ConfigSite.nome}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Minimalista ───────────────────────────────────────────────────
// Fundo com gradiente sutil, tipografia enorme, sem imagem, CTA único.
// Visual clean e moderno.

function HeroiMinimalista({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section
            className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${Cores.primariaClara} 0%, ${Cores.clara} 40%, ${Cores.primariaClara} 100%)`,
            }}
        >
            {/* Formas decorativas de fundo */}
            <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: Cores.primaria, filter: "blur(80px)" }}></div>
            <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full opacity-15 animate-pulse" style={{ backgroundColor: Cores.destaque, filter: "blur(60px)", animationDelay: "3s" }}></div>
            <div className="absolute top-20 right-1/4 w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: Cores.primaria }}></div>
            <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: Cores.primariaEscura }}></div>

            <div className="text-center max-w-4xl relative z-10">
                <div
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm mt-10 mb-10 border"
                    style={{
                        backgroundColor: `${Cores.primaria}10`,
                        color: Cores.primaria,
                        borderColor: `${Cores.primaria}20`,
                    }}
                >
                    <span>{textos.heroi.selo}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
                    <span style={{ color: Cores.escura }}>{textos.heroi.tituloAntes}</span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.primariaEscura})`,
                        }}
                    >
                        {textos.heroi.tituloDestaque}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-light" style={{ color: Cores.textoSuave }}>
                    {textos.heroi.subtitulo}
                </p>

                <Link
                    to={cadastroUrl}
                    style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                    className="inline-flex text-white px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                    {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                </Link>
            </div>
        </section>
    );
}

// ─── Variante: Vidro (Glassmorphism) ─────────────────────────────────────────
// Card translúcido flutuante sobre fundo vibrante. Visual imersivo e moderno.

function HeroiVidro({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section
            className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${Cores.escura} 0%, ${Cores.primaria}44 50%, ${Cores.escura} 100%)`,
            }}
        >
            {/* Esferas decorativas */}
            <div className="absolute top-1/4 left-[15%] w-80 h-80 rounded-full animate-pulse" style={{ backgroundColor: Cores.primaria, filter: "blur(120px)", opacity: 0.25 }} />
            <div className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full animate-pulse" style={{ backgroundColor: Cores.destaque, filter: "blur(100px)", opacity: 0.2, animationDelay: "2s" }} />
            <div className="absolute top-10 right-[20%] w-40 h-40 rounded-full" style={{ backgroundColor: Cores.primariaEscura, filter: "blur(80px)", opacity: 0.15 }} />

            {/* Card glassmorphism */}
            <div
                className="relative z-10 max-w-3xl w-full rounded-3xl p-10 md:p-14 text-center border border-white/10"
                style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
            >
                <div
                    className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/15"
                    style={{ backgroundColor: `${Cores.primaria}20`, color: Cores.primaria }}
                >
                    <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: Cores.primaria }} />
                    <span>{textos.heroi.selo}</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.08] tracking-tight text-white">
                    {textos.heroi.tituloAntes}{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.destaque})` }}>
                        {textos.heroi.tituloDestaque}
                    </span>
                </h1>

                <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed text-white/70">
                    {textos.heroi.subtitulo}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={cadastroUrl}
                        className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                        style={{ backgroundColor: Cores.primaria, boxShadow: `0 10px 40px ${Cores.primaria}66` }}
                    >
                        {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <a
                        href="#funcionalidades"
                        className="px-8 py-4 rounded-xl font-bold text-lg border border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300"
                    >
                        {textos.heroi.ctaSecundario}
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Gradiente ─────────────────────────────────────────────────────
// Fundo com gradiente diagonal vibrante, texto branco, estilo landing page premium.

function HeroiGradiente({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section
            className="pt-36 pb-24 px-6 relative overflow-hidden"
            style={{
                background: `linear-gradient(150deg, ${Cores.primaria} 0%, ${Cores.primariaEscura} 60%, ${Cores.escura} 100%)`,
            }}
        >
            {/* Padrão geométrico sutil */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

            {/* Esfera de brilho */}
            <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full" style={{ backgroundColor: "white", filter: "blur(160px)", opacity: 0.08 }} />

            <div className="container mx-auto relative z-10 text-center max-w-4xl">
                <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-10 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span>{textos.heroi.selo}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.06] tracking-tight text-white drop-shadow-lg">
                    {textos.heroi.tituloAntes}{" "}
                    <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "rgba(255,255,255,0.3)" }}>
                        {textos.heroi.tituloDestaque}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed text-white/80 font-light">
                    {textos.heroi.subtitulo}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Link
                        to={cadastroUrl}
                        className="bg-white px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                        style={{ color: Cores.primaria, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                    >
                        {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <a
                        href="#funcionalidades"
                        className="px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    >
                        {textos.heroi.ctaSecundario}
                    </a>
                </div>

                {/* Dashboard com moldura branca */}
                <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    <img src={Imagens.preVisualizacaoPainel} alt={`Dashboard ${ConfigSite.nome}`} className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Cartões ───────────────────────────────────────────────────────
// Texto centralizado com uma fila de mini-cards de funcionalidades flutuando abaixo.
// Visual dinâmico e informativo.

function HeroiCartoes({ cadastroUrl }: SecaoProps) {
    const textos = useTextosInicio();

    const miniCards = [
        { icone: "🏪", label: "PDV" },
        { icone: "🧾", label: "Mesas" },
        { icone: "🛵", label: "Delivery" },
        { icone: "💰", label: "Financeiro" },
        { icone: "📊", label: "Dashboards" },
    ];

    return (
        <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-white">
            {/* Blobs de fundo sutis */}
            <div className="absolute top-20 left-[5%] w-80 h-80 rounded-full mix-blend-multiply" style={{ backgroundColor: Cores.primariaClara, filter: "blur(100px)", opacity: 0.6 }} />
            <div className="absolute bottom-10 right-[5%] w-60 h-60 rounded-full mix-blend-multiply" style={{ backgroundColor: Cores.primariaClara, filter: "blur(80px)", opacity: 0.4 }} />

            <div className="container mx-auto relative z-10 text-center max-w-4xl">
                <div
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold text-sm mb-10 border shadow-sm"
                    style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria, borderColor: `${Cores.primaria}22` }}
                >
                    <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: Cores.primaria }} />
                    <span>{textos.heroi.selo}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight" style={{ color: Cores.escura }}>
                    {textos.heroi.tituloAntes}{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${Cores.primaria}, ${Cores.primariaEscura})` }}>
                        {textos.heroi.tituloDestaque}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: Cores.textoSuave }}>
                    {textos.heroi.subtitulo}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Link
                        to={cadastroUrl}
                        className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                        style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                    >
                        {textos.heroi.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <a
                        href="#funcionalidades"
                        className="px-8 py-4 rounded-xl font-bold text-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                        style={{ color: Cores.escura }}
                    >
                        {textos.heroi.ctaSecundario}
                    </a>
                </div>

                {/* Mini-cards de funcionalidades */}
                <div className="flex flex-wrap justify-center gap-4">
                    {miniCards.map((card) => (
                        <div
                            key={card.label}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            style={{ boxShadow: `0 4px 20px ${Cores.primaria}10` }}
                        >
                            <span className="text-2xl">{card.icone}</span>
                            <span className="font-bold text-sm" style={{ color: Cores.escura }}>{card.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Registro de variantes ───────────────────────────────────────────────────

/** Adicione novas variantes do herói aqui */
export const heroiVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: HeroiPadrao,
    lateral: HeroiLateral,
    minimalista: HeroiMinimalista,
    vidro: HeroiVidro,
    gradiente: HeroiGradiente,
    cartoes: HeroiCartoes,
};
