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
export const CHAVE_FLAVOR = (import.meta.env.VITE_FLAVOR ?? "bigchef") as FlavorKey;
export const flavorAtivo: Flavor = FLAVORS[CHAVE_FLAVOR] ?? FLAVORS.bigchef;

// ─── Exports compatíveis com config.ts e theme.ts ────────────────────────────

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
  /** Array ordenado de IDs de seção (define a ordem de renderização) */
  lista: cfg.secoes ?? SECOES_PADRAO,
  /** Verifica se uma seção está ativa */
  tem: (id: SecaoInicioId) => (cfg.secoes ?? SECOES_PADRAO).includes(id),
  /** Cabeçalho visível? (default true) */
  cabecalho: cfg.cabecalho !== false,
  /** Rodapé visível? (default true) */
  rodape: cfg.rodape !== false,
};

export const Cores = {
  primaria: flavorAtivo.cores.primaria,
  primariaEscura: flavorAtivo.cores.primariaEscura,
  primariaClara: flavorAtivo.cores.primariaClara,
  destaque: flavorAtivo.cores.destaque,
  escura: flavorAtivo.cores.escura,
  clara: flavorAtivo.cores.clara,
  borda: flavorAtivo.cores.borda,
  textoSuave: flavorAtivo.cores.textoSuave,
  textoDesabilitado: flavorAtivo.cores.textoDesabilitado,
  secundaria: flavorAtivo.cores.secundaria,
};

export const Imagens = {
  gifHeroi: flavorAtivo.imagens.gifHeroi,
  preVisualizacaoPainel: flavorAtivo.imagens.preVisualizacaoPainel,
  simulacaoWhatsapp: flavorAtivo.imagens.simulacaoWhatsapp,
  depoimento1: flavorAtivo.imagens.depoimento1,
  aiqfome: flavorAtivo.imagens.aiqfome,
  ifood: flavorAtivo.imagens.ifood,
};

export const Sombras = {
  cabecalho: flavorAtivo.sombras.cabecalho,
  imagemPainel: flavorAtivo.sombras.imagemPainel,
  ctaPadrao: flavorAtivo.sombras.ctaPadrao,
  ctaHover: flavorAtivo.sombras.ctaHover,
  botaoHeroiPrimario: flavorAtivo.sombras.botaoHeroiPrimario,
  botaoPreco: flavorAtivo.sombras.botaoPreco,
  botaoPrecoHover: flavorAtivo.sombras.botaoPrecoHover,
  cardFuncionalidade: flavorAtivo.sombras.cardFuncionalidade,
  planoSelecionado: flavorAtivo.sombras.planoSelecionado,
};

export const Textos = {
  heroi: {
    selo: flavorAtivo.textos.heroi.selo,
    tituloAntes: flavorAtivo.textos.heroi.tituloAntes,
    tituloDestaque: flavorAtivo.textos.heroi.tituloDestaque,
    subtitulo: flavorAtivo.textos.heroi.subtitulo,
    ctaPrimario: flavorAtivo.textos.heroi.ctaPrimario,
    ctaSecundario: flavorAtivo.textos.heroi.ctaSecundario,
  },
  appGarcom: {
    selo: flavorAtivo.textos.appGarcom.selo,
    titulo: flavorAtivo.textos.appGarcom.titulo,
    tituloDestaque: flavorAtivo.textos.appGarcom.tituloDestaque,
    subtitulo: flavorAtivo.textos.appGarcom.subtitulo,
    recursos: flavorAtivo.textos.appGarcom.recursos.map((recurso) => ({
      titulo: recurso.titulo,
      descricao: recurso.descricao,
    })),
  },
  funcionalidades: {
    titulo: flavorAtivo.textos.funcionalidades.titulo,
    subtitulo: flavorAtivo.textos.funcionalidades.subtitulo,
    cartoes: flavorAtivo.textos.funcionalidades.cartoes.map((cartao) => ({
      icone: cartao.icone,
      titulo: cartao.titulo,
      descricao: cartao.descricao,
    })),
  },
  estatisticas: {
    selo: flavorAtivo.textos.estatisticas.selo,
    titulo: flavorAtivo.textos.estatisticas.titulo,
    itens: flavorAtivo.textos.estatisticas.itens.map((item) => ({
      valor: item.valor,
      rotulo: item.rotulo,
      icone: item.icone,
    })),
    depoimentos: flavorAtivo.textos.estatisticas.depoimentos.map((depoimento) => ({
      citacao: depoimento.citacao,
      nome: depoimento.nome,
      papel: depoimento.papel,
      iniciais: depoimento.iniciais,
    })),
  },
  suporte: {
    selo: flavorAtivo.textos.suporte.selo,
    titulo: flavorAtivo.textos.suporte.titulo,
    subtitulo: flavorAtivo.textos.suporte.subtitulo,
    cartoes: flavorAtivo.textos.suporte.cartoes.map((cartao) => ({
      icone: cartao.icone,
      titulo: cartao.titulo,
      descricao: cartao.descricao,
      destaque: cartao.destaque,
      rotuloDestaque: cartao.rotuloDestaque,
    })),
    tituloHorario: flavorAtivo.textos.suporte.tituloHorario,
    rotuloDomingo: flavorAtivo.textos.suporte.rotuloDomingo,
    valorDomingo: flavorAtivo.textos.suporte.valorDomingo,
    notaDomingo: flavorAtivo.textos.suporte.notaDomingo,
    notaSuporteCompleto: flavorAtivo.textos.suporte.notaSuporteCompleto,
  },
  contato: {
    selo: flavorAtivo.textos.contato.selo,
    titulo: flavorAtivo.textos.contato.titulo,
    subtitulo: flavorAtivo.textos.contato.subtitulo,
    rotuloWhatsapp: flavorAtivo.textos.contato.rotuloWhatsapp,
    notaWhatsapp: flavorAtivo.textos.contato.notaWhatsapp,
    rotuloEmail: flavorAtivo.textos.contato.rotuloEmail,
    textoBotaoFormulario: flavorAtivo.textos.contato.textoBotaoFormulario,
    notaFormulario: flavorAtivo.textos.contato.notaFormulario,
  },
  chamadaFinal: {
    selo: flavorAtivo.textos.chamadaFinal.selo,
    titulo: flavorAtivo.textos.chamadaFinal.titulo,
    subtitulo: flavorAtivo.textos.chamadaFinal.subtitulo,
    ctaPrimario: flavorAtivo.textos.chamadaFinal.ctaPrimario,
    ctaSecundario: flavorAtivo.textos.chamadaFinal.ctaSecundario,
  },
  cadastro: {
    seloTeste: flavorAtivo.textos.cadastro.seloTeste,
    tituloFormulario: flavorAtivo.textos.cadastro.tituloFormulario,
    subtituloFormulario: flavorAtivo.textos.cadastro.subtituloFormulario,
    campoEstabelecimento: flavorAtivo.textos.cadastro.campoEstabelecimento,
    placeholderCampoEstabelecimento: flavorAtivo.textos.cadastro.placeholderCampoEstabelecimento,
    seloRiscoLateral: flavorAtivo.textos.cadastro.seloRiscoLateral,
    tituloLateral: flavorAtivo.textos.cadastro.tituloLateral,
    itensLateral: flavorAtivo.textos.cadastro.itensLateral,
    rotuloModulosLateral: flavorAtivo.textos.cadastro.rotuloModulosLateral,
    modulosLateral: flavorAtivo.textos.cadastro.modulosLateral,
  },
  baixar: {
    tituloSucesso: flavorAtivo.textos.baixar.tituloSucesso,
    subtituloSucesso: flavorAtivo.textos.baixar.subtituloSucesso,
    rotuloAcessoWeb: flavorAtivo.textos.baixar.rotuloAcessoWeb,
  },
  download: {
    tituloSecao: flavorAtivo.textos.download.tituloSecao,
    prefixoOsDetectado: flavorAtivo.textos.download.prefixoOsDetectado,
    osDesconhecido: flavorAtivo.textos.download.osDesconhecido,
    prefixoBotaoDownload: flavorAtivo.textos.download.prefixoBotaoDownload,
    botaoOutrasPlataformas: flavorAtivo.textos.download.botaoOutrasPlataformas,
    tituloPassos: flavorAtivo.textos.download.tituloPassos,
    passos: flavorAtivo.textos.download.passos.map((passo) => ({
      titulo: passo.titulo,
      descricao: passo.descricao,
    })),
    tituloRequisitos: flavorAtivo.textos.download.tituloRequisitos,
    rotuloDesktop: flavorAtivo.textos.download.rotuloDesktop,
    rotuloMobile: flavorAtivo.textos.download.rotuloMobile,
  },
  planos: {
    seloHeroi: flavorAtivo.textos.planos.seloHeroi,
    tituloHeroi: flavorAtivo.textos.planos.tituloHeroi,
    subtituloHeroi: flavorAtivo.textos.planos.subtituloHeroi,
  },
  paginasFuncionalidades: flavorAtivo.textos.paginasFuncionalidades,
  paginasSegmentos: flavorAtivo.textos.paginasSegmentos,
  parceiros: {
    seloPagina: flavorAtivo.textos.parceiros.seloPagina,
    tituloPagina: flavorAtivo.textos.parceiros.tituloPagina,
    subtituloPagina: flavorAtivo.textos.parceiros.subtituloPagina,
    seloSobre: flavorAtivo.textos.parceiros.seloSobre,
    tituloSobre: flavorAtivo.textos.parceiros.tituloSobre,
    descricaoSobre: flavorAtivo.textos.parceiros.descricaoSobre,
    descricaoEmpresa: flavorAtivo.textos.parceiros.descricaoEmpresa,
    sede: flavorAtivo.textos.parceiros.sede,
    cnpjLabel: flavorAtivo.textos.parceiros.cnpjLabel,
    atuacao: flavorAtivo.textos.parceiros.atuacao,
    numeros: flavorAtivo.textos.parceiros.numeros,
    motivosParceiro: flavorAtivo.textos.parceiros.motivosParceiro,
    vantagens: flavorAtivo.textos.parceiros.vantagens,
    comoFunciona: flavorAtivo.textos.parceiros.comoFunciona,
    itensLateral: flavorAtivo.textos.parceiros.itensLateral,
    perfisIdeais: flavorAtivo.textos.parceiros.perfisIdeais,
  },
};

export const Gradientes = {
  tituloHeroi: `linear-gradient(to right, ${flavorAtivo.cores.primaria}, ${flavorAtivo.cores.primariaEscura})`,
};

/** Menus dropdown do cabeçalho configurados pelo flavor ativo */
export const MenusCabecalhoConfig = flavorAtivo.configuracao.menus ?? {};

export const Fontes = {
  principal: "'Inter', sans-serif",
  titulo: "'Inter', sans-serif",
};

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
