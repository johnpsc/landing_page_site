import { bigchef } from "./bigchef";
import { mulherz } from "./mulherz";
import { sagestart } from "./sagestart";
import type { Flavor, SecaoInicioId } from "./types";

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

export const SiteConfig = {
  ...activeFlavor.configuracao,
  trialDays: activeFlavor.configuracao.diasTeste,
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

const cfg = activeFlavor.configuracao;

/**
 * Seções da página inicial — array ordenado.
 * `Sections.lista` dá a ordem; `Sections.tem(id)` verifica se existe.
 */
export const Sections = {
  /** Array ordenado de IDs de seção (define a ordem de renderização) */
  lista: cfg.secoes ?? SECOES_PADRAO,
  /** Verifica se uma seção está ativa */
  tem: (id: SecaoInicioId) => (cfg.secoes ?? SECOES_PADRAO).includes(id),
  /** Cabeçalho visível? (default true) */
  cabecalho: cfg.cabecalho !== false,
  /** Rodapé visível? (default true) */
  rodape: cfg.rodape !== false,
};

export const Colors = {
  primary: activeFlavor.cores.primaria,
  primaryDark: activeFlavor.cores.primariaEscura,
  primaryLight: activeFlavor.cores.primariaClara,
  accent: activeFlavor.cores.destaque,
  dark: activeFlavor.cores.escura,
  light: activeFlavor.cores.clara,
  border: activeFlavor.cores.borda,
  textMuted: activeFlavor.cores.textoSuave,
  textDisabled: activeFlavor.cores.textoDesabilitado,
  secondary: activeFlavor.cores.secundaria,
};

export const Images = {
  heroGif: activeFlavor.imagens.gifHeroi,
  dashboardPreview: activeFlavor.imagens.preVisualizacaoPainel,
  whatsappSim: activeFlavor.imagens.simulacaoWhatsapp,
  testimonial1: activeFlavor.imagens.depoimento1,
  aiqfome: activeFlavor.imagens.aiqfome,
  ifood: activeFlavor.imagens.ifood,
};

export const Shadows = {
  header: activeFlavor.sombras.cabecalho,
  dashboardImage: activeFlavor.sombras.imagemPainel,
  ctaNormal: activeFlavor.sombras.ctaPadrao,
  ctaHover: activeFlavor.sombras.ctaHover,
  heroBtnPrimary: activeFlavor.sombras.botaoHeroiPrimario,
  pricingBtn: activeFlavor.sombras.botaoPreco,
  pricingBtnHover: activeFlavor.sombras.botaoPrecoHover,
  featureCard: activeFlavor.sombras.cardFuncionalidade,
  planSelected: activeFlavor.sombras.planoSelecionado,
};
export const Texts = {
  hero: {
    badge: activeFlavor.textos.heroi.selo,
    titleBefore: activeFlavor.textos.heroi.tituloAntes,
    titleHighlight: activeFlavor.textos.heroi.tituloDestaque,
    subtitle: activeFlavor.textos.heroi.subtitulo,
    ctaPrimary: activeFlavor.textos.heroi.ctaPrimario,
    ctaSecondary: activeFlavor.textos.heroi.ctaSecundario,
  },
  appGarcom: {
    badge: activeFlavor.textos.appGarcom.selo,
    title: activeFlavor.textos.appGarcom.titulo,
    titleHighlight: activeFlavor.textos.appGarcom.tituloDestaque,
    subtitle: activeFlavor.textos.appGarcom.subtitulo,
    features: activeFlavor.textos.appGarcom.recursos.map((recurso) => ({
      title: recurso.titulo,
      desc: recurso.descricao,
    })),
  },
  funcionalidades: {
    title: activeFlavor.textos.funcionalidades.titulo,
    subtitle: activeFlavor.textos.funcionalidades.subtitulo,
    cards: activeFlavor.textos.funcionalidades.cartoes.map((cartao) => ({
      icon: cartao.icone,
      title: cartao.titulo,
      desc: cartao.descricao,
    })),
  },
  stats: {
    badge: activeFlavor.textos.estatisticas.selo,
    title: activeFlavor.textos.estatisticas.titulo,
    items: activeFlavor.textos.estatisticas.itens.map((item) => ({
      value: item.valor,
      label: item.rotulo,
      icon: item.icone,
    })),
    testimonials: activeFlavor.textos.estatisticas.depoimentos.map((depoimento) => ({
      quote: depoimento.citacao,
      name: depoimento.nome,
      role: depoimento.papel,
      initials: depoimento.iniciais,
    })),
  },
  suporte: {
    badge: activeFlavor.textos.suporte.selo,
    title: activeFlavor.textos.suporte.titulo,
    subtitle: activeFlavor.textos.suporte.subtitulo,
    cards: activeFlavor.textos.suporte.cartoes.map((cartao) => ({
      icon: cartao.icone,
      title: cartao.titulo,
      desc: cartao.descricao,
      destaque: cartao.destaque,
      destaqueLabel: cartao.rotuloDestaque,
    })),
    scheduleTitle: activeFlavor.textos.suporte.tituloHorario,
    sundayLabel: activeFlavor.textos.suporte.rotuloDomingo,
    sundayValue: activeFlavor.textos.suporte.valorDomingo,
    sundayNote: activeFlavor.textos.suporte.notaDomingo,
    fullSupportNote: activeFlavor.textos.suporte.notaSuporteCompleto,
  },
  contato: {
    badge: activeFlavor.textos.contato.selo,
    title: activeFlavor.textos.contato.titulo,
    subtitle: activeFlavor.textos.contato.subtitulo,
    whatsappLabel: activeFlavor.textos.contato.rotuloWhatsapp,
    whatsappNote: activeFlavor.textos.contato.notaWhatsapp,
    emailLabel: activeFlavor.textos.contato.rotuloEmail,
    formBtnText: activeFlavor.textos.contato.textoBotaoFormulario,
    formNote: activeFlavor.textos.contato.notaFormulario,
  },
  ctaFinal: {
    badge: activeFlavor.textos.chamadaFinal.selo,
    title: activeFlavor.textos.chamadaFinal.titulo,
    subtitle: activeFlavor.textos.chamadaFinal.subtitulo,
    ctaPrimary: activeFlavor.textos.chamadaFinal.ctaPrimario,
    ctaSecondary: activeFlavor.textos.chamadaFinal.ctaSecundario,
  },
  cadastro: {
    trialBadge: activeFlavor.textos.cadastro.seloTeste,
    formTitle: activeFlavor.textos.cadastro.tituloFormulario,
    formSubtitle: activeFlavor.textos.cadastro.subtituloFormulario,
    formFieldEstabelecimento: activeFlavor.textos.cadastro.campoEstabelecimento,
    formFieldEstabelecimentoPlaceholder: activeFlavor.textos.cadastro.placeholderCampoEstabelecimento,
    sidebarRiskBadge: activeFlavor.textos.cadastro.seloRiscoLateral,
    sidebarTitle: activeFlavor.textos.cadastro.tituloLateral,
    sidebarItems: activeFlavor.textos.cadastro.itensLateral,
    sidebarModulesLabel: activeFlavor.textos.cadastro.rotuloModulosLateral,
    sidebarModules: activeFlavor.textos.cadastro.modulosLateral,
  },
  baixar: {
    successTitle: activeFlavor.textos.baixar.tituloSucesso,
    successSubtitle: activeFlavor.textos.baixar.subtituloSucesso,
    webAccessLabel: activeFlavor.textos.baixar.rotuloAcessoWeb,
  },
  download: {
    sectionTitle: activeFlavor.textos.download.tituloSecao,
    osDetectedPrefix: activeFlavor.textos.download.prefixoOsDetectado,
    osUnknown: activeFlavor.textos.download.osDesconhecido,
    downloadBtnPrefix: activeFlavor.textos.download.prefixoBotaoDownload,
    otherPlatformsBtn: activeFlavor.textos.download.botaoOutrasPlataformas,
    stepsTitle: activeFlavor.textos.download.tituloPassos,
    steps: activeFlavor.textos.download.passos.map((passo) => ({
      titulo: passo.titulo,
      desc: passo.descricao,
    })),
    requirementsTitle: activeFlavor.textos.download.tituloRequisitos,
    desktopLabel: activeFlavor.textos.download.rotuloDesktop,
    mobileLabel: activeFlavor.textos.download.rotuloMobile,
  },
  planos: {
    heroBadge: activeFlavor.textos.planos.seloHeroi,
    heroTitle: activeFlavor.textos.planos.tituloHeroi,
    heroSubtitle: activeFlavor.textos.planos.subtituloHeroi,
  },
};

export const Gradients = {
  heroTitle: `linear-gradient(to right, ${activeFlavor.cores.primaria}, ${activeFlavor.cores.primariaEscura})`,
};

/** Menus dropdown do cabeçalho configurados pelo flavor ativo */
export const MenusCabecalhoConfig = activeFlavor.configuracao.menus ?? {};

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
