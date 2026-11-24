"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className="comic-panel overflow-hidden bg-[#FFFFFF]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-display text-lg leading-6 font-semibold text-[#080808]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-[#080808] transition ${
                  isOpen ? "rotate-180 bg-[#FDC616]" : "bg-[#FFF9EC]"
                }`}
              >
                <ChevronDown className="h-5 w-5 text-[#080808]" />
              </span>
            </button>
            {isOpen && (
              <div className="border-t-2 border-[#080808] bg-[#FFF9EC]/60 px-6 py-5 text-base leading-7 text-[#262626]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
