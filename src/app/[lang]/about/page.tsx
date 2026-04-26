import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";
import { site } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return lang === "fr"
    ? {
        title: "À Propos | Nervure — Agence Web Nantes",
        description: "Découvrez Nervure, agence web basée à Nantes. Notre équipe crée des expériences digitales performantes pour des entreprises en France.",
      }
    : {
        title: "About | Nervure — Web Agency Nantes",
        description: "Meet Nervure, a Nantes-based web agency. Our team builds high-performance digital experiences for businesses across France.",
      };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);
  const isEn = lang === "en";

  return (
    <main className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] gold-glow pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
            <span className="w-6 h-px bg-accent" />
            {dict.about.tag}
          </div>
          <h1 className="font-display text-display-md font-light leading-[1.02] max-w-4xl">
            {dict.about.heading1}
            <span className="italic text-accent">{dict.about.headingHighlight}</span>
            {dict.about.heading2}
          </h1>
        </div>

        {/* Story + quote */}
        <div className="grid lg:grid-cols-12 gap-14 mb-24">
          <div className="lg:col-span-6 space-y-6 text-fg-muted leading-relaxed text-lg">
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
            <p>{dict.about.p4}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-2xl border border-border-strong bg-bg-elevated p-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-accent text-5xl font-display mb-6">◆</div>
                <p className="text-2xl font-display font-light leading-snug">
                  {isEn
                    ? '"The invisible structure that holds the visible form."'
                    : '"La structure invisible qui tient la forme visible."'}
                </p>
              </div>
              <p className="text-sm text-fg-subtle mt-8">— Alexis F., {isEn ? "Founder" : "Fondateur"}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-strong border border-border-strong rounded-2xl overflow-hidden mb-24">
          {dict.about.stats.map((s: { value: string; label: string }) => (
            <div key={s.label} className="bg-bg p-8 lg:p-10 hover:bg-bg-elevated transition-colors group">
              <div className="font-display text-5xl lg:text-6xl text-fg group-hover:text-accent transition-colors">{s.value}</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase text-fg-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-10">
            <span className="w-6 h-px bg-accent" />
            {isEn ? "Our Approach" : "Notre Approche"}
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {dict.about.values.map((v: { title: string; desc: string }) => (
              <div key={v.title} className="rounded-2xl border border-border bg-bg-elevated p-8">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <span className="text-accent text-xs">◆</span>
                </div>
                <h2 className="font-display text-xl mb-3">{v.title}</h2>
                <p className="text-fg-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="mb-24">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-10">
            <span className="w-6 h-px bg-accent" />
            {isEn ? "The Founder" : "Le Fondateur"}
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border-strong bg-bg-elevated p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                <span className="text-2xl text-accent font-display font-light">A</span>
              </div>
              <h2 className="font-display text-2xl mb-1">Alexis F.</h2>
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                {isEn ? "Founder & Lead Developer" : "Fondateur & Développeur Principal"}
              </p>
              <p className="text-fg-muted text-sm leading-relaxed">
                {isEn
                  ? "Full-stack developer with 5+ years of experience designing and building high-performance digital products for businesses across France and Europe. With a deep focus on clean code, accessible interfaces, and purposeful design, Alexis leads every project from discovery to launch — ensuring quality and measurable results at every step."
                  : "Développeur full-stack avec 5+ ans d'expérience dans la conception et la création de produits digitaux performants pour des entreprises en France et en Europe. Passionné par le code propre, les interfaces accessibles et le design purposeful, Alexis pilote chaque projet de la discovery au lancement — garantissant qualité et résultats mesurables à chaque étape."}
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="mb-12 rounded-2xl border border-border-strong bg-bg-elevated p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl font-light">
            {isEn ? "See what we've built." : "Découvrez ce que nous avons construit."}
          </p>
          <Link
            href={`/${lang}/work`}
            className="group shrink-0 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm hover:bg-accent hover:text-bg hover:border-accent transition-all"
          >
            {isEn ? "View Portfolio" : "Voir le Portfolio"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main CTA */}
        <div className="rounded-2xl border border-border-strong bg-bg-elevated p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-display text-3xl lg:text-4xl font-light">
            {dict.cta.heading1}<span className="italic text-accent">{dict.cta.headingHighlight}</span>
          </h2>
          <Link
            href={`/${lang}/contact`}
            className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-accent text-bg px-8 py-4 font-medium hover:bg-accent/90 transition-colors"
          >
            {dict.cta.button}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
