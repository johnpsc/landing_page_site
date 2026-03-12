// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  TIPOS DO SISTEMA DE FLAVORS                                              ║
// ║                                                                           ║
// ║  Todos os tipos que definem a estrutura de um flavor (marca/produto).     ║
// ║  Cada flavor possui: cores, imagens, sombras, configuração e textos.      ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// ── Menus do Cabeçalho ──────────────────────────────────────────────────────

/** Um item dentro de um menu suspenso do cabeçalho */
export type ItemMenuSuspenso = {
  rotulo: string;
  slug: string;
};

/** Configuração de um menu suspenso no cabeçalho */
export type MenuSuspenso = {
  rotulo: string;
  prefixoRota: string;
  itens: ItemMenuSuspenso[];
};

/** Menus suspensos do cabeçalho (funcionalidades, segmentos, plataformas) */
export type MenusCabecalho = {
  funcionalidades?: MenuSuspenso;
  segmentos?: MenuSuspenso;
  plataformas?: MenuSuspenso;
};

// ── Download ────────────────────────────────────────────────────────────────

/** Chave de plataforma de download (sistema operacional) */
export type ChavePlataformaDownload = "windows" | "mac" | "linux" | "android" | "ios";

/** Chave de categoria de download */
export type ChaveCategoriaDownload = "sistema_desktop" | "sistema_web" | "app_garcom" | (string & {});

/** Categoria de download (ex: "Sistema Desktop", "App do Garçom") */
export type CategoriaDownload = {
  chave: ChaveCategoriaDownload;
  rotulo: string;
  descricao: string;
};

/** Item de download individual (ex: "Windows 64-bit") */
export type ItemDownload = {
  id: string;
  chavePlataforma: ChavePlataformaDownload;
  chaveCategoria: ChaveCategoriaDownload;
  rotulo: string;
  versao: string;
  tamanho: string;
  urlDownload: string;
  corBadge: string;
};

/** Linha da tabela de requisitos do sistema */
export type LinhaRequisitos = {
  rotulo: string;
  minimo: string;
  recomendado: string;
};

// ── Cores, Imagens e Sombras ──────────────────────────────────────────────────

/** Paleta de cores do flavor. Espelha as CSS custom properties em app.css */
export type CoresFlavor = {
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
export type ImagensFlavor = {
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
export type SombrasFlavor = {
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

// ── Página Inicial — Seções e Plataformas ─────────────────────────────────

/** IDs de seção disponíveis para a página inicial */
export type SecaoInicioId = 'heroi' | 'appGarcom' | 'funcionalidades' | 'estatisticas' | 'suporte' | 'contato' | 'chamadaFinal';

/**
 * Subconjunto de FlavorTexts referente às seções da página inicial.
 * Usado para overrides por plataforma.
 */
export type TextosInicio = Pick<TextosFlavor, SecaoInicioId>;

/**
 * Configuração completa de uma plataforma.
 *
 * Cada campo é **opcional** — o que não for definido herda do flavor raiz.
 * Isso permite controlar, por plataforma:
 *   - meta SEO (nome, slogan, descricao)
 *   - quais seções da home aparecem e em que ordem
 *   - variantes visuais de cada seção
 *   - menus do cabeçalho (funcionalidades/segmentos visíveis)
 *   - itens e categorias de download
 *   - textos de TODAS as páginas (parceiros, cadastro, funcionalidades, etc.)
 *   - links externos, contato, suporte
 *   - logo, dias de teste, cabeçalho/rodapé
 */
export type ConfigPlataforma = {
  // ── Meta SEO ────────────────────────────────────────────────────────────
  nome?: string;
  slogan?: string;
  descricao?: string;

  // ── Visual / Estrutura ──────────────────────────────────────────────────
  logo?: string;
  diasTeste?: number;
  cabecalho?: boolean;
  rodape?: boolean;

  /** Seções da home a exibir e sua ordem */
  secoes?: SecaoInicioId[];
  /** Variantes visuais por seção da home */
  variantesInicio?: Partial<Record<SecaoInicioId, string>>;

  // ── Menus ───────────────────────────────────────────────────────────────
  menus?: Partial<MenusCabecalho>;

  // ── Links ───────────────────────────────────────────────────────────────
  links?: Partial<ConfiguracaoFlavor['links']>;

  // ── Contato / Suporte ──────────────────────────────────────────────────
  contato?: Partial<ConfiguracaoFlavor['contato']>;
  suporte?: Partial<ConfiguracaoFlavor['suporte']>;

  // ── Download ────────────────────────────────────────────────────────────
  download?: Partial<ConfiguracaoFlavor['download']>;

  // ── Textos (override parcial de QUALQUER página) ────────────────────────
  /**
   * Forneça somente as chaves que quer sobrescrever.
   * Cada chave fornecida substitui integralmente a seção de texto padrão.
   */
  textos?: Partial<TextosFlavor>;
};

/** @deprecated Use ConfigPlataforma — mantido para retrocompatibilidade */
export type PlataformaInicio = ConfigPlataforma;

// ── Configuração do Flavor ──────────────────────────────────────────────────

/** Configurações gerais, links, contato e dados do sistema */
export type ConfiguracaoFlavor = {
  nome: string;
  nomePro: string;
  slogan: string;
  nomeEmpresa: string;
  descricao: string;
  logo: string;
  logoColorida: string;
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
   * Configuração por plataforma.
   * Cada chave é o slug da plataforma (ex: "desktop-local", "desktop-online", "web").
   *
   * Campos de ConfigPlataforma sobrescrevem os padrões do flavor:
   *   - `secoes`, `variantesInicio`: controle da home
   *   - `menus`: quais menus e itens aparecem no cabeçalho
   *   - `textos`: override de textos de QUALQUER página
   *   - `download`: categorias e itens de download visíveis
   *   - `links`, `contato`, `suporte`: dados de contato/link
   *   - `nome`, `slogan`, `descricao`, `logo`, `diasTeste`
   */
  plataformas?: Record<string, ConfigPlataforma>;

  /** @deprecated Use `plataformas` — alias de retrocompatibilidade */
  plataformasInicio?: Record<string, ConfigPlataforma>;

  /** Menus dropdown do cabeçalho (funcionalidades, segmentos, plataformas) */
  menus?: MenusCabecalho;

  /** Informações de contato */
  contato: {
    urlWhatsapp: string;
    email: string;
  };

  /** Horários de suporte */
  suporte: {
    horarios: {
      diasUteis: string;
      sabado: string;
    };
  };

  /** Links externos (app web, lojas de apps) */
  links: {
    sistemaWeb: string;
    appStore: string;
    playStore: string;
  };

  /** Configuração de downloads */
  download: {
    categorias: CategoriaDownload[];
    itens: ItemDownload[];
    requisitos: {
      desktop: LinhaRequisitos[];
      celular: LinhaRequisitos[];
    };
  };
};

// ── Textos do Flavor ────────────────────────────────────────────────────────

/** Todos os textos visíveis nas páginas, centralizados por flavor */
export type TextosFlavor = {
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

// ── Tipo Principal ──────────────────────────────────────────────────────────

/** Um flavor completo: cores + imagens + sombras + configuração + textos */
export type Flavor = {
  /** Identificador único do flavor (deve coincidir com a chave em FLAVORS) */
  id: string;
  cores: CoresFlavor;
  imagens: ImagensFlavor;
  sombras: SombrasFlavor;
  configuracao: ConfiguracaoFlavor;
  textos: TextosFlavor;
};
