export type DestinoDownload = "web" | "desktop-online" | "desktop-local";
const PLATAFORMA_PADRAO = "desktop-local";

const DESTINOS_WEB = new Set(["web"]);

const DESTINOS_DESKTOP_WEB = new Set([
    "desktop-online",
]);

const DESTINOS_DESKTOP_LOCAL = new Set([
    "desktop-local",
]);

export function normalizarDestinoDownload(destino?: string | null): DestinoDownload {
    const destinoNormalizado = (destino ?? "").trim().toLowerCase();

    if (DESTINOS_WEB.has(destinoNormalizado)) return "web";
    if (DESTINOS_DESKTOP_WEB.has(destinoNormalizado)) return "desktop-online";
    if (DESTINOS_DESKTOP_LOCAL.has(destinoNormalizado)) return "desktop-local";

    return "web";
}

export function obterDestinoDownloadDaSearchParams(searchParams: URLSearchParams): DestinoDownload | undefined {
    const destinoUrl = searchParams.get("plataforma");
    if (!destinoUrl) return undefined;
    return normalizarDestinoDownload(destinoUrl);
}

export function obterPlataformaDaSearchParams(searchParams: URLSearchParams): string {
    return searchParams.get("plataforma")?.trim() || "";
}

export function adicionarDestinoNaUrl(url: string, destino?: DestinoDownload, plataforma?: string): string {
    if (/^(https?:|mailto:|tel:)/i.test(url)) return url;

    const normalizedUrl = new URL(url, "https://local");
    const destinoUrl = normalizedUrl.searchParams.get("destino")?.trim();
    const plataformaFinal =
        plataforma?.trim()
        || destino?.trim()
        || destinoUrl
        || "";

    if (plataformaFinal && !normalizedUrl.searchParams.get("plataforma")) {
        normalizedUrl.searchParams.set("plataforma", plataformaFinal);
    }

    // Preserva o código de afiliado em todos os links internos
    try {
        const ref = localStorage.getItem("ref_afiliado");
        if (ref && !normalizedUrl.searchParams.get("ref")) {
            normalizedUrl.searchParams.set("ref", ref);
        }
    } catch { }

    const query = normalizedUrl.searchParams.toString();
    return `${normalizedUrl.pathname}${query ? `?${query}` : ""}${normalizedUrl.hash}`;
}
