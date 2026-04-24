"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-8">
              <span className="w-6 h-px bg-accent" />
              {dict.services.tag}
            </div>
            <h2 className="font-display text-4xl sm:text-display-lg font-light leading-[0.95]">
              {dict.services.heading1} <br className="hidden sm:block" />
              <span className="italic text-accent">{dict.services.headingHighlight}</span>
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <p className="text-fg-muted leading-relaxed">
              {dict.services.description}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              {dict.services.cta}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-strong border border-border-strong rounded-2xl overflow-hidden">
          {dict.services.items.map((s: any, i: number) => (
            <motion.a
              key={s.id}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-bg p-8 lg:p-10 min-h-[240px] flex flex-col justify-between hover:bg-bg-elevated transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-fg-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="w-5 h-5 text-fg-muted group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">{s.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
