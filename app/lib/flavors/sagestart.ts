import type { Flavor } from "./types";

// TODO: substitua os valores abaixo pelos dados reais do Sage Start
// TODO: atualize as URLs de logo, links, contatos e downloads

const APP_STORE_URL = "https://apps.apple.com/br/app/TODO-sagestart";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=br.com.TODO.sagestart";

export const sagestart: Flavor = {
  id: "sagestart",

  // Paleta azul corporativa
  colors: {
    primary: "#0065DE",
    primaryDark: "#004BAD",
    primaryLight: "#E8F0FD",
    accent: "#00A651",
    dark: "#001A3D",
    light: "#FFFFFF",
    border: "#E5E7EB",
    textMuted: "#4B5563",
    textDisabled: "#9CA3AF",
    secondary: "#E8F0FD",
  },

  images: {
    heroGif: "https://via.placeholder.com/800x500?text=Sage+Start+Preview",
    dashboardPreview: "https://via.placeholder.com/1200x700?text=Sage+Start+Dashboard",
    whatsappSim: "https://via.placeholder.com/400x600?text=Sage+Start+WhatsApp",
    testimonial1: "https://via.placeholder.com/60x60?text=aspas",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  shadows: {
    header: "0 4px 30px rgba(0,0,0,0.05)",
    dashboardImage: "0 20px 50px rgba(0,0,0,0.1)",
    ctaNormal: "0 8px 20px rgba(0,101,222,0.3)",
    ctaHover: "0 8px 25px rgba(0,101,222,0.4)",
    heroBtnPrimary: "0 10px 40px rgba(0,101,222,0.4)",
    pricingBtn: "0 10px 30px rgba(0,101,222,0.3)",
    pricingBtnHover: "0 10px 35px rgba(0,101,222,0.4)",
    featureCard: "0 10px 40px rgba(0,101,222,0.08)",
    planSelected: "0 6px 20px rgba(0,101,222,0.3)",
  },

  config: {
    name: "Sage Start",
    namePro: "Sage Start Pro",
    slogan: "ERP para Restaurantes",
    companyName: "TODO — Empresa do Sage Start",
    description: "Sistema de gestão inteligente para bares, restaurantes e delivery.",
    logo: "https://via.placeholder.com/200x60?text=Sage+Start",
    logoColored: "https://via.placeholder.com/200x60?text=Sage+Start",
    trialDays: 14,

    contact: {
      whatsappUrl: "https://wa.me/5500000000001",
      email: "contato@sagestart.com.br",
    },

    support: {
      hours: {
        weekdays: "08h – 18h",
        saturday: "09h – 13h",
      },
    },

    links: {
      webApp: "https://app.sagestart.com.br/",
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
          tamanho: "TODO MB",
          downloadUrl: "#",
          corBadge: "#0078D4",
        },
        {
          id: "app-garcom-android",
          platformKey: "android",
          categoryKey: "app_garcom",
          label: "Android",
          versao: "Android 8.0 ou superior",
          tamanho: "TODO MB",
          downloadUrl: PLAY_STORE_URL,
          corBadge: "#34A853",
        },
        {
          id: "app-garcom-ios",
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
      badge: "A plataforma mais completa para restaurantes modernos",
      titleBefore: "Gerencie seu negócio com",
      titleHighlight: "mais inteligência",
      subtitle: "Simplifique operações, reduza custos e aumente sua rentabilidade com o Sage Start.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Ver sistema funcionando",
    },
    appGarcom: {
      badge: "Aplicativo Nativo",
      title: "Pedido no celular, cozinha",
      titleHighlight: "já preparando.",
      subtitle: "Transforme qualquer smartphone em um terminal de atendimento. Agilize o serviço e reduza erros.",
      features: [
        { title: "Pedidos em tempo real", desc: "Envio imediato para a cozinha ou bar diretamente pelo app do garçom." },
        { title: "Fechamento Ágil", desc: "Divida a conta entre clientes e finalize o pagamento diretamente no celular." },
      ],
    },
    funcionalidades: {
      title: "Uma plataforma completa para crescer",
      subtitle: "PDV, mesas, delivery e fiscal em um único sistema integrado.",
      cards: [
        { icon: "🏪", title: "PDV e Balcão", desc: "Atendimento rápido no balcão com suporte a balanças e leitores de código de barras." },
        { icon: "🧾", title: "Mesas e Comandas", desc: "Gestão completa do salão com comandas individuais e divisão de contas simplificada." },
        { icon: "🛵", title: "Delivery Integrado", desc: "Receba pedidos online no seu próprio canal, sem intermediários ou taxas abusivas." },
        { icon: "💰", title: "Financeiro", desc: "Controle completo de receitas, despesas e fluxo de caixa em tempo real." },
        { icon: "📑", title: "Emissão Fiscal", desc: "NFC-e e NF-e integradas para conformidade fiscal sem esforço." },
        { icon: "📊", title: "Relatórios Gerenciais", desc: "DRE, ticket médio e pratos mais vendidos para decisões estratégicas." },
      ],
    },
    stats: {
      badge: "Resultados comprovados",
      title: "Números que inspiram confiança",
      items: [
        { value: "1.500+", label: "Restaurantes ativos", icon: "🏪" },
        { value: "97%", label: "Taxa de satisfação", icon: "⭐" },
        { value: "35%", label: "Redução de erros", icon: "📉" },
        { value: "5 anos", label: "No mercado", icon: "🏆" },
      ],
      testimonials: [
        { quote: "O Sage Start transformou a gestão do nosso restaurante. Tudo centralizado e fácil de usar.", name: "Ana Lúcia", role: "Proprietária — Café Gourmet, SP", initials: "AL" },
        { quote: "A integração com delivery e fiscal foi o diferencial. Recomendo para quem quer escalar.", name: "Bruno Costa", role: "Gerente — Pizzaria Nova Era, RJ", initials: "BC" },
        { quote: "Suporte excepcional e sistema estável. Nunca mais perdi pedido por falha de sistema.", name: "Carla Mendes", role: "Sócia — Lanchonete Vitória, BH", initials: "CM" },
      ],
    },
    suporte: {
      badge: "Suporte dedicado",
      title: "Sempre presente quando você precisa",
      subtitle: "Nossa equipe especializada está disponível para garantir que sua operação nunca pare.",
      cards: [
        { icon: "📞", title: "Suporte por WhatsApp", desc: "Atendimento direto com especialistas via WhatsApp, sem filas de espera." },
        { icon: "💻", title: "Acesso Remoto", desc: "Nossa equipe resolve problemas diretamente no seu computador, de forma rápida e segura.", destaque: true, destaqueLabel: "exclusivo" },
        { icon: "🎓", title: "Onboarding Guiado", desc: "Acompanhamento completo na implantação para que você e sua equipe dominem o sistema." },
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
      subtitle: "Tem uma operação especial, uma rede de restaurantes ou quer uma demonstração? Nossa equipe está pronta.",
      whatsappLabel: "WhatsApp Comercial",
      whatsappNote: "Resposta em minutos no horário de atendimento",
      emailLabel: "E-mail",
      formBtnText: "Enviar mensagem via WhatsApp",
      formNote: "Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.",
    },
    ctaFinal: {
      badge: "Sem cartão de crédito",
      title: "Pronto para modernizar seu restaurante?",
      subtitle: "Teste o Sage Start por {trialDays} dias com acesso completo, sem compromisso.",
      ctaPrimary: "Começar {trialDays} dias grátis",
      ctaSecondary: "Ver planos e preços",
    },
    cadastro: {
      trialBadge: "dias grátis · sem cartão",
      formTitle: "Crie sua conta no Sage Start",
      formSubtitle: "Preencha os dados abaixo para começar agora mesmo.",
      formFieldEstabelecimento: "Nome do estabelecimento",
      formFieldEstabelecimentoPlaceholder: "Ex: Restaurante da Família",
      sidebarRiskBadge: "Sem risco",
      sidebarTitle: "Comece a crescer com inteligência!",
      sidebarItems: [
        "Sem precisar cadastrar cartão de crédito",
        "Acesso a **todos os módulos** durante o teste",
        "PDV, Mesas, Comandas, Delivery e NFC-e liberados",
        "Suporte especializado durante o período de teste",
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
      sectionTitle: "Baixar o Sage Start",
      osDetectedPrefix: "Detectamos que você usa",
      osUnknown: "Escolha sua plataforma abaixo",
      downloadBtnPrefix: "Baixar para",
      otherPlatformsBtn: "Baixar para outra plataforma",
      stepsTitle: "Como começar em 3 passos",
      steps: [
        { titulo: "Baixe e instale", desc: "Clique no botão acima, baixe o instalador e execute. A instalação leva menos de 2 minutos." },
        { titulo: "Faça login", desc: "Abra o sistema e entre com o e-mail e senha que acabou de cadastrar. Seus módulos já estão liberados." },
        { titulo: "Configure seu negócio", desc: "Siga o assistente inicial: cadastre produtos, mesas e configure o delivery." },
      ],
      requirementsTitle: "Requisitos do sistema",
      desktopLabel: "Computador (PDV / Painel)",
      mobileLabel: "Celular (App Garçom / Delivery)",
    },
    planos: {
      heroBadge: "dias grátis, sem cartão de crédito",
      heroTitle: "Sage Start: o plano certo para o seu negócio",
      heroSubtitle: "Comece gratuitamente por {trialDays} dias, sem cadastro de cartão, e explore todos os módulos.",
    },
  },
};
