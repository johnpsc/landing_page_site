/**
 * theme.ts — re-exporta os tokens de design do flavor ativo.
 *
 * A fonte da verdade está em app/lib/flavors/.
 * Para trocar o flavor, altere VITE_FLAVOR no arquivo .env.
 *
 * ✅ REGRA: jamais escreva cores diretamente nos componentes.
 *    • Para props style={{}}: use Colors.* ou Shadows.*
 *    • Para classes Tailwind com pseudo-seletores: use as CSS custom
 *      properties injetadas em root.tsx (ex: text-(--color-primary))
 */
export { Colors, Fonts, Gradients, Images, Shadows } from "./flavors/index";

