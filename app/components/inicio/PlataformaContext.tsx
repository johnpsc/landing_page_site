/**
 * PlataformaContext — fornece a configuração resolvida por plataforma para TODAS as páginas.
 *
 * ┌──────────────────────────────────────────────────────────────────────────────┐
 * │  COMO FUNCIONA                                                               │
 * │                                                                              │
 * │  1. O <PlataformaProvider> é montado no root.tsx e recebe o ?plataforma=.   │
 * │  2. Ele chama resolverPlataforma(slug) que mescla o flavor raiz com os      │
 * │     overrides da plataforma (config, textos, menus, download, tudo).        │
 * │  3. Qualquer componente usa usePlataforma() para obter o snapshot completo. │
 * │  4. useTextosInicio() é atalho para os textos da home page.                 │
 * │                                                                              │
 * │  PARA SOBRESCREVER ALGO POR PLATAFORMA:                                     │
 * │  → No arquivo do flavor, em `plataformas.SLUG`, adicione os campos.         │
 * │  → O que não for definido herda automaticamente do flavor raiz.             │
 * └──────────────────────────────────────────────────────────────────────────────┘
 */

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { TextosInicio } from "../../lib/config";
import { resolverPlataforma, type PlataformaResolvida } from "../../lib/config";

// ─── Context ──────────────────────────────────────────────────────────────────

const PlataformaCtx = createContext<PlataformaResolvida | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

type ProviderProps = {
    plataforma: string;
    children: ReactNode;
};

/**
 * Envolve TODA a aplicação e resolve a config completa para a plataforma ativa.
 * Deve ser montado em root.tsx.
 *
 * ```tsx
 * <PlataformaProvider plataforma={plataformaAtual}>
 *   <Outlet />
 * </PlataformaProvider>
 * ```
 */
export function PlataformaProvider({ plataforma, children }: ProviderProps) {
    const value = useMemo<PlataformaResolvida>(
        () => resolverPlataforma(plataforma),
        [plataforma],
    );

    return <PlataformaCtx.Provider value={value}>{children}</PlataformaCtx.Provider>;
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

/**
 * Retorna o snapshot completo da plataforma resolvida (config + textos + menus + seções).
 * Deve ser usado dentro de <PlataformaProvider>.
 *
 * Se chamado fora do provider (ex: em testes), retorna a resolução padrão (sem plataforma).
 */
export function usePlataforma(): PlataformaResolvida {
    const ctx = useContext(PlataformaCtx);
    if (ctx) return ctx;
    // Fallback: resolução sem plataforma
    return resolverPlataforma("");
}

/**
 * Retorna os textos das seções da página inicial, já resolvidos para a plataforma ativa.
 * Atalho para `usePlataforma().textos` filtrado pelas chaves da home.
 */
export function useTextosInicio(): TextosInicio {
    const { textos } = usePlataforma();
    return {
        heroi: textos.heroi,
        appGarcom: textos.appGarcom,
        funcionalidades: textos.funcionalidades,
        estatisticas: textos.estatisticas,
        suporte: textos.suporte,
        contato: textos.contato,
        chamadaFinal: textos.chamadaFinal,
    };
}

/**
 * Retorna o slug da plataforma ativa ("desktop-local", "desktop-online", "web" ou "" se geral).
 */
export function usePlataformaAtiva(): string {
    return usePlataforma().slug;
}
