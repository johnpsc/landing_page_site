import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import { MenusCabecalhoConfig, Sections, SiteConfig, type DownloadPlatformKey, type MenuDropdown } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterDestinoOriginalDaSearchParams } from "../lib/downloadDestino";
import { renderDownloadIcon } from "../lib/downloadIcons";
import { createDownloadCategoryMap, detectClientOS, DOWNLOAD_BADGES, type ClientOSKey } from "../lib/downloadUtils";
import { Colors, Shadows } from "../lib/theme";

// ─── Downloads ───────────────────────────────────────────────────────────────

type OSKey = ClientOSKey;

type DownloadHeaderItem = (typeof SiteConfig.download.items)[number] & {
    badge: string;
    icon: React.ReactNode;
    category: (typeof SiteConfig.download.categories)[number];
};

const CLASSES_ICONES_DOWNLOAD: Record<DownloadPlatformKey, string> = {
    windows: "w-5 h-5 shrink-0",
    mac: "w-4 h-4 shrink-0",
    linux: "w-5 h-5 shrink-0",
    android: "w-5 h-5 shrink-0",
    ios: "w-4 h-4 shrink-0",
};

const DOWNLOAD_CATEGORY_MAP = createDownloadCategoryMap(SiteConfig.download.categories);

const DOWNLOADS_HEADER: DownloadHeaderItem[] = SiteConfig.download.items.map((downloadItem) => ({
    ...downloadItem,
    badge: DOWNLOAD_BADGES[downloadItem.platformKey],
    icon: renderDownloadIcon(downloadItem.platformKey, CLASSES_ICONES_DOWNLOAD[downloadItem.platformKey]),
    category: DOWNLOAD_CATEGORY_MAP[downloadItem.categoryKey],
}));

// ─── Menus dropdown do cabeçalho ─────────────────────────────────────────────

type MenuDropdownKey = "funcionalidades" | "segmentos" | "plataformas";

/** Array ordenado dos menus dropdown configurados no flavor ativo */
const MENUS_DROPDOWN: { key: MenuDropdownKey; menu: MenuDropdown }[] = (
    ["funcionalidades", "segmentos", "plataformas"] as const
)
    .filter((k) => MenusCabecalhoConfig[k] != null)
    .map((k) => ({ key: k, menu: MenusCabecalhoConfig[k]! }));

/**
 * Header compartilhado entre todas as páginas do site.
 * Destaca automaticamente o item de nav correspondente à rota atual.
 */
export default function CabecalhoSite() {
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
    const destinoOriginalAtual = obterDestinoOriginalDaSearchParams(searchParams);
    const [menuAberto, setMenuAberto] = useState(false);
    const [downloadAberto, setDownloadAberto] = useState(false);
    const [navDropdownAberto, setNavDropdownAberto] = useState<MenuDropdownKey | null>(null);
    const [mobileSubmenuAberto, setMobileSubmenuAberto] = useState<MenuDropdownKey | null>(null);
    const [osDetectado, setOsDetectado] = useState<OSKey>("unknown");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navDropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

    function withDestino(url: string) {
        return adicionarDestinoNaUrl(url, destinoAtual, destinoOriginalAtual);
    }

    useEffect(() => {
        setOsDetectado(detectClientOS());
    }, []);

    // Fecha dropdown ao clicar fora
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDownloadAberto(false);
            }
            // Fecha dropdown de nav se clicar fora de todos
            const clickedInsideAny = Object.values(navDropdownRefs.current).some(
                (ref) => ref && ref.contains(e.target as Node)
            );
            if (!clickedInsideAny) {
                setNavDropdownAberto(null);
            }
        }
        if (downloadAberto || navDropdownAberto) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [downloadAberto, navDropdownAberto]);

    function navClass(path: string) {
        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
        return isActive ? "font-semibold transition-colors border-b-2 pb-0.5 border-(--color-primary)" : "font-medium transition-colors hover:text-(--color-primary)";
    }

    function navStyle(path: string) {
        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
        return { color: isActive ? Colors.primary : Colors.textMuted };
    }

    function navClassMobile(path: string) {
        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
        return isActive
            ? "block px-4 py-3 rounded-xl font-semibold text-sm transition-colors"
            : "block px-4 py-3 rounded-xl font-medium text-sm transition-colors hover:bg-(--color-primary-light)";
    }

    function navStyleMobile(path: string) {
        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
        return { color: isActive ? Colors.primary : Colors.textMuted, backgroundColor: isActive ? Colors.primaryLight : undefined };
    }

    if (!Sections.cabecalho) return null;

    return (
        <header className="fixed w-full top-0 z-50 shadow-(--shadow-header) backdrop-blur-md bg-white/90 transition-all border-b border-(--color-primary-light)">
            <div className="py-4 px-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to={withDestino("/")} className="flex items-center" onClick={() => setMenuAberto(false)}>
                        <img src={SiteConfig.logo} alt={`${SiteConfig.name} Logo`} className="h-10 object-contain" />
                    </Link>
                    {/* 
                        {Sections.tem('appGarcom') && (
                            <a href={withDestino("/#app-garcom")} style={navStyle("/#app-garcom")} className={navClass("/#app-garcom")}>
                                App Garçom
                            </a>
                        )} */}

                    <nav className="hidden md:flex items-center space-x-6 pl-5">
                        <Link to={withDestino("/parceiros")} style={navStyle("/parceiros")} className={navClass("/parceiros")}>
                            Seja Parceiro
                        </Link>

                        <Link to={withDestino("/planos")} style={navStyle("/planos")} className={navClass("/planos")}>
                            Planos
                        </Link>

                        {MENUS_DROPDOWN.map(({ key, menu }) => (
                            <div
                                key={key}
                                className="relative"
                                ref={(el) => { navDropdownRefs.current[key] = el; }}
                            >
                                <button
                                    onClick={() => setNavDropdownAberto((prev) => (prev === key ? null : key))}
                                    className={`inline-flex items-center gap-1 cursor-pointer ${navClass(menu.prefixoRota)}`}
                                    style={navStyle(menu.prefixoRota)}
                                >
                                    {menu.rotulo}
                                    <svg
                                        width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                                        className="transition-transform duration-200"
                                        style={{ transform: navDropdownAberto === key ? "rotate(180deg)" : "none" }}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                {navDropdownAberto === key && (
                                    <div
                                        className="absolute left-0 mt-3 w-56 rounded-2xl bg-white border border-gray-100 overflow-hidden py-2"
                                        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)" }}
                                    >
                                        {menu.itens.map((item) => {
                                            const itemUrl = `${menu.prefixoRota}/${item.slug}`;
                                            const isActive = pathname === itemUrl;
                                            return (
                                                <Link
                                                    key={item.slug}
                                                    to={withDestino(itemUrl)}
                                                    onClick={() => setNavDropdownAberto(null)}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-all hover:bg-(--color-primary-light) relative"
                                                    style={{
                                                        color: isActive ? Colors.primary : Colors.dark,
                                                        backgroundColor: isActive ? Colors.primaryLight : undefined,
                                                    }}
                                                >
                                                    {isActive && (
                                                        <span
                                                            className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full"
                                                            style={{ backgroundColor: Colors.primary }}
                                                        />
                                                    )}
                                                    {item.rotulo}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-6">



                    {/* ── Botão Baixar (desktop) ── */}
                    <div className="hidden md:block relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDownloadAberto((v) => !v)}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm border bg-white hover:border-(--color-primary) hover:text-(--color-primary) transition-all duration-200 cursor-pointer"
                            style={{ color: Colors.textMuted, borderColor: Colors.border }}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Baixar
                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="transition-transform duration-200" style={{ transform: downloadAberto ? "rotate(180deg)" : "none" }}>
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {/* Dropdown de downloads */}
                        {downloadAberto && (
                            <div
                                className="absolute right-0 mt-2 w-60 rounded-2xl bg-white border border-gray-100 overflow-hidden"
                                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)" }}
                            >
                                <div className="py-2">
                                    {SiteConfig.download.categories.map((cat, catIndex) => {
                                        const items = DOWNLOADS_HEADER.filter((d) => d.categoryKey === cat.key);
                                        if (items.length === 0) return null;
                                        return (
                                            <div key={cat.key}>
                                                {catIndex > 0 && <div className="h-px mx-3 my-1.5 bg-gray-100" />}
                                                <p className="px-4 pb-1 pt-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: Colors.textMuted }}>
                                                    {cat.label}
                                                </p>
                                                {items.map((d) => {
                                                    const downloadUrl = withDestino(d.downloadUrl);
                                                    const isRecomendado = d.platformKey === osDetectado;
                                                    return (
                                                        <a
                                                            key={d.id}
                                                            href={downloadUrl}
                                                            onClick={() => setDownloadAberto(false)}
                                                            className="flex items-center gap-2.5 px-4 py-2 transition-all hover:bg-(--color-primary-light) relative"
                                                            style={isRecomendado ? { backgroundColor: `${Colors.primary}10` } : {}}
                                                        >
                                                            {isRecomendado && (
                                                                <span className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full" style={{ backgroundColor: Colors.primary }} />
                                                            )}
                                                            <span className="w-5 h-5 flex items-center justify-center shrink-0" style={{ color: d.corBadge }}>
                                                                {d.icon}
                                                            </span>
                                                            <span className="flex-1 text-sm font-medium" style={{ color: Colors.dark }}>{d.label}</span>
                                                            {isRecomendado
                                                                ? <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white shrink-0" style={{ backgroundColor: Colors.primary }}>✦</span>
                                                                : <span className="text-xs shrink-0" style={{ color: Colors.textMuted }}>{d.badge}</span>
                                                            }
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="px-4 py-2.5 border-t border-gray-100">
                                    <p className="text-xs text-center" style={{ color: Colors.textMuted }}>{SiteConfig.trialDays} dias grátis em todos os planos</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <a
                        href={SiteConfig.links.webApp}
                        style={{ color: Colors.textMuted, borderColor: Colors.border }}
                        className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold border bg-white hover:border-(--color-primary) hover:text-(--color-primary) transition-all duration-200"
                    >
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                        </svg>
                        Já tenho conta
                    </a>

                    <Link
                        to={withDestino("/cadastro")}
                        style={{ backgroundColor: Colors.primary, color: Colors.light, boxShadow: Shadows.ctaNormal }}
                        className="px-6 py-2.5 rounded-xl font-semibold hover:shadow-(--shadow-cta-hover) hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Teste Agora
                    </Link>

                    {/* Botão hambúrguer — visível só em mobile */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg gap-1.5 hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuAberto((v) => !v)}
                        aria-label="Abrir menu"
                    >
                        <span
                            className="block h-0.5 w-5 rounded-full transition-all duration-300 origin-center"
                            style={{ backgroundColor: Colors.dark, transform: menuAberto ? "rotate(45deg) translate(3px, 3px)" : "none" }}
                        />
                        <span
                            className="block h-0.5 w-5 rounded-full transition-all duration-300"
                            style={{ backgroundColor: Colors.dark, opacity: menuAberto ? 0 : 1 }}
                        />
                        <span
                            className="block h-0.5 w-5 rounded-full transition-all duration-300 origin-center"
                            style={{ backgroundColor: Colors.dark, transform: menuAberto ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
                        />
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {menuAberto && (
                <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 pb-4 flex flex-col gap-1">
                    <Link to={withDestino("/parceiros")} style={navStyleMobile("/parceiros")} className={navClassMobile("/parceiros")} onClick={() => setMenuAberto(false)}>
                        Seja Parceiro
                    </Link>
                    <Link to={withDestino("/planos")} style={navStyleMobile("/planos")} className={navClassMobile("/planos")} onClick={() => setMenuAberto(false)}>
                        Planos
                    </Link>

                    {/* Menus dropdown mobile (funcionalidades, segmentos, plataformas) */}
                    {MENUS_DROPDOWN.map(({ key, menu }) => (
                        <div key={key}>
                            <button
                                onClick={() => setMobileSubmenuAberto((prev) => (prev === key ? null : key))}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer ${pathname.startsWith(menu.prefixoRota) ? "font-semibold" : "hover:bg-(--color-primary-light)"
                                    }`}
                                style={{
                                    color: pathname.startsWith(menu.prefixoRota) ? Colors.primary : Colors.textMuted,
                                    backgroundColor: pathname.startsWith(menu.prefixoRota) ? Colors.primaryLight : undefined,
                                }}
                            >
                                {menu.rotulo}
                                <svg
                                    width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                                    className="transition-transform duration-200"
                                    style={{ transform: mobileSubmenuAberto === key ? "rotate(180deg)" : "none" }}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            {mobileSubmenuAberto === key && (
                                <div className="ml-3 pl-3 border-l-2 border-gray-100 flex flex-col gap-0.5 mb-1">
                                    {menu.itens.map((item) => {
                                        const itemUrl = `${menu.prefixoRota}/${item.slug}`;
                                        const isActive = pathname === itemUrl;
                                        return (
                                            <Link
                                                key={item.slug}
                                                to={withDestino(itemUrl)}
                                                onClick={() => { setMenuAberto(false); setMobileSubmenuAberto(null); }}
                                                className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-(--color-primary-light)"
                                                style={{
                                                    color: isActive ? Colors.primary : Colors.textMuted,
                                                    backgroundColor: isActive ? Colors.primaryLight : undefined,
                                                }}
                                            >
                                                {item.rotulo}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Downloads mobile */}
                    <div className="mt-1 rounded-xl overflow-hidden border border-gray-100">
                        {SiteConfig.download.categories.map((cat, catIndex) => {
                            const items = DOWNLOADS_HEADER.filter((d) => d.categoryKey === cat.key);
                            if (items.length === 0) return null;
                            return (
                                <div key={cat.key}>
                                    <p className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-gray-50${catIndex > 0 ? " border-t border-gray-100" : ""}`} style={{ color: Colors.textMuted }}>
                                        {cat.label}
                                    </p>
                                    {items.map((d) => {
                                        const downloadUrl = withDestino(d.downloadUrl);
                                        const isRec = d.platformKey === osDetectado;
                                        return (
                                            <a
                                                key={d.id}
                                                href={downloadUrl}
                                                onClick={() => setMenuAberto(false)}
                                                className="flex items-center gap-2.5 px-4 py-2.5 border-t border-gray-50"
                                                style={isRec ? { backgroundColor: `${Colors.primary}10` } : {}}
                                            >
                                                <span className="w-5 h-5 flex items-center justify-center shrink-0" style={{ color: d.corBadge }}>
                                                    {d.icon}
                                                </span>
                                                <span className="flex-1 text-sm font-medium" style={{ color: Colors.dark }}>{d.label}</span>
                                                {isRec
                                                    ? <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white shrink-0" style={{ backgroundColor: Colors.primary }}>✦</span>
                                                    : <span className="text-xs" style={{ color: Colors.textMuted }}>{d.badge}</span>
                                                }
                                            </a>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-2">
                        <a
                            href={SiteConfig.links.webApp}
                            className="block px-4 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-center hover:border-(--color-primary) transition-colors"
                            style={{ color: Colors.textMuted }}
                            onClick={() => setMenuAberto(false)}
                        >
                            Já tenho conta
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
