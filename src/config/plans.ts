import type { WhatsAppOrigin } from "./site";

export interface CommercialPlan {
  id: "essencial" | "pro" | "business" | "enterprise";
  name: string;
  eyebrow: string;
  audience: string;
  priceDisplay: string;
  priceNote: string;
  accentColor: string;
  featured?: boolean;
  ctaLabel: string;
  whatsappOrigin: WhatsAppOrigin;
  highlights: string[];
  idealFor: string;
}

/**
 * Configuração comercial 100% editável.
 * Os valores exibidos ("R$ XXX" e "Sob consulta") são placeholders visuais
 * sujeitos à aprovação comercial antes da publicação oficial.
 */
export const COMMERCIAL_PLANS_NOTICE =
  "Proposta comercial em estruturação — valores, limites e condições finais sujeitos à aprovação comercial antes da contratação.";

export const COMMERCIAL_PLANS: CommercialPlan[] = [
  {
    id: "essencial",
    name: "Essencial",
    eyebrow: "ORGANIZAÇÃO PESSOAL",
    audience: "Para pessoas que desejam organização clara e IA contextual no dia a dia.",
    priceDisplay: "R$ XXX",
    priceNote: "Valor comercial em definição",
    accentColor: "#5BD8B6",
    ctaLabel: "Consultar plano Essencial",
    whatsappOrigin: "plan-essencial",
    idealFor: "Rotina individual, finanças e projetos pessoais em um espaço limpo.",
    highlights: [
      "Pulse com IA contextual",
      "Workspace pessoal dedicado",
      "Projetos e tarefas organizados",
      "Memória essencial com controle de exclusão",
      "Organização pessoal centralizada",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    eyebrow: "AUTÔNOMOS E EMPREENDEDORES",
    audience: "Para profissionais e empreendedores individuais que gerenciam múltiplos mundos.",
    priceDisplay: "R$ XXX",
    priceNote: "Valor comercial em definição",
    accentColor: "#FDC616",
    featured: true,
    ctaLabel: "Consultar plano Pro",
    whatsappOrigin: "plan-pro",
    idealFor: "Separar vida pessoal, clientes e projetos próprios com apoio de automações.",
    highlights: [
      "Tudo do plano Essencial",
      "Workspaces adicionais isolados",
      "Automações configuráveis (conforme liberação)",
      "Templates editáveis em modo rascunho",
      "Maior capacidade de recursos de IA",
    ],
  },
  {
    id: "business",
    name: "Business",
    eyebrow: "PEQUENAS EMPRESAS E EQUIPES",
    audience: "Para operações que precisam de colaboração, papéis claros e supervisão.",
    priceDisplay: "R$ XXX",
    priceNote: "Valor comercial em definição",
    accentColor: "#7654E8",
    ctaLabel: "Falar sobre o Business",
    whatsappOrigin: "plan-business",
    idealFor: "Equipes que querem delegar tarefas repetitivas sem abrir mão de aprovações.",
    highlights: [
      "Tudo do plano Pro",
      "Espaços compartilhados entre membros",
      "Permissões por papel (Owner, Admin, Member, Viewer)",
      "Automações de equipe supervisionadas",
      "Mission Control e acompanhamento de etapas",
      "Fluxo formal de aprovações humanas",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    eyebrow: "OPERAÇÕES COMPLEXAS",
    audience: "Para empresas com requisitos avançados de governança, integrações e arquitetura.",
    priceDisplay: "Sob consulta",
    priceNote: "Condições comerciais personalizadas",
    accentColor: "#FF8169",
    ctaLabel: "Conversar sobre Enterprise",
    whatsappOrigin: "plan-enterprise",
    idealFor: "Organizações que exigem desenho sob medida de governança, BYOK e integrações.",
    highlights: [
      "Tudo do plano Business",
      "Governança avançada e trilha de auditoria",
      "Integrações e conectores sob avaliação técnica",
      "Configurações corporativas e políticas BYOK",
      "Condições comerciais desenhadas sob consulta",
    ],
  },
];

export interface PlanComparisonRow {
  capability: string;
  note?: string;
  essencial: string;
  pro: string;
  business: string;
  enterprise: string;
}

export const PLAN_COMPARISON_ROWS: PlanComparisonRow[] = [
  {
    capability: "Pulse (IA com contexto autorizado)",
    essencial: "Incluído",
    pro: "Incluído",
    business: "Incluído",
    enterprise: "Incluído",
  },
  {
    capability: "Separação em Workspaces",
    essencial: "Workspace pessoal",
    pro: "Workspaces adicionais",
    business: "Espaços compartilhados",
    enterprise: "Arquitetura corporativa",
  },
  {
    capability: "Projetos, tarefas e organização",
    essencial: "Incluído",
    pro: "Incluído",
    business: "Incluído",
    enterprise: "Incluído",
  },
  {
    capability: "Memória contextual",
    essencial: "Memória essencial",
    pro: "Memória expandida",
    business: "Por conversa e workspace",
    enterprise: "Políticas sob medida",
  },
  {
    capability: "Automações & Templates",
    note: "Sujeito à validação S6",
    essencial: "—",
    pro: "Incluído",
    business: "Automações de equipe",
    enterprise: "Avançadas sob avaliação",
  },
  {
    capability: "Permissões RBAC e papéis",
    essencial: "Uso individual",
    pro: "Uso individual",
    business: "Incluído",
    enterprise: "Governança avançada",
  },
  {
    capability: "Mission Control & Aprovações",
    note: "Mission Control em validação S6",
    essencial: "Aprovações básicas",
    pro: "Aprovações supervisionadas",
    business: "Mission Control + aprovações",
    enterprise: "Auditoria e fluxos corporativos",
  },
  {
    capability: "Integrações & Governança BYOK",
    essencial: "Padrão",
    pro: "Recursos ampliados",
    business: "Gestão por workspace",
    enterprise: "Sob avaliação técnica",
  },
];
