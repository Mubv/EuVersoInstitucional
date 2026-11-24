"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AVAILABILITY_META,
  FEATURE_MATRIX,
  type AvailabilityStatus,
  type CommercialPriority,
} from "@/config/availability";
import { StatusDot } from "@/components/ui/StatusDot";

export function FeatureMatrixInteractive() {
  const [priorityFilter, setPriorityFilter] = useState<CommercialPriority | "ALL">("ALL");
  const [statusFilter, setStatusFilter] = useState<AvailabilityStatus | "ALL">("ALL");

  const filtered = FEATURE_MATRIX.filter((item) => {
    const matchP = priorityFilter === "ALL" || item.priority === priorityFilter;
    const matchS = statusFilter === "ALL" || item.availability === statusFilter;
    return matchP && matchS;
  });

  return (
    <div>
      {/* Filtros */}
      <div className="comic-panel mb-8 flex flex-col gap-4 bg-[#FFF9EC] p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-xs font-semibold text-[#52525B] uppercase">
            Prioridade:
          </span>
          {(["ALL", "P1", "P2", "P3"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriorityFilter(p)}
              className={`min-h-11 rounded-xl border-2 border-[#080808] px-4 text-xs font-semibold uppercase transition ${
                priorityFilter === p
                  ? "bg-[#FDC616] text-[#080808] shadow-[3px_3px_0_#080808]"
                  : "bg-[#FFFFFF] text-[#080808] hover:bg-[#FFF3C4]"
              }`}
            >
              {p === "ALL" ? "Todas" : p}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-xs font-semibold text-[#52525B] uppercase">
            Disponibilidade:
          </span>
          {(["ALL", "disponivel", "disponivel_com_restricoes", "em_validacao", "roadmap"] as const).map(
            (st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`min-h-11 rounded-xl border-2 border-[#080808] px-3 text-xs font-semibold transition ${
                  statusFilter === st
                    ? "bg-[#080808] text-[#FDC616]"
                    : "bg-[#FFFFFF] text-[#080808] hover:bg-[#FFF3C4]"
                }`}
              >
                {st === "ALL" ? "Todos os status" : AVAILABILITY_META[st].shortLabel}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Cards / Matriz */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className={`comic-panel flex flex-col justify-between p-6 ${
              item.availability === "roadmap" ? "bg-[#F4F4F5]" : "bg-[#FFFFFF]"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md border border-[#080808] bg-[#FDC616] px-2 py-0.5 font-mono text-xs font-semibold text-[#080808]">
                  {item.priority}
                </span>
                <StatusDot status={item.availability} showShort />
              </div>

              <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#262626]">{item.summary}</p>

              <dl className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[#080808]/15 bg-[#FFF9EC] p-3 text-center">
                <div>
                  <dt className="font-mono text-[10px] text-[#52525B] uppercase">Impacto</dt>
                  <dd className="text-xs font-semibold text-[#080808]">{item.commercialImpact}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] text-[#52525B] uppercase">Clareza</dt>
                  <dd className="text-xs font-semibold text-[#080808]">{item.clarity}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] text-[#52525B] uppercase">Diferencial</dt>
                  <dd className="text-xs font-semibold text-[#080808]">{item.differentiation}</dd>
                </div>
              </dl>

              <p className="mt-3 text-xs leading-5 text-[#3F3F46]">
                <strong className="font-semibold text-[#080808]">Nota operacional:</strong>{" "}
                {item.honestNote}
              </p>
            </div>

            {item.href && (
              <div className="mt-5 pt-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#080808] underline underline-offset-4"
                >
                  <span>Ver página relacionada</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
