import { API_CONFIG } from "./apiConfig";

export type PastaDownloadApi = "arquivo_instalador" | "atualizacoes" | "atualizacoes_local";

const BASE_DOWNLOADS_API = "/sistema/apis_restaurantes/imagens";

export function montarUrlDownloadApi(nomeArquivo?: string, pasta?: PastaDownloadApi): string | undefined {
    if (!nomeArquivo) return undefined;

    const arquivoLimpo = nomeArquivo.trim();
    if (!arquivoLimpo) return undefined;

    if (/^https?:\/\//i.test(arquivoLimpo)) {
        return arquivoLimpo;
    }

    if (!pasta) return undefined;

    const origin = new URL(API_CONFIG.BASE).origin;
    return `${origin}${BASE_DOWNLOADS_API}/${pasta}/${encodeURIComponent(arquivoLimpo)}`;
}