import { bigchef } from "./bigchef";
import { mulherz } from "./mulherz";
import { sagestart } from "./sagestart";
import type { ConfigPlataforma, ConfiguracaoFlavor, Flavor, MenusCabecalho, SecaoInicioId, TextosFlavor } from "./types";

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
export const CHAVE_FLAVOR = (import.meta.env.VITE_FLAVOR ?? "bigchef") as FlavorKey;
export const flavorAtivo: Flavor = FLAVORS[CHAVE_FLAVOR] ?? FLAVORS.bigchef;

// ─── Exports estáticos (flavor raiz, sem plataforma) ─────────────────────────

export const ConfigSite = {
  ...flavorAtivo.configuracao,
};

/** Ordem padrão de seções quando o flavor não define `secoes` */
const SECOES_PADRAO: SecaoInicioId[] = [
  'heroi',
  'appGarcom',
  'funcionalidades',
  'estatisticas',
  'suporte',
  'contato',
  'chamadaFinal',
];

const cfg = flavorAtivo.configuracao;

/**
 * Seções da página inicial — array ordenado.
 * `Secoes.lista` dá a ordem; `Secoes.tem(id)` verifica se existe.
 */
export const Secoes = {
  lista: cfg.secoes ?? SECOES_PADRAO,
  tem: (id: SecaoInicioId) => (cfg.secoes ?? SECOES_PADRAO).includes(id),
  cabecalho: cfg.cabecalho !== false,
  rodape: cfg.rodape !== false,
};

export const Cores = { ...flavorAtivo.cores };
export const Imagens = { ...flavorAtivo.imagens };
export const Sombras = { ...flavorAtivo.sombras };
export const Textos = { ...flavorAtivo.textos };

export const Gradientes = {
  tituloHeroi: `linear-gradient(to right, ${flavorAtivo.cores.primaria}, ${flavorAtivo.cores.primariaEscura})`,
};

export const MenusCabecalhoConfig = flavorAtivo.configuracao.menus ?? {};

export const Fontes = {
  principal: "'Inter', sans-serif",
  titulo: "'Inter', sans-serif",
};

// ─── Resolução por plataforma ─────────────────────────────────────────────────
//
// `resolverPlataforma(slug)` retorna um snapshot **completo** da configuração
// com os overrides da plataforma aplicados. Qualquer campo que a plataforma
// não definir herda automaticamente do flavor raiz.
//
// Exemplo de uso:
//   const resolved = resolverPlataforma("web");
//   resolved.config.nome       → "Big Chef Web" (override)
//   resolved.config.diasTeste  → 10            (herdado do flavor)
//   resolved.textos.parceiros  → { ... }       (override ou herdado)
//   resolved.menus             → { ... }       (override ou herdado)

/** Resultado da resolução de plataforma — snapshot completo e mesclado */
export type PlataformaResolvida = {
  /** Slug da plataforma ("desktop-local", "web", etc.) — "" se geral */
  slug: string;
  /** Configuração mesclada (flavor + override da plataforma) */
  config: ConfiguracaoFlavor;
  /** Textos mesclados (flavor + override da plataforma) */
  textos: TextosFlavor;
  /** Menus do cabeçalho mesclados */
  menus: MenusCabecalho;
  /** Seções da home (da plataforma ou do flavor) */
  secoes: SecaoInicioId[];
  /** Variantes visuais da home (da plataforma ou do flavor) */
  variantesInicio: Partial<Record<SecaoInicioId, string>>;
  /** Helper: verifica se uma seção da home está ativa */
  temSecao: (id: SecaoInicioId) => boolean;
  /** Cabeçalho visível? */
  cabecalho: boolean;
  /** Rodapé visível? */
  rodape: boolean;
};

/**
 * Obtém o ConfigPlataforma bruto de um slug (busca em `plataformas` e fallback para `plataformasInicio`).
 */
function obterConfigPlataforma(slug: string): ConfigPlataforma | undefined {
  if (!slug) return undefined;
  return cfg.plataformas?.[slug] ?? cfg.plataformasInicio?.[slug];
}

/**
 * Resolve a configuração completa para uma plataforma, mesclando com o flavor raiz.
 * Se o slug for vazio ou não existir, retorna a configuração padrão do flavor.
 *
 * @param slug  Slug da plataforma ("desktop-local", "desktop-online", "web", "")
 * @returns     Snapshot completo com config, textos, menus, seções, etc.
 */
export function resolverPlataforma(slug: string): PlataformaResolvida {
  const plat = obterConfigPlataforma(slug);

  // ── Config mesclada ──────────────────────────────────────────────────
  const configMesclada: ConfiguracaoFlavor = plat
    ? {
      ...cfg,
      nome: plat.nome ?? cfg.nome,
      slogan: plat.slogan ?? cfg.slogan,
      descricao: plat.descricao ?? cfg.descricao,
      logo: plat.logo ?? cfg.logo,
      diasTeste: plat.diasTeste ?? cfg.diasTeste,
      cabecalho: plat.cabecalho ?? cfg.cabecalho,
      rodape: plat.rodape ?? cfg.rodape,
      secoes: plat.secoes ?? cfg.secoes,
      variantesInicio: plat.variantesInicio ?? cfg.variantesInicio,
      menus: mesclarMenus(cfg.menus, plat.menus),
      contato: { ...cfg.contato, ...plat.contato },
      suporte: plat.suporte
        ? { horarios: { ...cfg.suporte.horarios, ...plat.suporte.horarios } }
        : cfg.suporte,
      links: { ...cfg.links, ...plat.links },
      download: {
        categorias: plat.download?.categorias ?? cfg.download.categorias,
        itens: plat.download?.itens ?? cfg.download.itens,
        requisitos: plat.download?.requisitos ?? cfg.download.requisitos,
      },
    }
    : cfg;

  // ── Textos mesclados (chave por chave) ──────────────────────────────
  const textosBase = flavorAtivo.textos;
  const textosOverride = plat?.textos;
  const textosMesclados: TextosFlavor = textosOverride
    ? {
      heroi: textosOverride.heroi ?? textosBase.heroi,
      appGarcom: textosOverride.appGarcom ?? textosBase.appGarcom,
      funcionalidades: textosOverride.funcionalidades ?? textosBase.funcionalidades,
      estatisticas: textosOverride.estatisticas ?? textosBase.estatisticas,
      suporte: textosOverride.suporte ?? textosBase.suporte,
      contato: textosOverride.contato ?? textosBase.contato,
      chamadaFinal: textosOverride.chamadaFinal ?? textosBase.chamadaFinal,
      cadastro: textosOverride.cadastro ?? textosBase.cadastro,
      baixar: textosOverride.baixar ?? textosBase.baixar,
      download: textosOverride.download ?? textosBase.download,
      planos: textosOverride.planos ?? textosBase.planos,
      paginasFuncionalidades: textosOverride.paginasFuncionalidades ?? textosBase.paginasFuncionalidades,
      paginasSegmentos: textosOverride.paginasSegmentos ?? textosBase.paginasSegmentos,
      parceiros: textosOverride.parceiros ?? textosBase.parceiros,
    }
    : textosBase;

  // ── Seções & variantes ──────────────────────────────────────────────
  const secoesResolvidas = configMesclada.secoes ?? SECOES_PADRAO;
  const variantesResolvidas = configMesclada.variantesInicio ?? {};

  // ── Menus ───────────────────────────────────────────────────────────
  const menusResolvidos = configMesclada.menus ?? {};

  return {
    slug,
    config: configMesclada,
    textos: textosMesclados,
    menus: menusResolvidos,
    secoes: secoesResolvidas,
    variantesInicio: variantesResolvidas,
    temSecao: (id) => secoesResolvidas.includes(id),
    cabecalho: configMesclada.cabecalho !== false,
    rodape: configMesclada.rodape !== false,
  };
}

/**
 * Mescla menus do flavor raiz com overrides da plataforma.
 * Se a plataforma define um menu, ele substitui integralmente o do flavor.
 * Se a plataforma define `null` para um menu, ele é removido.
 */
function mesclarMenus(
  base: MenusCabecalho | undefined,
  override: Partial<MenusCabecalho> | undefined
): MenusCabecalho | undefined {
  if (!override) return base;
  return {
    ...base,
    ...override,
  } as MenusCabecalho;
}

// ─── CSS Custom Properties ───────────────────────────────────────────────────
/**
 * Gera o bloco :root com as CSS custom properties do flavor ativo.
 * Injete isso como <style> no <head> via root.tsx para que as classes
 * Tailwind que usam var(--color-primary) etc. funcionem com qualquer flavor.
 */
export function construirVariaveisCss(flavor: Flavor): string {
  const c = flavor.cores;
  const s = flavor.sombras;
  return `:root {
  --color-primary: ${c.primaria};
  --color-primary-dark: ${c.primariaEscura};
  --color-primary-light: ${c.primariaClara};
  --color-accent: ${c.destaque};
  --color-dark: ${c.escura};
  --color-light: ${c.clara};
  --color-border: ${c.borda};
  --color-text-muted: ${c.textoSuave};
  --color-text-disabled: ${c.textoDesabilitado};
  --shadow-header: ${s.cabecalho};
  --shadow-dashboard: ${s.imagemPainel};
  --shadow-cta-normal: ${s.ctaPadrao};
  --shadow-cta-hover: ${s.ctaHover};
  --shadow-hero-btn: ${s.botaoHeroiPrimario};
  --shadow-pricing-btn: ${s.botaoPreco};
  --shadow-pricing-btn-hover: ${s.botaoPrecoHover};
  --shadow-feature-card: ${s.cardFuncionalidade};
  --shadow-plan-selected: ${s.planoSelecionado};
}`;
}
