import { bigchef } from "./bigchef";
import { mulherz } from "./mulherz";
import { sagestart } from "./sagestart";
import type { Flavor, FlavorColors, FlavorShadows } from "./types";

export * from "./types";

// ─── Registro de flavors ──────────────────────────────────────────────────────
// Para adicionar um novo flavor: crie o arquivo e registre aqui.

const FLAVORS = {
  bigchef,
  sagestart,
  mulherz,
} as const;

export type FlavorKey = keyof typeof FLAVORS;

/**
 * Flavor ativo — definido pela variável de ambiente VITE_FLAVOR no arquivo .env
 * Exemplo: VITE_FLAVOR=sagestart
 * Padrão: bigchef
 */
export const FLAVOR_KEY = (import.meta.env.VITE_FLAVOR ?? "bigchef") as FlavorKey;
export const activeFlavor: Flavor = FLAVORS[FLAVOR_KEY] ?? FLAVORS.bigchef;

// ─── Exports compatíveis com config.ts e theme.ts ────────────────────────────

export const SiteConfig = activeFlavor.config;
export const Colors: FlavorColors = activeFlavor.colors;
export const Images = activeFlavor.images;
export const Shadows: FlavorShadows = activeFlavor.shadows;
export const Texts = activeFlavor.texts;

export const Gradients = {
  heroTitle: `linear-gradient(to right, ${activeFlavor.colors.primary}, ${activeFlavor.colors.primaryDark})`,
};

export const Fonts = {
  main: "'Inter', sans-serif",
  heading: "'Inter', sans-serif",
};

// ─── CSS Custom Properties ───────────────────────────────────────────────────
/**
 * Gera o bloco :root com as CSS custom properties do flavor ativo.
 * Injete isso como <style> no <head> via root.tsx para que as classes
 * Tailwind que usam var(--color-primary) etc. funcionem com qualquer flavor.
 */
export function buildCssVars(flavor: Flavor): string {
  const c = flavor.colors;
  const s = flavor.shadows;
  return `:root {
  --color-primary: ${c.primary};
  --color-primary-dark: ${c.primaryDark};
  --color-primary-light: ${c.primaryLight};
  --color-accent: ${c.accent};
  --color-dark: ${c.dark};
  --color-light: ${c.light};
  --color-border: ${c.border};
  --color-text-muted: ${c.textMuted};
  --color-text-disabled: ${c.textDisabled};
  --shadow-header: ${s.header};
  --shadow-dashboard: ${s.dashboardImage};
  --shadow-cta-normal: ${s.ctaNormal};
  --shadow-cta-hover: ${s.ctaHover};
  --shadow-hero-btn: ${s.heroBtnPrimary};
  --shadow-pricing-btn: ${s.pricingBtn};
  --shadow-pricing-btn-hover: ${s.pricingBtnHover};
  --shadow-feature-card: ${s.featureCard};
  --shadow-plan-selected: ${s.planSelected};
}`;
}
