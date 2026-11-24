import type { AvailabilityStatus } from "@/config/availability";
import type { WhatsAppOrigin } from "@/config/site";

export interface SeoLandingPageData {
  slug: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  subtitle: string;
  availability: AvailabilityStatus;
  availabilityNote: string;
  whatsappOrigin: WhatsAppOrigin;
  ctaLabel: string;
  accentColor: string;
  illustrationKey?: "hero" | "pulse" | "automacoes";
  problemStatement: {
    title: string;
    points: string[];
  };
  solutionPillars: Array<{
    title: string;
    description: string;
    highlight: string;
  }>;
  demoExample: {
    title: string;
    badge: string;
    input: string;
    steps: string[];
    result: string;
  };
  faq: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string; summary: string }>;
}

export const SEO_PAGES: Record<string, SeoLandingPageData> = {
  pulse: {
    slug: "pulse",
    navTitle: "Pulse",
    metaTitle: "Pulse — Inteligência Artificial Contextual do EuVerso",
    metaDescription:
      "Conheça o Pulse, a inteligência central do EuVerso que usa o contexto autorizado dos seus workspaces para organizar tarefas, responder e propor ações acompanháveis.",
    keywords: [
      "assistente pessoal com IA",
      "IA contextual",
      "Pulse EuVerso",
      "IA para produtividade",
    ],
    eyebrow: "PULSE · INTELIGÊNCIA CONTEXTUAL",
    h1: "Uma IA que entende o seu contexto — sem misturar seus mundos.",
    subtitle:
      "O Pulse não é um chatbot isolado nem um robô genérico. É uma presença orbital inteligente que atua sobre os workspaces que você autoriza, na Web e no WhatsApp oficial.",
    availability: "disponivel",
    availabilityNote: "Disponível na plataforma EuVerso (Web e canal oficial WhatsApp quando habilitado).",
    whatsappOrigin: "pulse",
    ctaLabel: "Conhecer o Pulse pelo WhatsApp",
    accentColor: "#FDC616",
    illustrationKey: "pulse",
    problemStatement: {
      title: "Por que chats de IA comuns cansam rápido",
      points: [
        "Você repete o mesmo contexto toda semana porque a conversa começa do zero.",
        "Informações pessoais e da empresa acabam misturadas no mesmo histórico.",
        "A IA responde em texto solto, mas nada vira tarefa, rotina ou acompanhamento real.",
      ],
    },
    solutionPillars: [
      {
        title: "Contexto autorizado por workspace",
        description:
          "Ao abrir o Pulse no workspace Pessoal ou Empresa, ele consulta somente o que pertence àquele espaço — ou cruza dados apenas com sua solicitação explícita.",
        highlight: "Zero vazamento entre contextos",
      },
      {
        title: "Memória em 3 níveis com controle real",
        description:
          "Separa memória da conversa, memória do workspace e preferências duráveis, com proveniência clara, bloqueio de segredos e exclusão auditável.",
        highlight: "Você revisa e corrige o que ela lembra",
      },
      {
        title: "Continuidade entre Web e WhatsApp",
        description:
          "Comece uma solicitação no painel web e acompanhe ou aprove pelo WhatsApp oficial (quando habilitado) na mesma linha do tempo.",
        highlight: "Thread canônica unificada",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: resumo matinal com contexto real",
      badge: "Demonstração simulada",
      input: "Pulse, o que é prioridade hoje na minha operação e quais pendências pessoais não posso esquecer?",
      steps: [
        "Verifica permissões ativas nos workspaces autorizados pelo usuário",
        "Separa pendências de projetos da empresa e itens do workspace pessoal",
        "Sugere ordem de execução e pergunta se você quer registrar novos lembretes",
      ],
      result:
        "Lista dividida por workspace com próximas ações prontas para confirmação — sem misturar dados e sem alterar nada sem seu aval.",
    },
    faq: [
      {
        question: "O Pulse lê todos os meus workspaces automaticamente?",
        answer:
          "Não. Ele respeita estritamente os workspaces em que você tem permissão ativa e isola o contexto de cada espaço. Consultas cruzadas são explícitas e auditadas.",
      },
      {
        question: "O Pulse aceita áudio, imagem ou PDF?",
        answer:
          "Sim. A plataforma suporta ingestão segura de áudio, imagens e PDFs validados para apoiar a organização de tarefas e registros supervisionados.",
      },
      {
        question: "Qual modelo de IA roda por trás do Pulse?",
        answer:
          "Você pode operar via APIs oficiais da OpenAI, Google Gemini, Google Vertex AI ou Anthropic Claude configuradas com BYOK no cofre do seu workspace.",
      },
    ],
    relatedLinks: [
      { href: "/workspaces", label: "Workspaces", summary: "Veja como seus mundos ficam isolados com segurança." },
      { href: "/agentes-de-ia", label: "Agentes de IA", summary: "Conheça os agentes especializados e aprovações." },
      { href: "/ia-para-produtividade", label: "IA para Produtividade", summary: "Aplicação prática no dia a dia." },
    ],
  },
  workspaces: {
    slug: "workspaces",
    navTitle: "Workspaces",
    metaTitle: "Workspaces — Separe Vida Pessoal, Projetos e Empresa no EuVerso",
    metaDescription:
      "Organize vida pessoal, clientes e empresas em workspaces isolados com controle de permissões RBAC, memória separada e governança BYOK.",
    keywords: [
      "workspaces com IA",
      "organizar vida pessoal e trabalho",
      "software multi-workspace",
      "governança de IA por workspace",
    ],
    eyebrow: "WORKSPACES · MUNDOS ISOLADOS",
    h1: "Você tem vários mundos. O EuVerso mantém cada um no lugar certo.",
    subtitle:
      "Chega de misturar notas pessoais, finanças da casa e projetos da empresa. No EuVerso, cada workspace é uma fronteira real de dados, memória, agentes e chaves de IA.",
    availability: "disponivel",
    availabilityNote: "Isolamento multi-workspace e RBAC homologados e ativos em produção.",
    whatsappOrigin: "workspaces",
    ctaLabel: "Entender Workspaces pelo WhatsApp",
    accentColor: "#5BD8B6",
    illustrationKey: "hero",
    problemStatement: {
      title: "O custo invisível de misturar contextos",
      points: [
        "Documentos de clientes e vida pessoal dividem as mesmas pastas e chats.",
        "Fica impossível convidar alguém da equipe sem expor o que é privado.",
        "Ferramentas de IA sem fronteiras acabam contaminando respostas com informações erradas.",
      ],
    },
    solutionPillars: [
      {
        title: "Fronteira validada no servidor",
        description:
          "Todas as consultas, tarefas, finanças, conectores e execuções de IA são filtradas pelo workspace ativo — nunca apenas por filtro visual.",
        highlight: "Isolamento real de dados",
      },
      {
        title: "Papéis claros (RBAC)",
        description:
          "Owner, Admin, Member e Viewer garantem que apenas administradores gerenciem chaves BYOK, membros e limites, enquanto a equipe opera com tranquilidade.",
        highlight: "4 níveis de permissão",
      },
      {
        title: "Ponte entre mundos só com permissão",
        description:
          "Quando você precisa comparar ou levar algo de um workspace para outro, o Context Bridge registra origem, destino e exige aprovação em escritas cruzadas.",
        highlight: "Zero fusão silenciosa",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: alternando entre Casa, Projeto e Empresa",
      badge: "Demonstração simulada",
      input: "Criar workspace 'Operação Agência' com 3 membros e manter 'Vida Pessoal' totalmente privado.",
      steps: [
        "Workspace 'Operação Agência' nasce limpo, sem dados fictícios nem herança pessoal",
        "Papéis definidos: você como Owner, gestora como Admin e analista como Member",
        "Chave BYOK e memória da agência ficam isoladas dentro do novo espaço",
      ],
      result:
        "Dois universos paralelos na mesma conta: colaboração fluida na empresa e privacidade absoluta na vida pessoal.",
    },
    faq: [
      {
        question: "Um membro do workspace da empresa vê meu workspace pessoal?",
        answer:
          "Nunca. Cada workspace possui associação explícita de membros e isolamento rigoroso no servidor.",
      },
      {
        question: "Novos workspaces vêm cheios de dados de exemplo?",
        answer:
          "Não. Cada novo workspace nasce limpo para refletir apenas a sua operação real.",
      },
      {
        question: "Posso configurar chaves de IA diferentes para cada workspace?",
        answer:
          "Sim. O cofre BYOK é isolado por workspace, permitindo separar custos e provedores entre vida pessoal e empresa.",
      },
    ],
    relatedLinks: [
      { href: "/pulse", label: "Pulse", summary: "Veja como a IA respeita as fronteiras de cada workspace." },
      { href: "/ia-para-empresas", label: "IA para Empresas", summary: "Como equipes operam com RBAC e auditoria." },
      { href: "/planos", label: "Planos", summary: "Compare os planos Essencial, Pro, Business e Enterprise." },
    ],
  },
  "agentes-de-ia": {
    slug: "agentes-de-ia",
    navTitle: "Agentes de IA",
    metaTitle: "Agentes de IA Supervisionados para Rotina e Empresas — EuVerso",
    metaDescription:
      "Trabalhe com agentes de IA especializados em finanças e projetos com aprovação humana obrigatória, permissões em camadas e transparência total.",
    keywords: [
      "agentes de IA para empresas",
      "agentes de IA supervisionados",
      "aprovação humana em IA",
      "Agent Skills SKILL.md",
    ],
    eyebrow: "AGENTES · DELEGAÇÃO COM CONTROLE",
    h1: "Não faça tudo sozinho. Trabalhe com agentes supervisionados.",
    subtitle:
      "No EuVerso, agentes não são caixas-pretas com autonomia irrestrita. Cada agente tem escopo declarado, permissões explícitas e precisa da sua aprovação para agir.",
    availability: "disponivel",
    availabilityNote: "Agentes de leitura financeira e operadores supervisionados ativos; DevAgent S7 é roadmap futuro.",
    whatsappOrigin: "agentes",
    ctaLabel: "Conversar sobre Agentes no WhatsApp",
    accentColor: "#7654E8",
    illustrationKey: "automacoes",
    problemStatement: {
      title: "O risco de agentes 'mágicos' sem supervisão",
      points: [
        "Ferramentas prometem autonomia total, mas erram silenciosamente em dados sensíveis.",
        "Falta clareza sobre o que o agente pode ler, o que pode alterar e o que é proibido.",
        "Scripts externos rodados sem isolamento colocam credenciais e bancos em risco.",
      ],
    },
    solutionPillars: [
      {
        title: "FinanceAgent 100% somente leitura",
        description:
          "Consulta receitas, despesas, faturas, cartões e comparativos de período com precisão decimal, sem nunca alterar lançamentos ou movimentar dinheiro.",
        highlight: "Leitura auditada",
      },
      {
        title: "Escrita supervisionada em Projetos e Finanças",
        description:
          "Operadores especializados preparam tarefas ou lançamentos organizacionais e pausam aguardando sua aprovação de uso único.",
        highlight: "Human-in-the-loop real",
      },
      {
        title: "Skills abertas (SKILL.md) e honestidade de status",
        description:
          "Separa Agente, Skill, Tool e Runtime. Artefatos externos que exigem ambiente isolado nunca fingem estar prontos sem homologação.",
        highlight: "Installed != Ready",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: aprovação humana antes de criar tarefas",
      badge: "Demonstração simulada",
      input: "Transforme a ata da reunião em 4 tarefas distribuídas para o sprint da semana.",
      steps: [
        "O agente analisa a ata no workspace autorizado e propõe 4 tarefas estruturadas",
        "Gera um cartão de aprovação vinculado exatamente aos argumentos das 4 tarefas",
        "Você revisa na Web ou no WhatsApp e aprova — só então a escrita acontece",
      ],
      result:
        "Ganho real de velocidade sem abrir mão da palavra final sobre o que entra no seu sistema.",
    },
    faq: [
      {
        question: "Os agentes podem fazer pagamentos ou transferências bancárias?",
        answer:
          "Não. Movimentações bancárias reais e pagamentos automáticos são proibidos na arquitetura do EuVerso.",
      },
      {
        question: "O DevAgent para programar e abrir Pull Requests já está disponível?",
        answer:
          "Não. O DevAgent (S7.1) e blocos de PR fazem parte do roadmap futuro da etapa S7 e permanecem explicitamente marcados como não disponíveis hoje.",
      },
      {
        question: "Posso importar skills externas?",
        answer:
          "Sim, o catálogo suporta inspeção segura de pacotes SKILL.md (GitHub/ZIP) com validação contra ameaças, e qualquer execução externa exige ambiente efêmero isolado e aprovação.",
      },
    ],
    relatedLinks: [
      { href: "/automacoes-com-ia", label: "Automações com IA", summary: "Combine agentes em workflows configuráveis." },
      { href: "/workflow-studio", label: "Workflow Studio", summary: "Monte e valide fluxos visualmente." },
      { href: "/ia-para-empresas", label: "IA para Empresas", summary: "Governança, auditoria e BYOK." },
    ],
  },
  "automacoes-com-ia": {
    slug: "automacoes-com-ia",
    navTitle: "Automações com IA",
    metaTitle: "Automação de Processos com IA e Acompanhamento — EuVerso",
    metaDescription:
      "Transforme solicitações em workflows configuráveis com validação, aprovação humana e acompanhamento no Mission Control. Conheça a plataforma de automações do EuVerso.",
    keywords: [
      "automação de processos com IA",
      "plataforma de automação com IA",
      "criação de workflows com IA",
      "Mission Control IA",
    ],
    eyebrow: "AUTOMAÇÕES · DA CONVERSA À EXECUÇÃO",
    h1: "Da conversa à execução supervisionada, etapa por etapa.",
    subtitle:
      "Transforme pedidos recorrentes em workflows configuráveis com validação prévia, pausas para aprovação humana e acompanhamento transparente no Mission Control.",
    availability: "em_validacao",
    availabilityNote:
      "Plataforma de Workflows (S6) implementada e em validação controlada antes da liberação geral em produção.",
    whatsappOrigin: "automacoes",
    ctaLabel: "Conhecer Automações pelo WhatsApp",
    accentColor: "#FDC616",
    illustrationKey: "automacoes",
    problemStatement: {
      title: "Por que automações improvisadas quebram na prática",
      points: [
        "Scripts soltos falham em silêncio e ninguém sabe em qual etapa pararam.",
        "Sem simulação prévia, um erro de configuração dispara ações indesejadas.",
        "Falta limite de custo em chamadas de IA e falta aprovação humana no meio do caminho.",
      ],
    },
    solutionPillars: [
      {
        title: "Da linguagem natural ao fluxo rascunho",
        description:
          "Descreva o processo ao Pulse e receba uma proposta de workflow em modo rascunho (Draft) para revisar antes de publicar.",
        highlight: "Sempre revisável antes de ativar",
      },
      {
        title: "Validação e Dry-Run sem efeitos colaterais",
        description:
          "Antes de rodar de verdade, o EuVerso valida conexões, permissões e permite simular o fluxo sem gravar dados reais.",
        highlight: "Zero surpresa na publicação",
      },
      {
        title: "Mission Control e teto FinOps",
        description:
          "Acompanhe status, etapas, aprovações pendentes e histórico com política de zero retry automático em chamadas faturáveis de IA.",
        highlight: "Visibilidade e previsibilidade",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: rotina semanal de consolidação e revisão",
      badge: "Demonstração simulada · S6 em validação",
      input: "Toda sexta às 16h, revise entregas da semana, destaque bloqueios e aguarde minha aprovação antes de gerar o resumo.",
      steps: [
        "1. Solicitação convertida em blocos editáveis no Workflow Studio",
        "2. Validação estrutural + simulação Dry-Run aprovadas",
        "3. Execução pausada no checkpoint humano aguardando sua decisão",
      ],
      result:
        "Rotina previsível, rastreável no Mission Control e 100% sob controle de quem responde pela operação.",
    },
    faq: [
      {
        question: "As automações da S6 já estão abertas para todos os clientes?",
        answer:
          "A arquitetura de workflows (Workflow Studio, executor durável e Mission Control) está implementada e em fase de validação controlada. Converse pelo WhatsApp para acompanhar o cronograma de liberação.",
      },
      {
        question: "Existe risco de uma automação disparar custos infinitos de IA?",
        answer:
          "Não. A arquitetura proíbe retries automáticos em chamadas faturáveis de IA e conta com controles de teto configuráveis por workspace.",
      },
      {
        question: "Preciso saber programar para criar um workflow?",
        answer:
          "Não. Você pode partir de templates em rascunho, montar visualmente no Workflow Studio ou pedir uma proposta inicial ao Pulse.",
      },
    ],
    relatedLinks: [
      { href: "/workflow-studio", label: "Workflow Studio", summary: "Veja o editor visual de blocos e conexões." },
      { href: "/agentes-de-ia", label: "Agentes de IA", summary: "Entenda o papel dos agentes dentro dos fluxos." },
      { href: "/planos", label: "Planos", summary: "Veja em quais planos as automações entram." },
    ],
  },
  "workflow-studio": {
    slug: "workflow-studio",
    navTitle: "Workflow Studio",
    metaTitle: "Workflow Studio — Crie Automações com IA Visualmente no EuVerso",
    metaDescription:
      "Desenhe, valide e simule workflows com IA usando blocos visuais, templates em rascunho e checkpoints de aprovação humana no Workflow Studio do EuVerso.",
    keywords: [
      "criação de workflows com IA",
      "Workflow Studio",
      "editor visual de automações com IA",
      "simulação de workflows Dry-Run",
    ],
    eyebrow: "WORKFLOW STUDIO · EDITOR VISUAL",
    h1: "Crie automações visualmente — com validação e simulação antes de rodar.",
    subtitle:
      "Conecte gatilhos, blocos de análise, agentes autorizados e checkpoints humanos em um canvas limpo, com versionamento e Dry-Run sem efeitos colaterais.",
    availability: "em_validacao",
    availabilityNote:
      "Workflow Studio em validação na entrega S6. Blocos futuros de engenharia (S7) permanecem claramente indisponíveis.",
    whatsappOrigin: "workflow-studio",
    ctaLabel: "Ver o Workflow Studio pelo WhatsApp",
    accentColor: "#7654E8",
    illustrationKey: "automacoes",
    problemStatement: {
      title: "Por que editores de automação comuns assustam quem não é dev",
      points: [
        "Telas confusas cheias de JSON técnico escondem o que o fluxo realmente faz.",
        "Qualquer ajuste sem validação pode quebrar a rotina em produção.",
        "Difícil saber onde inserir uma aprovação humana no meio do processo.",
      ],
    },
    solutionPillars: [
      {
        title: "Catálogo claro de blocos por categoria",
        description:
          "Gatilhos, consultas, decisões, agentes autorizados, aprovações humanas e saídas organizados com status honesto de disponibilidade.",
        highlight: "Blocos declarativos",
      },
      {
        title: "Templates que nascem em rascunho",
        description:
          "Clone um template oficial sempre em modo Draft para ajustar regras, workspace e checkpoints antes de ativar.",
        highlight: "Zero ativação acidental",
      },
      {
        title: "Versionamento imutável e rollback",
        description:
          "Publique versões com segurança e volte para uma versão anterior caso queira ajustar o comportamento da rotina.",
        highlight: "Histórico confiável",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: fluxo visual de triagem e aprovação",
      badge: "Representação do Workflow Studio · S6 em validação",
      input: "Gatilho de entrada -> Análise contextual -> Checkpoint humano -> Ação no workspace",
      steps: [
        "Bloco 1 (Gatilho): Novo pedido ou evento autorizado no workspace",
        "Bloco 2 (IA / Agente): Classifica prioridade e prepara plano de ação",
        "Bloco 3 (Aprovação): Pausa aguardando confirmação humana",
        "Bloco 4 (Saída): Registra tarefas e envia resumo no Mission Control",
      ],
      result:
        "Fluxo compreensível em segundos, validado no servidor e simulado antes da primeira execução real.",
    },
    faq: [
      {
        question: "O que é o modo Dry-Run do Workflow Studio?",
        answer:
          "É uma simulação que verifica a estrutura do fluxo e projeta o comportamento das etapas sem gravar alterações reais nos seus dados.",
      },
      {
        question: "Todos os blocos do catálogo já executam hoje?",
        answer:
          "Não. Blocos reservados à etapa S7 (como agentes de código e abertura de Pull Request) aparecem de forma transparente como indisponíveis até sua futura homologação.",
      },
      {
        question: "Posso editar um workflow que o Pulse criou para mim?",
        answer:
          "Sim. O Pulse gera o fluxo em modo rascunho justamente para você inspecionar e refinar cada bloco no Workflow Studio.",
      },
    ],
    relatedLinks: [
      { href: "/automacoes-com-ia", label: "Automações com IA", summary: "Entenda o ciclo completo até o Mission Control." },
      { href: "/agentes-de-ia", label: "Agentes de IA", summary: "Conheça os agentes disponíveis hoje." },
      { href: "/planos", label: "Planos", summary: "Confira os planos Pro, Business e Enterprise." },
    ],
  },
  "ia-para-produtividade": {
    slug: "ia-para-produtividade",
    navTitle: "IA para Produtividade",
    metaTitle: "IA para Produtividade e Organização de Tarefas — EuVerso",
    metaDescription:
      "Organize projetos, tarefas, rotina pessoal e trabalho com uma IA contextual que entende seus mundos e transforma conversas em próximos passos.",
    keywords: [
      "IA para produtividade",
      "software para organizar tarefas com IA",
      "assistente pessoal com IA",
      "organizar rotina com inteligência artificial",
    ],
    eyebrow: "SOLUÇÃO · PRODUTIVIDADE CONTEXTUAL",
    h1: "Software para organizar tarefas, rotina e projetos com IA que conhece seu contexto.",
    subtitle:
      "Pare de copiar e colar instruções entre apps de notas, listas de tarefas e chats de IA. Reúna seus espaços no EuVerso e transforme intenção em ação acompanhável.",
    availability: "disponivel",
    availabilityNote: "Workspaces, Pulse, projetos, tarefas, finanças e memória já disponíveis.",
    whatsappOrigin: "produtividade",
    ctaLabel: "Organizar minha rotina com o EuVerso",
    accentColor: "#5BD8B6",
    illustrationKey: "hero",
    problemStatement: {
      title: "Produtividade não é fazer mais listas — é parar de reconstruir contexto",
      points: [
        "Você anota tarefas em um app, guarda ideias em outro e conversa com a IA num terceiro.",
        "No fim da semana, o tempo vai embora reorganizando o que já estava anotado.",
        "Falta um lugar único onde sua vida pessoal e seu trabalho convivam sem se atropelar.",
      ],
    },
    solutionPillars: [
      {
        title: "Um universo limpo para cada frente",
        description:
          "Mantenha Casa, Estudos, Clientes e Projetos em workspaces próprios, alternando com um clique.",
        highlight: "Menos ruído mental",
      },
      {
        title: "Do pedido rápido ao plano estruturado",
        description:
          "Descreva o que precisa resolver para o Pulse e receba prioridades, etapas e tarefas prontas para aprovar.",
        highlight: "Menos atrito para começar",
      },
      {
        title: "Memória que acompanha sua semana",
        description:
          "Continuidade entre conversas para retomar projetos exatamente de onde você parou, sem repetir tudo.",
        highlight: "Continuidade real",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: organizando uma semana cheia em 2 minutos",
      badge: "Demonstração simulada",
      input: "Tenho 3 entregas de clientes e preciso fechar o orçamento do mês sem estourar minha agenda.",
      steps: [
        "O Pulse separa os itens no workspace Trabalho e no workspace Pessoal",
        "Propõe blocos de foco com ordem realista de entregas",
        "Pede sua confirmação para registrar as tarefas e lembretes",
      ],
      result:
        "Semana planejada com clareza, prioridades reais e acompanhamento no mesmo lugar.",
    },
    faq: [
      {
        question: "Preciso ser uma empresa para usar o EuVerso?",
        answer:
          "Não. O plano Essencial foi pensado justamente para pessoas físicas, e o Pro para autônomos e empreendedores individuais.",
      },
      {
        question: "O EuVerso substitui ferramentas gigantes de gestão?",
        answer:
          "Ele foi desenhado para centralizar sua rotina, projetos, finanças e IA contextual com menos fragmentação. Se sua operação exige integrações específicas, avaliamos junto com você pelo WhatsApp.",
      },
      {
        question: "Posso controlar o que o Pulse lembra sobre mim?",
        answer:
          "Sim. A memória em 3 níveis permite visualizar, corrigir e excluir registros de forma auditável.",
      },
    ],
    relatedLinks: [
      { href: "/pulse", label: "Pulse", summary: "Conheça a inteligência central do EuVerso." },
      { href: "/workspaces", label: "Workspaces", summary: "Entenda a separação entre vida pessoal e trabalho." },
      { href: "/planos", label: "Planos", summary: "Veja os planos Essencial e Pro." },
    ],
  },
  "ia-para-empresas": {
    slug: "ia-para-empresas",
    navTitle: "IA para Empresas",
    metaTitle: "IA para Pequenas Empresas e Equipes com Governança — EuVerso",
    metaDescription:
      "Adote agentes de IA, workspaces compartilhados, permissões RBAC, aprovações humanas e BYOK com segurança na sua empresa.",
    keywords: [
      "IA para pequenas empresas",
      "agentes de IA para empresas",
      "governança de IA BYOK",
      "automação de processos com IA para equipes",
    ],
    eyebrow: "SOLUÇÃO · EMPRESAS E EQUIPES",
    h1: "Inteligência artificial para pequenas empresas e equipes — com papéis, aprovações e governança.",
    subtitle:
      "Saia do uso informal e descontrolado de chatbots. Dê à sua equipe espaços compartilhados, agentes supervisionados, controle de consumo e trilha de auditoria.",
    availability: "disponivel",
    availabilityNote:
      "Multi-workspace, RBAC, BYOK KMS e aprovações em produção; automações de equipe S6 em validação.",
    whatsappOrigin: "empresas",
    ctaLabel: "Falar sobre o EuVerso para Empresas",
    accentColor: "#7654E8",
    illustrationKey: "automacoes",
    problemStatement: {
      title: "O dilema da IA nas empresas hoje",
      points: [
        "Cada pessoa da equipe usa contas pessoais soltas, sem padrão nem visibilidade de custo.",
        "Informações internas são coladas em chats sem separação de papéis ou auditoria.",
        "Falta um jeito seguro de automatizar rotinas mantendo aprovação humana nas decisões críticas.",
      ],
    },
    solutionPillars: [
      {
        title: "Workspaces compartilhados com RBAC",
        description:
          "Defina quem administra (Owner/Admin), quem opera (Member) e quem apenas acompanha (Viewer), sem expor chaves nem dados restritos.",
        highlight: "Controle por papel",
      },
      {
        title: "BYOK com cofre criptografado em Cloud KMS",
        description:
          "Use chaves oficiais da OpenAI, Gemini, Vertex AI ou Anthropic isoladas por workspace, com limites configuráveis e zero retry faturável.",
        highlight: "FinOps e propriedade dos dados",
      },
      {
        title: "Aprovações e acompanhamento operacional",
        description:
          "Decisões críticas passam por confirmação humana de uso único com trilha auditável de quem aprovou e qual operação foi executada.",
        highlight: "Confiança para escalar",
      },
    ],
    demoExample: {
      title: "Exemplo guiado: operação de equipe com aprovação explícita",
      badge: "Demonstração simulada",
      input: "Analista solicita atualização de plano de entregas no workspace 'Operação Comercial'.",
      steps: [
        "RBAC valida que o membro tem permissão operacional no workspace da empresa",
        "Agente estrutura alterações propostas e envia pedido de aprovação à liderança",
        "Auditoria registra aprovação, consumo de IA e resultado sem armazenar prompts brutos",
      ],
      result:
        "Equipe mais rápida com governança real, previsibilidade de uso e zero improviso.",
    },
    faq: [
      {
        question: "O EuVerso usa assinaturas pessoais de chat por baixo dos panos?",
        answer:
          "Não. A plataforma integra exclusivamente APIs oficiais dos provedores suportados (OpenAI, Google Gemini, Google Vertex AI e Anthropic).",
      },
      {
        question: "Como funciona a proposta para empresas maiores (Enterprise)?",
        answer:
          "O plano Enterprise é desenhado sob consulta para operações que demandam governança avançada, avaliação técnica de integrações e condições comerciais sob medida.",
      },
      {
        question: "O EuVerso grava nossos prompts em logs de auditoria?",
        answer:
          "Não. Os registros de uso e FinOps armazenam metadados auditáveis de consumo e estado, sem salvar prompts nem respostas brutas.",
      },
    ],
    relatedLinks: [
      { href: "/workspaces", label: "Workspaces", summary: "Veja o isolamento por workspace e papéis RBAC." },
      { href: "/automacoes-com-ia", label: "Automações com IA", summary: "Conheça workflows e Mission Control." },
      { href: "/planos", label: "Planos Business e Enterprise", summary: "Compare os formatos comerciais." },
    ],
  },
};
