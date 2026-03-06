import type { Flavor } from "./types";

// TODO: substitua os valores abaixo pelos dados reais do Mulherz
// TODO: atualize as URLs de logo, links, contatos e downloads

const URL_APP_STORE = "https://apps.apple.com/br/app/TODO-mulherz";
const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=br.com.TODO.mulherz";

export const mulherz: Flavor = {
  id: "mulherz",

  // Paleta rosa/roxo feminina
  cores: {
    primaria: "#E91E8C",
    primariaEscura: "#C01270",
    primariaClara: "#FDE9F5",
    destaque: "#9B59B6",
    escura: "#2D002D",
    clara: "#FFFFFF",
    borda: "#E5E7EB",
    textoSuave: "#4B5563",
    textoDesabilitado: "#9CA3AF",
    secundaria: "#FDE9F5",
  },

  imagens: {
    gifHeroi: "https://via.placeholder.com/800x500?text=Mulherz+Preview",
    preVisualizacaoPainel: "https://via.placeholder.com/1200x700?text=Mulherz+Dashboard",
    simulacaoWhatsapp: "https://via.placeholder.com/400x600?text=Mulherz+WhatsApp",
    depoimento1: "https://via.placeholder.com/60x60?text=aspas",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },

  sombras: {
    cabecalho: "0 4px 30px rgba(0,0,0,0.05)",
    imagemPainel: "0 20px 50px rgba(0,0,0,0.1)",
    ctaPadrao: "0 8px 20px rgba(233,30,140,0.3)",
    ctaHover: "0 8px 25px rgba(233,30,140,0.4)",
    botaoHeroiPrimario: "0 10px 40px rgba(233,30,140,0.4)",
    botaoPreco: "0 10px 30px rgba(233,30,140,0.3)",
    botaoPrecoHover: "0 10px 35px rgba(233,30,140,0.4)",
    cardFuncionalidade: "0 10px 40px rgba(233,30,140,0.08)",
    planoSelecionado: "0 6px 20px rgba(233,30,140,0.3)",
  },

  configuracao: {
    name: "Mulherz",
    namePro: "Mulherz Pro",
    slogan: "Sistema para o seu Negócio",
    companyName: "TODO — Empresa do Mulherz",
    description: "Plataforma de gestão completa desenvolvida para empreendedoras.",
    logo: "https://via.placeholder.com/200x60?text=Mulherz",
    logoColored: "https://via.placeholder.com/200x60?text=Mulherz",
    diasTeste: 7,

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
      appStoreInfo: URL_APP_STORE,
      playStoreInfo: URL_PLAY_STORE,
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
          downloadUrl: URL_PLAY_STORE,
          corBadge: "#34A853",
        },
        {
          id: "app-mobile-ios",
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
      selo: "A plataforma feita para empreendedoras de sucesso",
      tituloAntes: "Venda mais e gerencie",
      tituloDestaque: "do seu jeito",
      subtitulo: "Do atendimento ao financeiro, tudo em um só lugar — pensado para o seu negócio crescer.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Conhecer o sistema",
    },
    appGarcom: {
      selo: "Aplicativo Nativo",
      titulo: "Seu atendente anota, o sistema",
      tituloDestaque: "já organiza.",
      subtitulo: "Aposte na tecnologia para agilizar o atendimento e encantar mais clientes todos os dias.",
      recursos: [
        { titulo: "Pedidos na hora", descricao: "Envio imediato para cozinha ou bar, sem papel e sem confusão." },
        { titulo: "Fechamento Simples", descricao: "Divida a conta facilmente e finalize o pagamento pelo próprio celular." },
      ],
    },
    funcionalidades: {
      titulo: "Tudo que você precisa para decolar",
      subtitulo: "Gestão completa, simples e bonita como você merece.",
      cartoes: [
        { icone: "🏪", titulo: "PDV e Balcão", descricao: "Atendimento rápido e eficiente com suporte a código de barras e balanças." },
        { icone: "🧾", titulo: "Mesas e Comandas", descricao: "Organize seu salão com comandas individuais e divisão de conta sem estresse." },
        { icone: "🛵", titulo: "Delivery Próprio", descricao: "Seu próprio canal de delivery, sem taxas para terceiros comendo seu lucro." },
        { icone: "💰", titulo: "Financeiro Completo", descricao: "Saiba exatamente quanto entra e quanto sai, a qualquer hora, em qualquer lugar." },
        { icone: "📑", titulo: "Nota Fiscal", descricao: "Emita NFC-e e NF-e de forma simples, integrada e sem complicação." },
        { icone: "📊", titulo: "Relatórios Inteligentes", descricao: "Veja seus produtos campeões, ticket médio e desempenho do negócio em tempo real." },
      ],
    },
    estatisticas: {
      selo: "Resultados que empoderam",
      titulo: "Números que fazem a diferença",
      itens: [
        { valor: "800+", rotulo: "Negócios ativos", icone: "🏪" },
        { valor: "97%", rotulo: "Taxa de satisfação", icone: "⭐" },
        { valor: "30%", rotulo: "Mais vendas em média", icone: "📈" },
        { valor: "3 anos", rotulo: "No mercado", icone: "🏆" },
      ],
      depoimentos: [
        { citacao: "Finalmente um sistema que eu consigo usar sem precisar de ajuda! Simples, bonito e completo.", nome: "Fernanda Lima", papel: "Proprietária — Café Sweet Pink, SP", iniciais: "FL" },
        { citacao: "Meu delivery cresceu 40% depois que migrei para o Mulherz. O controle é incrível.", nome: "Juliana Rocha", papel: "Empreendedora — Doceria da Ju, RJ", iniciais: "JR" },
        { citacao: "O suporte é maravilhoso e o sistema é muito fácil. Me sinto confiante gerenciando tudo.", nome: "Priscila Neves", papel: "Sócia — Bistrô Rosé, BH", iniciais: "PN" },
      ],
    },
    suporte: {
      selo: "Suporte com carinho",
      titulo: "Você nunca está sozinha",
      subtitulo: "Nossa equipe está sempre disponível para te ajudar a crescer sem stress e sem complicação.",
      cartoes: [
        { icone: "📞", titulo: "Suporte por WhatsApp", descricao: "Fale com a nossa equipe pelo WhatsApp e receba ajuda rápida, sem burocracia." },
        {
          icone: "💻",
          titulo: "Acesso Remoto",
          descricao: "Resolvemos qualquer problema diretamente no seu computador, sem você precisar explicar nada.",
          destaque: true,
          rotuloDestaque: "exclusivo",
        },
        { icone: "🎓", titulo: "Treinamento Completo", descricao: "Aprenda tudo sobre o sistema com nosso time de implantação. Do básico ao avançado." },
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
      subtitulo: "Seja para tirar dúvidas, pedir uma demonstração ou conhecer nossos planos personalizados, estamos aqui.",
      rotuloWhatsapp: "WhatsApp Comercial",
      notaWhatsapp: "Resposta em minutos no horário de atendimento",
      rotuloEmail: "E-mail",
      textoBotaoFormulario: "Enviar mensagem via WhatsApp",
      notaFormulario: "Ao enviar, você será redirecionada ao WhatsApp com os dados preenchidos.",
    },
    chamadaFinal: {
      selo: "Sem cartão de crédito",
      titulo: "Pronta para transformar seu negócio?",
      subtitulo: "Teste o Mulherz por {trialDays} dias com tudo liberado, sem compromisso e de graça.",
      ctaPrimario: "Começar {trialDays} dias grátis",
      ctaSecundario: "Ver planos e preços",
    },
    cadastro: {
      seloTeste: "dias grátis · sem cartão",
      tituloFormulario: "Crie sua conta no Mulherz",
      subtituloFormulario: "Preencha os dados abaixo para começar agora mesmo.",
      campoEstabelecimento: "Nome do seu negócio",
      placeholderCampoEstabelecimento: "Ex: Doceria da Maria",
      seloRiscoLateral: "Sem risco",
      tituloLateral: "Seu negócio merece o melhor!",
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
      subtituloSucesso: "Sua conta foi criada com sucesso. Agora baixe o sistema para começar.",
      rotuloAcessoWeb: "Ou acesse pelo navegador em",
    },
    download: {
      tituloSecao: "Baixar o Mulherz",
      prefixoOsDetectado: "Detectamos que você usa",
      osDesconhecido: "Escolha sua plataforma abaixo",
      prefixoBotaoDownload: "Baixar para",
      botaoOutrasPlataformas: "Baixar para outra plataforma",
      tituloPassos: "Como começar em 3 passos",
      passos: [
        { titulo: "Baixe e instale", descricao: "Clique no botão acima, baixe o instalador e execute. Leva menos de 2 minutos." },
        { titulo: "Faça login", descricao: "Entre com seu e-mail e senha recém-cadastrados. Seus módulos já estão liberados." },
        { titulo: "Configure seu negócio", descricao: "Siga o assistente inicial e cadastre produtos, mesas e configure o delivery." },
      ],
      tituloRequisitos: "Requisitos do sistema",
      rotuloDesktop: "Computador (PDV / Painel)",
      rotuloMobile: "Celular (App Atendente)",
    },
    planos: {
      seloHeroi: "dias grátis, sem cartão de crédito",
      tituloHeroi: "Mulherz: o plano ideal para o seu negócio crescer",
      subtituloHeroi: "Comece gratuitamente por {trialDays} dias, sem cartão, e explore todos os recursos.",
    },
  },
};
