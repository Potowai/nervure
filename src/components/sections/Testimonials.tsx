"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials({ dict }: { dict: any }) {
  return (
    <section className="relative py-28 lg:py-40 bg-bg-elevated border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
          <span className="w-6 h-px bg-accent" />
          {dict.testimonials.tag}
        </div>
        <h2 className="font-display text-display-md font-light mb-16 max-w-3xl">
          {dict.testimonials.heading1} <span className="italic text-accent">{dict.testimonials.headingHighlight}</span>{dict.testimonials.heading2}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {dict.testimonials.items.map((t: any, i: number) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl bg-bg-card border border-border-strong p-8 lg:p-10 flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-fg-muted leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium">{t.author}</div>
                <div className="text-sm text-fg-subtle mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
