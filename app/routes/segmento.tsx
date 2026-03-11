import { Link, useParams, useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import { ConfigSite, MenusCabecalhoConfig, Textos } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";
import { Cores, Fontes, Sombras } from "../lib/theme";

/**
 * Cada slug de segmento recebe um layout visual distinto (0–4).
 * Slugs não mapeados caem no layout padrão (0).
 */
const DESIGN_SEGMENTO: Record<string, number> = {
    "restaurantes": 0,
    "bares-e-baladas": 1,
    "cafeterias": 2,
    "dark-kitchens": 3,
    "sistema-para-delivery": 4,
};

export function meta() {
    return [
        { title: `Segmentos - ${ConfigSite.name}` },
        { name: "description", content: `Conheça os segmentos atendidos pelo ${ConfigSite.name}.` },
    ];
}

export default function PaginaSegmento() {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams] = useSearchParams();
    const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
    const plataformaAtual = obterPlataformaDaSearchParams(searchParams);
    const withDestino = (url: string) => adicionarDestinoNaUrl(url, destinoAtual, plataformaAtual);

    const pagina = slug ? Textos.paginasSegmentos[slug] : undefined;
    const menuSegmentos = MenusCabecalhoConfig.segmentos;
    const design = slug ? (DESIGN_SEGMENTO[slug] ?? 0) : 0;

    /* ─── 404 ─── */
    if (!pagina) {
        return (
            <div style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
                <CabecalhoSite />
                <div className="pt-40 pb-28 text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Segmento não encontrado</h1>
                    <p className="text-lg mb-8" style={{ color: Cores.textoSuave }}>O segmento que você procura não está disponível.</p>
                    <Link to={withDestino("/")} className="px-6 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: Cores.primaria }}>
                        Voltar ao início
                    </Link>
                </div>
                <RodapeSite />
            </div>
        );
    }

    // Garantido não‑nulo — retornamos antes se undefined
    const pag = pagina;

    /* ─── Helpers ─── */
    const ctaButtons = (align = "justify-center") => (
        <div className={`flex flex-col sm:flex-row gap-4 ${align}`}>
            <Link
                to={withDestino("/cadastro")}
                style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
                Começar {ConfigSite.diasTeste} dias grátis
            </Link>
            <Link
                to={withDestino("/planos")}
                style={{ color: Cores.escura }}
                className="px-8 py-4 rounded-xl font-bold text-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors text-center"
            >
                Ver planos e preços
            </Link>
        </div>
    );

    /* ═══════════════════════════════════════════════════════════════════════════
       HERO — uma variante por segmento
       ═══════════════════════════════════════════════════════════════════════════ */
    function renderHero() {
        switch (design) {
            /* ── 0  Warm Welcome: gradiente quente + onda no fundo ── */
            case 0:
                return (
                    <section
                        className="pt-32 pb-28 px-4 md:px-8 text-center relative overflow-hidden"
                        style={{ background: `linear-gradient(180deg, ${Cores.primariaClara} 0%, ${Cores.clara} 70%)` }}
                    >
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-[0.07]" style={{ backgroundColor: Cores.primaria }} />
                        <span
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 relative"
                            style={{ backgroundColor: `${Cores.primaria}12`, color: Cores.primaria, border: `1px solid ${Cores.primaria}20` }}
                        >
                            <span className="text-lg">{pag.icone}</span> Segmento
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl mx-auto tracking-tight relative" style={{ color: Cores.escura }}>
                            {pag.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold relative" style={{ color: Cores.primaria }}>
                            {pag.subtitulo}
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed relative" style={{ color: Cores.textoSuave }}>
                            {pag.descricao}
                        </p>
                        {ctaButtons()}
                        {/* Wave divider */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                                <path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill={Cores.clara} />
                            </svg>
                        </div>
                    </section>
                );

            /* ── 1  Night Atmosphere: fundo escuro + glow ── */
            case 1:
                return (
                    <section
                        className="pt-32 pb-24 px-4 md:px-8 text-center relative overflow-hidden"
                        style={{ background: `linear-gradient(180deg, ${Cores.escura} 0%, ${Cores.escura}dd 60%, ${Cores.clara} 100%)` }}
                    >
                        <div className="absolute top-20 left-[15%] w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: Cores.primaria }} />
                        <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: Cores.destaque }} />
                        <span
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 relative"
                            style={{ backgroundColor: `${Cores.primaria}20`, color: Cores.primaria, border: `1px solid ${Cores.primaria}40` }}
                        >
                            <span className="text-lg">{pag.icone}</span> Segmento
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl mx-auto tracking-tight text-white relative">
                            {pag.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold relative" style={{ color: Cores.primaria }}>
                            {pag.subtitulo}
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300 relative">
                            {pag.descricao}
                        </p>
                        {ctaButtons()}
                    </section>
                );

            /* ── 2  Cozy Split: texto à esquerda, ícone rotacionado à direita ── */
            case 2:
                return (
                    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
                        <div className="absolute top-40 -right-16 w-80 h-80 rounded-full opacity-[0.08]" style={{ backgroundColor: Cores.destaque }} />
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <span
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-6"
                                    style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}
                                >
                                    <span>{pag.icone}</span> Segmento
                                </span>
                                <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight" style={{ color: Cores.escura }}>
                                    {pag.titulo}
                                </h1>
                                <p className="text-xl mb-3 font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                                <p className="text-lg mb-10 leading-relaxed max-w-xl" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                                {ctaButtons("justify-start")}
                            </div>
                            <div
                                className="w-48 h-48 md:w-56 md:h-56 rounded-4xl flex items-center justify-center shadow-xl shrink-0 rotate-3"
                                style={{ background: `linear-gradient(145deg, ${Cores.primariaClara}, ${Cores.destaque}20)` }}
                            >
                                <span className="text-7xl md:text-8xl -rotate-3">{pag.icone}</span>
                            </div>
                        </div>
                    </section>
                );

            /* ── 3  Industrial Bold: dividido por linhas, tipografia pesada ── */
            case 3:
                return (
                    <section className="pt-32 pb-20 px-4 md:px-8 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="h-px flex-1 max-w-20" style={{ backgroundColor: Cores.primaria }} />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: Cores.primaria }}>Segmento</span>
                                <div className="h-px flex-1 max-w-20" style={{ backgroundColor: Cores.primaria }} />
                            </div>
                            <span className="text-6xl block mb-6">{pag.icone}</span>
                            <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight uppercase" style={{ color: Cores.escura }}>
                                {pag.titulo}
                            </h1>
                            <p className="text-xl mb-4 font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                            <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                            {ctaButtons()}
                        </div>
                    </section>
                );

            /* ── 4  Speed Dynamic: listras diagonais decorativas ── */
            case 4:
                return (
                    <section className="pt-32 pb-24 px-4 md:px-8 text-center relative overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{ background: `repeating-linear-gradient(135deg, ${Cores.primaria}, ${Cores.primaria} 2px, transparent 2px, transparent 40px)` }}
                        />
                        <span
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 relative"
                            style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}
                        >
                            <span className="text-lg">{pag.icone}</span> Segmento
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl mx-auto tracking-tight relative" style={{ color: Cores.escura }}>
                            {pag.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold relative" style={{ color: Cores.primaria }}>
                            {pag.subtitulo}
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed relative" style={{ color: Cores.textoSuave }}>
                            {pag.descricao}
                        </p>
                        {ctaButtons()}
                    </section>
                );

            default:
                return (
                    <section className="pt-32 pb-20 px-4 md:px-8 text-center">
                        <span className="text-4xl block mb-6">{pag.icone}</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: Cores.escura }}>{pag.titulo}</h1>
                        <p className="text-xl mb-4 font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                        {ctaButtons()}
                    </section>
                );
        }
    }

    /* ═══════════════════════════════════════════════════════════════════════════
       BENEFÍCIOS — uma variante por segmento
       ═══════════════════════════════════════════════════════════════════════════ */
    function renderBeneficios() {
        const beneficios = pag.beneficios;

        switch (design) {
            /* ── 0  Warm rows: linhas alternando ícone esquerda/direita ── */
            case 0:
                return (
                    <section className="py-20 px-4 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Por que escolher o {ConfigSite.name}
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Ferramentas pensadas para o seu segmento.
                        </p>
                        <div className="max-w-5xl mx-auto flex flex-col gap-6">
                            {beneficios.map((b, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 p-8 rounded-2xl hover:shadow-md transition-shadow`}
                                    style={{ backgroundColor: i % 2 === 0 ? Cores.primariaClara : Cores.clara, border: `1px solid ${Cores.primaria}08` }}
                                >
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm bg-white">
                                        <span className="text-4xl">{b.icone}</span>
                                    </div>
                                    <div className={i % 2 === 0 ? "" : "md:text-right"}>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                        <p className="text-base leading-relaxed" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 1  Glassy cards: 2‑col com borda‑esquerda destacada ── */
            case 1:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Feito para a vida noturna
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Controle, agilidade e praticidade.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {beneficios.map((b, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl p-7 hover:shadow-lg transition-all"
                                    style={{ backgroundColor: Cores.primariaClara, border: `1px solid ${Cores.primaria}15`, borderLeft: `4px solid ${Cores.primaria}` }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">{b.icone}</span>
                                        <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 2  Magazine: primeiro card grande + 3‑col para o resto ── */
            case 2:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Pensado para cafeterias
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Charme e eficiência no seu café.
                        </p>
                        {beneficios.length > 0 && (
                            <>
                                {/* Card destaque */}
                                <div
                                    className="rounded-2xl p-8 md:p-10 mb-8 shadow-sm"
                                    style={{ background: `linear-gradient(135deg, ${Cores.primariaClara}, ${Cores.destaque}15)` }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{beneficios[0].icone}</span>
                                        <h3 className="text-2xl font-bold" style={{ color: Cores.escura }}>{beneficios[0].titulo}</h3>
                                    </div>
                                    <p className="text-base leading-relaxed max-w-2xl" style={{ color: Cores.textoSuave }}>{beneficios[0].descricao}</p>
                                </div>
                                {/* Grid 3-col */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {beneficios.slice(1).map((b, i) => (
                                        <div key={i} className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                            <span className="text-3xl block mb-4">{b.icone}</span>
                                            <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </section>
                );

            /* ── 3  Numbered horizontal: cards com número grande ── */
            case 3:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Operação otimizada
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Eficiência máxima para dark kitchens.
                        </p>
                        <div className="flex flex-col gap-5">
                            {beneficios.map((b, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-6 p-7 rounded-2xl bg-white border-2 hover:shadow-md transition-shadow"
                                    style={{ borderColor: `${Cores.primaria}12` }}
                                >
                                    <span className="text-4xl font-black shrink-0 leading-none" style={{ color: `${Cores.primaria}25` }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xl">{b.icone}</span>
                                            <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                        </div>
                                        <p className="text-base leading-relaxed" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 4  Vertical timeline: linha + dots ── */
            case 4:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Delivery profissional
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Cada etapa pensada para velocidade.
                        </p>
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: `${Cores.primaria}20` }} />
                            <div className="flex flex-col gap-8">
                                {beneficios.map((b, i) => (
                                    <div key={i} className="flex gap-6 md:gap-8 relative">
                                        {/* Dot */}
                                        <div className="w-10 md:w-16 shrink-0 flex justify-center pt-1">
                                            <div className="w-4 h-4 rounded-full border-[3px] z-10" style={{ borderColor: Cores.primaria, backgroundColor: Cores.clara }} />
                                        </div>
                                        <div className="flex-1 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">{b.icone}</span>
                                                <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            default:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {beneficios.map((b, i) => (
                                <div key={i} className="rounded-2xl p-8 border border-gray-100">
                                    <span className="text-3xl block mb-4">{b.icone}</span>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: Cores.escura }}>{b.titulo}</h3>
                                    <p className="text-base" style={{ color: Cores.textoSuave }}>{b.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );
        }
    }

    /* ═══════════════════════════════════════════════════════════════════════════
       RENDER DA PÁGINA
       ═══════════════════════════════════════════════════════════════════════════ */
    return (
        <div style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
            <CabecalhoSite />

            {renderHero()}
            {renderBeneficios()}

            {/* Funcionalidades incluídas */}
            {MenusCabecalhoConfig.funcionalidades && (
                <section className="py-16 px-4 md:px-8" style={{ backgroundColor: Cores.primariaClara }}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Funcionalidades incluídas
                        </h2>
                        <p className="text-center text-base mb-10" style={{ color: Cores.textoSuave }}>
                            Todos os recursos que você precisa, em um único sistema.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {MenusCabecalhoConfig.funcionalidades.itens.map((item) => {
                                const funcData = Textos.paginasFuncionalidades[item.slug];
                                return (
                                    <Link
                                        key={item.slug}
                                        to={withDestino(`/funcionalidades/${item.slug}`)}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-(--color-primary) hover:shadow-md transition-all duration-200"
                                    >
                                        <span className="text-2xl">{funcData?.icone ?? "📌"}</span>
                                        <span className="font-semibold text-sm" style={{ color: Cores.escura }}>{item.rotulo}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Navegação entre segmentos */}
            {menuSegmentos && (
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-10" style={{ color: Cores.escura }}>
                            Explore outros segmentos
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {menuSegmentos.itens
                                .filter((item) => item.slug !== slug)
                                .map((item) => {
                                    const segData = Textos.paginasSegmentos[item.slug];
                                    return (
                                        <Link
                                            key={item.slug}
                                            to={withDestino(`/segmentos/${item.slug}`)}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-(--color-primary) hover:shadow-md transition-all duration-200"
                                        >
                                            <span className="text-2xl">{segData?.icone ?? "📌"}</span>
                                            <span className="font-semibold text-sm" style={{ color: Cores.escura }}>{item.rotulo}</span>
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Final */}
            <section className="py-20 px-4 md:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: Cores.escura }}>
                        Pronto para começar?
                    </h2>
                    <p className="text-lg mb-10" style={{ color: Cores.textoSuave }}>
                        Experimente o {ConfigSite.name} por {ConfigSite.diasTeste} dias sem compromisso.
                    </p>
                    <Link
                        to={withDestino("/cadastro")}
                        style={{ backgroundColor: Cores.primaria, color: Cores.clara, boxShadow: Sombras.ctaPadrao }}
                        className="inline-block px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 hover:shadow-(--shadow-cta-hover) transition-all duration-300"
                    >
                        Começar agora grátis
                    </Link>
                </div>
            </section>

            <RodapeSite />
        </div>
    );
}
