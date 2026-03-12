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

    secoes: ['heroi', 'appGarcom', 'funcionalidades', 'estatisticas', 'suporte', 'contato', 'chamadaFinal'],
    cabecalho: true,
    rodape: true,

    // Visual minimalista e clean para público feminino
    variantesInicio: {
      heroi: 'minimalista',
      appGarcom: 'compacto',
      funcionalidades: 'padrao',
      estatisticas: 'claro',
      suporte: 'padrao',
      contato: 'centralizado',
      chamadaFinal: 'padrao',
    },

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
    paginasFuncionalidades: {
      "frente-de-caixa-pdv": {
        titulo: "Frente de Caixa (PDV)",
        subtitulo: "Atendimento ágil e eficiente",
        descricao: "O PDV do Mulherz foi feito para quem precisa de velocidade no atendimento. Leitura de código de barras, balanças e fechamento rápido.",
        icone: "🏪",
        recursos: [
          { titulo: "Leitura de código de barras", descricao: "Escaneie produtos e agilize o atendimento.", icone: "📷" },
          { titulo: "Integração com balanças", descricao: "Peso direto no sistema, sem digitação.", icone: "⚖️" },
          { titulo: "Múltiplas formas de pagamento", descricao: "Dinheiro, cartão, Pix e vouchers.", icone: "💳" },
          { titulo: "Modo offline", descricao: "Venda sem internet — sincroniza depois.", icone: "📶" },
        ],
      },
      "mesas-e-comandas": {
        titulo: "Mesas e Comandas",
        subtitulo: "Organize seu salão com elegância",
        descricao: "Gerencie mesas, comandas e divisão de contas de forma simples e visual. Perfeito para o dia a dia do seu negócio.",
        icone: "🧾",
        recursos: [
          { titulo: "Mapa de mesas visual", descricao: "Veja o status de cada mesa em tempo real.", icone: "🗺️" },
          { titulo: "Comandas individuais", descricao: "Cada cliente com sua comanda.", icone: "📝" },
          { titulo: "Divisão de conta", descricao: "Divida por igual ou por consumo individual.", icone: "➗" },
          { titulo: "Transferência de mesa", descricao: "Mova clientes sem perder pedidos.", icone: "🔄" },
        ],
      },
      "chatbot-para-delivery": {
        titulo: "Chatbot para Delivery",
        subtitulo: "Seu delivery automatizado",
        descricao: "Receba pedidos pelo WhatsApp e pelo seu próprio site, sem comissões. Chatbot inteligente para atender seus clientes 24h.",
        icone: "🛵",
        recursos: [
          { titulo: "Cardápio digital", descricao: "Seu cardápio online sempre atualizado.", icone: "📱" },
          { titulo: "Chatbot WhatsApp", descricao: "Atendimento automático 24h.", icone: "🤖" },
          { titulo: "Acompanhamento de pedido", descricao: "Status em tempo real para o cliente.", icone: "📍" },
          { titulo: "Integração com marketplaces", descricao: "iFood e outros integrados ao sistema.", icone: "🔗" },
        ],
      },
      "financeiro": {
        titulo: "Financeiro",
        subtitulo: "Suas finanças sob controle",
        descricao: "Controle receitas, despesas e fluxo de caixa com simplicidade. Tudo que você precisa para manter o financeiro organizado.",
        icone: "💰",
        recursos: [
          { titulo: "Fluxo de caixa", descricao: "Entradas e saídas em tempo real.", icone: "📊" },
          { titulo: "Contas a pagar e receber", descricao: "Organize vencimentos e cobranças.", icone: "📅" },
          { titulo: "Conciliação bancária", descricao: "Compare com o extrato do banco.", icone: "🏦" },
          { titulo: "DRE automático", descricao: "Resultados gerados automaticamente.", icone: "📈" },
        ],
      },
      "emissao-fiscal": {
        titulo: "Emissão Fiscal",
        subtitulo: "Notas fiscais sem complicação",
        descricao: "Emita NFC-e e NF-e diretamente pelo sistema. Conformidade fiscal total sem dor de cabeça.",
        icone: "📑",
        recursos: [
          { titulo: "NFC-e automática", descricao: "Nota de consumidor gerada a cada venda.", icone: "🧾" },
          { titulo: "NF-e completa", descricao: "Nota eletrônica para fornecedores e clientes.", icone: "📄" },
          { titulo: "Cancelamento e inutilização", descricao: "Gerencie notas canceladas facilmente.", icone: "❌" },
          { titulo: "Relatório fiscal", descricao: "Consulte notas com filtros avançados.", icone: "🔍" },
        ],
      },
      "relatorios-gerenciais": {
        titulo: "Relatórios Gerenciais",
        subtitulo: "Decisões baseadas em dados",
        descricao: "Dashboards e relatórios com ticket médio, ranking de produtos e indicadores atualizados em tempo real.",
        icone: "📊",
        recursos: [
          { titulo: "Dashboard em tempo real", descricao: "Indicadores atualizados automaticamente.", icone: "📈" },
          { titulo: "Ticket médio", descricao: "Valor médio das vendas por período.", icone: "🎫" },
          { titulo: "Ranking de produtos", descricao: "Seus campeões de venda em destaque.", icone: "🏆" },
          { titulo: "Relatório por atendente", descricao: "Performance individual da equipe.", icone: "👤" },
        ],
      },
    },
    paginasSegmentos: {
      "restaurantes": {
        titulo: "Sistema para Restaurantes",
        subtitulo: "Tudo que seu restaurante precisa",
        descricao: "Do salão ao delivery, o Mulherz oferece uma gestão completa e intuitiva para o seu restaurante.",
        icone: "🍽️",
        beneficios: [
          { titulo: "Gestão de mesas e comandas", descricao: "Mapa visual e comandas individuais.", icone: "🗺️" },
          { titulo: "PDV rápido", descricao: "Atendimento no caixa em segundos.", icone: "🏪" },
          { titulo: "Delivery integrado", descricao: "Canal próprio sem taxas abusivas.", icone: "🛵" },
          { titulo: "Emissão fiscal automática", descricao: "NFC-e e NF-e integradas.", icone: "📑" },
        ],
      },
      "bares-e-baladas": {
        titulo: "Sistema para Bares e Baladas",
        subtitulo: "Velocidade para a noite",
        descricao: "Comandas rápidas, estoque de bebidas e atendimento em alta velocidade para bares e casas noturnas.",
        icone: "🍺",
        beneficios: [
          { titulo: "Comandas rápidas", descricao: "Abertura e fechamento instantâneos.", icone: "⚡" },
          { titulo: "Controle de estoque", descricao: "Monitore bebidas em tempo real.", icone: "📦" },
          { titulo: "Divisão de conta", descricao: "Divida por igual ou por consumo.", icone: "➗" },
          { titulo: "App do garçom", descricao: "Pedidos direto do celular.", icone: "📱" },
        ],
      },
      "cafeterias": {
        titulo: "Sistema para Cafeterias",
        subtitulo: "Praticidade para o seu café",
        descricao: "PDV rápido, controle de insumos e relatórios para otimizar sua cafeteria.",
        icone: "☕",
        beneficios: [
          { titulo: "PDV de balcão", descricao: "Atendimento rápido e eficiente.", icone: "🏪" },
          { titulo: "Programa de fidelidade", descricao: "Cartão digital de pontos.", icone: "⭐" },
          { titulo: "Controle de insumos", descricao: "Saiba o custo de cada receita.", icone: "📊" },
          { titulo: "Relatórios de vendas", descricao: "Identifique seus campeões de venda.", icone: "📈" },
        ],
      },
      "dark-kitchens": {
        titulo: "Sistema para Dark Kitchens",
        subtitulo: "Foco total em delivery",
        descricao: "Automatize pedidos, integre com marketplaces e otimize sua cozinha com o Mulherz.",
        icone: "🏭",
        beneficios: [
          { titulo: "Integração com marketplaces", descricao: "Pedidos de todos os canais centralizados.", icone: "🔗" },
          { titulo: "Chatbot WhatsApp", descricao: "Pedidos automáticos 24h.", icone: "🤖" },
          { titulo: "Painel de produção", descricao: "Organize pedidos por prioridade.", icone: "📋" },
          { titulo: "Relatório de performance", descricao: "Tempo de preparo e métricas.", icone: "📊" },
        ],
      },
      "sistema-para-delivery": {
        titulo: "Sistema para Delivery",
        subtitulo: "Seu delivery sem taxas abusivas",
        descricao: "Cardápio digital, chatbot e integração com marketplaces. Delivery profissional com a sua marca.",
        icone: "🛵",
        beneficios: [
          { titulo: "Site próprio de delivery", descricao: "Cardápio online com sua marca.", icone: "🌐" },
          { titulo: "Chatbot para WhatsApp", descricao: "Pedidos automáticos pelo WhatsApp.", icone: "💬" },
          { titulo: "Rastreamento de pedido", descricao: "Status em tempo real.", icone: "📍" },
          { titulo: "Gestão de entregadores", descricao: "Controle rotas e atribuições.", icone: "🏍️" },
        ],
      },
    },
    parceiros: {
      seloPagina: "Programa de Parceiras",
      tituloPagina: "Cresça com o Mulherz",
      subtituloPagina: "Seja uma parceira comercial e ganhe comissões recorrentes indicando o sistema feito por mulheres para mulheres empreendedoras.",
      seloSobre: "Quem somos",
      tituloSobre: "Conheça a Word System",
      descricaoSobre: "Desenvolvemos soluções completas de gestão para mulheres que empreendem no setor de alimentação.",
      descricaoEmpresa: "Especializada no desenvolvimento de sistemas para bares, restaurantes, cafeterias e delivery.",
      sede: "Maringá — PR, Brasil",
      cnpjLabel: "Empresa registrada e ativa desde 2016",
      atuacao: "Todo o território nacional",
      numeros: [
        { valor: "+10", rotulo: "Anos no mercado", icone: "📅" },
        { valor: "+3.000", rotulo: "Clientes ativos", icone: "👥" },
        { valor: "+15.000", rotulo: "Estabelecimentos gerenciados", icone: "🏪" },
        { valor: "24/7", rotulo: "Suporte disponível", icone: "🎧" },
      ],
      motivosParceiro: [
        "Mercado de food service em constante crescimento",
        "Produto feito sob medida para mulheres empreendedoras",
        "Mais de 3.000 clientes ativos em todo o Brasil",
        "Alta taxa de conversão e retenção de clientes",
        "Suporte completo para fechar negócios",
        "Comissões recorrentes e previsíveis",
      ],
      vantagens: [
        { icone: "💰", titulo: "Comissão Recorrente", descricao: "Receba comissões mensais por cada cliente ativa indicada por você." },
        { icone: "📦", titulo: "Material de Apoio", descricao: "Acesso a materiais de marketing, apresentações e conteúdos exclusivos." },
        { icone: "🎓", titulo: "Treinamento Especializado", descricao: "Capacitação completa sobre o sistema para você vender com confiança." },
        { icone: "🤝", titulo: "Suporte Dedicado", descricao: "Canal direto com nosso time comercial para tirar dúvidas e fechar negócios." },
        { icone: "📈", titulo: "Painel da Parceira", descricao: "Acompanhe suas indicações, comissões e desempenho em tempo real." },
        { icone: "🚀", titulo: "Sem Investimento Inicial", descricao: "Torne-se parceira sem nenhum custo. Basta se cadastrar e começar." },
      ],
      comoFunciona: [
        { passo: "1", titulo: "Cadastre-se", descricao: "Preencha o formulário com seus dados e aguarde a aprovação." },
        { passo: "2", titulo: "Receba seu acesso", descricao: "Após aprovada, você terá acesso ao painel e materiais de apoio." },
        { passo: "3", titulo: "Indique clientes", descricao: "Compartilhe seu link exclusivo e apresente o Mulherz para potenciais clientes." },
        { passo: "4", titulo: "Receba comissões", descricao: "A cada cliente que assinar, você recebe comissão recorrente." },
      ],
      itensLateral: [
        "Comissão **recorrente** mensal",
        "Material de marketing **exclusivo**",
        "Treinamento **completo** sobre o produto",
        "Suporte **dedicado** do time comercial",
        "Painel para acompanhar **indicações e ganhos**",
        "**Sem investimento** inicial",
      ],
      perfisIdeais: ["Consultoras de TI", "Contadoras", "Vendedoras autônomas", "Empresas de tecnologia", "Revendedoras de software"],
    },
  },
};
