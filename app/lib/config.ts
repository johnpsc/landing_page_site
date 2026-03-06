/**
 * config.ts — re-exporta tudo do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 */
export type { DownloadCategory, DownloadCategoryKey, DownloadItem, DownloadPlatformKey, Flavor, FlavorColors, FlavorConfig, FlavorImages, FlavorShadows, SystemRequirementsRow } from "./flavors/types";

export { activeFlavor, FLAVOR_KEY, SiteConfig, Texts } from "./flavors/index";
export type { FlavorKey } from "./flavors/index";

