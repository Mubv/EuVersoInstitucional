import { Check } from "lucide-react";
import {
  COMMERCIAL_PLANS,
  COMMERCIAL_PLANS_NOTICE,
  PLAN_COMPARISON_ROWS,
} from "@/config/plans";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

interface PlansGridProps {
  showComparison?: boolean;
}

export function PlansGrid({ showComparison = true }: PlansGridProps) {
  return (
    <div>
      {/* Aviso explícito de proposta comercial editável */}
      <div className="mb-8 rounded-2xl border-2 border-[#080808] bg-[#FFF9EC] p-4 sm:p-5">
        <p className="font-mono text-xs font-semibold tracking-wider text-[#080808] uppercase">
          PROPOSTA COMERCIAL EDITÁVEL · SEM PREÇOS INVENTADOS
        </p>
        <p className="mt-1 text-sm leading-6 text-[#262626]">{COMMERCIAL_PLANS_NOTICE}</p>
      </div>

      {/* 4 Planos */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {COMMERCIAL_PLANS.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col justify-between rounded-2xl border-2 border-[#080808] p-6 transition ${
              plan.featured
                ? "bg-[#080808] text-[#FFFFFF] shadow-[8px_8px_0_#FDC616]"
                : "bg-[#FFFFFF] text-[#080808] shadow-[4px_4px_0_#080808]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <p
                  className={`font-mono text-xs leading-4 font-semibold tracking-wider uppercase ${
                    plan.featured ? "text-[#FDC616]" : "text-[#52525B]"
                  }`}
                >
                  {plan.eyebrow}
                </p>
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full border border-[#080808]"
                  style={{ backgroundColor: plan.accentColor }}
                />
              </div>

              <h3 className="font-display mt-3 text-2xl leading-8 font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm leading-5 ${
                  plan.featured ? "text-[#E4E4E7]" : "text-[#262626]"
                }`}
              >
                {plan.audience}
              </p>

              <div
                className={`mt-6 rounded-xl border-2 p-4 ${
                  plan.featured
                    ? "border-[#FDC616] bg-[#141414]"
                    : "border-[#080808] bg-[#FFF9EC]"
                }`}
              >
                <p className="font-display text-3xl leading-9 font-semibold">{plan.priceDisplay}</p>
                <p
                  className={`mt-1 font-mono text-xs ${
                    plan.featured ? "text-[#D4D4D8]" : "text-[#52525B]"
                  }`}
                >
                  {plan.priceNote}
                </p>
              </div>

              <p
                className={`mt-5 text-xs leading-5 font-semibold uppercase tracking-wider font-mono ${
                  plan.featured ? "text-[#FDC616]" : "text-[#52525B]"
                }`}
              >
                Benefícios sugeridos
              </p>
              <ul className="mt-3 space-y-3">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? "text-[#FDC616]" : "text-[#080808]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <WhatsAppButton
                origin={plan.whatsappOrigin}
                label={plan.ctaLabel}
                planName={plan.name}
                extraEvent="plan_click"
                variant={plan.featured ? "primary-on-dark" : "secondary"}
                className="w-full text-sm"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Tabela comparativa clara das diferenças reais */}
      {showComparison && (
        <div className="comic-panel mt-12 overflow-hidden bg-[#FFFFFF]">
          <div className="border-b-2 border-[#080808] bg-[#FFF9EC] px-6 py-4">
            <h3 className="font-display text-xl leading-7 font-semibold text-[#080808]">
              Diferenças reais entre os planos
            </h3>
            <p className="mt-1 text-sm leading-5 text-[#262626]">
              Sem descontos fictícios, sem limites inventados de usuários e sem promessas de SLA não confirmadas.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#080808] bg-[#080808] text-[#FFFFFF]">
                  <th className="px-6 py-4 font-mono text-xs font-semibold uppercase">Capacidade</th>
                  <th className="px-4 py-4 font-mono text-xs font-semibold uppercase">Essencial</th>
                  <th className="px-4 py-4 font-mono text-xs font-semibold text-[#FDC616] uppercase">Pro</th>
                  <th className="px-4 py-4 font-mono text-xs font-semibold uppercase">Business</th>
                  <th className="px-4 py-4 font-mono text-xs font-semibold uppercase">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E4E7]">
                {PLAN_COMPARISON_ROWS.map((row) => (
                  <tr key={row.capability} className="hover:bg-[#FFF9EC]/60">
                    <td className="px-6 py-4 font-semibold text-[#080808]">
                      <div>{row.capability}</div>
                      {row.note && (
                        <div className="mt-0.5 font-mono text-xs font-normal text-[#52525B]">
                          {row.note}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4 text-[#262626]">{row.essencial}</td>
                    <td className="bg-[#FFF9EC]/70 px-4 py-4 font-semibold text-[#080808]">
                      {row.pro}
                    </td>
                    <td className="px-4 py-4 text-[#262626]">{row.business}</td>
                    <td className="px-4 py-4 text-[#262626]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
