"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import Link from "next/link";

export function CTA({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section id="contact" className="relative py-32 lg:py-48 overflow-hidden border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] gold-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-display-lg font-light leading-[0.95]"
        >
          {dict.cta.heading1} <br />
          <span className="italic text-accent">{dict.cta.headingHighlight}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href={`/${lang}/contact`}
            className="group inline-flex items-center gap-3 rounded-full bg-accent text-bg px-8 py-4 font-medium hover:bg-accent-glow transition-colors"
          >
            {dict.cta.button}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
