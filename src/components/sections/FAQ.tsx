"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
            <span className="w-6 h-px bg-accent" />
            {dict.faq.tag}
            <span className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-display text-display-md font-light">
            {dict.faq.heading1} <span className="italic text-accent">{dict.faq.headingHighlight}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {dict.faq.items.map((faq: any, i: number) => (
            <div
              key={i}
              className="border border-border-strong rounded-2xl overflow-hidden bg-bg hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
              >
                <span className="font-display text-xl lg:text-2xl pr-8 group-hover:text-accent transition-colors">
                  {faq.q}
                </span>
                <span className="shrink-0 w-10 h-10 rounded-full border border-border-strong flex items-center justify-center transition-all group-hover:border-accent">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-accent" />
                  ) : (
                    <Plus className="w-4 h-4 text-fg-muted" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 lg:p-8 pt-0 text-fg-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
