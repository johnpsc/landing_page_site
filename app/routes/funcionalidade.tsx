import { Link, useParams, useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import { ConfigSite, MenusCabecalhoConfig, Textos } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";
import { Cores, Fontes, Sombras } from "../lib/theme";

/**
 * Cada slug de funcionalidade recebe um layout visual distinto (0–5).
 * Slugs não mapeados caem no layout padrão (0).
 */
const DESIGN_FUNCIONALIDADE: Record<string, number> = {
    "frente-de-caixa-pdv": 0,
    "mesas-e-comandas": 1,
    "chatbot-para-delivery": 2,
    "financeiro": 3,
    "emissao-fiscal": 4,
    "relatorios-gerenciais": 5,
};

export function meta() {
    return [
        { title: `Funcionalidades - ${ConfigSite.name}` },
        { name: "description", content: `Conheça as funcionalidades do ${ConfigSite.name}.` },
    ];
}

export default function PaginaFuncionalidade() {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams] = useSearchParams();
    const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
    const plataformaAtual = obterPlataformaDaSearchParams(searchParams);
    const withDestino = (url: string) => adicionarDestinoNaUrl(url, destinoAtual, plataformaAtual);

    const pagina = slug ? Textos.paginasFuncionalidades[slug] : undefined;
    const menuFuncionalidades = MenusCabecalhoConfig.funcionalidades;
    const design = slug ? (DESIGN_FUNCIONALIDADE[slug] ?? 0) : 0;

    /* ─── 404 ─── */
    if (!pagina) {
        return (
            <div style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
                <CabecalhoSite />
                <div className="pt-40 pb-28 text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Funcionalidade não encontrada</h1>
                    <p className="text-lg mb-8" style={{ color: Cores.textoSuave }}>A funcionalidade que você procura não está disponível.</p>
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
       HERO — uma variante por funcionalidade
       ═══════════════════════════════════════════════════════════════════════════ */
    function renderHero() {
        switch (design) {
            /* ── 0  Command Center: gradient bg + large icon circle ── */
            case 0:
                return (
                    <section
                        className="pt-32 pb-24 px-4 md:px-8 text-center relative overflow-hidden"
                        style={{ background: `linear-gradient(180deg, ${Cores.primariaClara} 0%, ${Cores.clara} 100%)` }}
                    >
                        <div
                            className="mx-auto w-28 h-28 rounded-full flex items-center justify-center mb-8 shadow-xl"
                            style={{ background: `linear-gradient(135deg, ${Cores.primaria}, ${Cores.destaque})` }}
                        >
                            <span className="text-5xl drop-shadow">{pag.icone}</span>
                        </div>
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                            style={{ backgroundColor: `${Cores.primaria}15`, color: Cores.primaria }}
                        >
                            Funcionalidade
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl mx-auto tracking-tight" style={{ color: Cores.escura }}>
                            {pag.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold" style={{ color: Cores.primaria }}>
                            {pag.subtitulo}
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: Cores.textoSuave }}>
                            {pag.descricao}
                        </p>
                        {ctaButtons()}
                    </section>
                );

            /* ── 1  Showcase Split: texto à esquerda, ícone à direita ── */
            case 1:
                return (
                    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
                        <div className="absolute -right-20 top-28 w-125 h-125 rounded-full opacity-[0.07]" style={{ backgroundColor: Cores.primaria }} />
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-6"
                                    style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}
                                >
                                    <span>{pag.icone}</span> Funcionalidade
                                </div>
                                <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight" style={{ color: Cores.escura }}>
                                    {pag.titulo}
                                </h1>
                                <p className="text-xl mb-3 font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                                <p className="text-lg mb-10 leading-relaxed max-w-xl" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                                {ctaButtons("justify-start")}
                            </div>
                            <div
                                className="w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center shadow-2xl shrink-0"
                                style={{ background: `linear-gradient(145deg, ${Cores.primariaClara}, ${Cores.clara})`, border: `2px solid ${Cores.primaria}15` }}
                            >
                                <span className="text-7xl md:text-8xl">{pag.icone}</span>
                            </div>
                        </div>
                    </section>
                );

            /* ── 2  Conversation: bolhas de chat decorativas + linha gradiente ── */
            case 2:
                return (
                    <section className="pt-32 pb-24 px-4 md:px-8 text-center relative overflow-hidden">
                        <div className="absolute top-24 left-[8%] w-16 h-12 rounded-2xl rounded-bl-none opacity-[0.08] -rotate-12" style={{ backgroundColor: Cores.primaria }} />
                        <div className="absolute top-40 right-[10%] w-20 h-14 rounded-2xl rounded-br-none opacity-[0.08] rotate-8" style={{ backgroundColor: Cores.destaque }} />
                        <div className="absolute bottom-28 left-[18%] w-14 h-10 rounded-2xl rounded-bl-none opacity-[0.06] -rotate-5" style={{ backgroundColor: Cores.primaria }} />

                        <div
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm mb-8 shadow-sm"
                            style={{ backgroundColor: Cores.clara, color: Cores.primaria, border: `2px solid ${Cores.primaria}25` }}
                        >
                            <span className="text-lg">{pag.icone}</span> Funcionalidade
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl mx-auto tracking-tight" style={{ color: Cores.escura }}>
                            {pag.titulo}
                        </h1>
                        <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ background: `linear-gradient(90deg, ${Cores.primaria}, ${Cores.destaque})` }} />
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold" style={{ color: Cores.primaria }}>
                            {pag.subtitulo}
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: Cores.textoSuave }}>
                            {pag.descricao}
                        </p>
                        {ctaButtons()}
                    </section>
                );

            /* ── 3  Dashboard Metrics: grid de pontos + barra de stats ── */
            case 3:
                return (
                    <section className="pt-32 pb-16 px-4 md:px-8 text-center relative overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{ backgroundImage: `radial-gradient(${Cores.primaria} 1px, transparent 1px)`, backgroundSize: "24px 24px" }}
                        />
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border"
                            style={{ color: Cores.primaria, borderColor: `${Cores.primaria}30`, backgroundColor: Cores.clara }}
                        >
                            {pag.icone} Funcionalidade
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 max-w-3xl mx-auto tracking-tight relative" style={{ color: Cores.escura }}>
                            {pag.titulo}
                        </h1>
                        <p className="text-xl mb-3 max-w-2xl mx-auto font-semibold relative" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                        <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                        {ctaButtons()}
                        {/* Barra de métricas */}
                        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                            {[
                                { label: "Economia de tempo", valor: "70%" },
                                { label: "Controle financeiro", valor: "100%" },
                                { label: "Redução de erros", valor: "90%" },
                                { label: "Relatórios em", valor: "1 clique" },
                            ].map((s, i) => (
                                <div key={i} className="rounded-xl p-4 bg-white border shadow-sm" style={{ borderColor: `${Cores.primaria}15` }}>
                                    <p className="text-2xl font-extrabold" style={{ color: Cores.primaria }}>{s.valor}</p>
                                    <p className="text-xs font-medium mt-1" style={{ color: Cores.textoSuave }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 4  Document Paper: borda tracejada + selo ── */
            case 4:
                return (
                    <section className="pt-32 pb-20 px-4 md:px-8 flex justify-center">
                        <div
                            className="max-w-3xl w-full rounded-3xl border-2 border-dashed p-10 md:p-16 text-center relative"
                            style={{ borderColor: `${Cores.primaria}25` }}
                        >
                            <div
                                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 bg-white"
                                style={{ borderColor: Cores.primaria }}
                            >
                                <span className="text-xl">{pag.icone}</span>
                            </div>
                            <span
                                className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 mt-2"
                                style={{ backgroundColor: `${Cores.primaria}10`, color: Cores.primaria }}
                            >
                                Funcionalidade
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: Cores.escura }}>
                                {pag.titulo}
                            </h1>
                            <p className="text-xl mb-3 font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                            <p className="text-lg mb-10 leading-relaxed" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                            {ctaButtons()}
                        </div>
                    </section>
                );

            /* ── 5  Data Insights: barras de gráfico decorativas ── */
            case 5:
                return (
                    <section className="pt-32 pb-24 px-4 md:px-8 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-[12%] flex items-end gap-2 opacity-[0.06]">
                            {[80, 120, 60, 140, 90, 110, 70].map((h, i) => (
                                <div key={i} className="w-5 md:w-7 rounded-t-sm" style={{ height: h, backgroundColor: Cores.primaria }} />
                            ))}
                        </div>
                        <div className="absolute bottom-0 right-[8%] flex items-end gap-2 opacity-[0.04]">
                            {[60, 100, 80, 130, 70].map((h, i) => (
                                <div key={i} className="w-5 md:w-7 rounded-t-sm" style={{ height: h, backgroundColor: Cores.destaque }} />
                            ))}
                        </div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold mb-8"
                            style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}
                        >
                            <span className="text-lg">{pag.icone}</span> Funcionalidade
                        </div>
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
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 max-w-4xl mx-auto" style={{ color: Cores.escura }}>{pag.titulo}</h1>
                        <p className="text-xl mb-4 max-w-3xl mx-auto font-semibold" style={{ color: Cores.primaria }}>{pag.subtitulo}</p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>{pag.descricao}</p>
                        {ctaButtons()}
                    </section>
                );
        }
    }

    /* ═══════════════════════════════════════════════════════════════════════════
       RECURSOS — uma variante por funcionalidade
       ═══════════════════════════════════════════════════════════════════════════ */
    function renderRecursos() {
        const recursos = pag.recursos;

        switch (design) {
            /* ── 0  Cards numerados com borda‑esquerda primária ── */
            case 0:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            O que você ganha
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Recursos que fazem a diferença no dia a dia.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recursos.map((r, i) => (
                                <div
                                    key={i}
                                    className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                                    style={{ borderLeft: `4px solid ${Cores.primaria}` }}
                                >
                                    <span className="text-3xl font-extrabold shrink-0 leading-none" style={{ color: `${Cores.primaria}30` }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 1  Linhas alternadas (ícone esquerda/direita) ── */
            case 1:
                return (
                    <section className="py-20 px-4 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Recursos em destaque
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Cada detalhe pensado para o seu negócio.
                        </p>
                        <div className="max-w-5xl mx-auto flex flex-col gap-6">
                            {recursos.map((r, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 p-8 rounded-2xl transition-shadow hover:shadow-md`}
                                    style={{ backgroundColor: i % 2 === 0 ? Cores.clara : Cores.primariaClara }}
                                >
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                                        style={{ backgroundColor: i % 2 === 0 ? Cores.primariaClara : Cores.clara }}
                                    >
                                        <span className="text-4xl">{r.icone}</span>
                                    </div>
                                    <div className={i % 2 === 0 ? "text-left" : "md:text-right text-left"}>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                        <p className="text-base leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 2  Chat cards empilhados (alternando lado) ── */
            case 2:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Como funciona
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Veja como a automação trabalha por você.
                        </p>
                        <div className="flex flex-col gap-5">
                            {recursos.map((r, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <div key={i} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                                        <div
                                            className={`max-w-md p-6 rounded-2xl shadow-sm border border-gray-100 ${isLeft ? "rounded-bl-none" : "rounded-br-none"}`}
                                            style={{ backgroundColor: isLeft ? Cores.clara : Cores.primariaClara }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl">{r.icone}</span>
                                                <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );

            /* ── 3  Primeiro card em destaque + grid 3‑col do resto ── */
            case 3:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Ferramentas financeiras completas
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Tudo o que você precisa em um só lugar.
                        </p>
                        {recursos.length > 0 && (
                            <>
                                {/* Card destaque */}
                                <div
                                    className="rounded-2xl p-8 md:p-10 mb-8 text-white relative overflow-hidden"
                                    style={{ background: `linear-gradient(135deg, ${Cores.primaria}, ${Cores.primariaEscura})` }}
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: Cores.destaque }} />
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{recursos[0].icone}</span>
                                        <h3 className="text-2xl font-bold">{recursos[0].titulo}</h3>
                                    </div>
                                    <p className="text-base leading-relaxed opacity-90 max-w-2xl">{recursos[0].descricao}</p>
                                </div>
                                {/* Grid 3-col */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {recursos.slice(1).map((r, i) => (
                                        <div
                                            key={i}
                                            className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                                            style={{ borderTop: `3px solid ${Cores.primaria}` }}
                                        >
                                            <span className="text-3xl block mb-4">{r.icone}</span>
                                            <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </section>
                );

            /* ── 4  Checklist vertical com ✓ ── */
            case 4:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            O que está incluído
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Conformidade fiscal sem complicação.
                        </p>
                        <div className="flex flex-col divide-y divide-gray-100">
                            {recursos.map((r, i) => (
                                <div key={i} className="flex gap-5 py-7">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ backgroundColor: `${Cores.primaria}15` }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={Cores.primaria} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                        <p className="text-base leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            /* ── 5  Cards com barra gradiente no topo ── */
            case 5:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: Cores.escura }}>
                            Dados que geram resultados
                        </h2>
                        <p className="text-center text-lg mb-14 max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                            Informação certa, no momento certo.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {recursos.map((r, i) => {
                                const barWidths = ["85%", "70%", "95%", "60%"];
                                return (
                                    <div key={i} className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                        <div
                                            className="h-1.5"
                                            style={{ background: `linear-gradient(90deg, ${Cores.primaria}, ${Cores.destaque})`, width: barWidths[i % barWidths.length] }}
                                        />
                                        <div className="p-7">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl">{r.icone}</span>
                                                <h3 className="text-lg font-bold" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );

            default:
                return (
                    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {recursos.map((r, i) => (
                                <div key={i} className="rounded-2xl p-8 border border-gray-100">
                                    <span className="text-3xl block mb-4">{r.icone}</span>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: Cores.escura }}>{r.titulo}</h3>
                                    <p className="text-base" style={{ color: Cores.textoSuave }}>{r.descricao}</p>
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
            {renderRecursos()}

            {/* Navegação entre funcionalidades */}
            {menuFuncionalidades && (
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-10" style={{ color: Cores.escura }}>
                            Explore outras funcionalidades
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {menuFuncionalidades.itens
                                .filter((item) => item.slug !== slug)
                                .map((item) => {
                                    const data = Textos.paginasFuncionalidades[item.slug];
                                    return (
                                        <Link
                                            key={item.slug}
                                            to={withDestino(`/funcionalidades/${item.slug}`)}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-(--color-primary) hover:shadow-md transition-all duration-200"
                                        >
                                            <span className="text-2xl">{data?.icone ?? "📌"}</span>
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
                        Pronto para usar {pag.titulo}?
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
