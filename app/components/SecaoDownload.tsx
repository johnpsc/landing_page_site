import { useEffect, useMemo, useState } from "react";
import type { CategoriaDownload, ChaveCategoriaDownload, ChavePlataformaDownload, ItemDownload } from "../lib/config";
import { renderDownloadIcon } from "../lib/downloadIcons";
import { createDownloadCategoryMap, detectClientOS, type ClientOSKey } from "../lib/downloadUtils";
import { Cores, Sombras } from "../lib/theme";
import { usePlataforma } from "./inicio/PlataformaContext";

// ─── Tipos e constantes ──────────────────────────────────────────────────────

type PlataformaKey = ClientOSKey;

type Plataforma = ItemDownload & {
    icon: React.ReactNode;
    categoria: CategoriaDownload;
};

const CLASSES_ICONES_PLATAFORMA: Record<ChavePlataformaDownload, string> = {
    windows: "w-8 h-8",
    mac: "w-7 h-7",
    linux: "w-7 h-7",
    android: "w-7 h-7",
    ios: "w-6 h-6",
};

// ─── Componentes auxiliares ──────────────────────────────────────────────────

function ReqRow({ rotulo, minimo, recomendado }: { rotulo: string; minimo: string; recomendado: string }) {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: Cores.secundaria, color: Cores.escura }}>
                {rotulo}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="px-3 py-2.5">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: Cores.textoSuave }}>Mínimo</p>
                    <p className="text-xs leading-snug" style={{ color: Cores.escura }}>{minimo}</p>
                </div>
                <div className="px-3 py-2.5" style={{ backgroundColor: "rgba(255,122,0,0.04)" }}>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: Cores.primaria }}>Recomendado</p>
                    <p className="text-xs leading-snug" style={{ color: Cores.escura }}>{recomendado}</p>
                </div>
            </div>
        </div>
    );
}

// ─── SecaoDownload ────────────────────────────────────────────────────────────

type SecaoDownloadProps = {
    tipo: ChaveCategoriaDownload[];
    downloadUrl?: string;
    downloadPrimaryLabel?: string;
    downloadPrimaryVersion?: string;
    downloadSecondaryUrl?: string;
    downloadSecondaryLabel?: string;
    downloadSecondaryVersion?: string;
};

export default function SecaoDownload({
    tipo,
    downloadUrl,
    downloadPrimaryLabel,
    downloadPrimaryVersion,
    downloadSecondaryUrl,
    downloadSecondaryLabel,
    downloadSecondaryVersion,
}: SecaoDownloadProps) {
    const [osDetectado, setOsDetectado] = useState<PlataformaKey>("unknown");
    const [mostrarOutras, setMostrarOutras] = useState(false);

    const plat = usePlataforma();
    const configSite = plat.config;
    const textos = plat.textos;

    const PLATAFORMAS = useMemo<Plataforma[]>(() => {
        const catMap = createDownloadCategoryMap(configSite.download.categorias);
        return configSite.download.itens.map((downloadItem) => ({
            ...downloadItem,
            icon: renderDownloadIcon(downloadItem.chavePlataforma, CLASSES_ICONES_PLATAFORMA[downloadItem.chavePlataforma]),
            categoria: catMap[downloadItem.chaveCategoria],
        }));
    }, [configSite.download]);

    useEffect(() => {
        setOsDetectado(detectClientOS());
    }, []);

    const plataformaPrincipal = PLATAFORMAS.filter((item) => tipo.includes(item.chaveCategoria)).find((p) => p.chavePlataforma === osDetectado) ?? PLATAFORMAS[0];
    const outras = PLATAFORMAS.filter((p) => p.id !== plataformaPrincipal.id);

    return (
        <div className="flex flex-col gap-6">

            {/* ─ Botão principal de download ─ */}
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Sombras.imagemPainel }}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-lg leading-tight" style={{ color: Cores.escura }}>{textos.download.tituloSecao}</h3>
                        <p className="text-sm" style={{ color: Cores.textoSuave }}>
                            {osDetectado !== "unknown"
                                ? `${textos.download.prefixoOsDetectado} ${plataformaPrincipal.rotulo} · ${plataformaPrincipal.categoria.rotulo}`
                                : textos.download.osDesconhecido}
                        </p>
                    </div>
                </div>

                {/* Botão principal */}
                <a
                    href={downloadUrl ?? plataformaPrincipal.urlDownload}
                    className="flex items-center justify-between w-full text-white rounded-2xl px-6 py-5 hover:-translate-y-0.5 transition-all duration-300 mb-4"
                    style={{ backgroundColor: Cores.primaria, boxShadow: Sombras.botaoHeroiPrimario }}
                >
                    <div className="flex items-center gap-4">
                        <span style={{ color: "rgba(255,255,255,0.85)" }}>{plataformaPrincipal.icon}</span>
                        <div className="text-left">
                            <p className="font-extrabold text-lg leading-tight">{downloadPrimaryLabel ?? `${textos.download.prefixoBotaoDownload} ${plataformaPrincipal.rotulo}`}</p>
                            {downloadPrimaryVersion && (
                                <p className="text-xs text-white/90 font-semibold">Versão {downloadPrimaryVersion}</p>
                            )}
                            <p className="text-xs text-white/80 font-semibold">{plataformaPrincipal.categoria.rotulo} · {plataformaPrincipal.categoria.descricao}</p>
                            <p className="text-sm text-white/70">{plataformaPrincipal.versao} · {plataformaPrincipal.tamanho}</p>
                        </div>
                    </div>
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </a>

                {downloadSecondaryUrl && (
                    <a
                        href={downloadSecondaryUrl}
                        className="flex items-center justify-between w-full rounded-2xl px-6 py-4 border hover:-translate-y-0.5 transition-all duration-300 mb-4"
                        style={{ borderColor: Cores.borda, backgroundColor: Cores.clara, color: Cores.primaria }}
                    >
                        <div className="flex items-center gap-3">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="shrink-0">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <div>
                                <p className="font-bold text-sm">{downloadSecondaryLabel ?? "Baixar atualização"}</p>
                                {downloadSecondaryVersion && (
                                    <p className="text-xs" style={{ color: Cores.textoSuave }}>Versão {downloadSecondaryVersion}</p>
                                )}
                            </div>
                        </div>
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                )}

                {/* Outras versões */}
                <button
                    onClick={() => setMostrarOutras((v) => !v)}
                    className="w-full text-sm font-semibold flex items-center justify-center gap-1.5 py-2 rounded-xl border border-gray-200 hover:border-(--color-primary) hover:text-(--color-primary) transition-all"
                    style={{ color: Cores.textoSuave }}
                >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                    </svg>
                    {textos.download.botaoOutrasPlataformas}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="transition-transform duration-200" style={{ transform: mostrarOutras ? "rotate(180deg)" : "none" }}>
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

                {mostrarOutras && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {outras.filter((p) => tipo.includes(p.chaveCategoria)).map((p) => (
                            <a
                                key={p.id}
                                href={p.urlDownload}
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-md transition-all group"
                            >
                                <span className="text-gray-500 group-hover:scale-110 transition-transform shrink-0" style={{ color: p.corBadge }}>{p.icon}</span>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: Cores.escura }}>{p.rotulo}</p>
                                    <p className="text-xs font-semibold" style={{ color: Cores.primaria }}>{p.categoria.rotulo}</p>
                                    <p className="text-xs" style={{ color: Cores.textoSuave }}>{p.tamanho}</p>
                                </div>
                                <svg className="ml-auto w-4 h-4 text-gray-300 group-hover:text-(--color-primary) shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* ─ Passo a passo ─ */}
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Sombras.imagemPainel }}>
                <h3 className="font-extrabold text-lg mb-6" style={{ color: Cores.escura }}>{textos.download.tituloPassos}</h3>
                <div className="flex flex-col gap-5">
                    {textos.download.passos.map((paso, i) => (
                        <div key={paso.titulo} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base text-white shrink-0" style={{ backgroundColor: Cores.primaria }}>
                                {i + 1}
                            </div>
                            <div>
                                <p className="font-bold" style={{ color: Cores.escura }}>{paso.titulo}</p>
                                <p className="text-sm mt-0.5 leading-relaxed" style={{ color: Cores.textoSuave }}>{paso.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─ Requisitos ─ */}
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Sombras.imagemPainel }}>
                <h3 className="font-extrabold text-lg mb-6" style={{ color: Cores.escura }}>{textos.download.tituloRequisitos}</h3>
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Computador */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke={Cores.primaria} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                            </svg>
                            <span className="font-bold" style={{ color: Cores.escura }}>{textos.download.rotuloDesktop}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {configSite.download.requisitos.desktop.map((r) => (
                                <ReqRow key={r.rotulo} {...r} />
                            ))}
                        </div>
                    </div>

                    {/* Celular */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke={Cores.primaria} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold" style={{ color: Cores.escura }}>{textos.download.rotuloMobile}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {configSite.download.requisitos.celular.map((r) => (
                                <ReqRow key={r.rotulo} {...r} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legenda */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: Cores.textoSuave }}>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: Cores.primariaClara, border: `1px solid ${Cores.primaria}` }} />
                        Mínimo — o sistema funciona, porém pode ser mais lento
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: Cores.primaria }} />
                        Recomendado — experiência completa e fluida
                    </span>
                </div>
            </div>
        </div>
    );
}
