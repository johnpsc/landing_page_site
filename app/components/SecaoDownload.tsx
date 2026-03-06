import { useEffect, useState } from "react";
import { SiteConfig, Texts, type DownloadPlatformKey } from "../lib/config";
import { renderDownloadIcon } from "../lib/downloadIcons";
import { createDownloadCategoryMap, detectClientOS, type ClientOSKey } from "../lib/downloadUtils";
import { Colors, Shadows } from "../lib/theme";

// ─── Tipos e constantes ──────────────────────────────────────────────────────

type PlataformaKey = ClientOSKey;

type Plataforma = (typeof SiteConfig.download.items)[number] & {
    icon: React.ReactNode;
    category: (typeof SiteConfig.download.categories)[number];
};

const CLASSES_ICONES_PLATAFORMA: Record<DownloadPlatformKey, string> = {
    windows: "w-8 h-8",
    mac: "w-7 h-7",
    linux: "w-7 h-7",
    android: "w-7 h-7",
    ios: "w-6 h-6",
};

const DOWNLOAD_CATEGORY_MAP = createDownloadCategoryMap(SiteConfig.download.categories);

const PLATAFORMAS: Plataforma[] = SiteConfig.download.items.map((downloadItem) => ({
    ...downloadItem,
    icon: renderDownloadIcon(downloadItem.platformKey, CLASSES_ICONES_PLATAFORMA[downloadItem.platformKey]),
    category: DOWNLOAD_CATEGORY_MAP[downloadItem.categoryKey],
}));

// ─── Componentes auxiliares ──────────────────────────────────────────────────

function ReqRow({ label, min, rec }: { label: string; min: string; rec: string }) {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-100">
            <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: Colors.secondary, color: Colors.dark }}>
                {label}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="px-3 py-2.5">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: Colors.textMuted }}>Mínimo</p>
                    <p className="text-xs leading-snug" style={{ color: Colors.dark }}>{min}</p>
                </div>
                <div className="px-3 py-2.5" style={{ backgroundColor: "rgba(255,122,0,0.04)" }}>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: Colors.primary }}>Recomendado</p>
                    <p className="text-xs leading-snug" style={{ color: Colors.dark }}>{rec}</p>
                </div>
            </div>
        </div>
    );
}

// ─── SecaoDownload ────────────────────────────────────────────────────────────

export default function SecaoDownload() {
    const [osDetectado, setOsDetectado] = useState<PlataformaKey>("unknown");
    const [mostrarOutras, setMostrarOutras] = useState(false);

    useEffect(() => {
        setOsDetectado(detectClientOS());
    }, []);

    const plataformaPrincipal = PLATAFORMAS.find((p) => p.platformKey === osDetectado) ?? PLATAFORMAS[0];
    const outras = PLATAFORMAS.filter((p) => p.id !== plataformaPrincipal.id);

    return (
        <div className="flex flex-col gap-6">

            {/* ─ Botão principal de download ─ */}
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Shadows.dashboardImage }}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: Colors.primaryLight, color: Colors.primary }}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-lg leading-tight" style={{ color: Colors.dark }}>{Texts.download.sectionTitle}</h3>
                        <p className="text-sm" style={{ color: Colors.textMuted }}>
                            {osDetectado !== "unknown"
                                ? `${Texts.download.osDetectedPrefix} ${plataformaPrincipal.label} · ${plataformaPrincipal.category.label}`
                                : Texts.download.osUnknown}
                        </p>
                    </div>
                </div>

                {/* Botão principal */}
                <a
                    href={plataformaPrincipal.downloadUrl}
                    className="flex items-center justify-between w-full text-white rounded-2xl px-6 py-5 hover:-translate-y-0.5 transition-all duration-300 mb-4"
                    style={{ backgroundColor: Colors.primary, boxShadow: Shadows.heroBtnPrimary }}
                >
                    <div className="flex items-center gap-4">
                        <span style={{ color: "rgba(255,255,255,0.85)" }}>{plataformaPrincipal.icon}</span>
                        <div className="text-left">
                            <p className="font-extrabold text-lg leading-tight">{Texts.download.downloadBtnPrefix} {plataformaPrincipal.label}</p>
                            <p className="text-xs text-white/80 font-semibold">{plataformaPrincipal.category.label} · {plataformaPrincipal.category.descricao}</p>
                            <p className="text-sm text-white/70">{plataformaPrincipal.versao} · {plataformaPrincipal.tamanho}</p>
                        </div>
                    </div>
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                </a>

                {/* Outras versões */}
                <button
                    onClick={() => setMostrarOutras((v) => !v)}
                    className="w-full text-sm font-semibold flex items-center justify-center gap-1.5 py-2 rounded-xl border border-gray-200 hover:border-(--color-primary) hover:text-(--color-primary) transition-all"
                    style={{ color: Colors.textMuted }}
                >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                    </svg>
                    {Texts.download.otherPlatformsBtn}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="transition-transform duration-200" style={{ transform: mostrarOutras ? "rotate(180deg)" : "none" }}>
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

                {mostrarOutras && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {outras.map((p) => (
                            <a
                                key={p.id}
                                href={p.downloadUrl}
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-md transition-all group"
                            >
                                <span className="text-gray-500 group-hover:scale-110 transition-transform shrink-0" style={{ color: p.corBadge }}>{p.icon}</span>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: Colors.dark }}>{p.label}</p>
                                    <p className="text-xs font-semibold" style={{ color: Colors.primary }}>{p.category.label}</p>
                                    <p className="text-xs" style={{ color: Colors.textMuted }}>{p.tamanho}</p>
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
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Shadows.dashboardImage }}>
                <h3 className="font-extrabold text-lg mb-6" style={{ color: Colors.dark }}>{Texts.download.stepsTitle}</h3>
                <div className="flex flex-col gap-5">
                    {Texts.download.steps.map((paso, i) => (
                        <div key={paso.titulo} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base text-white shrink-0" style={{ backgroundColor: Colors.primary }}>
                                {i + 1}
                            </div>
                            <div>
                                <p className="font-bold" style={{ color: Colors.dark }}>{paso.titulo}</p>
                                <p className="text-sm mt-0.5 leading-relaxed" style={{ color: Colors.textMuted }}>{paso.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─ Requisitos ─ */}
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: Shadows.dashboardImage }}>
                <h3 className="font-extrabold text-lg mb-6" style={{ color: Colors.dark }}>{Texts.download.requirementsTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Computador */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke={Colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                            </svg>
                            <span className="font-bold" style={{ color: Colors.dark }}>{Texts.download.desktopLabel}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {SiteConfig.download.systemRequirements.desktop.map((r) => (
                                <ReqRow key={r.label} {...r} />
                            ))}
                        </div>
                    </div>

                    {/* Celular */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke={Colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold" style={{ color: Colors.dark }}>{Texts.download.mobileLabel}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {SiteConfig.download.systemRequirements.mobile.map((r) => (
                                <ReqRow key={r.label} {...r} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legenda */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: Colors.textMuted }}>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: Colors.primaryLight, border: `1px solid ${Colors.primary}` }} />
                        Mínimo — o sistema funciona, porém pode ser mais lento
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: Colors.primary }} />
                        Recomendado — experiência completa e fluida
                    </span>
                </div>
            </div>
        </div>
    );
}
