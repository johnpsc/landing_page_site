/**
 * theme.ts — re-exporta os tokens de design do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 *
 * ✅ REGRA: jamais escreva cores diretamente nos componentes.
 *    • Para props style={{}}: use Cores.* ou Sombras.*
 *    • Para classes Tailwind com pseudo-seletores: use as CSS custom
 *      properties injetadas em root.tsx (ex: text-(--color-primary))
 */
export { Cores, Fontes, Gradientes, Imagens, Sombras } from "./flavors/index";

