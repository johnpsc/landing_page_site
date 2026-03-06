// ─── Tipos de Download ────────────────────────────────────────────────────────

export type DownloadPlatformKey = "windows" | "mac" | "linux" | "android" | "ios";
export type DownloadCategoryKey = "sistema_principal" | "app_garcom" | (string & {});

export type DownloadCategory = {
  key: DownloadCategoryKey;
  label: string;
  descricao: string;
};

export type DownloadItem = {
  id: string;
  platformKey: DownloadPlatformKey;
  categoryKey: DownloadCategoryKey;
  label: string;
  versao: string;
  tamanho: string;
  downloadUrl: string;
  corBadge: string;
};

export type SystemRequirementsRow = {
  label: string;
  min: string;
  rec: string;
};

// ─── Flavor ───────────────────────────────────────────────────────────────────

/** Paleta de cores do flavor. Espelha app.css :root e theme.ts Colors. */
export type FlavorColors = {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  dark: string;
  light: string;
  border: string;
  textMuted: string;
  textDisabled: string;
  /** Alias de retrocompatibilidade — mesmo valor de primaryLight */
  secondary: string;
};

/** Imagens e assets do flavor */
export type FlavorImages = {
  heroGif: string;
  dashboardPreview: string;
  whatsappSim: string;
  testimonial1: string;
  aiqfome: string;
  ifood: string;
};

/**
 * Sombras do flavor. Defina valores rgba baseados na cor primária para
 * que as sombras acompanhem automaticamente a paleta do flavor.
 */
export type FlavorShadows = {
  header: string;
  dashboardImage: string;
  ctaNormal: string;
  ctaHover: string;
  heroBtnPrimary: string;
  pricingBtn: string;
  pricingBtnHover: string;
  featureCard: string;
  planSelected: string;
};

/** Configurações textuais e de dados do flavor */
export type FlavorConfig = {
  name: string;
  namePro: string;
  slogan: string;
  companyName: string;
  description: string;
  logo: string;
  logoColored: string;
  /** Duração do período de teste gratuito (em dias) */
  trialDays: number;
  contact: {
    whatsappUrl: string;
    email: string;
  };
  support: {
    hours: {
      weekdays: string;
      saturday: string;
    };
  };
  links: {
    webApp: string;
    appStoreInfo: string;
    playStoreInfo: string;
  };
  download: {
    categories: DownloadCategory[];
    items: DownloadItem[];
    systemRequirements: {
      desktop: SystemRequirementsRow[];
      mobile: SystemRequirementsRow[];
    };
  };
};

// ─── Textos das páginas ───────────────────────────────────────────────────────

/** Todos os textos visíveis nas páginas, centralizados por flavor */
export type FlavorTexts = {
  // ── Página inicial (inicio.tsx) ──────────────────────────────────────────
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  appGarcom: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: Array<{ title: string; desc: string }>;
  };
  funcionalidades: {
    title: string;
    subtitle: string;
    cards: Array<{ icon: string; title: string; desc: string }>;
  };
  stats: {
    badge: string;
    title: string;
    items: Array<{ value: string; label: string; icon: string }>;
    testimonials: Array<{ quote: string; name: string; role: string; initials: string }>;
  };
  suporte: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{
      icon: string;
      title: string;
      desc: string;
      destaque?: boolean;
      destaqueLabel?: string;
    }>;
    scheduleTitle: string;
    sundayLabel: string;
    sundayValue: string;
    sundayNote: string;
    fullSupportNote: string;
  };
  contato: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappLabel: string;
    whatsappNote: string;
    emailLabel: string;
    formBtnText: string;
    formNote: string;
  };
  ctaFinal: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  // ── Página de cadastro (cadastro.tsx) ────────────────────────────────────
  cadastro: {
    trialBadge: string;
    formTitle: string;
    formSubtitle: string;
    formFieldEstabelecimento: string;
    formFieldEstabelecimentoPlaceholder: string;
    sidebarRiskBadge: string;
    sidebarTitle: string;
    sidebarItems: string[];
    sidebarModulesLabel: string;
    sidebarModules: string[];
  };
  // ── Página de download (baixar.tsx) ──────────────────────────────────────
  baixar: {
    successTitle: string;
    successSubtitle: string;
    webAccessLabel: string;
  };
  // ── Componente SecaoDownload ─────────────────────────────────────────────
  download: {
    sectionTitle: string;
    osDetectedPrefix: string;
    osUnknown: string;
    downloadBtnPrefix: string;
    otherPlatformsBtn: string;
    stepsTitle: string;
    steps: Array<{ titulo: string; desc: string }>;
    requirementsTitle: string;
    desktopLabel: string;
    mobileLabel: string;
  };
  // ── Página de planos (HeroPlanos.tsx) ────────────────────────────────────
  planos: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
  };
};

/** Um flavor completo: cores + imagens + sombras + configurações + textos */
export type Flavor = {
  /** Identificador único do flavor (deve coincidir com a chave em FLAVORS) */
  id: string;
  colors: FlavorColors;
  images: FlavorImages;
  shadows: FlavorShadows;
  config: FlavorConfig;
  texts: FlavorTexts;
};
