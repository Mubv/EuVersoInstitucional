export interface HeroDemoScenario {
  id: "organizar-dia" | "planejar-projeto" | "criar-automacao" | "acompanhar-missao";
  tabLabel: string;
  workspaceLabel: string;
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
    id: "organizar-dia",
    tabLabel: "Organizar meu dia",
    workspaceLabel: "Workspace Pessoal + Trabalho",
    accentColor: "#FDC616",
    userPrompt: "Pulse, organize meu dia separando pendências da empresa e compromissos de casa.",
    genericAiResponse:
      "Gera um texto genérico em lista, sem saber quais projetos existem, sem separar sua rotina pessoal da empresa e sem criar nenhuma ação acompanhável.",
    steps: [
      {
        label: "1. Pedido",
        title: "Solicitação natural",
        detail: "Você pede pelo painel web ou pelo WhatsApp oficial conectado.",
      },
      {
        label: "2. Contexto",
        title: "Leitura autorizada",
        detail: "O Pulse consulta somente os workspaces que você autorizou, sem misturar dados.",
      },
      {
        label: "3. Prioridades",
        title: "Ordem por impacto",
        detail: "Agrupa entregas urgentes do trabalho e tarefas domésticas em blocos claros.",
      },
      {
        label: "4. Próximos passos",
        title: "Ações estruturadas",
        detail: "Sugere tarefas prontas para confirmar no seu workspace com um clique.",
      },
    ],
    euversoOutcome: {
      heading: "Rotina estruturada em dois mundos separados",
      statusLabel: "Exemplo simulado · Aguardando sua confirmação",
      statusDot: "#15803D",
      items: [
        "[Empresa] Revisar proposta comercial e aprovar cronograma da semana",
        "[Empresa] Checar resumo financeiro mensal via FinanceAgent (somente leitura)",
        "[Pessoal] Agendar consulta e organizar vencimentos do cartão no workspace Casa",
      ],
      humanControlNote: "Nenhuma tarefa é gravada ou alterada antes da sua confirmação.",
    },
  },
  {
    id: "planejar-projeto",
    tabLabel: "Planejar um projeto",
    workspaceLabel: "Workspace Projetos & Clientes",
    accentColor: "#FF8169",
    userPrompt: "Quero estruturar o lançamento de um novo serviço em 4 semanas com entregas e responsáveis.",
    genericAiResponse:
      "Devolve um parágrafo longo de dicas soltas que você ainda precisa copiar, quebrar manualmente em tarefas e acompanhar em outro lugar.",
    steps: [
      {
        label: "1. Pedido",
        title: "Objetivo do projeto",
        detail: "Você descreve escopo, prazo desejado e restrições reais.",
      },
      {
        label: "2. Plano",
        title: "Estrutura em etapas",
        detail: "O Pulse organiza marcos, dependências e checkpoints semanais.",
      },
      {
        label: "3. Tarefas",
        title: "Escrita supervisionada",
        detail: "Prepara o lote de tarefas para criação mediante aprovação explícita.",
      },
      {
        label: "4. Acompanhamento",
        title: "Visibilidade contínua",
        detail: "Status, pendências e memória do projeto ficam no mesmo workspace.",
      },
    ],
    euversoOutcome: {
      heading: "Plano pronto para virar projeto ativo no workspace",
      statusLabel: "Exemplo simulado · Operador supervisionado de projetos",
      statusDot: "#6D28D9",
      items: [
        "Semana 1: Oferta, materiais comerciais e checklist de validação",
        "Semana 2: Páginas, fluxo de atendimento e revisão interna",
        "Semana 3–4: Testes acompanhados, aprovação final e acompanhamento diário",
      ],
      humanControlNote: "Você revisa o plano e aprova antes de criar o projeto no EuVerso.",
    },
  },
  {
    id: "criar-automacao",
    tabLabel: "Criar uma automação",
    workspaceLabel: "Workflow Studio (em validação S6)",
    accentColor: "#7654E8",
    userPrompt: "Toda segunda às 8h, consolide tarefas atrasadas e me peça aprovação antes de notificar a equipe.",
    genericAiResponse:
      "Responde com um tutorial manual ou um trecho de código solto que não roda, não valida permissões e não oferece controle humano.",
    steps: [
      {
        label: "1. Pedido",
        title: "Regra em linguagem natural",
        detail: "Você descreve o gatilho, a análise desejada e o ponto de revisão.",
      },
      {
        label: "2. Workflow proposto",
        title: "Rascunho visual (Draft)",
        detail: "O Studio monta blocos e conexões em modo rascunho editável.",
      },
      {
        label: "3. Validação",
        title: "Dry-Run sem efeitos",
        detail: "Valida estrutura, permissões e simula o fluxo antes de ativar.",
      },
      {
        label: "4. Execução autorizada",
        title: "Pausa humana obrigatória",
        detail: "O fluxo só dispara a notificação depois da sua aprovação de uso único.",
      },
    ],
    euversoOutcome: {
      heading: "Workflow visual montado com ponto de aprovação",
      statusLabel: "Exemplo simulado · Recurso em validação (S6)",
      statusDot: "#6D28D9",
      items: [
        "Gatilho: Rotina semanal (segunda-feira, 08:00) no workspace autorizado",
        "Etapa IA: Consolidar atrasos e sugerir redistribuição com teto FinOps",
        "Checkpoint humano: Aprovar mensagem antes do envio à equipe",
      ],
      humanControlNote: "Automações nunca pulam a etapa de validação e autorização configurada.",
    },
  },
  {
    id: "acompanhar-missao",
    tabLabel: "Acompanhar uma missão",
    workspaceLabel: "Mission Control (em validação S6)",
    accentColor: "#5BD8B6",
    userPrompt: "Mostre em que etapa está o fechamento operacional da semana e o que depende da minha decisão.",
    genericAiResponse:
      "Um chat comum não mantém estado das execuções, não exibe histórico de etapas nem pausa ações sensíveis aguardando sua decisão.",
    steps: [
      {
        label: "1. Missão",
        title: "Execução rastreável",
        detail: "Cada rotina ganha identificador, linha do tempo e workspace de origem.",
      },
      {
        label: "2. Status",
        title: "Progresso etapa a etapa",
        detail: "Visualize o que concluiu, o que está em andamento e o custo estimado.",
      },
      {
        label: "3. Aprovação",
        title: "Decisão em um clique",
        detail: "Aprove ou recuse ações sensíveis na Web ou no WhatsApp com auditoria.",
      },
      {
        label: "4. Resultado",
        title: "Histórico completo",
        detail: "Entrega final registrada com trilha clara do que foi executado.",
      },
    ],
    euversoOutcome: {
      heading: "Painel vivo de execução sob seu comando",
      statusLabel: "Exemplo simulado · Aprovação pendente",
      statusDot: "#B45309",
      items: [
        "Etapa 1/3 Concluída: Coleta de pendências e status dos projetos",
        "Etapa 2/3 Aguardando você: Confirmar criação de 3 tarefas de revisão",
        "Etapa 3/3 Pronta: Gerar resumo executivo no workspace Operação",
      ],
      humanControlNote: "Registro auditável de quem aprovou, quando aprovou e o que mudou.",
    },
  },
];

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
    eyebrow: "MUNDO PESSOAL",
    title: "Casa, finanças e rotina leve",
    accent: "#5BD8B6",
    description:
      "Acompanhe compromissos, metas individuais, tarefas domésticas e controle financeiro sem misturar com clientes ou equipe.",
    highlights: [
      "Memória pessoal isolada e editável",
      "Leitura clara de receitas, despesas e cartões",
      "Pulse focado nas suas prioridades do dia",
    ],
  },
  {
    id: "profissional",
    eyebrow: "MUNDO PROFISSIONAL",
    title: "Projetos, clientes e entregas",
    accent: "#FDC616",
    description:
      "Centralize demandas de clientes, cronogramas, ideias e automações de rotina com contexto próprio para cada frente de trabalho.",
    highlights: [
      "Espaços dedicados por projeto ou operação",
      "Apoio supervisionado para quebrar planos em tarefas",
      "Cross-Workspace Context Bridge somente quando autorizado",
    ],
  },
  {
    id: "empresarial",
    eyebrow: "MUNDO EMPRESARIAL",
    title: "Equipes, papéis e governança",
    accent: "#7654E8",
    description:
      "Compartilhe processos, workflows e acompanhamentos com papéis bem definidos (Owner, Admin, Member e Viewer) e trilha de auditoria.",
    highlights: [
      "RBAC validado no servidor por workspace",
      "Cofre BYOK isolado por operação",
      "Aprovações humanas antes de ações críticas",
    ],
  },
];

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

export const HOME_FAQ_ITEMS = [
  {
    question: "O EuVerso é apenas mais um chatbot de IA?",
    answer:
      "Não. Um chatbot comum apenas responde perguntas soltas. O EuVerso combina workspaces isolados, o Pulse com contexto autorizado, agentes especializados, organização de projetos/tarefas/finanças e automações supervisionadas com acompanhamento.",
  },
  {
    question: "Como o EuVerso evita que minha IA misture vida pessoal e empresa?",
    answer:
      "Por meio de Workspaces isolados no servidor. Cada espaço tem suas próprias tarefas, finanças, memória e permissões. Quando você quiser cruzar informações entre dois espaços autorizados, isso acontece de forma explícita e auditada.",
  },
  {
    question: "Os agentes executam ações sozinhos sem minha permissão?",
    answer:
      "Não. Ações de escrita por agentes exigem aprovação humana explícita vinculada aos argumentos exatos daquela ação. Além disso, o EuVerso não realiza movimentações bancárias reais nem pagamentos automáticos.",
  },
  {
    question: "O Workflow Studio e o Mission Control já estão disponíveis?",
    answer:
      "Eles fazem parte da plataforma de workflows (etapa S6), já implementada e atualmente em fase de validação controlada antes da liberação geral. Por transparência, sinalizamos o status real de cada recurso em todo o site.",
  },
  {
    question: "O DevAgent já pode ser contratado hoje?",
    answer:
      "Não. O DevAgent e os agentes voltados à automação de Pull Requests (etapa S7) são itens de roadmap futuro e não são prometidos como recursos disponíveis no momento.",
  },
  {
    question: "Como funciona a integração com o WhatsApp?",
    answer:
      "O WhatsApp é nosso canal comercial principal e, dentro do produto (quando habilitado), funciona exclusivamente via API oficial da Meta com vínculo seguro por código OTP de uso único, conectado à mesma conversa do Pulse na Web.",
  },
  {
    question: "Posso usar minha própria chave de IA (BYOK)?",
    answer:
      "Sim. O EuVerso suporta APIs oficiais da OpenAI, Google Gemini, Google Vertex AI e Anthropic Claude em cofre criptografado isolado por workspace, sem retries automáticos em chamadas faturáveis.",
  },
  {
    question: "Por que os planos ainda mostram 'R$ XXX'?",
    answer:
      "Os quatro planos (Essencial, Pro, Business e Enterprise) representam nossa arquitetura comercial em aprovação final. Converse pelo WhatsApp para entender qual formato faz sentido para sua rotina ou empresa e receber as condições atualizadas.",
  },
];
