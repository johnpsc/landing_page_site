import type { Flavor } from "./types";

// TODO: substitua os valores abaixo pelos dados reais do Sage Start
// TODO: atualize as URLs de logo, links, contatos e downloads

const URL_APP_STORE = "https://apps.apple.com/br/app/TODO-sagestart";
const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=br.com.TODO.sagestart";

export const sagestart: Flavor = {
  id: "sagestart",

  // Paleta roxa e verde (identidade Sage Start)
  cores: {
    primaria: "#6B2D8B",
    primariaEscura: "#4A1D6B",
    primariaClara: "#F3EAF8",
    destaque: "#2ECC40",
    escura: "#1A0A2E",
    clara: "#FFFFFF",
    borda: "#E5E7EB",
    textoSuave: "#4B5563",
    textoDesabilitado: "#9CA3AF",
    secundaria: "#F3EAF8",
  },

  imagens: {
    gifHeroi: "https://via.placeholder.com/800x500?text=Sage+Start+Preview",
    preVisualizacaoPainel: "https://www.grandchef.com.br/img/home/dashboard-sistema-grandchef.webp",
    simulacaoWhatsapp: "https://via.placeholder.com/400x600?text=Sage+Start+WhatsApp",
    depoimento1: "https://via.placeholder.com/60x60?text=aspas",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  sombras: {
    cabecalho: "0 4px 30px rgba(0,0,0,0.05)",
    imagemPainel: "0 20px 50px rgba(0,0,0,0.1)",
    ctaPadrao: "0 8px 20px rgba(107,45,139,0.3)",
    ctaHover: "0 8px 25px rgba(107,45,139,0.4)",
    botaoHeroiPrimario: "0 10px 40px rgba(107,45,139,0.4)",
    botaoPreco: "0 10px 30px rgba(107,45,139,0.3)",
    botaoPrecoHover: "0 10px 35px rgba(107,45,139,0.4)",
    cardFuncionalidade: "0 10px 40px rgba(107,45,139,0.08)",
    planoSelecionado: "0 6px 20px rgba(107,45,139,0.3)",
  },

  configuracao: {
    name: "Sage Start",
    namePro: "Sage Start Pro",
    slogan: "ERP para Restaurantes",
    companyName: "Word System Desenvolvimento de Sistemas LTDA",
    description: "Sistema de gestão inteligente para bares, restaurantes e delivery.",
    logo: "https://eadsagestart.com.br/sistema/apis_restaurantes/imagens/logo.png",
    logoColored: "https://via.placeholder.com/200x60?text=Sage+Start",
    diasTeste: 10,

    secoes: ['heroi', 'appGarcom', 'funcionalidades', 'estatisticas', 'suporte', 'contato', 'chamadaFinal'],
    cabecalho: true,
    rodape: true,

    menus: {
      funcionalidades: {
        rotulo: "Funcionalidades",
        prefixoRota: "/funcionalidades",
        itens: [
          { rotulo: "Frente de Caixa (PDV)", slug: "frente-de-caixa-pdv" },
          { rotulo: "Mesas e Comandas", slug: "mesas-e-comandas" },
          { rotulo: "Chatbot para Delivery", slug: "chatbot-para-delivery" },
          { rotulo: "Financeiro", slug: "financeiro" },
          { rotulo: "Emissão Fiscal", slug: "emissao-fiscal" },
          { rotulo: "Relatórios Gerenciais", slug: "relatorios-gerenciais" },
        ],
      },
      segmentos: {
        rotulo: "Segmentos",
        prefixoRota: "/segmentos",
        itens: [
          { rotulo: "Restaurantes", slug: "restaurantes" },
          { rotulo: "Bares e Baladas", slug: "bares-e-baladas" },
          { rotulo: "Cafeterias", slug: "cafeterias" },
          { rotulo: "Dark Kitchens", slug: "dark-kitchens" },
          { rotulo: "Sistema para Delivery", slug: "sistema-para-delivery" },
        ],
      },
      plataformas: {
        rotulo: "Plataformas",
        prefixoRota: "/plataformas",
        itens: [
          { rotulo: "Windows", slug: "windows" },
          { rotulo: "Mac", slug: "mac" },
          { rotulo: "Linux", slug: "linux" },
          { rotulo: "Android", slug: "android" },
          { rotulo: "iOS", slug: "ios" },
        ],
      },
    },

    contact: {
      whatsappUrl: "https://wa.me/5500000000001",
      email: "contato@sagestart.com.br",
    },

    support: {
      hours: {
        weekdays: "07:30h – 17:30h",
        saturday: "09h – 12h",
      },
    },

    links: {
      webApp: "https://eadsagestart.com.br/#/autenticacao/login",
      appStoreInfo: URL_APP_STORE,
      playStoreInfo: URL_PLAY_STORE,
    },

    download: {
      categories: [
        { key: "sistema_desktop", label: "Sistema Desktop", descricao: "Desktop (PDV / Painel)" },
        { key: "sistema_web", label: "Sistema Web", descricao: "Web (PDV / Painel)" },
        { key: "app_garcom", label: "App do Garçom", descricao: "Android / iPhone" },
      ],
      items: [
        {
          id: "sistema_desktop-windows",
          platformKey: "windows",
          categoryKey: "sistema_desktop",
          label: "Windows",
          versao: "Windows 10 / 11 (64-bit)",
          tamanho: "142 MB",
          downloadUrl: "/baixar?destino=desktop-local",
          corBadge: "#0078D4",
        },
        {
          id: "sistema_web-windows",
          platformKey: "windows",
          categoryKey: "sistema_web",
          label: "Windows",
          versao: "Windows 10 / 11 (64-bit)",
          tamanho: "142 MB",
          downloadUrl: "/baixar?destino=desktop-web",
          corBadge: "#0078D4",
        },
        {
          id: "app-garcom-android",
          platformKey: "android",
          categoryKey: "app_garcom",
          label: "Android",
          versao: "Android 8.0 ou superior",
          tamanho: "TODO MB",
          downloadUrl: URL_PLAY_STORE,
          corBadge: "#34A853",
        },
        {
          id: "app-garcom-ios",
          platformKey: "ios",
          categoryKey: "app_garcom",
          label: "iPhone / iPad",
          versao: "iOS 15 ou superior",
          tamanho: "TODO MB",
          downloadUrl: URL_APP_STORE,
          corBadge: "#000000",
        },
      ],
      systemRequirements: {
        desktop: [
          { label: "Sistema operacional", min: "Windows 10 / macOS 12", rec: "Windows 11 / macOS 14" },
          { label: "Processador", min: "Intel i3 / AMD Ryzen 3", rec: "Intel i5 / AMD Ryzen 5 ou superior" },
          { label: "Memória RAM", min: "4 GB", rec: "8 GB ou mais" },
          { label: "Armazenamento", min: "5 GB livres", rec: "20 GB livres (SSD)" },
          { label: "Conexão", min: "2 Mbps", rec: "10 Mbps ou mais" },
        ],
        mobile: [
          { label: "Sistema operacional", min: "Android 8.0 / iOS 15", rec: "Android 12+ / iOS 17+" },
          { label: "Processador", min: "Quad-core 1.6 GHz", rec: "Octa-core 2.0 GHz ou superior" },
          { label: "Memória RAM", min: "2 GB", rec: "4 GB ou mais" },
          { label: "Armazenamento", min: "200 MB livres", rec: "1 GB livres" },
          { label: "Conexão", min: "Wi-Fi 2.4 GHz / 4G", rec: "Wi-Fi 5 GHz / 4G+ ou 5G" },
        ],
      },
    },
  },

  textos: {
    heroi: {
      selo: "A plataforma mais completa para restaurantes modernos",
      tituloAntes: "Gerencie seu negócio com",
      tituloDestaque: "mais inteligência",
      subtitulo: "Simplifique operações, reduza custos e aumente sua rentabilidade com o Sage Start.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Ver sistema funcionando",
    },
    appGarcom: {
      selo: "Aplicativo Nativo",
      titulo: "Pedido no celular, cozinha",
      tituloDestaque: "já preparando.",
      subtitulo: "Transforme qualquer smartphone em um terminal de atendimento. Agilize o serviço e reduza erros.",
      recursos: [
        { titulo: "Pedidos em tempo real", descricao: "Envio imediato para a cozinha ou bar diretamente pelo app do garçom." },
        { titulo: "Fechamento Ágil", descricao: "Divida a conta entre clientes e finalize o pagamento diretamente no celular." },
      ],
    },
    funcionalidades: {
      titulo: "Uma plataforma completa para crescer",
      subtitulo: "PDV, mesas, delivery e fiscal em um único sistema integrado.",
      cartoes: [
        { icone: "🏪", titulo: "PDV e Balcão", descricao: "Atendimento rápido no balcão com suporte a balanças e leitores de código de barras." },
        // { icone: "🧾", titulo: "Mesas e Comandas", descricao: "Gestão completa do salão com comandas individuais e divisão de contas simplificada." },
        // { icone: "🛵", titulo: "Delivery Integrado", descricao: "Receba pedidos online no seu próprio canal, sem intermediários ou taxas abusivas." },
        { icone: "💰", titulo: "Financeiro", descricao: "Controle completo de receitas, despesas e fluxo de caixa em tempo real." },
        { icone: "📑", titulo: "Emissão Fiscal", descricao: "NFC-e e NF-e integradas para conformidade fiscal sem esforço." },
        { icone: "📊", titulo: "Relatórios Gerenciais", descricao: "DRE, ticket médio e pratos mais vendidos para decisões estratégicas." },
      ],
    },
    estatisticas: {
      selo: "Resultados comprovados",
      titulo: "Números que inspiram confiança",
      itens: [
        { valor: "1.500+", rotulo: "Restaurantes ativos", icone: "🏪" },
        { valor: "97%", rotulo: "Taxa de satisfação", icone: "⭐" },
        { valor: "35%", rotulo: "Redução de erros", icone: "📉" },
        { valor: "5 anos", rotulo: "No mercado", icone: "🏆" },
      ],
      depoimentos: [
        { citacao: "O Sage Start transformou a gestão do nosso restaurante. Tudo centralizado e fácil de usar.", nome: "Ana Lúcia", papel: "Proprietária — Café Gourmet, SP", iniciais: "AL" },
        { citacao: "A integração com delivery e fiscal foi o diferencial. Recomendo para quem quer escalar.", nome: "Bruno Costa", papel: "Gerente — Pizzaria Nova Era, RJ", iniciais: "BC" },
        { citacao: "Suporte excepcional e sistema estável. Nunca mais perdi pedido por falha de sistema.", nome: "Carla Mendes", papel: "Sócia — Lanchonete Vitória, BH", iniciais: "CM" },
      ],
    },
    suporte: {
      selo: "Suporte dedicado",
      titulo: "Sempre presente quando você precisa",
      subtitulo: "Nossa equipe especializada está disponível para garantir que sua operação nunca pare.",
      cartoes: [
        { icone: "📞", titulo: "Suporte por WhatsApp", descricao: "Atendimento direto com especialistas via WhatsApp, sem filas de espera." },
        { icone: "💻", titulo: "Acesso Remoto", descricao: "Nossa equipe resolve problemas diretamente no seu computador, de forma rápida e segura.", destaque: true, rotuloDestaque: "exclusivo" },
        { icone: "🎓", titulo: "Onboarding Guiado", descricao: "Acompanhamento completo na implantação para que você e sua equipe dominem o sistema." },
      ],
      tituloHorario: "Horário de atendimento",
      rotuloDomingo: "Domingo e feriados",
      valorDomingo: "Plantão",
      notaDomingo: "Urgências via WhatsApp",
      notaSuporteCompleto: "Suporte completo",
    },
    contato: {
      selo: "Fale com a gente",
      titulo: "Vamos conversar?",
      subtitulo: "Tem uma operação especial, uma rede de restaurantes ou quer uma demonstração? Nossa equipe está pronta.",
      rotuloWhatsapp: "WhatsApp Comercial",
      notaWhatsapp: "Resposta em minutos no horário de atendimento",
      rotuloEmail: "E-mail",
      textoBotaoFormulario: "Enviar mensagem via WhatsApp",
      notaFormulario: "Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.",
    },
    chamadaFinal: {
      selo: "Sem cartão de crédito",
      titulo: "Pronto para modernizar seu restaurante?",
      subtitulo: "Teste o Sage Start por {trialDays} dias com acesso completo, sem compromisso.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Ver planos e preços",
    },
    cadastro: {
      seloTeste: "dias grátis · sem cartão",
      tituloFormulario: "Crie sua conta no Sage Start",
      subtituloFormulario: "Preencha os dados abaixo para começar agora mesmo.",
      campoEstabelecimento: "Nome do estabelecimento",
      placeholderCampoEstabelecimento: "Ex: Restaurante da Família",
      seloRiscoLateral: "Sem risco",
      tituloLateral: "Comece a crescer com inteligência!",
      itensLateral: [
        "Sem precisar cadastrar cartão de crédito",
        "Acesso a **todos os módulos** durante o teste",
        "PDV, Mesas, Comandas, Delivery e NFC-e liberados",
        "Suporte especializado durante o período de teste",
        "Cancele quando quiser, sem burocracia",
      ],
      rotuloModulosLateral: "Módulos inclusos no teste:",
      modulosLateral: ["PDV Rápido", "Mesas", "Delivery", "Comandas", "NFC-e / NF-e", "Financeiro", "App Garçom", "Relatórios"],
    },
    baixar: {
      tituloSucesso: "Cadastro realizado!",
      subtituloSucesso: "Sua conta foi criada com sucesso. Agora baixe o sistema para começar a usar.",
      rotuloAcessoWeb: "Ou acesse pelo navegador em",
    },
    download: {
      tituloSecao: "Baixar o Sage Start",
      prefixoOsDetectado: "Detectamos que você usa",
      osDesconhecido: "Escolha sua plataforma abaixo",
      prefixoBotaoDownload: "Baixar para",
      botaoOutrasPlataformas: "Baixar para outra plataforma",
      tituloPassos: "Como começar em 3 passos",
      passos: [
        { titulo: "Baixe e instale", descricao: "Clique no botão acima, baixe o instalador e execute. A instalação leva menos de 2 minutos." },
        { titulo: "Faça login", descricao: "Abra o sistema e entre com o e-mail e senha que acabou de cadastrar. Seus módulos já estão liberados." },
        { titulo: "Configure seu negócio", descricao: "Siga o assistente inicial: cadastre produtos, mesas e configure o delivery." },
      ],
      tituloRequisitos: "Requisitos do sistema",
      rotuloDesktop: "Computador (PDV / Painel)",
      rotuloMobile: "Celular (App Garçom / Delivery)",
    },
    planos: {
      seloHeroi: "dias grátis, sem cartão de crédito",
      tituloHeroi: "Sage Start: o plano certo para o seu negócio",
      subtituloHeroi: "Comece gratuitamente por {trialDays} dias, sem cadastro de cartão, e explore todos os módulos.",
    },
  },
};
