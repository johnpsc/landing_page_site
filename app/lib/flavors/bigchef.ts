import type { Flavor } from "./types";

const APP_STORE_URL = "https://apps.apple.com/br/app/grandchef-2-0-para-atendentes/id1548121357";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=br.com.grandchef.app";

export const bigchef: Flavor = {
  id: "bigchef",

  colors: {
    primary: "#FF7A00",
    primaryDark: "#FF4500",
    primaryLight: "#FFF1E6",
    accent: "#16A34A",
    dark: "#052E16",
    light: "#FFFFFF",
    border: "#E5E7EB",
    textMuted: "#4B5563",
    textDisabled: "#9CA3AF",
    secondary: "#FFF1E6",
  },

  images: {
    heroGif: "https://gcsite-assets.grandchef.com.br/images/gerenciamento_conteudo/68de835d93888.gif",
    dashboardPreview: "https://www.grandchef.com.br/img/home/dashboard-sistema-grandchef.webp",
    whatsappSim: "https://gcsite-assets.grandchef.com.br/images/home/bg-chatbot.svg",
    testimonial1: "https://gcsite-assets.grandchef.com.br/images/home/aspas.svg",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  shadows: {
    header: "0 4px 30px rgba(0,0,0,0.05)",
    dashboardImage: "0 20px 50px rgba(0,0,0,0.1)",
    ctaNormal: "0 8px 20px rgba(255,122,0,0.3)",
    ctaHover: "0 8px 25px rgba(255,122,0,0.4)",
    heroBtnPrimary: "0 10px 40px rgba(255,122,0,0.4)",
    pricingBtn: "0 10px 30px rgba(255,122,0,0.3)",
    pricingBtnHover: "0 10px 35px rgba(255,122,0,0.4)",
    featureCard: "0 10px 40px rgba(255,122,0,0.08)",
    planSelected: "0 6px 20px rgba(255,122,0,0.3)",
  },

  config: {
    name: "Big Chef",
    namePro: "Big Chef Pro",
    slogan: "Sistema para Restaurantes",
    companyName: "Word System Desenvolvimento de Sistemas LTDA",
    description: "Sistema de gestão completo para bares, restaurantes, lanchonetes e delivery.",
    logo: "https://bigchef.com.br/sistema/apis_restaurantes/imagens/logo_big_chef.png",
    logoColored: "https://bigchef.com.br/sistema/apis_restaurantes/imagens/logo_big_chef.png",
    trialDays: 10,

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
      webApp: "https://bigchef.com.br/",
      appStoreInfo: APP_STORE_URL,
      playStoreInfo: PLAY_STORE_URL,
    },

    download: {
      categories: [
        { key: "sistema_principal", label: "Sistema Principal", descricao: "Desktop (PDV / Painel)" },
        { key: "app_garcom", label: "App do Garçom", descricao: "Android / iPhone" },
      ],
      items: [
        {
          id: "sistema-principal-windows",
          platformKey: "windows",
          categoryKey: "sistema_principal",
          label: "Windows",
          versao: "Windows 10 / 11 (64-bit)",
          tamanho: "142 MB",
          downloadUrl: "#",
          corBadge: "#0078D4",
        },
        {
          id: "app-garcom-android",
          platformKey: "android",
          categoryKey: "app_garcom",
          label: "Android",
          versao: "Android 8.0 ou superior",
          tamanho: "48 MB",
          downloadUrl: PLAY_STORE_URL,
          corBadge: "#34A853",
        },
        {
          id: "app-garcom-ios",
          platformKey: "ios",
          categoryKey: "app_garcom",
          label: "iPhone / iPad",
          versao: "iOS 15 ou superior",
          tamanho: "62 MB",
          downloadUrl: APP_STORE_URL,
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

  texts: {
    hero: {
      badge: "A plataforma mais completa para o seu restaurante",
      titleBefore: "Automatize seu salão e venda",
      titleHighlight: "muito mais rápido",
      subtitle: "Reduza erros, acelere o atendimento das mesas e tenha controle total do seu delivery no Big Chef.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Ver sistema funcionando",
    },
    appGarcom: {
      badge: "Aplicativo Nativo",
      title: "O garçom anota, a cozinha",
      titleHighlight: "já prepara.",
      subtitle: "Transforme smartphones em terminais de pontos de venda. Reduza o tempo de espera dos clientes e elimine as comandas de papel.",
      features: [
        { title: "Pedidos instantâneos", desc: "Impressão direta nos monitores ou impressoras da cozinha e bar, sem atrasos." },
        { title: "Fechamento Rápido", desc: "Divida a conta facilmente e acompanhe gorjetas no próprio celular do garçom." },
      ],
    },
    funcionalidades: {
      title: "Tudo integrado para o seu negócio voar",
      subtitle: "Nós unimos PDV, mesas e delivery de um jeito que você nunca viu igual.",
      cards: [
        { icon: "🏪", title: "Vendas de PDV e Balcão", desc: "Operação super rápida no balcão para não gerar filas, com leitura de balanças e códigos de barras." },
        { icon: "🧾", title: "Mesas e Comandas", desc: "Controle detalhado do salão com comandas individuais e divisão de contas ágil." },
        { icon: "🛵", title: "Delivery e Site Próprio", desc: "Receba pedidos no seu próprio site de delivery sem pagar taxas extras abusivas." },
        { icon: "💰", title: "Financeiro Completo", desc: "Gestão de movimentações, Controle de Contas a Receber e Contas a Pagar em um clique." },
        { icon: "📑", title: "Emissão Fiscal (NFC-e / NF-e)", desc: "Geração de nota fiscal de consumidor e nota fiscal eletrônica totalmente integrada e rápida." },
        { icon: "📊", title: "Dashboards Poderosos", desc: "Seu ticket médio, DRE e pratos mais vendidos desenhados na sua tela diariamente com relatórios." },
      ],
    },
    stats: {
      badge: "Resultados reais",
      title: "Números que falam por si",
      items: [
        { value: "3.200+", label: "Restaurantes ativos", icon: "🏪" },
        { value: "98%", label: "Taxa de satisfação", icon: "⭐" },
        { value: "40%", label: "Redução de erros", icon: "📉" },
        { value: "10 anos", label: "No mercado", icon: "🏆" },
      ],
      testimonials: [
        {
          quote: "Antes eu perdia pedido toda sexta à noite. Com o Big Chef, a cozinha já recebe tudo na hora e o caixa fecha sozinho.",
          name: "Marcos Aurélio",
          role: "Dono — Churrascaria do Marcos, SP",
          initials: "MA",
        },
        {
          quote: "A emissão de NFC-e integrada economizou horas do meu contador. Recomendo para qualquer restaurante que queira crescer.",
          name: "Sabrina Fonseca",
          role: "Gerente — Bistrô da Villa, RJ",
          initials: "SF",
        },
        {
          quote: "Passamos de 80 para 130 pedidos de delivery por dia sem contratar mais ninguém. O sistema absorveu todo o volume.",
          name: "Rafael Teixeira",
          role: "Sócio — Pizza da Hora, BH",
          initials: "RT",
        },
      ],
    },
    suporte: {
      badge: "Suporte humanizado",
      title: "Você nunca fica sozinho",
      subtitle: "Nossa equipe está disponível para tirar dúvidas, resolver problemas e garantir que seu restaurante nunca pare.",
      cards: [
        {
          icon: "📞",
          title: "Suporte por WhatsApp",
          desc: "Fale com um especialista via WhatsApp sem burocracia e receba respostas rápidas no seu celular.",
        },
        {
          icon: "💻",
          title: "Acesso Remoto",
          desc: "Nosso time acessa seu computador remotamente para resolver qualquer problema na hora, sem você precisar descrever nada.",
          destaque: true,
          destaqueLabel: "exclusivo",
        },
        {
          icon: "🎓",
          title: "Treinamento Incluso",
          desc: "Onboarding completo com a equipe de implantação para você e sua equipe dominarem o sistema desde o dia 1.",
        },
      ],
      scheduleTitle: "Horário de atendimento",
      sundayLabel: "Domingo e feriados",
      sundayValue: "Plantão",
      sundayNote: "Urgências via WhatsApp",
      fullSupportNote: "Suporte completo",
    },
    contato: {
      badge: "Fale com a gente",
      title: "Precisa de algo diferente?",
      subtitle:
        "Tem uma rede de restaurantes, uma operação fora do padrão ou quer ver o sistema funcionando antes de decidir? Nossa equipe está pronta para entender o seu cenário e mostrar a melhor solução.",
      whatsappLabel: "WhatsApp Comercial",
      whatsappNote: "Resposta em minutos no horário de atendimento",
      emailLabel: "E-mail",
      formBtnText: "Enviar mensagem via WhatsApp",
      formNote: "Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.",
    },
    ctaFinal: {
      badge: "Sem cartão de crédito",
      title: "Pronto para transformar seu restaurante?",
      subtitle: "Teste o Big Chef por {trialDays} dias com todos os módulos ativados, sem compromisso e sem pagar nada.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Ver planos e preços",
    },
    cadastro: {
      trialBadge: "dias grátis · sem cartão",
      formTitle: "Crie sua conta no Big Chef",
      formSubtitle: "Preencha os dados abaixo para começar agora mesmo.",
      formFieldEstabelecimento: "Nome do estabelecimento",
      formFieldEstabelecimentoPlaceholder: "Ex: Restaurante da Família",
      sidebarRiskBadge: "Sem risco",
      sidebarTitle: "Sua gestão pode ser simples como um click!",
      sidebarItems: [
        "Sem precisar cadastrar cartão de crédito",
        "Acesso a **todos os módulos** durante o teste",
        "PDV, Mesas, Comandas, Delivery e NFC-e liberados",
        "Suporte humano durante seu período de teste",
        "Cancele quando quiser, sem burocracia",
      ],
      sidebarModulesLabel: "Módulos inclusos no teste:",
      sidebarModules: ["PDV Rápido", "Mesas", "Delivery", "Comandas", "NFC-e / NF-e", "Financeiro", "App Garçom", "Relatórios"],
    },
    baixar: {
      successTitle: "Cadastro realizado!",
      successSubtitle: "Sua conta foi criada com sucesso. Agora baixe o sistema para começar a usar.",
      webAccessLabel: "Ou acesse pelo navegador em",
    },
    download: {
      sectionTitle: "Baixar o Big Chef",
      osDetectedPrefix: "Detectamos que você usa",
      osUnknown: "Escolha sua plataforma abaixo",
      downloadBtnPrefix: "Baixar para",
      otherPlatformsBtn: "Baixar para outra plataforma",
      stepsTitle: "Como começar em 3 passos",
      steps: [
        { titulo: "Baixe e instale", desc: "Clique no botão acima, baixe o instalador e execute. A instalação leva menos de 2 minutos." },
        { titulo: "Faça login", desc: "Abra o sistema e entre com o e-mail e senha que acabou de cadastrar. Seus módulos já estão liberados." },
        { titulo: "Configure seu restaurante", desc: "Siga o assistente de configuração inicial: adicione seus produtos, mesas e comece a vender." },
      ],
      requirementsTitle: "Requisitos do sistema",
      desktopLabel: "Computador (PDV / Painel)",
      mobileLabel: "Celular (App Garçom / Delivery)",
    },
    planos: {
      heroBadge: "dias grátis, sem cartão de crédito",
      heroTitle: "ERP Big Chef: encontre o plano ideal para o seu negócio",
      heroSubtitle: "Comece gratuitamente por {trialDays} dias, sem cadastro de cartão de crédito, e tenha acesso a todos os módulos do sistema!",
    },
  },
};
