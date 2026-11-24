"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import type { WhatsAppOrigin } from "@/config/site";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

const TOPICS: Array<{ id: WhatsAppOrigin; label: string; description: string }> = [
  {
    id: "hero",
    label: "Conhecer o EuVerso",
    description: "Quero entender a plataforma e ver uma demonstração guiada.",
  },
  {
    id: "automacoes",
    label: "Automações & Workflows",
    description: "Quero saber mais sobre Workflow Studio e Mission Control.",
  },
  {
    id: "plan-business",
    label: "EuVerso para Empresa",
    description: "Preciso de workspaces compartilhados, permissões e aprovações.",
  },
  {
    id: "plan-enterprise",
    label: "Projeto Enterprise",
    description: "Quero conversar sobre governança avançada e integrações sob consulta.",
  },
];

export function ContactWhatsAppComposer() {
  const [selectedOrigin, setSelectedOrigin] = useState<WhatsAppOrigin>("hero");
  const [name, setName] = useState("");
  const [contextNote, setContextNote] = useState("");

  const customNoteParts = [
    name.trim() ? `Meu nome é ${name.trim()}.` : "",
    contextNote.trim() ? `Contexto: ${contextNote.trim()}` : "",
  ].filter(Boolean);

  return (
    <div className="comic-panel-lg bg-[#FFFFFF] p-6 sm:p-8">
      <p className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
        ATENDIMENTO COMERCIAL · WHATSAPP OFICIAL
      </p>
      <h2 className="font-display mt-2 text-2xl leading-8 font-semibold text-[#080808]">
        Monte sua mensagem e inicie a conversa
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#262626]">
        Escolha o tema principal abaixo. O botão gera automaticamente a mensagem contextual para acelerar seu atendimento.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {TOPICS.map((topic) => {
          const active = selectedOrigin === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelectedOrigin(topic.id)}
              className={`rounded-xl border-2 border-[#080808] p-4 text-left transition ${
                active
                  ? "bg-[#FDC616] shadow-[4px_4px_0_#080808]"
                  : "bg-[#FFF9EC] hover:bg-[#FFFFFF]"
              }`}
            >
              <p className="font-display text-base font-semibold text-[#080808]">{topic.label}</p>
              <p className="mt-1 text-xs leading-5 text-[#262626]">{topic.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#080808]">
            Seu nome (opcional)
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como prefere ser chamado?"
            className="mt-2 h-12 w-full rounded-xl border-2 border-[#080808] bg-[#FFF9EC] px-4 text-base text-[#080808] placeholder:text-[#52525B]"
          />
        </div>
        <div>
          <label htmlFor="contact-context" className="block text-sm font-semibold text-[#080808]">
            Seu objetivo principal (opcional)
          </label>
          <input
            id="contact-context"
            type="text"
            value={contextNote}
            onChange={(e) => setContextNote(e.target.value)}
            placeholder="Ex.: organizar rotina, equipe de 5 pessoas..."
            className="mt-2 h-12 w-full rounded-xl border-2 border-[#080808] bg-[#FFF9EC] px-4 text-base text-[#080808] placeholder:text-[#52525B]"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs leading-5 text-[#3F3F46]">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#080808]" aria-hidden="true" />
          <span>Sem spam. Conversa humana e direta pelo WhatsApp.</span>
        </p>
        <WhatsAppButton
          origin={selectedOrigin}
          customNote={customNoteParts.join(" ")}
          label="Abrir conversa no WhatsApp"
          variant="primary"
          showIcon
        />
      </div>
    </div>
  );
}
