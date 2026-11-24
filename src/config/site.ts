export type WhatsAppOrigin =
  | "hero"
  | "header"
  | "pulse"
  | "workspaces"
  | "agentes"
  | "automacoes"
  | "workflow-studio"
  | "mission-control"
  | "funcionalidades"
  | "produtividade"
  | "empresas"
  | "persona-pf"
  | "persona-empreendedor"
  | "persona-equipes"
  | "seguranca"
  | "plan-essencial"
  | "plan-pro"
  | "plan-business"
  | "plan-enterprise"
  | "cta-final"
  | "floating"
  | "mobile-bar"
  | "contato";

export const SITE_CONFIG = {
  name: "EuVerso",
  tagline: "Uma inteligência para organizar seus mundos e fazer acontecer.",
  legalName: "EuVerso Tecnologia",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://euverso.com").replace(/\/$/, ""),
  appUrl: (process.env.NEXT_PUBLIC_APP_URL || "https://app.euverso.com").replace(/\/$/, ""),
  locale: "pt_BR",
  language: "pt-BR",
  themeColor: "#FDC616",
  /**
   * Variável oficial de destino comercial no WhatsApp.
   * Não inventar número: preencha NEXT_PUBLIC_WHATSAPP_NUMBER ou WHATSAPP_NUMBER
   * no formato internacional apenas com dígitos (ex.: 5511999999999).
   */
  whatsappNumber: (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    ""
  ).replace(/\D/g, ""),
  brandAssets: {
    logoLight: "/brand/euverso-logo-horizontal-light-cutout.webp",
    logoLightFallback: "/brand/euverso-logo-horizontal-light.png",
    logoDark: "/brand/euverso-logo-horizontal-dark-cutout.webp",
    logoDarkFallback: "/brand/euverso-logo-horizontal-dark.png",
    iconCutout: "/brand/euverso-icon-cutout.webp",
    iconDark: "/brand/euverso-icon-dark-tight.png",
    iconLight: "/brand/euverso-icon-light-tight.png",
  },
  illustrations: {
    hero: {
      webp: "/illustrations/01-hero-mundos-conectados.webp",
      webp640: "/illustrations/01-hero-mundos-conectados-640w.webp",
      png: "/illustrations/01-hero-mundos-conectados.png",
      width: 1024,
      height: 576,
      alt: "Ilustração Comic Tech do EuVerso mostrando uma pessoa conectando casa, rotina, equipe, projetos e automações com a presença orbital do Pulse",
    },
    pulse: {
      webp: "/illustrations/02-pulse-orbital.webp",
      webp640: "/illustrations/02-pulse-orbital-640w.webp",
      png: "/illustrations/02-pulse-orbital.png",
      width: 1024,
      height: 682,
      alt: "Ilustração do Pulse como uma presença orbital amarela cercada por agenda, tarefas, gráficos, conversas e fluxos no contexto do usuário",
    },
    automacoes: {
      webp: "/illustrations/03-automacoes-conexoes.webp",
      webp640: "/illustrations/03-automacoes-conexoes-640w.webp",
      png: "/illustrations/03-automacoes-conexoes.png",
      width: 1024,
      height: 682,
      alt: "Ilustração do núcleo EuVerso conectando conversas, listas, calendário, métricas e nós de automação em um fluxo supervisionado",
    },
  },
} as const;

export const WHATSAPP_MESSAGES: Record<WhatsAppOrigin, string> = {
  hero: "Olá! Conheci o EuVerso pelo site e quero entender como funciona.",
  header: "Olá! Quero conhecer o EuVerso e entender como organizar minha rotina e meus projetos.",
  pulse: "Olá! Quero conhecer o Pulse e ver como a IA contextual do EuVerso funciona na prática.",
  workspaces: "Olá! Quero entender como os Workspaces do EuVerso separam vida pessoal, trabalho e empresa.",
  agentes: "Olá! Quero saber mais sobre os agentes supervisionados do EuVerso.",
  automacoes: "Olá! Quero conhecer os recursos de automação do EuVerso.",
  "workflow-studio": "Olá! Quero conhecer o Workflow Studio do EuVerso e ver como criar automações visuais.",
  "mission-control": "Olá! Quero entender como o Mission Control acompanha execuções, aprovações e custos no EuVerso.",
  funcionalidades: "Olá! Vi as funcionalidades do EuVerso no site e quero conversar sobre o produto.",
  produtividade: "Olá! Quero usar o EuVerso para organizar minha produtividade com IA contextual.",
  empresas: "Olá! Quero entender como o EuVerso pode organizar processos e equipes na minha empresa.",
  "persona-pf": "Olá! Quero usar o EuVerso para organizar minha rotina pessoal, projetos e finanças.",
  "persona-empreendedor": "Olá! Sou empreendedor e quero conhecer o EuVerso para centralizar meus projetos e automações.",
  "persona-equipes": "Olá! Tenho interesse no EuVerso para minha equipe trabalhar com espaços compartilhados e controle.",
  seguranca: "Olá! Quero conhecer mais sobre segurança, permissões, aprovações e BYOK no EuVerso.",
  "plan-essencial": "Olá! Tenho interesse no plano Essencial do EuVerso e quero receber as condições comerciais.",
  "plan-pro": "Olá! Tenho interesse no plano Pro do EuVerso e quero saber mais detalhes.",
  "plan-business": "Olá! Tenho interesse na solução EuVerso para minha empresa.",
  "plan-enterprise": "Olá! Quero conversar sobre o EuVerso Enterprise.",
  "cta-final": "Olá! Quero conhecer o EuVerso pelo WhatsApp e ver como começar.",
  floating: "Olá! Estou navegando no site do EuVerso e gostaria de tirar algumas dúvidas.",
  "mobile-bar": "Olá! Conheci o EuVerso pelo celular e quero entender como funciona.",
  contato: "Olá! Vim pela página de contato do EuVerso e quero conversar com a equipe.",
};

export function hasConfiguredWhatsAppNumber(): boolean {
  return SITE_CONFIG.whatsappNumber.length >= 10;
}

export function getWhatsAppMessage(origin: WhatsAppOrigin, customNote?: string): string {
  const base = WHATSAPP_MESSAGES[origin] ?? WHATSAPP_MESSAGES.hero;
  return customNote ? `${base} ${customNote}` : base;
}

export function buildWhatsAppHref(origin: WhatsAppOrigin, customNote?: string): string | null {
  if (!hasConfiguredWhatsAppNumber()) {
    return null;
  }
  const text = encodeURIComponent(getWhatsAppMessage(origin, customNote));
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

export const MAIN_NAV_LINKS = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/pulse", label: "Pulse" },
  { href: "/workspaces", label: "Workspaces" },
  { href: "/automacoes-com-ia", label: "Automações" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
] as const;

export const FOOTER_NAV_GROUPS = {
  produto: [
    { href: "/funcionalidades", label: "Visão geral das funcionalidades" },
    { href: "/pulse", label: "Pulse — IA contextual" },
    { href: "/workspaces", label: "Workspaces isolados" },
    { href: "/agentes-de-ia", label: "Agentes supervisionados" },
    { href: "/automacoes-com-ia", label: "Automações com IA" },
    { href: "/workflow-studio", label: "Workflow Studio" },
  ],
  solucoes: [
    { href: "/ia-para-produtividade", label: "IA para produtividade pessoal" },
    { href: "/ia-para-empresas", label: "IA para pequenas empresas e equipes" },
    { href: "/planos", label: "Planos e proposta comercial" },
    { href: "/contato", label: "Falar pelo WhatsApp" },
  ],
} as const;
