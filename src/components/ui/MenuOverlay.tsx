"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/content";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  dict: any;
  lang: string;
}

export function MenuOverlay({ isOpen, onClose, dict, lang }: MenuOverlayProps) {
  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 80,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const servicesVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[100] bg-[#2F4A3A] text-[#F5F3EE] overflow-y-auto"
        >
          <div className="min-h-full flex flex-col">
            {/* Header */}
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 h-24 flex items-center justify-between shrink-0">
              <a 
                href="#hero" 
                className="flex items-center gap-2 font-display text-2xl tracking-tight"
                onClick={onClose}
              >
                <span className="text-[#C5A059]">◆</span>
                <span>{site.name}</span>
              </a>

              <button
                onClick={onClose}
                className="group flex items-center gap-4 text-sm tracking-widest uppercase"
              >
                <span className="hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity">Close</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                  <X className="w-6 h-6" />
                </div>
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between py-12 lg:py-20 gap-20">
              {/* Left: Huge Links */}
              <nav className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
                {dict.nav.map((item: any, i: number) => (
                  <div key={item.href} className="overflow-hidden py-2">
                    <motion.a
                      href={item.href}
                      custom={i}
                      variants={linkVariants}
                      onClick={onClose}
                      onPointerDown={onClose}
                      className="block font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-light leading-none uppercase tracking-tighter hover:text-[#C5A059] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  </div>
                ))}
              </nav>

              {/* Right: Specialized Services */}
              <div className="hidden lg:block lg:w-1/3 pt-12">
                <motion.div variants={servicesVariants}>
                  <h4 className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-10 font-medium">
                    {dict.menu.servicesTitle}
                  </h4>
                  <ul className="space-y-6">
                    {dict.services.items.map((s: any) => (
                      <li key={s.id}>
                        <Link
                          href={`/${lang}/services/${s.id}`}
                          onClick={onClose}
                          className="group flex items-center justify-between py-2 border-b border-white/10 hover:border-[#C5A059] transition-colors"
                        >
                          <span className="text-xl font-light opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                            {s.title}
                          </span>
                          <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#C5A059] transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 gap-8 shrink-0">
              <div className="flex items-center gap-8 text-sm tracking-widest uppercase opacity-60">
                <Link 
                  href="/fr" 
                  className={cn(
                    "py-2 transition-opacity",
                    lang === "fr" ? "text-[#C5A059] opacity-100" : "hover:opacity-100"
                  )}
                  onClick={onClose}
                >
                  Français
                </Link>
                <Link 
                  href="/en" 
                  className={cn(
                    "py-2 transition-opacity",
                    lang === "en" ? "text-[#C5A059] opacity-100" : "hover:opacity-100"
                  )}
                  onClick={onClose}
                >
                  English
                </Link>
              </div>

              <div className="flex items-center gap-8">
                {Object.entries(site.socials).map(([name, url]) => (
                  <a
                    key={name}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase opacity-60 hover:opacity-100 hover:text-[#C5A059] transition-all"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
