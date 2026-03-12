// ─── Tipos de Menu Dropdown ───────────────────────────────────────────────────

/** Um item dentro de um menu dropdown do cabeçalho */
export type MenuDropdownItem = {
  rotulo: string;
  slug: string;
};

/** Configuração de um menu dropdown no cabeçalho */
export type MenuDropdown = {
  rotulo: string;
  prefixoRota: string;
  itens: MenuDropdownItem[];
};

/** Menus dropdown do cabeçalho (funcionalidades, segmentos, plataformas) */
export type MenusCabecalho = {
  funcionalidades?: MenuDropdown;
  segmentos?: MenuDropdown;
  plataformas?: MenuDropdown;
};

// ─── Tipos de Download ────────────────────────────────────────────────────────

export type DownloadPlatformKey = "windows" | "mac" | "linux" | "android" | "ios";
export type DownloadCategoryKey = "sistema_desktop" | "sistema_web" | "app_garcom" | (string & {});

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

/** Paleta de cores do flavor. Espelha app.css :root e theme.ts Cores. */
export type FlavorColors = {
  primaria: string;
  primariaEscura: string;
  primariaClara: string;
  destaque: string;
  escura: string;
  clara: string;
  borda: string;
  textoSuave: string;
  textoDesabilitado: string;
  /** Alias de retrocompatibilidade — mesmo valor de primariaClara */
  secundaria: string;
};

/** Imagens e assets do flavor */
export type FlavorImages = {
  gifHeroi: string;
  preVisualizacaoPainel: string;
  simulacaoWhatsapp: string;
  depoimento1: string;
  aiqfome: string;
  ifood: string;
};

/**
 * Sombras do flavor. Defina valores rgba baseados na cor primária para
 * que as sombras acompanhem automaticamente a paleta do flavor.
 */
export type FlavorShadows = {
  cabecalho: string;
  imagemPainel: string;
  ctaPadrao: string;
  ctaHover: string;
  botaoHeroiPrimario: string;
  botaoPreco: string;
  botaoPrecoHover: string;
  cardFuncionalidade: string;
  planoSelecionado: string;
};

/** IDs de seção disponíveis para a página inicial */
export type SecaoInicioId = 'heroi' | 'appGarcom' | 'funcionalidades' | 'estatisticas' | 'suporte' | 'contato' | 'chamadaFinal';

/**
 * Subconjunto de FlavorTexts referente às seções da página inicial.
 * Usado para overrides por plataforma.
 */
export type TextosInicio = Pick<FlavorTexts, SecaoInicioId>;

/**
 * Configuração de uma plataforma específica para a página inicial.
 * Todos os campos são opcionais — o que não for definido herda do flavor.
 */
export type PlataformaInicio = {
  /** Override do título meta SEO (ex: "Big Chef Web") */
  nome?: string;
  /** Override do slogan para o meta tag */
  slogan?: string;
  /** Override da descrição meta SEO */
  descricao?: string;
  /** Variantes de layout por seção (sobrescreve variantesInicio do nível raiz) */
  variantesInicio?: Partial<Record<SecaoInicioId, string>>;
  /** Seções a exibir e em que ordem (sobrescreve secoes do nível raiz) */
  secoes?: SecaoInicioId[];
  /**
   * Override parcial dos textos das seções da página inicial.
   * Forneça somente as seções que quer sobrescrever.
   * Cada seção fornecida substitui completamente a seção default do flavor.
   */
  textos?: Partial<TextosInicio>;
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
  diasTeste: number;

  /**
   * Seções da página inicial — array **ordenado** de IDs.
   * A ordem do array define a ordem de renderização.
   * Omita ou passe `undefined` para exibir todas na ordem padrão.
   */
  secoes?: SecaoInicioId[];

  /** Ocultar o cabeçalho do site (default: true) */
  cabecalho?: boolean;
  /** Ocultar o rodapé do site (default: true) */
  rodape?: boolean;

  /**
   * Variantes de layout para cada seção da página inicial.
   * A chave é o ID da seção e o valor é o nome da variante.
   * Se omitido, usa "padrao" para todas as seções.
   *
   * Variantes disponíveis:
   *   heroi:            "padrao" | "lateral" | "minimalista" | "vidro" | "gradiente" | "cartoes"
   *   appGarcom:        "padrao" | "compacto"
   *   funcionalidades:  "padrao" | "listagem" | "destaque" | "icones"
   *   estatisticas:     "padrao" | "claro" | "lateral"
   *   suporte:          "padrao" | "simples"
   *   contato:          "padrao" | "centralizado" | "cartoes"
   *   chamadaFinal:     "padrao" | "escuro" | "gradiente"
   */
  variantesInicio?: Partial<Record<SecaoInicioId, string>>;

  /**
   * Configuração por plataforma para a página inicial.
   * Cada chave é o slug da plataforma (ex: "desktop-local", "desktop-online", "web").
   *
   * Campos de PlataformaInicio sobrescrevem os padrões do flavor:
   *   - `variantesInicio`: variantes de layout por seção (sobrescreve o do nível raiz)
   *   - `secoes`: lista e ordem das seções (sobrescreve o do nível raiz)
   *   - `textos`: override parcial dos textos das seções da página inicial
   *   - `nome`, `slogan`, `descricao`: sobrescrevem meta SEO
   */
  plataformasInicio?: Record<string, PlataformaInicio>;

  /** Menus dropdown do cabeçalho (funcionalidades, segmentos, plataformas) */
  menus?: MenusCabecalho;

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
  heroi: {
    selo: string;
    tituloAntes: string;
    tituloDestaque: string;
    subtitulo: string;
    ctaPrimario: string;
    ctaSecundario: string;
  };
  appGarcom: {
    selo: string;
    titulo: string;
    tituloDestaque: string;
    subtitulo: string;
    recursos: Array<{ titulo: string; descricao: string }>;
  };
  funcionalidades: {
    titulo: string;
    subtitulo: string;
    cartoes: Array<{ icone: string; titulo: string; descricao: string }>;
  };
  estatisticas: {
    selo: string;
    titulo: string;
    itens: Array<{ valor: string; rotulo: string; icone: string }>;
    depoimentos: Array<{ citacao: string; nome: string; papel: string; iniciais: string }>;
  };
  suporte: {
    selo: string;
    titulo: string;
    subtitulo: string;
    cartoes: Array<{
      icone: string;
      titulo: string;
      descricao: string;
      destaque?: boolean;
      rotuloDestaque?: string;
    }>;
    tituloHorario: string;
    rotuloDomingo: string;
    valorDomingo: string;
    notaDomingo: string;
    notaSuporteCompleto: string;
  };
  contato: {
    selo: string;
    titulo: string;
    subtitulo: string;
    rotuloWhatsapp: string;
    notaWhatsapp: string;
    rotuloEmail: string;
    textoBotaoFormulario: string;
    notaFormulario: string;
  };
  chamadaFinal: {
    selo: string;
    titulo: string;
    subtitulo: string;
    ctaPrimario: string;
    ctaSecundario: string;
  };
  // ── Página de cadastro (cadastro.tsx) ────────────────────────────────────
  cadastro: {
    seloTeste: string;
    tituloFormulario: string;
    subtituloFormulario: string;
    campoEstabelecimento: string;
    placeholderCampoEstabelecimento: string;
    seloRiscoLateral: string;
    tituloLateral: string;
    itensLateral: string[];
    rotuloModulosLateral: string;
    modulosLateral: string[];
  };
  // ── Página de download (baixar.tsx) ──────────────────────────────────────
  baixar: {
    tituloSucesso: string;
    subtituloSucesso: string;
    rotuloAcessoWeb: string;
  };
  // ── Componente SecaoDownload ─────────────────────────────────────────────
  download: {
    tituloSecao: string;
    prefixoOsDetectado: string;
    osDesconhecido: string;
    prefixoBotaoDownload: string;
    botaoOutrasPlataformas: string;
    tituloPassos: string;
    passos: Array<{ titulo: string; descricao: string }>;
    tituloRequisitos: string;
    rotuloDesktop: string;
    rotuloMobile: string;
  };
  // ── Página de planos (HeroPlanos.tsx) ────────────────────────────────────
  planos: {
    seloHeroi: string;
    tituloHeroi: string;
    subtituloHeroi: string;
  };
  // ── Páginas de funcionalidades (/funcionalidades/:slug) ──────────────────
  paginasFuncionalidades: Record<string, {
    titulo: string;
    subtitulo: string;
    descricao: string;
    icone: string;
    recursos: Array<{ titulo: string; descricao: string; icone: string }>;
  }>;
  // ── Páginas de segmentos (/segmentos/:slug) ──────────────────────────────
  paginasSegmentos: Record<string, {
    titulo: string;
    subtitulo: string;
    descricao: string;
    icone: string;
    beneficios: Array<{ titulo: string; descricao: string; icone: string }>;
  }>;
  // ── Página de parceiros (/parceiros) ─────────────────────────────────────
  parceiros: {
    seloPagina: string;
    tituloPagina: string;
    subtituloPagina: string;
    seloSobre: string;
    tituloSobre: string;
    descricaoSobre: string;
    descricaoEmpresa: string;
    sede: string;
    cnpjLabel: string;
    atuacao: string;
    numeros: Array<{ valor: string; rotulo: string; icone: string }>;
    motivosParceiro: string[];
    vantagens: Array<{ icone: string; titulo: string; descricao: string }>;
    comoFunciona: Array<{ passo: string; titulo: string; descricao: string }>;
    itensLateral: string[];
    perfisIdeais: string[];
  };
};

/** Um flavor completo: cores + imagens + sombras + configurações + textos */
export type Flavor = {
  /** Identificador único do flavor (deve coincidir com a chave em FLAVORS) */
  id: string;
  cores: FlavorColors;
  imagens: FlavorImages;
  sombras: FlavorShadows;
  configuracao: FlavorConfig;
  textos: FlavorTexts;
};
