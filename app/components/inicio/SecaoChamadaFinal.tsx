/**
 * SecaoChamadaFinal — variantes de layout para a CTA final da página.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Fundo claro (primariaClara), título + 2 CTAs.           │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ escuro          │ Fundo escuro com texto branco, visual impactante.       │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ gradiente       │ Fundo com gradiente da cor primária, texto branco,      │
 * │                 │ CTAs com contraste premium e badge flutuante.            │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { Link } from "react-router";
import { ConfigSite } from "../../lib/config";
import { Cores, Sombras } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────

function ChamadaFinalPadrao({ cadastroUrl, planosUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-20 px-6 text-center" style={{ backgroundColor: Cores.primariaClara }}>
            <div className="container mx-auto max-w-2xl">
                <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                    {textos.chamadaFinal.selo}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight" style={{ color: Cores.escura }}>
                    {textos.chamadaFinal.titulo}
                </h2>
                <p className="text-lg mb-10 leading-relaxed" style={{ color: Cores.textoSuave }}>
                    {textos.chamadaFinal.subtitulo.replace("{trialDays}", String(ConfigSite.diasTeste))}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={cadastroUrl}
                        style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                        className="text-white px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {textos.chamadaFinal.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <Link to={planosUrl} style={{ color: Cores.escura }} className="px-10 py-4 rounded-xl font-bold text-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                        {textos.chamadaFinal.ctaSecundario}
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Escuro ────────────────────────────────────────────────────────

function ChamadaFinalEscuro({ cadastroUrl, planosUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section className="py-20 px-6 text-center relative overflow-hidden" style={{ backgroundColor: Cores.escura }}>
            <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: Cores.primaria, filter: "blur(100px)" }}></div>
            <div className="container mx-auto max-w-2xl relative z-10">
                <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                    {textos.chamadaFinal.selo}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-white">
                    {textos.chamadaFinal.titulo}
                </h2>
                <p className="text-lg mb-10 leading-relaxed text-white/70">
                    {textos.chamadaFinal.subtitulo.replace("{trialDays}", String(ConfigSite.diasTeste))}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={cadastroUrl}
                        style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                        className="text-white px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {textos.chamadaFinal.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <Link to={planosUrl} className="px-10 py-4 rounded-xl font-bold text-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                        {textos.chamadaFinal.ctaSecundario}
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Gradiente ─────────────────────────────────────────────────────
// Fundo com gradiente vibrante da cor primária, visual premium.

function ChamadaFinalGradiente({ cadastroUrl, planosUrl }: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section
            className="py-24 px-6 text-center relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${Cores.primaria} 0%, ${Cores.primariaEscura} 100%)`,
            }}
        >
            {/* Padrão decorativo */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }} />
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full" style={{ backgroundColor: "white", filter: "blur(150px)", opacity: 0.07 }} />

            <div className="container mx-auto max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 bg-white/15 text-white border border-white/20 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                    {textos.chamadaFinal.selo}
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-sm">
                    {textos.chamadaFinal.titulo}
                </h2>
                <p className="text-lg md:text-xl mb-12 leading-relaxed text-white/80 font-light">
                    {textos.chamadaFinal.subtitulo.replace("{trialDays}", String(ConfigSite.diasTeste))}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={cadastroUrl}
                        className="bg-white px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                        style={{ color: Cores.primaria, boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
                    >
                        {textos.chamadaFinal.ctaPrimario.replace("{trialDays}", String(ConfigSite.diasTeste))}
                    </Link>
                    <Link
                        to={planosUrl}
                        className="px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    >
                        {textos.chamadaFinal.ctaSecundario}
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── Registro ────────────────────────────────────────────────────────────────

export const chamadaFinalVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: ChamadaFinalPadrao,
    escuro: ChamadaFinalEscuro,
    gradiente: ChamadaFinalGradiente,
};
