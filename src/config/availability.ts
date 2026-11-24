export type AvailabilityStatus =
  | "disponivel"
  | "disponivel_com_restricoes"
  | "em_validacao"
  | "em_desenvolvimento"
  | "roadmap";

export type CommercialPriority = "P1" | "P2" | "P3";

export interface AvailabilityMeta {
  label: string;
  shortLabel: string;
  dotColor: string;
  surfaceClass: string;
  description: string;
}

export const AVAILABILITY_META: Record<AvailabilityStatus, AvailabilityMeta> = {
  disponivel: {
    label: "Disponível",
    shortLabel: "Disponível",
    dotColor: "#15803D",
    surfaceClass: "bg-[#DCFCE7] text-[#14532D] border-[#080808]",
    description: "Recurso ativo e homologado na plataforma EuVerso.",
  },
  disponivel_com_restricoes: {
    label: "Disponível com restrições",
    shortLabel: "Com restrições",
    dotColor: "#B45309",
    surfaceClass: "bg-[#FEF3C7] text-[#78350F] border-[#080808]",
    description: "Disponível mediante habilitação específica, políticas de segurança ou limites do canal.",
  },
  em_validacao: {
    label: "Em validação",
    shortLabel: "Em validação",
    dotColor: "#6D28D9",
    surfaceClass: "bg-[#EDE9FE] text-[#4C1D95] border-[#080808]",
    description: "Implementado em fase de homologação e validação controlada antes da liberação geral.",
  },
  em_desenvolvimento: {
    label: "Em desenvolvimento",
    shortLabel: "Em desenvolvimento",
    dotColor: "#0369A1",
    surfaceClass: "bg-[#E0F2FE] text-[#0C4A6E] border-[#080808]",
    description: "Em construção ativa dentro do ciclo atual do produto.",
  },
  roadmap: {
    label: "Roadmap",
    shortLabel: "Roadmap futuro",
    dotColor: "#52525B",
    surfaceClass: "bg-[#F4F4F5] text-[#27272A] border-[#080808]",
    description: "Previsto para ciclos futuros. Não constitui entrega imediata.",
  },
};

export interface FeatureMatrixItem {
  id: string;
  name: string;
  priority: CommercialPriority;
  availability: AvailabilityStatus;
  commercialImpact: "Alto" | "Médio" | "Base";
  clarity: "Imediata" | "Moderada" | "Técnica";
  differentiation: "Central" | "Forte" | "Apoio";
  summary: string;
  honestNote: string;
  href?: string;
}

export const FEATURE_MATRIX: FeatureMatrixItem[] = [
  // Prioridade P1 — Núcleo comercial
  {
    id: "pulse",
    name: "Pulse (IA Contextual)",
    priority: "P1",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Inteligência central que opera com o contexto autorizado dos seus workspaces, sem misturar universos.",
    honestNote: "Opera sobre contexto autorizado do usuário e credenciais BYOK configuradas no workspace.",
    href: "/pulse",
  },
  {
    id: "workspaces",
    name: "Workspaces Isolados",
    priority: "P1",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Separação real entre vida pessoal, projetos independentes e empresas, com papéis de acesso (RBAC).",
    honestNote: "Isolamento validado no servidor por workspace com papéis Owner, Admin, Member e Viewer.",
    href: "/workspaces",
  },
  {
    id: "agentes",
    name: "Agentes Supervisionados",
    priority: "P1",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Capacidades especializadas para análise financeira somente leitura e apoio supervisionado a projetos e tarefas.",
    honestNote: "Qualquer escrita por agente passa por aprovação humana explícita; movimentações bancárias reais são proibidas.",
    href: "/agentes-de-ia",
  },
  {
    id: "automacoes",
    name: "Automações & Workflows",
    priority: "P1",
    availability: "em_validacao",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Transformação de solicitações em workflows configuráveis com validação, simulação e aprovação.",
    honestNote: "Plataforma de workflows S6 concluída em ambiente de homologação; liberação produtiva sujeita à conclusão da validação.",
    href: "/automacoes-com-ia",
  },
  {
    id: "mission-control",
    name: "Mission Control",
    priority: "P1",
    availability: "em_validacao",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Painel centralizado para acompanhar execuções, etapas, aprovações pendentes, custos e histórico.",
    honestNote: "Integrado ao ciclo de validação da plataforma de workflows S6 antes da disponibilidade ampla.",
    href: "/automacoes-com-ia#mission-control",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Oficial",
    priority: "P1",
    availability: "disponivel_com_restricoes",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Forte",
    summary: "Canal comercial principal e, quando habilitado, canal oficial conectado à mesma thread do Pulse.",
    honestNote: "Usa exclusivamente a Meta Cloud API oficial com vínculo por código OTP e respeito à janela de 24h.",
    href: "/contato",
  },

  // Prioridade P2 — Recursos de produto
  {
    id: "memoria",
    name: "Memória em 3 Níveis & Continuidade",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Moderada",
    differentiation: "Forte",
    summary: "Memória separada por conversa, workspace e preferências duráveis, com proveniência e exclusão auditável.",
    honestNote: "Segredos são bloqueados automaticamente e não existe fusão silenciosa entre workspaces.",
    href: "/pulse",
  },
  {
    id: "projetos-tarefas",
    name: "Projetos & Tarefas",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Forte",
    summary: "Organização de iniciativas, entregas e próximos passos dentro de cada workspace com apoio do Pulse.",
    honestNote: "Integrado ao fluxo de criação supervisionada de tarefas e acompanhamento diário.",
    href: "/ia-para-produtividade",
  },
  {
    id: "financas",
    name: "Gestão Financeira Contextual",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Médio",
    clarity: "Imediata",
    differentiation: "Forte",
    summary: "Controle de receitas, despesas, cartões e faturas com consultas precisas via FinanceAgent.",
    honestNote: "Agente de leitura auditado; o EuVerso não realiza pagamentos ou transferências bancárias automáticas.",
    href: "/funcionalidades",
  },
  {
    id: "workflow-studio",
    name: "Workflow Studio Visual",
    priority: "P2",
    availability: "em_validacao",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Editor visual de blocos e conexões com validação estrutural e simulação Dry-Run sem efeitos colaterais.",
    honestNote: "Em validação final junto ao ciclo S6; blocos futuros de engenharia permanecem bloqueados até a S7.",
    href: "/workflow-studio",
  },
  {
    id: "templates",
    name: "Templates de Workflow",
    priority: "P2",
    availability: "em_validacao",
    commercialImpact: "Médio",
    clarity: "Imediata",
    differentiation: "Forte",
    summary: "Modelos iniciais prontos para clonar em modo rascunho, revisar e adaptar à sua operação.",
    honestNote: "Templates sempre nascem como rascunho para revisão antes de qualquer ativação.",
    href: "/workflow-studio",
  },
  {
    id: "aprovacoes",
    name: "Aprovações Humanas (Human-in-the-Loop)",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Alto",
    clarity: "Imediata",
    differentiation: "Central",
    summary: "Aprovação de uso único vinculada aos argumentos exatos da ação, na Web e no WhatsApp.",
    honestNote: "Revalidação no servidor imediatamente antes da execução com proteção contra repetição.",
    href: "/agentes-de-ia",
  },
  {
    id: "modelos-byok",
    name: "Modelos de IA & BYOK",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Médio",
    clarity: "Moderada",
    differentiation: "Forte",
    summary: "Suporte a OpenAI, Google Gemini, Google Vertex AI e Anthropic Claude com cofre criptografado por workspace.",
    honestNote: "Usa apenas APIs oficiais e envelope encryption em Cloud KMS; zero retry automático em chamadas faturáveis.",
    href: "/ia-para-empresas",
  },
  {
    id: "notificacoes",
    name: "Notificações & Caixa Contextual",
    priority: "P2",
    availability: "disponivel",
    commercialImpact: "Médio",
    clarity: "Imediata",
    differentiation: "Apoio",
    summary: "Alertas de aprovações, andamento de atividades e leitura isolada de mensagens.",
    honestNote: "Paginação escalável e renderização segura de conteúdo externo em sandbox.",
    href: "/funcionalidades",
  },

  // Prioridade P3 — Governança, extensibilidade e infraestrutura
  {
    id: "integracoes-mcp",
    name: "Integrações, Skills (SKILL.md) & MCP",
    priority: "P3",
    availability: "disponivel_com_restricoes",
    commercialImpact: "Médio",
    clarity: "Técnica",
    differentiation: "Forte",
    summary: "Importação inspecionada de skills externas e conexão controlada a ferramentas MCP por allowlist.",
    honestNote: "Artefatos externos não executam dentro da API principal; exigem ambiente efêmero isolado e aprovação.",
    href: "/ia-para-empresas",
  },
  {
    id: "auditoria-governanca",
    name: "Auditoria, Governança & FinOps",
    priority: "P3",
    availability: "disponivel",
    commercialImpact: "Médio",
    clarity: "Técnica",
    differentiation: "Forte",
    summary: "Registro de uso sem salvar prompts brutos, limites de consumo e rastreabilidade de consultas cruzadas.",
    honestNote: "Controle de teto configurável por workspace e separação estrita de permissões por papel.",
    href: "/ia-para-empresas",
  },
  {
    id: "orquestracao-duravel",
    name: "Infraestrutura de Orquestração Durável",
    priority: "P3",
    availability: "em_validacao",
    commercialImpact: "Base",
    clarity: "Técnica",
    differentiation: "Apoio",
    summary: "Fundação dedicada para execução confiável, pausas de aprovação e retomada controlada de workflows.",
    honestNote: "Fundação homologada para desenvolvimento e testes da S6; promoção de alta escala planejada antes de grandes volumes.",
    href: "/automacoes-com-ia",
  },
  {
    id: "devagent-s7",
    name: "DevAgent & Automação de Pull Requests (S7)",
    priority: "P3",
    availability: "roadmap",
    commercialImpact: "Médio",
    clarity: "Moderada",
    differentiation: "Apoio",
    summary: "Agentes especializados em engenharia de software e abertura automatizada de PRs previstos para a etapa S7.",
    honestNote: "Roadmap futuro (S7.1+). Não disponível para contratação ou uso imediato.",
    href: "/agentes-de-ia#roadmap",
  },
];

export function getFeatureById(id: string): FeatureMatrixItem | undefined {
  return FEATURE_MATRIX.find((item) => item.id === id);
}
