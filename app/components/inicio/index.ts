/**
 * Registro central de variantes de seção da página inicial.
 *
 * ┌───────────────────────────────────────────────────────────────────────────┐
 * │  COMO FUNCIONA                                                            │
 * │                                                                           │
 * │  1. Cada seção (heroi, appGarcom, etc.) tem um arquivo com variantes.     │
 * │  2. Cada flavor define em `variantesInicio` qual variante usar por seção. │
 * │  3. Cada plataforma pode sobrescrever a variante em                       │
 * │     `plataformasInicio[slug].variantesInicio`.                            │
 * │  4. `obterComponenteSecao(id, plataforma?)` retorna o componente certo,  │
 * │     caindo em "padrao" se nenhuma variante for especificada.              │
 * │                                                                           │
 * │  PARA ADICIONAR UMA NOVA VARIANTE:                                        │
 * │  → Crie a função no arquivo da seção (ex: SecaoHeroi.tsx)                 │
 * │  → Registre no objeto `*Variantes` no final desse arquivo                │
 * │  → Configure no flavor desejado: `variantesInicio: { heroi: "minha" }`   │
 * │  → Ou sobrescreva por plataforma:                                         │
 * │     `plataformasInicio: { web: { variantesInicio: { heroi: "minha" } } }` │
 * └───────────────────────────────────────────────────────────────────────────┘
 */

import type { SecaoInicioId } from "../../lib/config";
import { flavorAtivo } from "../../lib/config";
import { appGarcomVariantes } from "./SecaoAppGarcom";
import { chamadaFinalVariantes } from "./SecaoChamadaFinal";
import { contatoVariantes } from "./SecaoContato";
import { estatisticasVariantes } from "./SecaoEstatisticas";
import { funcionalidadesVariantes } from "./SecaoFuncionalidades";
import { heroiVariantes } from "./SecaoHeroi";
import { suporteVariantes } from "./SecaoSuporte";
import type { SecaoProps } from "./tipos";

export { PlataformaProvider, usePlataformaAtiva, useTextosInicio } from "./PlataformaContext";
export type { SecaoProps } from "./tipos";

// Mapeia cada SecaoInicioId → registro de variantes daquela seção
const REGISTROS: Record<SecaoInicioId, Record<string, React.FC<SecaoProps>>> = {
    heroi: heroiVariantes,
    appGarcom: appGarcomVariantes,
    funcionalidades: funcionalidadesVariantes,
    estatisticas: estatisticasVariantes,
    suporte: suporteVariantes,
    contato: contatoVariantes,
    chamadaFinal: chamadaFinalVariantes,
};

/**
 * Retorna o componente de seção correto para o flavor e plataforma ativos.
 *
 * Ordem de resolução da variante:
 *   1. `plataformasInicio[plataforma].variantesInicio[secaoId]` → override de plataforma
 *   2. `variantesInicio[secaoId]` → padrão do flavor
 *   3. Fallback → variante "padrao"
 */
export function obterComponenteSecao(secaoId: SecaoInicioId, plataforma?: string): React.FC<SecaoProps> | null {
    const registro = REGISTROS[secaoId];
    if (!registro) return null;

    const cfg = flavorAtivo.configuracao;
    const cfgPlataforma = plataforma ? cfg.plataformasInicio?.[plataforma] : undefined;

    const varianteEscolhida =
        cfgPlataforma?.variantesInicio?.[secaoId]
        ?? cfg.variantesInicio?.[secaoId]
        ?? "padrao";

    return registro[varianteEscolhida] ?? registro["padrao"] ?? null;
}

/**
 * Retorna a lista de seções na ordem correta para a plataforma.
 *
 * Ordem de resolução:
 *   1. `plataformasInicio[plataforma].secoes` → override de plataforma
 *   2. `secoes` → padrão do flavor
 *   3. Fallback → todas as seções na ordem padrão
 */
export function obterSecoesPlataforma(plataforma?: string): SecaoInicioId[] {
    const cfg = flavorAtivo.configuracao;
    const cfgPlataforma = plataforma ? cfg.plataformasInicio?.[plataforma] : undefined;

    return cfgPlataforma?.secoes ?? cfg.secoes ?? ['heroi', 'appGarcom', 'funcionalidades', 'estatisticas', 'suporte', 'contato', 'chamadaFinal'];
}
