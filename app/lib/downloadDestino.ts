export type DestinoDownload = "web" | "desktop-web" | "desktop-local";
const DESTINO_ORIGINAL_PADRAO = "desktop";

const DESTINOS_WEB = new Set(["web"]);

const DESTINOS_DESKTOP_WEB = new Set([
    "desktop-web",
    "desktop_web",
    "desktop web",
    "baixar-web",
    "baixar_web",
    "sistema_web",
]);

const DESTINOS_DESKTOP_LOCAL = new Set([
    "desktop-local",
    "desktop_local",
    "desktop local",
    "desktop",
    "local",
    "baixar-desktop",
    "baixar_desktop",
    "sistema_desktop",
]);

export function normalizarDestinoDownload(destino?: string | null): DestinoDownload {
    const destinoNormalizado = (destino ?? "").trim().toLowerCase();

    if (DESTINOS_WEB.has(destinoNormalizado)) return "web";
    if (DESTINOS_DESKTOP_WEB.has(destinoNormalizado)) return "desktop-web";
    if (DESTINOS_DESKTOP_LOCAL.has(destinoNormalizado)) return "desktop-local";

    return "desktop-local";
}

export function obterDestinoDownloadDaSearchParams(searchParams: URLSearchParams): DestinoDownload | undefined {
    const destinoUrl = searchParams.get("destino_original");
    if (!destinoUrl) return undefined;
    return normalizarDestinoDownload(destinoUrl);
}

export function obterDestinoOriginalDaSearchParams(searchParams: URLSearchParams): string {
    const destinoOriginal = searchParams.get("destino_original")?.trim();
    return destinoOriginal || DESTINO_ORIGINAL_PADRAO;
}

export function adicionarDestinoNaUrl(url: string, destino?: DestinoDownload, destinoOriginal?: string): string {
    if (/^(https?:|mailto:|tel:)/i.test(url)) return url;

    const normalizedUrl = new URL(url, "https://local");
    const destinoUrl = normalizedUrl.searchParams.get("destino")?.trim();
    const destinoOriginalFinal =
        destinoOriginal?.trim()
        || destino?.trim()
        || destinoUrl
        || DESTINO_ORIGINAL_PADRAO;

    if (!normalizedUrl.searchParams.get("destino_original")) {
        normalizedUrl.searchParams.set("destino_original", destinoOriginalFinal);
    }

    const query = normalizedUrl.searchParams.toString();
    return `${normalizedUrl.pathname}${query ? `?${query}` : ""}${normalizedUrl.hash}`;
}
