/**
 * config.ts — re-exporta tudo do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 */
export type { DownloadCategory, DownloadCategoryKey, DownloadItem, DownloadPlatformKey, Flavor, FlavorColors, FlavorConfig, FlavorImages, FlavorShadows, MenuDropdown, MenuDropdownItem, MenusCabecalho, SecaoInicioId, SystemRequirementsRow } from "./flavors/types";

export { CHAVE_FLAVOR, ConfigSite, MenusCabecalhoConfig, Secoes, Textos, flavorAtivo } from "./flavors/index";
export type { FlavorKey } from "./flavors/index";

