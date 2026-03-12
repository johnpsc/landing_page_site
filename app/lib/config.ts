/**
 * config.ts — re-exporta tudo do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 */
export type { CategoriaDownload, ChaveCategoriaDownload, ChavePlataformaDownload, ConfigPlataforma, ConfiguracaoFlavor, CoresFlavor, Flavor, ImagensFlavor, ItemDownload, ItemMenuSuspenso, LinhaRequisitos, MenusCabecalho, MenuSuspenso, PlataformaInicio, SecaoInicioId, SombrasFlavor, TextosFlavor, TextosInicio } from "./flavors/types";

export { CHAVE_FLAVOR, ConfigSite, flavorAtivo, MenusCabecalhoConfig, resolverPlataforma, Secoes, Textos } from "./flavors/index";
export type { FlavorKey, PlataformaResolvida } from "./flavors/index";

