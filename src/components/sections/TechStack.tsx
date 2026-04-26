"use client";

import { techStack } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slugMap: Record<string, string> = {
  "React": "react",
  "Next.js": "nextdotjs",
  "TypeScript": "typescript",
  "Node.js": "nodedotjs",
  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",
  "Tailwind CSS": "tailwindcss",
  "Figma": "figma",
  "Firebase": "firebase",
  "AWS": "amazonwebservices",
  "Electron.js": "electron",
  "Python": "python",
  "Express.js": "express",
  "Redux": "redux",
  "GraphQL": "graphql",
  "Docker": "docker",
  "Vercel": "vercel",
  "Prisma": "prisma",
  "Framer Motion": "framer",
  "Supabase": "supabase",
  "Git": "git"
};

function TechIcon({ name }: { name: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const slug = slugMap[name] || name.toLowerCase();

  return (
    <div 
      className="relative flex items-center justify-center h-20 w-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="cursor-pointer"
      >
        {/* Fetching the logo from Simple Icons CDN with the brand color #C5A059 */}
        <img
          src={`https://cdn.simpleicons.org/${slug}/C5A059`}
          alt={name}
          width={48}
          height={48}
          className="w-10 h-10 lg:w-12 lg:h-12 opacity-60 hover:opacity-100 transition-opacity"
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -50, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute z-50 px-4 py-1.5 bg-[#C5A059] text-[#2F4A3A] text-xs font-bold rounded-full whitespace-nowrap shadow-xl"
          >
            {name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C5A059] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex gap-16 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {doubled.map((t, i) => (
        <div key={`${t}-${i}`} className="flex items-center gap-16 shrink-0">
          <TechIcon name={t} />
          <span className="text-accent/20 text-xl">◆</span>
        </div>
      ))}
    </div>
  );
}

export function TechStack({ dict }: { dict: any }) {
  return (
    <section className="relative py-24 border-y border-border overflow-hidden bg-bg-subtle/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-4">
          <span className="w-6 h-px bg-accent" />
          {dict.tech.tag}
        </div>
        <h2 className="font-display text-display-md font-light">{dict.tech.heading}</h2>
      </div>

      <div className="space-y-4 overflow-hidden">
        <div className="py-12">
          <Row items={techStack.row1} />
        </div>
        <div className="py-12">
          <Row items={techStack.row2} reverse />
        </div>
      </div>
    </section>
  );
}
