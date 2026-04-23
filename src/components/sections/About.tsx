"use client";

import { motion } from "framer-motion";

export function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-10">
          <span className="w-6 h-px bg-accent" />
          {dict.about.tag}
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 font-display text-display-md font-light leading-[1.02]"
          >
            {dict.about.heading1}
            <span className="italic text-accent">{dict.about.headingHighlight}</span>
            {dict.about.heading2}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-5 text-fg-muted leading-relaxed"
          >
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-strong border border-border-strong rounded-2xl overflow-hidden">
          {dict.about.stats.map((s: any, i: number) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-bg p-8 lg:p-10 group hover:bg-bg-elevated transition-colors"
            >
              <div className="font-display text-5xl lg:text-6xl text-fg group-hover:text-accent transition-colors">
                {s.value}
              </div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-fg-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
