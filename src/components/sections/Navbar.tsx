"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content";
import Link from "next/link";
import { MenuOverlay } from "@/components/ui/MenuOverlay";

export function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleLangChange = (newLang: string) => {
    if (lang === newLang) return;
    const segments = window.location.pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/") + window.location.search + window.location.hash;
    window.location.href = newPath;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle initial scroll to hash if present (especially after language change reload)
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for content to settle
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled && !open ? "bg-bg/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-display text-2xl tracking-tight">
          <span className="text-accent">◆</span>
          <span>{site.name}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm text-fg-muted">
          {dict.nav.map((item: any) => (
            <li key={item.href}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link href={item.href} className="hover:text-fg transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                </Link>
              ) : (
                <a href={item.href} className="hover:text-fg transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-3 text-fg-muted">
            <button
              onClick={() => handleLangChange("fr")}
              className={cn(
                "relative py-1 transition-colors",
                lang === "fr" ? "text-fg font-bold" : "hover:text-fg"
              )}
            >
              FR
              {lang === "fr" && (
                <motion.div layoutId="lang-active" className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
            <span className="text-border-strong opacity-40">|</span>
            <button
              onClick={() => handleLangChange("en")}
              className={cn(
                "relative py-1 transition-colors",
                lang === "en" ? "text-fg font-bold" : "hover:text-fg"
              )}
            >
              EN
              {lang === "en" && (
                <motion.div layoutId="lang-active" className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
          </div>
          <Link
            href={`/${lang}/contact`}
            className="group inline-flex items-center gap-2 bg-fg text-bg rounded-full border border-border-strong px-5 py-2.5 hover:bg-accent hover:text-bg hover:border-accent transition-all"
          >
            {lang === 'fr' ? 'Contact' : 'Contact'}
          </Link>
        </div>

        <button
          className="p-2 text-fg flex items-center gap-3 group"
          aria-label="Toggle menu"
          onClick={() => setOpen(true)}
        >
          <span className="hidden sm:block text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Menu</span>
          <div className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
            <Menu className="w-5 h-5" />
          </div>
        </button>
      </nav>

      <MenuOverlay
        isOpen={open}
        onClose={() => setOpen(false)}
        dict={dict}
        lang={lang}
      />
    </header>
  );
}
