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

    secoes: ['heroi', 'appGarcom', 'funcionalidades', 'estatisticas', 'suporte', 'contato', 'chamadaFinal'],
    cabecalho: true,
    rodape: true,

    // Layout clássico centralizado do Big Chef
    variantesInicio: {
      heroi: 'lateral',
      appGarcom: 'compacto',
      funcionalidades: 'destaque',
      estatisticas: 'claro',
      suporte: 'padrao',
      contato: 'padrao',
      chamadaFinal: 'escuro',
    },

    // ── Configuração por plataforma (página inicial) ───────────────────────
    // Cada plataforma sobrescreve APENAS textos (o design é único para todas).
    // O que não for definido aqui herda do nível raiz acima.
    plataformasInicio: {
      // Desktop Local → herda tudo do padrão (nenhum override necessário)
      'desktop-local': {},

      // Desktop Online → textos voltados para acesso remoto
      'desktop-online': {
        nome: 'Big Chef Desktop Online',
        slogan: 'Seu restaurante acessível de qualquer lugar',
        descricao: 'Gerencie seu restaurante remotamente com o Big Chef Desktop Online. Acesse de qualquer computador com internet.',
        textos: {
          heroi: {
            selo: 'Acesse de qualquer computador',
            tituloAntes: 'Gerencie seu restaurante',
            tituloDestaque: 'de qualquer lugar',
            subtitulo: 'Com o Big Chef Desktop Online, você instala o sistema no seu computador e acessa seus dados na nuvem. Ideal para quem quer mobilidade sem abrir mão de performance.',
            ctaPrimario: 'Começar {trialDays} dias grátis',
            ctaSecundario: 'Ver como funciona',
          },
          appGarcom: {
            selo: 'Aplicativo Nativo',
            titulo: 'Garçom anota, a cozinha',
            tituloDestaque: 'recebe na hora.',
            subtitulo: 'Com o Desktop Online, os pedidos do app são enviados via nuvem — sem depender de rede local. Funciona mesmo com terminais em locais diferentes.',
            recursos: [
              { titulo: 'Pedidos via nuvem', descricao: 'O pedido sai do celular do garçom e chega na cozinha pela internet, sem rede Wi-Fi local obrigatória.' },
              { titulo: 'Fechamento sincronizado', descricao: 'Divida contas e registre gorjetas no celular, com tudo sincronizado automaticamente no caixa.' },
            ],
          },
          funcionalidades: {
            titulo: 'Tudo do Desktop, com a liberdade da nuvem',
            subtitulo: 'O mesmo sistema poderoso, mas com seus dados sincronizados online para acessar de qualquer máquina.',
            cartoes: [
              { icone: '☁️', titulo: 'Dados na Nuvem', descricao: 'Seus dados ficam seguros na nuvem e acessíveis de qualquer computador com o sistema instalado.' },
              { icone: '🔄', titulo: 'Sincronização Automática', descricao: 'Alterações em um terminal são refletidas em todos os outros em tempo real.' },
              { icone: '🏪', titulo: 'PDV Completo', descricao: 'Frente de caixa com leitura de código de barras, balanças e operação ultrarrápida.' },
              { icone: '🧾', titulo: 'Mesas e Comandas', descricao: 'Controle detalhado do salão com divisão de contas e acompanhamento por mesa.' },
              { icone: '📑', titulo: 'Emissão Fiscal Integrada', descricao: 'NFC-e e NF-e geradas diretamente pelo sistema sem precisar de outro software.' },
              { icone: '📊', titulo: 'Relatórios em Tempo Real', descricao: 'Acompanhe DRE, ticket médio e vendas de qualquer lugar com dashboards atualizados.' },
            ],
          },
          estatisticas: {
            selo: 'Resultados reais',
            titulo: 'Quem usa o Desktop Online já viu a diferença',
            itens: [
              { valor: '3.200+', rotulo: 'Restaurantes ativos', icone: '🏪' },
              { valor: '98%', rotulo: 'Taxa de satisfação', icone: '⭐' },
              { valor: '40%', rotulo: 'Redução de erros', icone: '📉' },
              { valor: '10 anos', rotulo: 'No mercado', icone: '🏆' },
            ],
            depoimentos: [
              {
                citacao: 'Tenho duas unidades em cidades diferentes e consigo acompanhar as duas pelo mesmo sistema. O Desktop Online resolveu minha vida.',
                nome: 'Marcos Aurélio',
                papel: 'Dono — Churrascaria do Marcos, SP',
                iniciais: 'MA',
              },
              {
                citacao: 'A sincronização é instantânea. Cadastro um prato na matriz e já aparece na filial. Não volto mais pro sistema antigo.',
                nome: 'Sabrina Fonseca',
                papel: 'Gerente — Bistrô da Villa, RJ',
                iniciais: 'SF',
              },
              {
                citacao: 'Acompanho as vendas do delivery pelo notebook em casa. O Desktop Online me deu liberdade que eu não tinha.',
                nome: 'Rafael Teixeira',
                papel: 'Sócio — Pizza da Hora, BH',
                iniciais: 'RT',
              },
            ],
          },
          suporte: {
            selo: 'Suporte humanizado',
            titulo: 'Suporte remoto e rápido, de qualquer lugar',
            subtitulo: 'Nosso time se conecta ao seu computador remotamente para resolver problemas na hora — mesmo que você esteja longe do restaurante.',
            cartoes: [
              {
                icone: '📞',
                titulo: 'Suporte por WhatsApp',
                descricao: 'Fale com um especialista via WhatsApp de qualquer lugar e receba respostas rápidas.',
              },
              {
                icone: '💻',
                titulo: 'Acesso Remoto',
                descricao: 'Nosso time acessa seu computador remotamente para resolver qualquer problema na hora, esteja você onde estiver.',
                destaque: true,
                rotuloDestaque: 'exclusivo',
              },
              {
                icone: '🎓',
                titulo: 'Treinamento Online',
                descricao: 'Onboarding por videochamada para você e sua equipe dominarem todas as funcionalidades remotamente.',
              },
            ],
            tituloHorario: 'Horário de atendimento',
            rotuloDomingo: 'Domingo e feriados',
            valorDomingo: 'Plantão',
            notaDomingo: 'Urgências via WhatsApp',
            notaSuporteCompleto: 'Suporte completo',
          },
          contato: {
            selo: 'Fale com a gente',
            titulo: 'Quer saber mais sobre o Desktop Online?',
            subtitulo: 'Tem dúvidas sobre sincronização, multi-terminais ou acesso remoto? Nossa equipe está pronta para explicar como funciona para o seu cenário.',
            rotuloWhatsapp: 'WhatsApp Comercial',
            notaWhatsapp: 'Resposta em minutos no horário de atendimento',
            rotuloEmail: 'E-mail',
            textoBotaoFormulario: 'Enviar mensagem via WhatsApp',
            notaFormulario: 'Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.',
          },
          chamadaFinal: {
            selo: 'Sem cartão de crédito',
            titulo: 'Pronto para gerenciar de qualquer lugar?',
            subtitulo: 'Teste o Big Chef Desktop Online por {trialDays} dias com todos os módulos, sem compromisso.',
            ctaPrimario: 'Começar {trialDays} dias grátis',
            ctaSecundario: 'Ver planos e preços',
          },
        },
      },

      // Web → textos focados em acessar pelo navegador
      'web': {
        nome: 'Big Chef Web',
        slogan: 'Seu restaurante direto no navegador',
        descricao: 'Acesse o Big Chef pelo navegador, sem instalar nada. Ideal para quem quer praticidade total.',
        textos: {
          heroi: {
            selo: 'Zero instalação — 100% no navegador',
            tituloAntes: 'Seu restaurante no',
            tituloDestaque: 'navegador',
            subtitulo: 'Com o Big Chef Web você acessa o sistema completo direto pelo Chrome, Edge ou Safari. Sem downloads, sem atualizações manuais — sempre na última versão.',
            ctaPrimario: 'Começar {trialDays} dias grátis',
            ctaSecundario: 'Acessar sistema web',
          },
          appGarcom: {
            selo: 'Aplicativo Nativo',
            titulo: 'Garçom anota no celular, a cozinha',
            tituloDestaque: 'já visualiza.',
            subtitulo: 'O app do garçom se conecta diretamente ao Big Chef Web pela internet. Pedidos chegam na cozinha instantaneamente, sem precisar de servidor local.',
            recursos: [
              { titulo: 'Conexão direta pela nuvem', descricao: 'O app envia pedidos direto para o painel web — sem precisar de servidor ou rede local.' },
              { titulo: 'Fechamento pelo navegador', descricao: 'O caixa acompanha e fecha as mesas pelo navegador, com os pedidos do app já integrados.' },
            ],
          },
          funcionalidades: {
            titulo: 'Tudo pelo navegador, sem instalar nada',
            subtitulo: 'Acesse de qualquer dispositivo com internet — computador, tablet ou celular.',
            cartoes: [
              { icone: '🌐', titulo: 'Acesso Universal', descricao: 'Funciona em qualquer dispositivo com navegador moderno: PC, Mac, Chromebook, tablet.' },
              { icone: '🔒', titulo: 'Segurança na Nuvem', descricao: 'Seus dados são criptografados e armazenados com backups automáticos diários.' },
              { icone: '⚡', titulo: 'Sempre Atualizado', descricao: 'Novas funcionalidades e correções chegam automaticamente, sem precisar baixar nada.' },
              { icone: '🏪', titulo: 'PDV no Navegador', descricao: 'Frente de caixa completa rodando direto no browser, com suporte a impressoras térmicas.' },
              { icone: '📱', titulo: 'Responsivo', descricao: 'Interface que se adapta ao tamanho da tela — use no notebook, monitor ou tablet.' },
              { icone: '📊', titulo: 'Dashboards Online', descricao: 'Acompanhe seus indicadores de qualquer lugar, a qualquer hora.' },
            ],
          },
          estatisticas: {
            selo: 'Resultados reais',
            titulo: 'Quem usa o Big Chef Web já comprovou',
            itens: [
              { valor: '3.200+', rotulo: 'Restaurantes ativos', icone: '🏪' },
              { valor: '98%', rotulo: 'Taxa de satisfação', icone: '⭐' },
              { valor: '40%', rotulo: 'Redução de erros', icone: '📉' },
              { valor: '10 anos', rotulo: 'No mercado', icone: '🏆' },
            ],
            depoimentos: [
              {
                citacao: 'Abri o navegador, entrei no sistema e já comecei a vender. Não precisei instalar nada, nem chamar técnico. Incrível.',
                nome: 'Marcos Aurélio',
                papel: 'Dono — Churrascaria do Marcos, SP',
                iniciais: 'MA',
              },
              {
                citacao: 'Uso o Big Chef Web no tablet do caixa e no notebook de casa. Tudo sempre sincronizado e sem complicação.',
                nome: 'Sabrina Fonseca',
                papel: 'Gerente — Bistrô da Villa, RJ',
                iniciais: 'SF',
              },
              {
                citacao: 'A versão web é leve e rápida. Mesmo no Chromebook baratinho da loja, o sistema roda perfeitamente.',
                nome: 'Rafael Teixeira',
                papel: 'Sócio — Pizza da Hora, BH',
                iniciais: 'RT',
              },
            ],
          },
          suporte: {
            selo: 'Suporte humanizado',
            titulo: 'Ajuda rápida, direto no navegador',
            subtitulo: 'Nosso time resolve tudo remotamente — sem precisar instalar programa de acesso remoto. Basta compartilhar a tela pelo navegador.',
            cartoes: [
              {
                icone: '📞',
                titulo: 'Suporte por WhatsApp',
                descricao: 'Fale com um especialista via WhatsApp e receba orientação passo a passo para resolver no navegador.',
              },
              {
                icone: '💻',
                titulo: 'Suporte pelo Navegador',
                descricao: 'Compartilhe sua tela direto pelo browser e nosso time resolve o problema em tempo real — sem instalar nada.',
                destaque: true,
                rotuloDestaque: 'sem instalação',
              },
              {
                icone: '🎓',
                titulo: 'Treinamento Online',
                descricao: 'Onboarding por videochamada para você e sua equipe dominarem o sistema web desde o primeiro acesso.',
              },
            ],
            tituloHorario: 'Horário de atendimento',
            rotuloDomingo: 'Domingo e feriados',
            valorDomingo: 'Plantão',
            notaDomingo: 'Urgências via WhatsApp',
            notaSuporteCompleto: 'Suporte completo',
          },
          contato: {
            selo: 'Fale com a gente',
            titulo: 'Quer experimentar o Big Chef Web?',
            subtitulo: 'Tem dúvidas sobre compatibilidade, impressoras térmicas ou como funciona no navegador? Nossa equipe mostra tudo ao vivo.',
            rotuloWhatsapp: 'WhatsApp Comercial',
            notaWhatsapp: 'Resposta em minutos no horário de atendimento',
            rotuloEmail: 'E-mail',
            textoBotaoFormulario: 'Enviar mensagem via WhatsApp',
            notaFormulario: 'Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.',
          },
          chamadaFinal: {
            selo: 'Sem download necessário',
            titulo: 'Comece agora mesmo, direto no navegador',
            subtitulo: 'Teste o Big Chef Web por {trialDays} dias grátis. Basta criar a conta e acessar — sem instalar nada.',
            ctaPrimario: 'Criar conta grátis',
            ctaSecundario: 'Ver planos e preços',
          },
        },
      },
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
          { rotulo: "Sistema para Delivery", slug: "sistema-para-delivery" },
        ],
      },
      plataformas: {
        rotulo: "Plataformas",
        prefixoRota: "/plataformas",
        itens: [
          { rotulo: "Desktop Local", slug: "desktop-local" },
          { rotulo: "Desktop Online", slug: "desktop-online" },
          { rotulo: "Web", slug: "web" },
        ],
      },
    },

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
      webApp: "https://bigchef.com.br/painel/#/autenticacao/login",
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
          downloadUrl: "/baixar?destino=desktop-online",
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
      tituloAntes: "Automatize seu restaurante e venda",
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
    paginasFuncionalidades: {
      "frente-de-caixa-pdv": {
        titulo: "Frente de Caixa (PDV)",
        subtitulo: "Atendimento rápido no balcão e no caixa",
        descricao: "O PDV do Big Chef foi pensado para operações de alta velocidade. Leitura de código de barras, balanças integradas e fechamento de venda em segundos.",
        icone: "🏪",
        recursos: [
          { titulo: "Leitura de código de barras", descricao: "Escaneie produtos para agilizar o atendimento no balcão.", icone: "📷" },
          { titulo: "Integração com balanças", descricao: "Peso automático direto no sistema, sem digitação manual.", icone: "⚖️" },
          { titulo: "Múltiplas formas de pagamento", descricao: "Aceite dinheiro, cartão, Pix e vouchers em uma única venda.", icone: "💳" },
          { titulo: "Modo offline", descricao: "Continue vendendo mesmo sem internet — sincroniza depois.", icone: "📶" },
        ],
      },
      "mesas-e-comandas": {
        titulo: "Mesas e Comandas",
        subtitulo: "Controle total do salão do seu restaurante",
        descricao: "Gerencie mesas, comandas individuais e divisão de contas com facilidade. Perfeito para restaurantes, bares e lanchonetes com atendimento no salão.",
        icone: "🧾",
        recursos: [
          { titulo: "Mapa de mesas visual", descricao: "Veja o status de cada mesa em tempo real.", icone: "🗺️" },
          { titulo: "Comandas individuais", descricao: "Cada cliente com sua comanda, sem confusão na hora de fechar.", icone: "📝" },
          { titulo: "Divisão de conta", descricao: "Divida por igual ou por consumo individual.", icone: "➗" },
          { titulo: "Transferência de mesa", descricao: "Troque clientes de mesa sem perder pedidos.", icone: "🔄" },
        ],
      },
      "chatbot-para-delivery": {
        titulo: "Chatbot para Delivery",
        subtitulo: "Automatize pedidos pelo WhatsApp e site próprio",
        descricao: "Receba pedidos automaticamente pelo seu próprio canal de delivery, sem pagar comissões abusivas para marketplaces. Integração direta com WhatsApp.",
        icone: "🛵",
        recursos: [
          { titulo: "Cardápio digital", descricao: "Seu cardápio online sempre atualizado, sem taxa por pedido.", icone: "📱" },
          { titulo: "Chatbot WhatsApp", descricao: "Atendimento automático 24h pelo WhatsApp do restaurante.", icone: "🤖" },
          { titulo: "Acompanhamento de pedido", descricao: "Cliente acompanha o status do pedido em tempo real.", icone: "📍" },
          { titulo: "Integração com iFood e AiqFome", descricao: "Receba pedidos de marketplaces direto no seu sistema.", icone: "🔗" },
        ],
      },
      "financeiro": {
        titulo: "Financeiro",
        subtitulo: "Gestão financeira completa e simplificada",
        descricao: "Controle receitas, despesas, contas a pagar e a receber em um só lugar. Tenha visão clara do fluxo de caixa do seu restaurante.",
        icone: "💰",
        recursos: [
          { titulo: "Fluxo de caixa", descricao: "Acompanhe entradas e saídas em tempo real.", icone: "📊" },
          { titulo: "Contas a pagar e receber", descricao: "Organize vencimentos e evite inadimplência.", icone: "📅" },
          { titulo: "Conciliação bancária", descricao: "Compare lançamentos do sistema com o extrato do banco.", icone: "🏦" },
          { titulo: "DRE automático", descricao: "Demonstrativo de resultados gerado automaticamente.", icone: "📈" },
        ],
      },
      "emissao-fiscal": {
        titulo: "Emissão Fiscal",
        subtitulo: "NFC-e e NF-e integradas e sem complicação",
        descricao: "Emita notas fiscais de consumidor e notas fiscais eletrônicas diretamente pelo sistema, com total conformidade fiscal.",
        icone: "📑",
        recursos: [
          { titulo: "NFC-e automática", descricao: "Nota fiscal de consumidor gerada a cada venda.", icone: "🧾" },
          { titulo: "NF-e completa", descricao: "Emissão de nota fiscal eletrônica para fornecedores e clientes.", icone: "📄" },
          { titulo: "Cancelamento e inutilização", descricao: "Gerencie notas canceladas e inutilizadas sem burocracia.", icone: "❌" },
          { titulo: "Relatório fiscal", descricao: "Consulte todas as notas emitidas com filtros avançados.", icone: "🔍" },
        ],
      },
      "relatorios-gerenciais": {
        titulo: "Relatórios Gerenciais",
        subtitulo: "Dados estratégicos para tomar decisões melhores",
        descricao: "Dashboards e relatórios detalhados com ticket médio, produtos mais vendidos, DRE e muito mais — tudo atualizado em tempo real.",
        icone: "📊",
        recursos: [
          { titulo: "Dashboard em tempo real", descricao: "Indicadores do dia atualizados automaticamente.", icone: "📈" },
          { titulo: "Ticket médio", descricao: "Acompanhe o valor médio das vendas por período.", icone: "🎫" },
          { titulo: "Ranking de produtos", descricao: "Saiba quais itens mais vendem e quais estão encalhados.", icone: "🏆" },
          { titulo: "Relatório por garçom", descricao: "Meça a performance de cada atendente.", icone: "👤" },
        ],
      },
    },
    parceiros: {
      seloPagina: "Programa de Parceiros",
      tituloPagina: "Cresça com o Big Chef",
      subtituloPagina: "Seja um parceiro comercial e ganhe comissões recorrentes indicando o sistema de gestão que está revolucionando a gastronomia.",
      seloSobre: "Quem somos",
      tituloSobre: "Conheça a Word System",
      descricaoSobre: "Desenvolvemos soluções completas de gestão para o setor de alimentação fora do lar há mais de uma década.",
      descricaoEmpresa: "Especializada no desenvolvimento de sistemas para bares, restaurantes, lanchonetes e delivery.",
      sede: "Santa Fé — PR, Brasil",
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
        "Produto consolidado e atualizado semanalmente",
        "Mais de 3.000 clientes ativos em todo o Brasil",
        "Alta taxa de conversão e retenção de clientes",
        "Suporte completo para fechar negócios",
        "Comissões recorrentes e previsíveis",
      ],
      vantagens: [
        { icone: "💰", titulo: "Comissão Recorrente", descricao: "Receba comissões mensais por cada cliente ativo indicado por você." },
        { icone: "📦", titulo: "Material de Apoio", descricao: "Acesso a materiais de marketing, apresentações e conteúdos exclusivos." },
        { icone: "🎓", titulo: "Treinamento Especializado", descricao: "Capacitação completa sobre o sistema para você vender com confiança." },
        { icone: "🤝", titulo: "Suporte Dedicado", descricao: "Canal direto com nosso time comercial para tirar dúvidas e fechar negócios." },
        { icone: "📈", titulo: "Painel do Parceiro", descricao: "Acompanhe suas indicações, comissões e desempenho em tempo real." },
        { icone: "🚀", titulo: "Sem Investimento Inicial", descricao: "Torne-se parceiro sem nenhum custo. Basta se cadastrar e começar." },
      ],
      comoFunciona: [
        { passo: "1", titulo: "Cadastre-se", descricao: "Preencha o formulário com seus dados e aguarde a aprovação." },
        { passo: "2", titulo: "Receba seu acesso", descricao: "Após aprovado, você terá acesso ao painel e materiais de apoio." },
        { passo: "3", titulo: "Indique clientes", descricao: "Compartilhe seu link exclusivo e apresente o sistema para potenciais clientes." },
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
      perfisIdeais: ["Consultores de TI", "Contadores", "Vendedores autônomos", "Empresas de tecnologia", "Revendedores de software"],
    },
    paginasSegmentos: {
      "restaurantes": {
        titulo: "Sistema para Restaurantes",
        subtitulo: "A solução completa para o seu restaurante",
        descricao: "Do atendimento no salão até a gestão financeira, o Big Chef oferece tudo que seu restaurante precisa para operar com eficiência e crescer.",
        icone: "🍽️",
        beneficios: [
          { titulo: "Gestão de mesas e comandas", descricao: "Organize o salão com mapa visual de mesas e comandas individuais.", icone: "🗺️" },
          { titulo: "PDV rápido", descricao: "Atendimento no caixa em segundos com suporte a código de barras.", icone: "🏪" },
          { titulo: "Delivery integrado", descricao: "Receba pedidos online no seu próprio canal, sem taxas abusivas.", icone: "🛵" },
          { titulo: "Emissão fiscal automática", descricao: "NFC-e e NF-e geradas automaticamente a cada venda.", icone: "📑" },
        ],
      },
      "bares-e-baladas": {
        titulo: "Sistema para Bares e Baladas",
        subtitulo: "Controle total para operações noturnas",
        descricao: "Gerencie comandas, mesas e atendimento em alta velocidade. Ideal para bares, pubs e casas noturnas com grande volume de clientes.",
        icone: "🍺",
        beneficios: [
          { titulo: "Comandas rápidas", descricao: "Abertura e fechamento de comandas em segundos.", icone: "⚡" },
          { titulo: "Controle de estoque", descricao: "Monitore bebidas e insumos em tempo real.", icone: "📦" },
          { titulo: "Divisão de conta", descricao: "Divida por igual ou por consumo — sem confusão.", icone: "➗" },
          { titulo: "App do garçom", descricao: "Pedidos direto do celular para o bar instantaneamente.", icone: "📱" },
        ],
      },
      "cafeterias": {
        titulo: "Sistema para Cafeterias",
        subtitulo: "Agilidade e charme para o seu café",
        descricao: "PDV rápido no balcão, controle de estoque de insumos e relatórios para saber exatamente o que mais vende na sua cafeteria.",
        icone: "☕",
        beneficios: [
          { titulo: "PDV de balcão", descricao: "Atendimento rápido no caixa, perfeito para fluxo contínuo.", icone: "🏪" },
          { titulo: "Programa de fidelidade", descricao: "Fidelize clientes com cartão digital de pontos.", icone: "⭐" },
          { titulo: "Controle de insumos", descricao: "Saiba exatamente quanto gasta em cada receita.", icone: "📊" },
          { titulo: "Relatórios de vendas", descricao: "Identifique seus campeões de venda e otimize o cardápio.", icone: "📈" },
        ],
      },
      "dark-kitchens": {
        titulo: "Sistema para Dark Kitchens",
        subtitulo: "Gestão focada 100% em delivery",
        descricao: "Sem salão, sem complicação. O Big Chef automatiza o recebimento de pedidos, integra com marketplaces e otimiza sua operação de cozinha.",
        icone: "🏭",
        beneficios: [
          { titulo: "Integração com iFood e AiqFome", descricao: "Receba pedidos de todos os canais em um só lugar.", icone: "🔗" },
          { titulo: "Chatbot WhatsApp", descricao: "Pedidos automáticos pelo WhatsApp, 24 horas por dia.", icone: "🤖" },
          { titulo: "Painel de produção", descricao: "Organize pedidos por prioridade na cozinha.", icone: "📋" },
          { titulo: "Relatório de performance", descricao: "Tempo médio de preparo, taxa de cancelamento e mais.", icone: "📊" },
        ],
      },
      "sistema-para-delivery": {
        titulo: "Sistema para Delivery",
        subtitulo: "Seu delivery profissional sem taxas abusivas",
        descricao: "Monte seu próprio canal de delivery com cardápio digital, chatbot no WhatsApp e integração com os principais marketplaces do Brasil.",
        icone: "🛵",
        beneficios: [
          { titulo: "Site próprio de delivery", descricao: "Cardápio online com seu domínio e sua marca.", icone: "🌐" },
          { titulo: "Chatbot para WhatsApp", descricao: "Receba pedidos automáticos pelo WhatsApp.", icone: "💬" },
          { titulo: "Rastreamento de pedido", descricao: "Cliente acompanha o status do pedido em tempo real.", icone: "📍" },
          { titulo: "Gestão de entregadores", descricao: "Controle rotas e atribuições dos motoboys.", icone: "🏍️" },
        ],
      },
    },
  },
};
