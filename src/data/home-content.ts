export interface HeroDemoScenario {
  id: "financeiro" | "email" | "agenda" | "projetos-automacao";
  tabLabel: string;
  workspaceLabel: string;
  availabilityLabel: string;
  availabilityStatus: "disponivel" | "em_desenvolvimento" | "em_validacao";
  accentColor: string;
  userPrompt: string;
  genericAiResponse: string;
  steps: [
    { label: string; title: string; detail: string },
    { label: string; title: string; detail: string },
    { label: string; title: string; detail: string },
    { label: string; title: string; detail: string },
  ];
  euversoOutcome: {
    heading: string;
    statusLabel: string;
    statusDot: string;
    items: string[];
    humanControlNote: string;
  };
}

export const HERO_DEMO_SCENARIOS: HeroDemoScenario[] = [
  {
    id: "financeiro",
    tabLabel: "Financeiro",
    workspaceLabel: "Workspace Empresa · FinanceAgent + Operador Supervisionado",
    availabilityLabel: "Disponível (sem pagamento bancário)",
    availabilityStatus: "disponivel",
    accentColor: "#FDC616",
    userPrompt:
      "Pulse, leia esta despesa de consultoria de R$ 1.850, prepare o lançamento para dia 15 e mostre o impacto no mês.",
    genericAiResponse:
      "Responde com um cálculo aproximado em texto solto, sem enxergar suas categorias reais, sem preparar o lançamento e sem controle de vencimento.",
    steps: [
      {
        label: "1. Entender despesa",
        title: "Leitura do pedido",
        detail: "Identifica valor, categoria e workspace autorizado sem misturar conta pessoal e empresa.",
      },
      {
        label: "2. Extrair dados",
        title: "Consulta auditada",
        detail: "O FinanceAgent consulta receitas, despesas e faturas em precisão decimal (somente leitura).",
      },
      {
        label: "3. Preparar lançamento",
        title: "Proposta estruturada",
        detail: "Monta o registro organizacional com vencimento e impacto mensal para sua conferência.",
      },
      {
        label: "4. Aprovar e registrar",
        title: "Decisão humana obrigatória",
        detail: "Só registra após sua aprovação de uso único e acompanha o vencimento no workspace.",
      },
    ],
    euversoOutcome: {
      heading: "Despesa estruturada e pronta para sua aprovação",
      statusLabel: "Demonstração ilustrativa · Aguardando aprovação humana",
      statusDot: "#15803D",
      items: [
        "Consulta: despesas do mês atualizadas via FinanceAgent (somente leitura)",
        "Preparação: lançamento organizacional R$ 1.850,00 · vencimento dia 15",
        "Controle: nenhuma alteração gravada antes do seu aceite · zero pagamento bancário automático",
      ],
      humanControlNote:
        "O EuVerso não realiza transferências nem paga boletos automaticamente; toda gravação exige sua aprovação.",
    },
  },
  {
    id: "email",
    tabLabel: "E-mail",
    workspaceLabel: "Workspace Comercial · Agente de E-mail (Em desenvolvimento S7)",
    availabilityLabel: "Em desenvolvimento (S7)",
    availabilityStatus: "em_desenvolvimento",
    accentColor: "#FF8169",
    userPrompt:
      "Pulse, filtre os e-mails prioritários de clientes hoje e prepare rascunhos de resposta para eu revisar.",
    genericAiResponse:
      "Você precisa copiar e colar cada mensagem manualmente em um chat, perder o contexto do cliente e depois colar o texto de volta no seu e-mail.",
    steps: [
      {
        label: "1. Consultar",
        title: "Mensagens autorizadas",
        detail: "Lê somente caixas e escopos explicitamente conectados no workspace autorizado.",
      },
      {
        label: "2. Classificar",
        title: "Triagem por prioridade",
        detail: "Separa urgências de clientes, cobranças e avisos informativos sem ruído.",
      },
      {
        label: "3. Preparar",
        title: "Rascunhos contextualizados",
        detail: "Redige propostas de resposta coerentes com o histórico do workspace.",
      },
      {
        label: "4. Aprovar envio",
        title: "Revisão antes de enviar",
        detail: "Nenhum e-mail sai automaticamente: você revisa, ajusta e autoriza o envio.",
      },
    ],
    euversoOutcome: {
      heading: "Triagem pronta e rascunhos aguardando sua revisão",
      statusLabel: "Demonstração ilustrativa · Em desenvolvimento (etapa S7)",
      statusDot: "#0369A1",
      items: [
        "Prioridade alta: 2 clientes aguardando retorno sobre proposta e cronograma",
        "Preparação: 2 rascunhos objetivos prontos para edição antes de qualquer disparo",
        "Status real: leitura segura isolada ativa; agente completo de e-mail em desenvolvimento na S7",
      ],
      humanControlNote:
        "Recurso em evolução na etapa S7 — todo envio externo permanece bloqueado sem sua aprovação explícita.",
    },
  },
  {
    id: "agenda",
    tabLabel: "Agenda",
    workspaceLabel: "Workspace Pessoal + Trabalho · Agente de Agenda (Em desenvolvimento S7)",
    availabilityLabel: "Em desenvolvimento (S7)",
    availabilityStatus: "em_desenvolvimento",
    accentColor: "#5BD8B6",
    userPrompt:
      "Pulse, encontre um horário livre na quinta à tarde para alinhar o projeto e reserve foco pela manhã.",
    genericAiResponse:
      "Sugere horários hipotéticos sem ver conflitos reais, sem proteger blocos de foco e sem criar nenhum compromisso confirmado.",
    steps: [
      {
        label: "1. Disponibilidade",
        title: "Leitura de conflitos",
        detail: "Consulta janelas livres e compromissos nos calendários autorizados.",
      },
      {
        label: "2. Sugestão",
        title: "Melhor janela do dia",
        detail: "Propõe bloco de foco pela manhã e reunião sem choques à tarde.",
      },
      {
        label: "3. Confirmação",
        title: "Revisão dos detalhes",
        detail: "Exibe horário, participantes e pauta antes de gravar qualquer compromisso.",
      },
      {
        label: "4. Evento autorizado",
        title: "Criação sob aprovação",
        detail: "Registra o evento apenas após sua confirmação explícita.",
      },
    ],
    euversoOutcome: {
      heading: "Agenda equilibrada com foco protegido e zero conflito",
      statusLabel: "Demonstração ilustrativa · Em desenvolvimento (etapa S7)",
      statusDot: "#0369A1",
      items: [
        "Bloco de foco sugerido: quinta-feira, 09:00–11:00 (sem reuniões)",
        "Janela livre para alinhamento: quinta-feira, 15:00–15:45",
        "Status real: Agente de Agenda e conectores de calendário em desenvolvimento na etapa S7",
      ],
      humanControlNote:
        "Recurso em desenvolvimento na etapa S7 — nenhum convite externo é disparado sem consentimento.",
    },
  },
  {
    id: "projetos-automacao",
    tabLabel: "Projetos & Fluxos",
    workspaceLabel: "Workspace Projetos · Operador Supervisionado + Workflows S6",
    availabilityLabel: "Disponível (piloto controlado S6)",
    availabilityStatus: "disponivel",
    accentColor: "#7654E8",
    userPrompt:
      "Toda segunda às 8h, consolide tarefas atrasadas do projeto e me peça aprovação antes de criar revisões.",
    genericAiResponse:
      "Entrega um texto ou tutorial solto que não roda de forma recorrente, não valida permissões e não acompanha o andamento.",
    steps: [
      {
        label: "1. Pedido natural",
        title: "Objetivo em português",
        detail: "Você descreve o gatilho, o contexto autorizado e o ponto de aprovação.",
      },
      {
        label: "2. Rascunho visual",
        title: "Validação e Dry-Run",
        detail: "Estrutura as etapas em rascunho e simula o fluxo sem alterar dados reais.",
      },
      {
        label: "3. Pausa humana",
        title: "Aprovação de uso único",
        detail: "Antes de criar tarefas ou notificar a equipe, pausa aguardando seu aceite.",
      },
      {
        label: "4. Continuidade",
        title: "Histórico no Mission Control",
        detail: "Registra cada etapa executada, quem aprovou e o consumo de IA.",
      },
    ],
    euversoOutcome: {
      heading: "Rotina recorrente transformada em fluxo acompanhável",
      statusLabel: "Demonstração ilustrativa · Plataforma S6 certificada em piloto controlado",
      statusDot: "#15803D",
      items: [
        "Gatilho: toda segunda-feira às 08:00 no workspace autorizado",
        "Preparação: consolidação de pendências com teto de consumo configurável",
        "Aprovação: checkpoint obrigatório na Web ou WhatsApp antes de gravar tarefas",
      ],
      humanControlNote:
        "Automações nunca pulam a etapa de validação prévia nem a aprovação humana configurada.",
    },
  },
];

export const PULSE_JOURNEY_STEPS = [
  {
    number: "01",
    label: "Conhece",
    title: "Lê o contexto certo",
    description: "Consulta apenas o workspace, a memória e as ferramentas que você autorizou.",
    accent: "#5BD8B6",
  },
  {
    number: "02",
    label: "Entende",
    title: "Interpreta o objetivo",
    description: "Identifica se a solicitação pede consulta, organização, preparação ou fluxo recorrente.",
    accent: "#FDC616",
  },
  {
    number: "03",
    label: "Aciona",
    title: "Chama o especialista adequado",
    description: "Orquestra agentes, skills e ferramentas com limites claros e pausa para sua aprovação.",
    accent: "#7654E8",
  },
  {
    number: "04",
    label: "Acompanha",
    title: "Fecha o ciclo com você",
    description: "Mostra o andamento, registra o histórico e mantém continuidade entre Web e WhatsApp.",
    accent: "#FF8169",
  },
] as const;

export const PAIN_PILLARS = [
  {
    id: "desconectados",
    eyebrow: "01 · DESCONEXÃO",
    title: "Aplicativos desconectados",
    pain: "E-mails em um app, agenda em outro, despesas em planilhas e projetos espalhados em ferramentas que nunca conversam entre si.",
    accent: "#FDC616",
  },
  {
    id: "contexto",
    eyebrow: "02 · RETRABALHO",
    title: "Perda de contexto",
    pain: "Decisões importantes se perdem em chats paralelos e IAs genéricas obrigam você a reexplicar sua rotina toda semana.",
    accent: "#FF8169",
  },
  {
    id: "esforco",
    eyebrow: "03 · SOBRECARGA",
    title: "Esforço operacional recorrente",
    pain: "Mesmo quando você recebe uma boa resposta da IA, ainda precisa copiar, estruturar tarefas e acompanhar cada etapa sozinho.",
    accent: "#7654E8",
  },
] as const;

export const SHIFT_COMPARISON = {
  today: {
    eyebrow: "HOJE · CHAT DE IA COMUM",
    summary: "Você pergunta. A IA responde. E você ainda precisa executar e acompanhar o resto.",
    points: [
      "Cada conversa começa do zero, sem conhecer seus mundos nem suas prioridades.",
      "Entrega texto solto que vira mais trabalho manual para copiar e organizar.",
      "Sem trilha de execução, sem aprovações e sem continuidade no dia seguinte.",
    ],
  },
  euverso: {
    eyebrow: "COM O EUVERSO · DELEGAÇÃO COM CONTROLE",
    summary:
      "Você pede. O Pulse entende o contexto, aciona os especialistas certos, prepara ou executa ações autorizadas e permite acompanhar os resultados.",
    points: [
      "Lê somente o contexto autorizado de cada workspace, sem misturar vida pessoal e empresa.",
      "Especialistas estruturam tarefas, análises e fluxos com aprovação humana antes de ações sensíveis.",
      "Você acompanha cada etapa do pedido ao resultado em um só lugar.",
    ],
  },
  closing: "A diferença não é apenas uma resposta. É continuidade.",
} as const;

export const PROBLEM_FRAGMENTS = [
  {
    world: "Conversas soltas",
    pain: "Decisões importantes se perdem em chats paralelos e você precisa explicar tudo de novo.",
    accent: "#FDC616",
  },
  {
    world: "Planilhas e finanças",
    pain: "Despesas pessoais, cartões e números do negócio ficam espalhados sem leitura contextual.",
    accent: "#5BD8B6",
  },
  {
    world: "Projetos e tarefas",
    pain: "Listas desconectadas não conversam com sua agenda, seus prazos nem suas prioridades reais.",
    accent: "#FF8169",
  },
  {
    world: "IAs genéricas",
    pain: "Chatbots entregam respostas bonitas, mas não conhecem seus mundos nem acompanham a execução.",
    accent: "#7654E8",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    action: "Organize",
    title: "Separe seus mundos em Workspaces",
    description:
      "Crie espaços isolados para vida pessoal, projetos próprios ou empresa. Cada contexto guarda suas tarefas, finanças, memória e permissões.",
    accent: "#5BD8B6",
  },
  {
    number: "02",
    action: "Converse",
    title: "Acione o Pulse com o contexto certo",
    description:
      "Peça resumos, planos, cruzamentos autorizados e próximos passos pela Web ou pelo WhatsApp oficial, sem precisar colar o histórico inteiro.",
    accent: "#FDC616",
  },
  {
    number: "03",
    action: "Delegue",
    title: "Ative agentes e workflows supervisionados",
    description:
      "Transforme demandas recorrentes em etapas claras e agentes especializados, mantendo aprovação humana obrigatória em ações sensíveis.",
    accent: "#7654E8",
  },
  {
    number: "04",
    action: "Acompanhe",
    title: "Decida e valide no Mission Control",
    description:
      "Veja o que já rodou, o que aguarda sua aprovação, o histórico completo e o consumo de IA em um painel transparente.",
    accent: "#FF8169",
  },
];

export const WORKSPACES_WORLDS = [
  {
    id: "pessoal",
    eyebrow: "PESSOAL",
    title: "Casa, finanças e rotina",
    accent: "#5BD8B6",
    description:
      "Organize tarefas pessoais, metas e despesas da casa em um espaço privado, com memória editável e zero mistura com trabalho.",
    highlights: [
      "Memória pessoal isolada e controlável",
      "Leitura clara de receitas, despesas e cartões",
      "Configurações e prioridades só suas",
    ],
  },
  {
    id: "trabalho",
    eyebrow: "TRABALHO",
    title: "Rotina profissional e entregas",
    accent: "#FDC616",
    description:
      "Separe compromissos do dia a dia profissional, documentos e prioridades sem contaminar seu espaço pessoal.",
    highlights: [
      "Contexto profissional focado na semana",
      "Tarefas e planos preparados sob aprovação",
      "Sem fusão silenciosa com outros workspaces",
    ],
  },
  {
    id: "projetos",
    eyebrow: "PROJETOS",
    title: "Iniciativas e automações",
    accent: "#FF8169",
    description:
      "Estruture frentes independentes, lançamentos e fluxos recorrentes com histórico próprio e acompanhamento claro.",
    highlights: [
      "Espaço dedicado por iniciativa ou produto",
      "Workflows com Dry-Run e aprovação humana",
      "Trilha de decisões e evolução contínua",
    ],
  },
  {
    id: "clientes",
    eyebrow: "CLIENTES & EQUIPES",
    title: "Papéis, chaves e governança",
    accent: "#7654E8",
    description:
      "Opere com equipe ou contas de clientes usando papéis claros (Owner, Admin, Member e Viewer) e cofre de IA dedicado.",
    highlights: [
      "Isolamento validado no servidor por workspace",
      "Permissões RBAC e auditoria por operação",
      "Credenciais BYOK exclusivas do espaço",
    ],
  },
];

export const ACTIVE_CAPABILITIES_SHOWCASE = [
  {
    name: "Financeiro (Leitura & Registro Supervisionado)",
    availability: "disponivel" as const,
    outcome: "Consulte receitas, despesas, cartões e faturas e prepare lançamentos sob aprovação.",
    guardrail: "Sem movimentação bancária nem pagamento automático.",
  },
  {
    name: "Projetos & Tarefas",
    availability: "disponivel" as const,
    outcome: "Transforme metas e pedidos em etapas, tarefas e prioridades organizadas no workspace.",
    guardrail: "Toda gravação exige aprovação humana explícita.",
  },
  {
    name: "Automações & Workflows (S6)",
    availability: "disponivel" as const,
    outcome: "Estruture rotinas recorrentes com validação prévia (Dry-Run) e acompanhamento no Mission Control.",
    guardrail: "Certificado em piloto controlado; checkpoints humanos obrigatórios.",
  },
  {
    name: "Skills (SKILL.md) & Ferramentas MCP",
    availability: "disponivel_com_restricoes" as const,
    outcome: "Amplie o alcance dos especialistas com habilidades inspecionadas e conectores controlados.",
    guardrail: "Execução externa somente em ambiente isolado sob allowlist e aprovação.",
  },
] as const;

export const SPECIALIST_DOMAINS_CATALOG = [
  {
    id: "email",
    name: "E-mail",
    availability: "em_desenvolvimento" as const,
    outcome: "Triar mensagens autorizadas, destacar prioridades e preparar rascunhos para revisão.",
  },
  {
    id: "agenda",
    name: "Agenda",
    availability: "em_desenvolvimento" as const,
    outcome: "Verificar disponibilidade, proteger blocos de foco e sugerir horários sem conflitos.",
  },
  {
    id: "financeiro-2",
    name: "Financeiro 2.0",
    availability: "em_desenvolvimento" as const,
    outcome: "Acompanhar competência, vencimentos e histórico revisável (sem movimentação bancária).",
  },
  {
    id: "meu-dia",
    name: "Meu Dia",
    availability: "em_desenvolvimento" as const,
    outcome: "Reunir seu briefing diário com widgets autorizados de prioridades e rotina.",
  },
  {
    id: "dev",
    name: "Dev",
    availability: "em_desenvolvimento" as const,
    outcome: "Apoiar análises técnicas e propostas de mudança em sandbox isolado (sem auto-merge).",
  },
  {
    id: "tutor",
    name: "Tutor de Estudos",
    availability: "em_desenvolvimento" as const,
    outcome: "Organizar materiais enviados por você em planos de estudo, resumos e revisões.",
  },
  {
    id: "gastronomia",
    name: "Gastronomia",
    availability: "em_desenvolvimento" as const,
    outcome: "Planejar cardápios, receitas e listas de compras respeitando preferências e alergias.",
  },
  {
    id: "saude",
    name: "Fitness e Saúde",
    availability: "em_desenvolvimento" as const,
    outcome: "Organizar hábitos e rotinas de bem-estar com privacidade reforçada (wearables no roadmap).",
  },
  {
    id: "entretenimento",
    name: "Cinema/Streaming & Futebol",
    availability: "roadmap" as const,
    outcome: "Acompanhar estreias, recomendações e jogos conforme integração de provedores planejados.",
  },
] as const;

export const AGENTS_SHOWCASE = [
  {
    name: "FinanceAgent (Leitura Auditada)",
    availability: "disponivel" as const,
    role: "Análise financeira somente leitura",
    description:
      "Consulta receitas, despesas, cartões, faturas e comparativos de período com precisão decimal e zero risco de movimentação bancária.",
    guardrail: "100% somente leitura. Proibido alterar lançamentos ou movimentar dinheiro.",
  },
  {
    name: "Operador Supervisionado de Projetos",
    availability: "disponivel" as const,
    role: "Planejamento e organização de tarefas",
    description:
      "Ajuda a transformar objetivos em etapas, tarefas e prioridades dentro do workspace autorizado.",
    guardrail: "Toda criação ou alteração exige aprovação humana explícita.",
  },
  {
    name: "Operador Supervisionado Financeiro",
    availability: "disponivel" as const,
    role: "Registro assistido de lançamentos",
    description:
      "Prepara registros organizacionais a partir de texto, áudio ou comprovantes enviados ao Pulse.",
    guardrail: "Aprovação de uso único vinculada aos valores exatos. Zero pagamento bancário real.",
  },
  {
    name: "Skills (SKILL.md) & Ferramentas MCP",
    availability: "disponivel_com_restricoes" as const,
    role: "Extensibilidade inspecionada",
    description:
      "Suporte ao padrão aberto Agent Skills e conexões MCP controladas por allowlist e execução efêmera isolada.",
    guardrail: "Artefatos externos nunca rodam dentro da API principal; exigem aprovação.",
  },
  {
    name: "DevAgent & Automação de PRs (S7)",
    availability: "roadmap" as const,
    role: "Roadmap futuro de engenharia",
    description:
      "Agentes voltados a desenvolvimento de software e abertura de Pull Requests planejados para a etapa S7.",
    guardrail: "Recurso de roadmap — não disponível para uso imediato.",
  },
];

export const AUDIENCES = [
  {
    id: "pf",
    eyebrow: "PESSOA FÍSICA",
    title: "Para quem quer clareza na rotina sem virar refém de dez apps",
    accent: "#5BD8B6",
    benefits: [
      "Organize projetos pessoais, tarefas e finanças em um só espaço",
      "Converse com o Pulse sem perder contexto de uma semana para outra",
      "Mantenha total controle sobre sua memória e suas decisões",
    ],
    ctaLabel: "Conhecer para uso pessoal",
    whatsappOrigin: "persona-pf" as const,
    href: "/ia-para-produtividade",
  },
  {
    id: "empreendedor",
    eyebrow: "EMPREENDEDOR E AUTÔNOMO",
    title: "Para quem equilibra negócio, clientes e vida pessoal todos os dias",
    accent: "#FDC616",
    benefits: [
      "Separe vida pessoal e frente comercial em workspaces independentes",
      "Transforme pedidos recorrentes em workflows supervisionados",
      "Acompanhe pendências pelo painel ou pelo WhatsApp oficial",
    ],
    ctaLabel: "Conhecer para empreendedores",
    whatsappOrigin: "persona-empreendedor" as const,
    href: "/ia-para-produtividade",
  },
  {
    id: "equipes",
    eyebrow: "PEQUENAS EMPRESAS E EQUIPES",
    title: "Para operações que precisam de IA com papéis, limites e auditoria",
    accent: "#7654E8",
    benefits: [
      "Espaços compartilhados com RBAC claro (Owner, Admin, Member, Viewer)",
      "Aprovações humanas antes de ações sensíveis e trilha no Mission Control",
      "Governança BYOK com controle de consumo por workspace",
    ],
    ctaLabel: "Conversar para minha equipe",
    whatsappOrigin: "persona-equipes" as const,
    href: "/ia-para-empresas",
  },
];

export const SECURITY_PILLARS = [
  {
    title: "Isolamento real por Workspace",
    description:
      "Cada dado, conector e execução respeita a fronteira do workspace validada no servidor. Sua vida pessoal nunca vaza para a equipe.",
  },
  {
    title: "Permissões RBAC claras",
    description:
      "Owner, Admin, Member e Viewer definem exatamente quem pode administrar chaves, operar agentes ou apenas visualizar informações.",
  },
  {
    title: "Aprovação humana de uso único",
    description:
      "Toda escrita por agente passa por confirmação explícita vinculada aos parâmetros exatos da operação, sem reaproveitamento indevido.",
  },
  {
    title: "Cofre BYOK com criptografia em nuvem",
    description:
      "Suas chaves de provedores oficiais (OpenAI, Gemini, Vertex AI e Anthropic) ficam isoladas por workspace com envelope encryption e Cloud KMS.",
  },
  {
    title: "Auditoria e FinOps sem guardar prompts brutos",
    description:
      "Registro auditável de consumo, limites de uso configuráveis e proteção automática contra gravação de segredos na memória.",
  },
  {
    title: "Execução externa em ambiente isolado",
    description:
      "Ferramentas externas e MCP rodam em ambiente efêmero sem acesso ao banco principal nem ao cofre de chaves da plataforma.",
  },
];

export const AI_PROVIDERS_SUPPORTED = [
  {
    name: "OpenAI",
    detail: "API oficial com roteamento por capacidade e controle de limites por workspace.",
  },
  {
    name: "Google Gemini",
    detail: "API oficial autenticada por cabeçalho seguro no cofre criptografado do workspace.",
  },
  {
    name: "Google Vertex AI",
    detail: "Service Account, projeto e localização dedicados por workspace — sem compartilhar credenciais.",
  },
  {
    name: "Anthropic Claude",
    detail: "API oficial integrada ao gateway unificado com medição transparente e zero retry faturável.",
  },
] as const;

export const HOME_FAQ_ITEMS = [
  {
    question: "O que é o EuVerso?",
    answer:
      "O EuVerso é uma plataforma de inteligência artificial que conecta seus contextos pessoais, profissionais, projetos e equipes em workspaces isolados. Em vez de um chat genérico, você conversa com o Pulse, que aciona especialistas e fluxos supervisionados para transformar pedidos em ações acompanháveis.",
  },
  {
    question: "Como funciona com WhatsApp?",
    answer:
      "O WhatsApp é nosso canal comercial principal para tirar dúvidas e conhecer a plataforma. Dentro do produto, a integração usa exclusivamente a API oficial da Meta (quando habilitada no ambiente), com vínculo seguro por código OTP de uso único e continuidade com a conversa do Pulse na Web.",
  },
  {
    question: "Quais integrações estão disponíveis?",
    answer:
      "Hoje estão ativos os provedores oficiais de IA (OpenAI, Google Gemini, Google Vertex AI e Anthropic Claude via BYOK), gestão de projetos/tarefas, consulta e registro financeiro supervisionado (sem pagamentos bancários), Skills (SKILL.md) e conectores MCP em ambiente isolado sob allowlist. Conectores de e-mail, agenda e provedores externos de mídia, esportes e wearables estão em desenvolvimento (etapa S7) ou no roadmap planejado.",
  },
  {
    question: "O que é BYOK e quem paga a IA?",
    answer:
      "BYOK (Bring Your Own Key) significa trazer sua própria chave de API oficial dos provedores suportados, guardada em cofre criptografado por workspace (Cloud KMS). Quando você opera com BYOK, o consumo de tokens e eventuais recursos adicionais é cobrado diretamente pelo seu provedor conforme o modelo e a conta utilizados. Nem toda chave habilita todas as ferramentas, e o EuVerso não realiza retries automáticos em chamadas faturáveis.",
  },
  {
    question: "Como funcionam permissões e aprovações?",
    answer:
      "Cada workspace isola dados, memória e credenciais no servidor com papéis claros (Owner, Admin, Member e Viewer). Toda ação de escrita sensível por agentes exige aprovação humana explícita de uso único vinculada aos parâmetros exatos da operação. Além disso, o EuVerso não realiza movimentações bancárias reais nem pagamentos automáticos.",
  },
  {
    question: "O que já está disponível e o que está em evolução?",
    answer:
      "Já estão homologados em produção: Workspaces isolados e RBAC, Pulse com memória em 3 níveis, FinanceAgent somente leitura, operadores supervisionados de projetos e finanças, cofre BYOK e Skills/MCP isolados. A plataforma de workflows (Workflow Studio e Mission Control — etapa S6) está certificada em piloto controlado. Os 10 especialistas pragmáticos ampliados, o Meu Dia declarativo e a busca web governada estão em desenvolvimento na etapa S7 e serão liberados apenas após homologação.",
  },
];
