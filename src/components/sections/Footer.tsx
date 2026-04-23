import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import Link from "next/link";

export function Footer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <footer className="relative bg-bg-elevated pt-24 pb-10 border-t border-border overflow-hidden">
      {/* Decorative large logo mark */}
      <div className="absolute -bottom-[20%] -right-[10%] text-[40vw] font-display text-border-strong/30 pointer-events-none select-none">
        ◆
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="flex items-center gap-2 font-display text-3xl tracking-tight mb-8">
              <span className="text-accent">◆</span>
              <span>{site.name}</span>
            </Link>
            <p className="text-fg-muted max-w-sm mb-10 leading-relaxed">
              {site.tagline}
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors"
              >
                {site.contact.email}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {site.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="block text-fg-muted hover:text-fg transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-xs tracking-[0.2em] uppercase text-fg-subtle mb-6">
              {dict.footer.sitemap}
            </h4>
            <ul className="space-y-4">
              {dict.nav.map((item: any) => (
                <li key={item.href}>
                  <a href={item.href} className="text-fg-muted hover:text-fg transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-fg-subtle mb-6">
              {dict.footer.socials}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-fg-muted hover:text-fg transition-colors"
                >
                  Instagram
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={site.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-fg-muted hover:text-fg transition-colors"
                >
                  Twitter / X
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-fg-muted hover:text-fg transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="py-16 overflow-hidden">
          <h3 className="font-display text-[clamp(5rem,20vw,18rem)] leading-none tracking-tight text-fg text-center select-none">
            {site.name}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-fg-subtle">
          <p>
            {dict.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-accent transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-accent transition-colors">
              {dict.footer.terms}
            </Link>
            <Link href={`/${lang}/business-card`} className="hover:text-accent transition-colors">
              {dict.footer.businessCard}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
