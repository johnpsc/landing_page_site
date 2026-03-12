import type { CategoriaDownload, ChaveCategoriaDownload, ChavePlataformaDownload } from "./config";

export type ClientOSKey = ChavePlataformaDownload | "unknown";

export const DOWNLOAD_BADGES: Record<ChavePlataformaDownload, string> = {
  windows: ".exe",
  mac: ".dmg",
  linux: ".deb",
  android: "Play Store",
  ios: "App Store",
};

export function createDownloadCategoryMap(categorias: CategoriaDownload[]): Record<ChaveCategoriaDownload, CategoriaDownload> {
  return categorias.reduce(
    (acc, categoria) => {
      acc[categoria.chave] = categoria;
      return acc;
    },
    {} as Record<ChaveCategoriaDownload, CategoriaDownload>,
  );
}

export function detectClientOS(userAgent?: string): ClientOSKey {
  const ua = (userAgent ?? (typeof window !== "undefined" ? navigator.userAgent : "")).toLowerCase();
  if (!ua) return "unknown";

  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (/mac/.test(ua)) return "mac";
  if (/linux/.test(ua)) return "linux";
  if (/win/.test(ua)) return "windows";
  return "unknown";
}
