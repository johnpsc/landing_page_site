/**
 * Registro central de variantes de seção da página inicial.
 *
 * ┌───────────────────────────────────────────────────────────────────────────┐
 * │  COMO FUNCIONA                                                            │
 * │                                                                           │
 * │  1. Cada seção (heroi, appGarcom, etc.) tem um arquivo com variantes.     │
 * │  2. Cada flavor define em `variantesInicio` qual variante usar por seção. │
 * │  3. Cada plataforma pode sobrescrever a variante em                       │
 * │     `plataformas[slug].variantesInicio`.                                  │
 * │  4. `obterComponenteSecao(id, plataforma?)` retorna o componente certo,  │
 * │     caindo em "padrao" se nenhuma variante for especificada.              │
 * │                                                                           │
 * │  PARA ADICIONAR UMA NOVA VARIANTE:                                        │
 * │  → Crie a função no arquivo da seção (ex: SecaoHeroi.tsx)                 │
 * │  → Registre no objeto `*Variantes` no final desse arquivo                │
 * │  → Configure no flavor desejado: `variantesInicio: { heroi: "minha" }`   │
 * │  → Ou sobrescreva por plataforma:                                         │
 * │     `plataformas: { web: { variantesInicio: { heroi: "minha" } } }`       │
 * └───────────────────────────────────────────────────────────────────────────┘
 */

import type { SecaoInicioId } from "../../lib/config";
import { resolverPlataforma } from "../../lib/config";
import { appGarcomVariantes } from "./SecaoAppGarcom";
import { chamadaFinalVariantes } from "./SecaoChamadaFinal";
import { contatoVariantes } from "./SecaoContato";
import { estatisticasVariantes } from "./SecaoEstatisticas";
import { funcionalidadesVariantes } from "./SecaoFuncionalidades";
import { heroiVariantes } from "./SecaoHeroi";
import { suporteVariantes } from "./SecaoSuporte";
import type { SecaoProps } from "./tipos";

export { PlataformaProvider, usePlataforma, usePlataformaAtiva, useTextosInicio } from "./PlataformaContext";
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
 * Usa resolverPlataforma() para obter as variantes resolvidas.
 */
export function obterComponenteSecao(secaoId: SecaoInicioId, plataforma?: string): React.FC<SecaoProps> | null {
    const registro = REGISTROS[secaoId];
    if (!registro) return null;

    const resolvido = resolverPlataforma(plataforma ?? "");
    const varianteEscolhida = resolvido.variantesInicio[secaoId] ?? "padrao";

    return registro[varianteEscolhida] ?? registro["padrao"] ?? null;
}

/**
 * Retorna a lista de seções na ordem correta para a plataforma.
 *
 * Usa resolverPlataforma() para obter as seções resolvidas.
 */
export function obterSecoesPlataforma(plataforma?: string): SecaoInicioId[] {
    return resolverPlataforma(plataforma ?? "").secoes;
}
