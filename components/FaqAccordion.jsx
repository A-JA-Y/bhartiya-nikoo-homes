"use client";

import { useState } from "react";

// Answers stay in the markup while collapsed, so they remain readable to
// search engines and match the FAQPage schema.
export default function FaqAccordion({ items, idPrefix = "faq" }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3" data-stagger>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            data-animate="fade-up"
            className={`rounded-lg border bg-white transition-colors duration-300 ${
              isOpen ? "border-[#DCA54A] shadow-sm" : "border-gray-200 hover:border-[#e5dcc5]"
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={`${idPrefix}-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-a-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 text-sm md:text-base font-semibold text-gray-900 cursor-pointer"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex-shrink-0 w-7 h-7 rounded-full border transition-all duration-300 ${
                    isOpen ? "bg-[#DCA54A] border-[#DCA54A] rotate-45" : "border-[#DCA54A]/50"
                  }`}
                >
                  <span className={`absolute left-1/2 top-1/2 w-3 h-[2px] -translate-x-1/2 -translate-y-1/2 ${isOpen ? "bg-white" : "bg-[#c8922a]"}`} />
                  <span className={`absolute left-1/2 top-1/2 w-[2px] h-3 -translate-x-1/2 -translate-y-1/2 ${isOpen ? "bg-white" : "bg-[#c8922a]"}`} />
                </span>
              </button>
            </h3>
            <div
              id={`${idPrefix}-a-${i}`}
              role="region"
              aria-labelledby={`${idPrefix}-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
