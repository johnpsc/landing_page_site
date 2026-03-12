/**
 * PlataformaContext — fornece textos resolvidos por plataforma para as seções da página inicial.
 *
 * ┌──────────────────────────────────────────────────────────────────────────────┐
 * │  COMO FUNCIONA                                                               │
 * │                                                                              │
 * │  1. O <PlataformaProvider> recebe o slug da plataforma ativa (ex: "web").    │
 * │  2. Ele verifica se o flavor tem overrides para essa plataforma em           │
 * │     `configuracao.plataformasInicio[slug].textos`.                           │
 * │  3. Mescla (seção-a-seção) com os textos padrão do flavor.                  │
 * │  4. Os componentes de seção usam `useTextosInicio()` em vez de importar     │
 * │     `Textos` diretamente, recebendo assim os textos corretos da plataforma. │
 * │                                                                              │
 * │  PARA SOBRESCREVER TEXTOS DE UMA PLATAFORMA:                                │
 * │  → No arquivo do flavor, adicione `plataformasInicio.SLUG.textos.SECAO`     │
 * │  → Forneça o objeto completo da seção — ele substitui tudo da seção padrão. │
 * └──────────────────────────────────────────────────────────────────────────────┘
 */

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { TextosInicio } from "../../lib/config";
import { flavorAtivo, Textos } from "../../lib/config";

// ─── Tipos internos ───────────────────────────────────────────────────────────

type PlataformaContextValue = {
    /** Textos resolvidos (padrão do flavor, com overrides da plataforma aplicados) */
    textos: TextosInicio;
    /** Slug da plataforma ativa */
    plataforma: string;
};

// ─── Context ──────────────────────────────────────────────────────────────────

const PlataformaCtx = createContext<PlataformaContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

type ProviderProps = {
    plataforma: string;
    children: ReactNode;
};

/**
 * Envolve a página inicial e resolve os textos corretos para a plataforma ativa.
 *
 * ```tsx
 * <PlataformaProvider plataforma={plataformaAtual}>
 *   <SecaoHeroi ... />
 * </PlataformaProvider>
 * ```
 */
export function PlataformaProvider({ plataforma, children }: ProviderProps) {
    const value = useMemo<PlataformaContextValue>(() => {
        const cfgPlataforma = flavorAtivo.configuracao.plataformasInicio?.[plataforma];
        const textosOverride = cfgPlataforma?.textos;

        // Mescla seção-a-seção: se a plataforma define uma seção, ela substitui integralmente
        const textosMesclados: TextosInicio = {
            heroi: textosOverride?.heroi ?? Textos.heroi,
            appGarcom: textosOverride?.appGarcom ?? Textos.appGarcom,
            funcionalidades: textosOverride?.funcionalidades ?? Textos.funcionalidades,
            estatisticas: textosOverride?.estatisticas ?? Textos.estatisticas,
            suporte: textosOverride?.suporte ?? Textos.suporte,
            contato: textosOverride?.contato ?? Textos.contato,
            chamadaFinal: textosOverride?.chamadaFinal ?? Textos.chamadaFinal,
        };

        return { textos: textosMesclados, plataforma };
    }, [plataforma]);

    return <PlataformaCtx.Provider value={value}>{children}</PlataformaCtx.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Retorna os textos das seções da página inicial, já resolvidos para a plataforma ativa.
 * Deve ser usado dentro de <PlataformaProvider>.
 *
 * Se chamado fora do provider (ex: em testes), retorna os textos padrão do flavor.
 */
export function useTextosInicio(): TextosInicio {
    const ctx = useContext(PlataformaCtx);
    if (ctx) return ctx.textos;

    // Fallback: textos padrão do flavor (sem override de plataforma)
    return {
        heroi: Textos.heroi,
        appGarcom: Textos.appGarcom,
        funcionalidades: Textos.funcionalidades,
        estatisticas: Textos.estatisticas,
        suporte: Textos.suporte,
        contato: Textos.contato,
        chamadaFinal: Textos.chamadaFinal,
    };
}

/**
 * Retorna o slug da plataforma ativa ("desktop-local", "desktop-online" ou "web").
 */
export function usePlataformaAtiva(): string {
    const ctx = useContext(PlataformaCtx);
    return ctx?.plataforma ?? "desktop-local";
}
