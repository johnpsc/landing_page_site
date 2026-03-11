import { useSearchParams } from "react-router";

const STORAGE_KEY = "ref_afiliado";

/**
 * Retorna o código de indicação do afiliado.
 *
 * Prioridade:
 *  1. Query string `?ref=CODIGO` na URL atual
 *  2. localStorage (salvo na primeira visita)
 *
 * Sempre que o `ref` aparecer na URL, ele é salvo/atualizado no localStorage
 * para nunca se perder durante a navegação.
 */
export function useAfiliado(): string {
    const [searchParams] = useSearchParams();
    const refUrl = searchParams.get("ref")?.trim() || "";

    // Se veio pela URL, persiste no localStorage
    if (refUrl) {
        try {
            localStorage.setItem(STORAGE_KEY, refUrl);
        } catch {
            // SSR ou storage indisponível — ignora
        }
    }

    // Retorna da URL ou do storage
    if (refUrl) return refUrl;

    try {
        return localStorage.getItem(STORAGE_KEY) || "";
    } catch {
        return "";
    }
}

/**
 * Lê o código de afiliado fora de componente React (ex.: em funções utilitárias).
 */
export function obterAfiliado(): string {
    try {
        return localStorage.getItem(STORAGE_KEY) || "";
    } catch {
        return "";
    }
}
