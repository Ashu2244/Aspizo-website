"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border border-border bg-surface-raised">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-surface"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-foreground">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-sm leading-relaxed text-muted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
