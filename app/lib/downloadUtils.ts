import type { DownloadCategory, DownloadCategoryKey, DownloadPlatformKey } from "./config";

export type ClientOSKey = DownloadPlatformKey | "unknown";

export const DOWNLOAD_BADGES: Record<DownloadPlatformKey, string> = {
  windows: ".exe",
  mac: ".dmg",
  linux: ".deb",
  android: "Play Store",
  ios: "App Store",
};

export function createDownloadCategoryMap(categories: DownloadCategory[]): Record<DownloadCategoryKey, DownloadCategory> {
  return categories.reduce(
    (acc, category) => {
      acc[category.key] = category;
      return acc;
    },
    {} as Record<DownloadCategoryKey, DownloadCategory>,
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
