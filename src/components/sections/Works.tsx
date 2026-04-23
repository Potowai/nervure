"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export function Works({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section id="work" className="relative py-28 lg:py-40 bg-bg-elevated border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
          <span className="w-6 h-px bg-accent" />
          {dict.works.tag}
        </div>
        <h2 className="font-display text-display-md font-light mb-16">
          {dict.works.heading1} <span className="italic text-accent">{dict.works.headingHighlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden border border-border-strong hover:border-accent transition-all"
            >
              <div className="relative aspect-[4/3] bg-bg">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-bg/80 backdrop-blur-sm border border-border-strong px-3 py-1.5 text-xs">
                  {p.href.startsWith("http") ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <Search className="w-3 h-3" />
                  )}
                  {p.cta}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.2em] uppercase text-fg-subtle mb-2">
                  {p.tag}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-fg-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href={`/${lang}/work`}
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm hover:bg-accent hover:text-bg hover:border-accent transition-all"
          >
            {dict.works.viewAll}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
