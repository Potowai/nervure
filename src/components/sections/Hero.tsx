"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero({ dict, lang }: { dict: any; lang: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % dict.hero.rotatingWords.length), 2600);
    return () => clearInterval(t);
  }, [dict]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg grain pt-32 pb-20"
    >
      {/* Gold glow backdrop */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] gold-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] gold-glow pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: giant type block */}
          <div className="lg:col-span-8 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-fg-muted text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="tracking-[0.2em] uppercase">{dict.hero.status}</span>
            </motion.div>

            <h1 className="font-display text-display-xl font-light leading-[1.1]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="block italic text-fg-muted"
              >
                {dict.hero.weAreThe}
              </motion.span>
              <span className="block relative overflow-hidden py-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dict.hero.rotatingWords[index]}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-accent font-medium leading-[1.15] text-[2.75rem] sm:text-5xl md:text-display-xl"
                  >
                    {dict.hero.rotatingWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          {/* Right: subheading + CTA */}
          <div className="lg:col-span-4 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fg-muted text-base lg:text-lg leading-relaxed"
            >
              {dict.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <Link
                href={`/${lang}/contact`}
                className="group inline-flex items-center gap-3 rounded-full bg-accent text-bg px-6 py-3.5 font-medium hover:bg-accent-glow transition-colors"
              >
                {dict.hero.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom strap: long tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-xs tracking-[0.25em] uppercase text-fg-subtle max-w-xl"
        >
          {dict.hero.bottomStrap}
        </motion.p>
      </div>
    </section>
  );
}
