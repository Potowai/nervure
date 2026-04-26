import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return lang === "fr"
    ? {
        title: "Portfolio | Réalisations Web — Nervure Nantes",
        description: "Découvrez nos réalisations : sites vitrine, e-commerce et applications digitales pour des entreprises à Nantes et en France. Du branding aux plateformes complexes.",
      }
    : {
        title: "Portfolio | Web Projects by Nervure Nantes",
        description: "Browse Nervure's portfolio of websites, apps and digital solutions built for businesses in Nantes and across France. From branding to full-stack platforms.",
      };
}

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <main className="relative pt-32 pb-20 overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
         <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
         <div className="absolute bottom-40 left-0 w-80 h-80 bg-fg/5 rounded-full blur-3xl" />
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
            <span className="w-6 h-px bg-accent" />
            {dict.portfolio.tag}
          </div>
          <h1 className="font-display text-display-md font-light mb-8 max-w-3xl">
            {dict.portfolio.heading1} <span className="italic text-accent">{dict.portfolio.headingHighlight}</span>
          </h1>
          <p className="text-fg-muted text-lg max-w-2xl leading-relaxed mb-6">
            {dict.portfolio.description}
          </p>
          <p className="text-fg-muted max-w-2xl leading-relaxed">
            {dict.portfolio.p1}
          </p>
        </div>

        <PortfolioGrid dict={dict} />

        {/* Process section */}
        <div className="mt-24 mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-10">
            <span className="w-6 h-px bg-accent" />
            {dict.portfolio.processTitle}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dict.portfolio.process.map((step: { step: string; title: string; desc: string }) => (
              <div key={step.step} className="rounded-2xl border border-border bg-bg-elevated p-8">
                <div className="font-display text-4xl text-accent/30 mb-4">{step.step}</div>
                <h2 className="font-display text-xl mb-3">{step.title}</h2>
                <p className="text-fg-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-0 pt-12 border-t border-border flex flex-col items-center text-center">
          <h2 className="font-display text-3xl mb-8">
            {lang === 'fr' ? 'Prêt à lancer votre projet ?' : 'Ready to launch your project?'}
          </h2>
          <Link
            href={`/${lang}/contact`}
            className="group inline-flex items-center gap-3 rounded-full bg-fg text-bg px-8 py-4 font-medium hover:bg-fg/90 transition-all shadow-xl"
          >
            {dict.portfolio.cta}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
