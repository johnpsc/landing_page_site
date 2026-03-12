/**
 * config.ts — re-exporta tudo do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 */
export type { DownloadCategory, DownloadCategoryKey, DownloadItem, DownloadPlatformKey, Flavor, FlavorColors, FlavorConfig, FlavorImages, FlavorShadows, MenuDropdown, MenuDropdownItem, MenusCabecalho, PlataformaInicio, SecaoInicioId, SystemRequirementsRow, TextosInicio } from "./flavors/types";

export { CHAVE_FLAVOR, ConfigSite, flavorAtivo, MenusCabecalhoConfig, Secoes, Textos } from "./flavors/index";
export type { FlavorKey } from "./flavors/index";

