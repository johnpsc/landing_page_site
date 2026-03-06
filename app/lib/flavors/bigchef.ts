import type { Flavor } from "./types";

const URL_APP_STORE = "https://apps.apple.com/br/app/grandchef-2-0-para-atendentes/id1548121357";
const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=br.com.grandchef.app";

export const bigchef: Flavor = {
  id: "bigchef",

  cores: {
    primaria: "#FF7A00",
    primariaEscura: "#FF4500",
    primariaClara: "#FFF1E6",
    destaque: "#16A34A",
    escura: "#052E16",
    clara: "#FFFFFF",
    borda: "#E5E7EB",
    textoSuave: "#4B5563",
    textoDesabilitado: "#9CA3AF",
    secundaria: "#FFF1E6",
  },

  imagens: {
    gifHeroi: "https://gcsite-assets.grandchef.com.br/images/gerenciamento_conteudo/68de835d93888.gif",
    preVisualizacaoPainel: "https://www.grandchef.com.br/img/home/dashboard-sistema-grandchef.webp",
    simulacaoWhatsapp: "https://gcsite-assets.grandchef.com.br/images/home/bg-chatbot.svg",
    depoimento1: "https://gcsite-assets.grandchef.com.br/images/home/aspas.svg",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  sombras: {
    cabecalho: "0 4px 30px rgba(0,0,0,0.05)",
    imagemPainel: "0 20px 50px rgba(0,0,0,0.1)",
    ctaPadrao: "0 8px 20px rgba(255,122,0,0.3)",
    ctaHover: "0 8px 25px rgba(255,122,0,0.4)",
    botaoHeroiPrimario: "0 10px 40px rgba(255,122,0,0.4)",
    botaoPreco: "0 10px 30px rgba(255,122,0,0.3)",
    botaoPrecoHover: "0 10px 35px rgba(255,122,0,0.4)",
    cardFuncionalidade: "0 10px 40px rgba(255,122,0,0.08)",
    planoSelecionado: "0 6px 20px rgba(255,122,0,0.3)",
  },

  configuracao: {
    name: "Big Chef",
    namePro: "Big Chef Pro",
    slogan: "Sistema para Restaurantes",
    companyName: "Word System Desenvolvimento de Sistemas LTDA",
    description: "Sistema de gestão completo para bares, restaurantes, lanchonetes e delivery.",
    logo: "https://bigchef.com.br/sistema/apis_restaurantes/imagens/logo_big_chef.png",
    logoColored: "https://bigchef.com.br/sistema/apis_restaurantes/imagens/logo_big_chef.png",
    diasTeste: 10,

    contact: {
      whatsappUrl: "https://wa.me/5500000000000",
      email: "contato@bigchef.com.br",
    },

    support: {
      hours: {
        weekdays: "07:30h – 17:30h",
        saturday: "09h – 12h",
      },
    },

    links: {
      webApp: "https://bigchef.com.br/#/autenticacao/login",
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
          tamanho: "48 MB",
          downloadUrl: URL_PLAY_STORE,
          corBadge: "#34A853",
        },
        {
          id: "app-garcom-ios",
          platformKey: "ios",
          categoryKey: "app_garcom",
          label: "iPhone / iPad",
          versao: "iOS 15 ou superior",
          tamanho: "62 MB",
          downloadUrl: URL_APP_STORE,
          corBadge: "#000000",
        },
      ],
      systemRequirements: {
        desktop: [
          { label: "Sistema operacional", min: "Windows 10 / macOS 12 / Ubuntu 20.04", rec: "Windows 11 / macOS 14 / Ubuntu 22.04" },
          { label: "Processador", min: "Intel i3 / AMD Ryzen 3", rec: "Intel i5 / AMD Ryzen 5 ou superior" },
          { label: "Memória RAM", min: "4 GB", rec: "8 GB ou mais" },
          { label: "Armazenamento", min: "5 GB livres", rec: "20 GB livres (SSD)" },
          { label: "Conexão", min: "2 Mbps (só login e sync)", rec: "10 Mbps ou mais" },
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
      selo: "A plataforma mais completa para o seu restaurante",
      tituloAntes: "Automatize seu salão e venda",
      tituloDestaque: "muito mais rápido",
      subtitulo: "Reduza erros, acelere o atendimento das mesas e tenha controle total do seu delivery no Big Chef.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Ver sistema funcionando",
    },
    appGarcom: {
      selo: "Aplicativo Nativo",
      titulo: "O garçom anota, a cozinha",
      tituloDestaque: "já prepara.",
      subtitulo: "Transforme smartphones em terminais de pontos de venda. Reduza o tempo de espera dos clientes e elimine as comandas de papel.",
      recursos: [
        { titulo: "Pedidos instantâneos", descricao: "Impressão direta nos monitores ou impressoras da cozinha e bar, sem atrasos." },
        { titulo: "Fechamento Rápido", descricao: "Divida a conta facilmente e acompanhe gorjetas no próprio celular do garçom." },
      ],
    },
    funcionalidades: {
      titulo: "Tudo integrado para o seu negócio voar",
      subtitulo: "Nós unimos PDV, mesas e delivery de um jeito que você nunca viu igual.",
      cartoes: [
        { icone: "🏪", titulo: "Vendas de PDV e Balcão", descricao: "Operação super rápida no balcão para não gerar filas, com leitura de balanças e códigos de barras." },
        { icone: "🧾", titulo: "Mesas e Comandas", descricao: "Controle detalhado do salão com comandas individuais e divisão de contas ágil." },
        { icone: "🛵", titulo: "Delivery e Site Próprio", descricao: "Receba pedidos no seu próprio site de delivery sem pagar taxas extras abusivas." },
        { icone: "💰", titulo: "Financeiro Completo", descricao: "Gestão de movimentações, Controle de Contas a Receber e Contas a Pagar em um clique." },
        { icone: "📑", titulo: "Emissão Fiscal (NFC-e / NF-e)", descricao: "Geração de nota fiscal de consumidor e nota fiscal eletrônica totalmente integrada e rápida." },
        { icone: "📊", titulo: "Dashboards Poderosos", descricao: "Seu ticket médio, DRE e pratos mais vendidos desenhados na sua tela diariamente com relatórios." },
      ],
    },
    estatisticas: {
      selo: "Resultados reais",
      titulo: "Números que falam por si",
      itens: [
        { valor: "3.200+", rotulo: "Restaurantes ativos", icone: "🏪" },
        { valor: "98%", rotulo: "Taxa de satisfação", icone: "⭐" },
        { valor: "40%", rotulo: "Redução de erros", icone: "📉" },
        { valor: "10 anos", rotulo: "No mercado", icone: "🏆" },
      ],
      depoimentos: [
        {
          citacao: "Antes eu perdia pedido toda sexta à noite. Com o Big Chef, a cozinha já recebe tudo na hora e o caixa fecha sozinho.",
          nome: "Marcos Aurélio",
          papel: "Dono — Churrascaria do Marcos, SP",
          iniciais: "MA",
        },
        {
          citacao: "A emissão de NFC-e integrada economizou horas do meu contador. Recomendo para qualquer restaurante que queira crescer.",
          nome: "Sabrina Fonseca",
          papel: "Gerente — Bistrô da Villa, RJ",
          iniciais: "SF",
        },
        {
          citacao: "Passamos de 80 para 130 pedidos de delivery por dia sem contratar mais ninguém. O sistema absorveu todo o volume.",
          nome: "Rafael Teixeira",
          papel: "Sócio — Pizza da Hora, BH",
          iniciais: "RT",
        },
      ],
    },
    suporte: {
      selo: "Suporte humanizado",
      titulo: "Você nunca fica sozinho",
      subtitulo: "Nossa equipe está disponível para tirar dúvidas, resolver problemas e garantir que seu restaurante nunca pare.",
      cartoes: [
        {
          icone: "📞",
          titulo: "Suporte por WhatsApp",
          descricao: "Fale com um especialista via WhatsApp sem burocracia e receba respostas rápidas no seu celular.",
        },
        {
          icone: "💻",
          titulo: "Acesso Remoto",
          descricao: "Nosso time acessa seu computador remotamente para resolver qualquer problema na hora, sem você precisar descrever nada.",
          destaque: true,
          rotuloDestaque: "exclusivo",
        },
        {
          icone: "🎓",
          titulo: "Treinamento Incluso",
          descricao: "Onboarding completo com a equipe de implantação para você e sua equipe dominarem o sistema desde o dia 1.",
        },
      ],
      tituloHorario: "Horário de atendimento",
      rotuloDomingo: "Domingo e feriados",
      valorDomingo: "Plantão",
      notaDomingo: "Urgências via WhatsApp",
      notaSuporteCompleto: "Suporte completo",
    },
    contato: {
      selo: "Fale com a gente",
      titulo: "Precisa de algo diferente?",
      subtitulo:
        "Tem uma rede de restaurantes, uma operação fora do padrão ou quer ver o sistema funcionando antes de decidir? Nossa equipe está pronta para entender o seu cenário e mostrar a melhor solução.",
      rotuloWhatsapp: "WhatsApp Comercial",
      notaWhatsapp: "Resposta em minutos no horário de atendimento",
      rotuloEmail: "E-mail",
      textoBotaoFormulario: "Enviar mensagem via WhatsApp",
      notaFormulario: "Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.",
    },
    chamadaFinal: {
      selo: "Sem cartão de crédito",
      titulo: "Pronto para transformar seu restaurante?",
      subtitulo: "Teste o Big Chef por {trialDays} dias com todos os módulos ativados, sem compromisso e sem pagar nada.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Ver planos e preços",
    },
    cadastro: {
      seloTeste: "dias grátis · sem cartão",
      tituloFormulario: "Crie sua conta no Big Chef",
      subtituloFormulario: "Preencha os dados abaixo para começar agora mesmo.",
      campoEstabelecimento: "Nome do estabelecimento",
      placeholderCampoEstabelecimento: "Ex: Restaurante da Família",
      seloRiscoLateral: "Sem risco",
      tituloLateral: "Sua gestão pode ser simples como um click!",
      itensLateral: [
        "Sem precisar cadastrar cartão de crédito",
        "Acesso a **todos os módulos** durante o teste",
        "PDV, Mesas, Comandas, Delivery e NFC-e liberados",
        "Suporte humano durante seu período de teste",
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
      tituloSecao: "Baixar o Big Chef",
      prefixoOsDetectado: "Detectamos que você usa",
      osDesconhecido: "Escolha sua plataforma abaixo",
      prefixoBotaoDownload: "Baixar para",
      botaoOutrasPlataformas: "Baixar para outra plataforma",
      tituloPassos: "Como começar em 3 passos",
      passos: [
        { titulo: "Baixe e instale", descricao: "Clique no botão acima, baixe o instalador e execute. A instalação leva menos de 2 minutos." },
        { titulo: "Faça login", descricao: "Abra o sistema e entre com o e-mail e senha que acabou de cadastrar. Seus módulos já estão liberados." },
        { titulo: "Configure seu restaurante", descricao: "Siga o assistente de configuração inicial: adicione seus produtos, mesas e comece a vender." },
      ],
      tituloRequisitos: "Requisitos do sistema",
      rotuloDesktop: "Computador (PDV / Painel)",
      rotuloMobile: "Celular (App Garçom / Delivery)",
    },
    planos: {
      seloHeroi: "dias grátis, sem cartão de crédito",
      tituloHeroi: "ERP Big Chef: encontre o plano ideal para o seu negócio",
      subtituloHeroi: "Comece gratuitamente por {trialDays} dias, sem cadastro de cartão de crédito, e tenha acesso a todos os módulos do sistema!",
    },
  },
};
