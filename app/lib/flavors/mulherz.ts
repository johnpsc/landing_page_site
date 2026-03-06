import type { Flavor } from "./types";

// TODO: substitua os valores abaixo pelos dados reais do Mulherz
// TODO: atualize as URLs de logo, links, contatos e downloads

const APP_STORE_URL = "https://apps.apple.com/br/app/TODO-mulherz";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=br.com.TODO.mulherz";

export const mulherz: Flavor = {
  id: "mulherz",

  // Paleta rosa/roxo feminina
  colors: {
    primary: "#E91E8C",
    primaryDark: "#C01270",
    primaryLight: "#FDE9F5",
    accent: "#9B59B6",
    dark: "#2D002D",
    light: "#FFFFFF",
    border: "#E5E7EB",
    textMuted: "#4B5563",
    textDisabled: "#9CA3AF",
    secondary: "#FDE9F5",
  },

  images: {
    heroGif: "https://via.placeholder.com/800x500?text=Mulherz+Preview",
    dashboardPreview: "https://via.placeholder.com/1200x700?text=Mulherz+Dashboard",
    whatsappSim: "https://via.placeholder.com/400x600?text=Mulherz+WhatsApp",
    testimonial1: "https://via.placeholder.com/60x60?text=aspas",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  shadows: {
    header: "0 4px 30px rgba(0,0,0,0.05)",
    dashboardImage: "0 20px 50px rgba(0,0,0,0.1)",
    ctaNormal: "0 8px 20px rgba(233,30,140,0.3)",
    ctaHover: "0 8px 25px rgba(233,30,140,0.4)",
    heroBtnPrimary: "0 10px 40px rgba(233,30,140,0.4)",
    pricingBtn: "0 10px 30px rgba(233,30,140,0.3)",
    pricingBtnHover: "0 10px 35px rgba(233,30,140,0.4)",
    featureCard: "0 10px 40px rgba(233,30,140,0.08)",
    planSelected: "0 6px 20px rgba(233,30,140,0.3)",
  },

  config: {
    name: "Mulherz",
    namePro: "Mulherz Pro",
    slogan: "Sistema para o seu Negócio",
    companyName: "TODO — Empresa do Mulherz",
    description: "Plataforma de gestão completa desenvolvida para empreendedoras.",
    logo: "https://via.placeholder.com/200x60?text=Mulherz",
    logoColored: "https://via.placeholder.com/200x60?text=Mulherz",
    trialDays: 7,

    contact: {
      whatsappUrl: "https://wa.me/5500000000002",
      email: "contato@mulherz.com.br",
    },

    support: {
      hours: {
        weekdays: "08h – 18h",
        saturday: "09h – 13h",
      },
    },

    links: {
      webApp: "https://app.mulherz.com.br/",
      appStoreInfo: APP_STORE_URL,
      playStoreInfo: PLAY_STORE_URL,
    },

    download: {
      categories: [
        { key: "sistema_principal", label: "Sistema Principal", descricao: "Desktop" },
        { key: "app_garcom", label: "App Mobile", descricao: "Android / iPhone" },
      ],
      items: [
        {
          id: "sistema-principal-windows",
          platformKey: "windows",
          categoryKey: "sistema_principal",
          label: "Windows",
          versao: "Windows 10 / 11 (64-bit)",
          tamanho: "TODO MB",
          downloadUrl: "#",
          corBadge: "#0078D4",
        },
        {
          id: "app-mobile-android",
          platformKey: "android",
          categoryKey: "app_garcom",
          label: "Android",
          versao: "Android 8.0 ou superior",
          tamanho: "TODO MB",
          downloadUrl: PLAY_STORE_URL,
          corBadge: "#34A853",
        },
        {
          id: "app-mobile-ios",
          platformKey: "ios",
          categoryKey: "app_garcom",
          label: "iPhone / iPad",
          versao: "iOS 15 ou superior",
          tamanho: "TODO MB",
          downloadUrl: APP_STORE_URL,
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

  texts: {
    hero: {
      badge: "A plataforma feita para empreendedoras de sucesso",
      titleBefore: "Venda mais e gerencie",
      titleHighlight: "do seu jeito",
      subtitle: "Do atendimento ao financeiro, tudo em um só lugar — pensado para o seu negócio crescer.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Conhecer o sistema",
    },
    appGarcom: {
      badge: "Aplicativo Nativo",
      title: "Seu atendente anota, o sistema",
      titleHighlight: "já organiza.",
      subtitle: "Aposte na tecnologia para agilizar o atendimento e encantar mais clientes todos os dias.",
      features: [
        { title: "Pedidos na hora", desc: "Envio imediato para cozinha ou bar, sem papel e sem confusão." },
        { title: "Fechamento Simples", desc: "Divida a conta facilmente e finalize o pagamento pelo próprio celular." },
      ],
    },
    funcionalidades: {
      title: "Tudo que você precisa para decolar",
      subtitle: "Gestão completa, simples e bonita como você merece.",
      cards: [
        { icon: "🏪", title: "PDV e Balcão", desc: "Atendimento rápido e eficiente com suporte a código de barras e balanças." },
        { icon: "🧾", title: "Mesas e Comandas", desc: "Organize seu salão com comandas individuais e divisão de conta sem estresse." },
        { icon: "🛵", title: "Delivery Próprio", desc: "Seu próprio canal de delivery, sem taxas para terceiros comendo seu lucro." },
        { icon: "💰", title: "Financeiro Completo", desc: "Saiba exatamente quanto entra e quanto sai, a qualquer hora, em qualquer lugar." },
        { icon: "📑", title: "Nota Fiscal", desc: "Emita NFC-e e NF-e de forma simples, integrada e sem complicação." },
        { icon: "📊", title: "Relatórios Inteligentes", desc: "Veja seus produtos campeões, ticket médio e desempenho do negócio em tempo real." },
      ],
    },
    stats: {
      badge: "Resultados que empoderam",
      title: "Números que fazem a diferença",
      items: [
        { value: "800+", label: "Negócios ativos", icon: "🏪" },
        { value: "97%", label: "Taxa de satisfação", icon: "⭐" },
        { value: "30%", label: "Mais vendas em média", icon: "📈" },
        { value: "3 anos", label: "No mercado", icon: "🏆" },
      ],
      testimonials: [
        { quote: "Finalmente um sistema que eu consigo usar sem precisar de ajuda! Simples, bonito e completo.", name: "Fernanda Lima", role: "Proprietária — Café Sweet Pink, SP", initials: "FL" },
        { quote: "Meu delivery cresceu 40% depois que migrei para o Mulherz. O controle é incrível.", name: "Juliana Rocha", role: "Empreendedora — Doceria da Ju, RJ", initials: "JR" },
        { quote: "O suporte é maravilhoso e o sistema é muito fácil. Me sinto confiante gerenciando tudo.", name: "Priscila Neves", role: "Sócia — Bistrô Rosé, BH", initials: "PN" },
      ],
    },
    suporte: {
      badge: "Suporte com carinho",
      title: "Você nunca está sozinha",
      subtitle: "Nossa equipe está sempre disponível para te ajudar a crescer sem stress e sem complicação.",
      cards: [
        { icon: "📞", title: "Suporte por WhatsApp", desc: "Fale com a nossa equipe pelo WhatsApp e receba ajuda rápida, sem burocracia." },
        { icon: "💻", title: "Acesso Remoto", desc: "Resolvemos qualquer problema diretamente no seu computador, sem você precisar explicar nada.", destaque: true, destaqueLabel: "exclusivo" },
        { icon: "🎓", title: "Treinamento Completo", desc: "Aprenda tudo sobre o sistema com nosso time de implantação. Do básico ao avançado." },
      ],
      scheduleTitle: "Horário de atendimento",
      sundayLabel: "Domingo e feriados",
      sundayValue: "Plantão",
      sundayNote: "Urgências via WhatsApp",
      fullSupportNote: "Suporte completo",
    },
    contato: {
      badge: "Fale com a gente",
      title: "Vamos conversar?",
      subtitle: "Seja para tirar dúvidas, pedir uma demonstração ou conhecer nossos planos personalizados, estamos aqui.",
      whatsappLabel: "WhatsApp Comercial",
      whatsappNote: "Resposta em minutos no horário de atendimento",
      emailLabel: "E-mail",
      formBtnText: "Enviar mensagem via WhatsApp",
      formNote: "Ao enviar, você será redirecionada ao WhatsApp com os dados preenchidos.",
    },
    ctaFinal: {
      badge: "Sem cartão de crédito",
      title: "Pronta para transformar seu negócio?",
      subtitle: "Teste o Mulherz por {trialDays} dias com tudo liberado, sem compromisso e de graça.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Ver planos e preços",
    },
    cadastro: {
      trialBadge: "dias grátis · sem cartão",
      formTitle: "Crie sua conta no Mulherz",
      formSubtitle: "Preencha os dados abaixo para começar agora mesmo.",
      formFieldEstabelecimento: "Nome do seu negócio",
      formFieldEstabelecimentoPlaceholder: "Ex: Doceria da Maria",
      sidebarRiskBadge: "Sem risco",
      sidebarTitle: "Seu negócio merece o melhor!",
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
      successSubtitle: "Sua conta foi criada com sucesso. Agora baixe o sistema para começar.",
      webAccessLabel: "Ou acesse pelo navegador em",
    },
    download: {
      sectionTitle: "Baixar o Mulherz",
      osDetectedPrefix: "Detectamos que você usa",
      osUnknown: "Escolha sua plataforma abaixo",
      downloadBtnPrefix: "Baixar para",
      otherPlatformsBtn: "Baixar para outra plataforma",
      stepsTitle: "Como começar em 3 passos",
      steps: [
        { titulo: "Baixe e instale", desc: "Clique no botão acima, baixe o instalador e execute. Leva menos de 2 minutos." },
        { titulo: "Faça login", desc: "Entre com seu e-mail e senha recém-cadastrados. Seus módulos já estão liberados." },
        { titulo: "Configure seu negócio", desc: "Siga o assistente inicial e cadastre produtos, mesas e configure o delivery." },
      ],
      requirementsTitle: "Requisitos do sistema",
      desktopLabel: "Computador (PDV / Painel)",
      mobileLabel: "Celular (App Atendente)",
    },
    planos: {
      heroBadge: "dias grátis, sem cartão de crédito",
      heroTitle: "Mulherz: o plano ideal para o seu negócio crescer",
      heroSubtitle: "Comece gratuitamente por {trialDays} dias, sem cartão, e explore todos os recursos.",
    },
  },
};
