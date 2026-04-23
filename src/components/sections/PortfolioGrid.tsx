"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/content";

export function PortfolioGrid({ dict }: { dict: any }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.href}
          target={p.href.startsWith("http") ? "_blank" : undefined}
          rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="group relative block rounded-2xl overflow-hidden border border-border-strong hover:border-accent transition-all bg-bg-card"
        >
          <div className="relative aspect-[4/3] bg-bg overflow-hidden">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent text-bg px-4 py-2 text-xs font-medium shadow-lg">
                {p.href.startsWith("http") ? (
                    <ArrowUpRight className="w-3 h-3" />
                ) : (
                    <Search className="w-3 h-3" />
                )}
                {p.cta}
                </div>
            </div>
          </div>
          <div className="p-8">
            <div className="text-xs tracking-[0.2em] uppercase text-accent mb-3 font-medium">
              {p.tag}
            </div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <div className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-bg transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
