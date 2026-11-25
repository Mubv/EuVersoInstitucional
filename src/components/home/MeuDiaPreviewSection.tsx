import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FolderKanban,
  Lock,
  Mail,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { StatusDot } from "@/components/ui/StatusDot";

const MEU_DIA_PREVIEW_WIDGETS = [
  {
    id: "agenda",
    icon: CalendarDays,
    title: "Agenda do dia",
    accent: "#5BD8B6",
    tag: "Autorizado pelo usuário",
    lines: [
      "09:00–11:00 · Bloco de foco protegido",
      "15:00 · Alinhamento semanal do projeto",
    ],
  },
  {
    id: "emails",
    icon: Mail,
    title: "E-mails prioritários",
    accent: "#FF8169",
    tag: "Somente escopo conectado",
    lines: [
      "2 retornos de clientes aguardando revisão",
      "Rascunhos preparados (envio só após aprovação)",
    ],
  },
  {
    id: "financeiro",
    icon: Wallet,
    title: "Vencimentos da semana",
    accent: "#FDC616",
    tag: "Somente leitura auditada",
    lines: [
      "Consultoria operacional · vence dia 15",
      "Resumo do mês atualizado sem movimentação bancária",
    ],
  },
  {
    id: "projetos",
    icon: FolderKanban,
    title: "Prioridades de projetos",
    accent: "#7654E8",
    tag: "Workspace ativo",
    lines: [
      "3 entregas em andamento no workspace Trabalho",
      "1 aprovação pendente no Mission Control",
    ],
  },
  {
    id: "estudos",
    icon: BookOpen,
    title: "Estudos & leituras",
    accent: "#5BD8B6",
    tag: "Opcional",
    lines: [
      "Revisão de 20 min do módulo escolhido por você",
      "Apenas sobre materiais enviados no seu espaço",
    ],
  },
  {
    id: "rotina",
    icon: UtensilsCrossed,
    title: "Rotina & interesses",
    accent: "#FDC616",
    tag: "Personalizável",
    lines: [
      "Sugestão prática de jantar, filmes ou agenda esportiva",
      "Você ativa ou oculta cada bloco quando quiser",
    ],
  },
] as const;

export function MeuDiaPreviewSection() {
  return (
    <section
      id="meu-dia"
      className="bg-[#FFFFFF] border-t-2 border-[#080808] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                08 · MEU DIA · DASHBOARD PESSOAL
              </p>
              <StatusDot status="em_desenvolvimento" />
            </div>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Seu dia começa com clareza.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262626]">
              Um painel personalizável em construção na etapa S7 que reunirá widgets declarativos dos especialistas que você ativar — agenda, e-mails prioritários, vencimentos, projetos, estudos e rotina — conforme autorização e disponibilidade de cada agente.
            </p>
          </div>
        </div>

        {/* Painel ilustrativo fiel ao conceito Meu Dia Declarativo */}
        <div className="comic-panel-lg bg-grid-editorial mt-10 overflow-hidden bg-[#FFF9EC]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#080808] bg-[#080808] px-6 py-4 text-[#FFFFFF]">
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FDC616]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                PRÉVIA ILUSTRATIVA · MEU DIA DECLARATIVO (EM DESENVOLVIMENTO S7)
              </span>
            </div>
            <span className="font-mono text-xs text-[#D4D4D8]">
              Widgets montados sob sua autorização
            </span>
          </div>

          <div className="p-6 lg:p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MEU_DIA_PREVIEW_WIDGETS.map((widget) => {
                const Icon = widget.icon;
                return (
                  <article
                    key={widget.id}
                    className="comic-panel flex flex-col justify-between bg-[#FFFFFF] p-5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#080808]"
                          style={{ backgroundColor: widget.accent }}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              widget.accent === "#7654E8" ? "text-[#FFFFFF]" : "text-[#080808]"
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-[#52525B] uppercase">
                          {widget.tag}
                        </span>
                      </div>
                      <h3 className="font-display mt-4 text-lg leading-6 font-semibold text-[#080808]">
                        {widget.title}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {widget.lines.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm leading-5 text-[#262626]"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#080808]"
                              aria-hidden="true"
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-[#080808] bg-[#FFFFFF] p-4 sm:p-5">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-[#080808]" aria-hidden="true" />
              <p className="text-sm leading-6 text-[#262626]">
                <strong className="font-semibold text-[#080808]">
                  Privacidade e controle por padrão:
                </strong>{" "}
                cada widget lê apenas as capacidades que você autorizar naquele workspace. Informações sensíveis (como saúde ou documentos privados) não aparecem automaticamente e exigem consentimento explícito. Recurso em desenvolvimento na etapa S7, sujeito à homologação antes da liberação em produção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
