"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { pricingNiches, pricingTiers } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Pricing({ dict, lang }: { dict: any; lang: string }) {
  const [activeNiche, setActiveNiche] = useState<(typeof pricingNiches)[number]>(pricingNiches[0]);

  return (
    <section id="pricing" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-fg-subtle mb-6">
            <span className="w-6 h-px bg-accent" />
            {dict.pricing.tag}
            <span className="w-6 h-px bg-accent" />
          </div>
          <h2 className="font-display text-display-md font-light">
            {dict.pricing.heading1} <span className="italic text-accent">{dict.pricing.headingHighlight}</span>
          </h2>
          <p className="mt-5 text-fg-muted">{dict.pricing.description}</p>
        </div>

        {/* Niche tabs */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 mb-14">
          <span className="text-sm text-fg-muted mr-2">{dict.pricing.nichesTag}</span>
          {pricingNiches.map((n) => (
            <button
              key={n}
              onClick={() => setActiveNiche(n)}
              className={cn(
                "px-4 py-2 rounded-full text-sm border transition-all",
                activeNiche === n
                  ? "bg-accent text-bg border-accent"
                  : "border-border-strong text-fg-muted hover:text-fg hover:border-fg-subtle"
              )}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => {
            const tierDict = dict.pricing.tiers[tier.name.toLowerCase() as keyof typeof dict.pricing.tiers];
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 lg:p-10 border flex flex-col",
                  tier.popular
                    ? "bg-bg-elevated border-accent shadow-[0_0_60px_-15px_rgba(197,160,89,0.3)]"
                    : "bg-bg-card border-border-strong"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-accent text-bg px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    {dict.pricing.popularBadge}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-3xl mb-1">{tierDict.name}</h3>
                  <p className="text-xs tracking-wide uppercase text-accent mb-4">{dict.pricing.startingAt}</p>
                  <div className="flex items-baseline gap-2 pb-6 border-b border-border">
                    <span className="font-display text-5xl font-medium">
                      {tierDict.price} {dict.pricing.currency}
                    </span>
                    <span className="text-sm text-fg-subtle">{dict.pricing.unit}</span>
                  </div>
                  <p className="mt-4 text-sm text-fg-muted italic">{tierDict.tagline}</p>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {tierDict.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-fg-muted">
                      <Check
                        className={cn(
                          "w-4 h-4 shrink-0 mt-0.5",
                          tier.popular ? "text-accent" : "text-fg-subtle"
                        )}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/${lang}/contact`}
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    tier.popular
                      ? "bg-accent text-bg hover:bg-accent-glow"
                      : "border border-border-strong hover:bg-fg hover:text-bg hover:border-fg"
                  )}
                >
                  {dict.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ── À la carte feature catalog ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-border-strong bg-bg-elevated overflow-hidden"
        >
          <div className="p-8 lg:p-12 border-b border-border">
            <h3 className="font-display text-3xl lg:text-4xl mb-2">{dict.pricing.featureCatalog.heading}</h3>
            <p className="text-fg-muted max-w-2xl">{dict.pricing.featureCatalog.description}</p>
          </div>

          <div className="divide-y divide-border">
            {dict.pricing.featureCatalog.categories.map((cat: { title: string; items: { name: string; price: number }[] }) => (
              <div key={cat.title} className="p-8 lg:p-12">
                <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6">{cat.title}</p>
                <div className="space-y-0">
                  {cat.items.map((item, idx) => (
                    <div
                      key={item.name}
                      className={cn(
                        "flex items-center justify-between py-4 gap-4",
                        idx < cat.items.length - 1 && "border-b border-border/60"
                      )}
                    >
                      <span className="text-sm text-fg-muted">{item.name}</span>
                      <span className="font-display text-lg text-fg shrink-0">
                        {item.price.toLocaleString("fr-FR")} €
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 lg:px-12 py-5 bg-bg-subtle/50 border-t border-border">
            <p className="text-xs text-fg-subtle italic">{dict.pricing.featureCatalog.note}</p>
          </div>
        </motion.div>

        {/* ── Hosting & Maintenance plans ── */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-display-sm font-light mb-3">{dict.pricing.hosting.heading}</h3>
            <p className="text-fg-muted max-w-2xl mx-auto">{dict.pricing.hosting.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.pricing.hosting.plans.map((
              plan: { name: string; price: number; tagline: string; popular: boolean; features: string[] },
              i: number
            ) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 lg:p-10 border flex flex-col",
                  plan.popular
                    ? "bg-bg-elevated border-accent shadow-[0_0_60px_-15px_rgba(197,160,89,0.3)]"
                    : "bg-bg-card border-border-strong"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-accent text-bg px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    {dict.pricing.hosting.popularBadge}
                  </div>
                )}

                <div>
                  <h4 className="font-display text-3xl mb-1">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 py-5 border-b border-border">
                    <span className="font-display text-5xl font-medium">{plan.price}</span>
                    <span className="font-display text-2xl font-medium ml-1">€</span>
                    <span className="text-sm text-fg-subtle ml-1">{dict.pricing.hosting.monthlyUnit}</span>
                  </div>
                  <p className="mt-4 text-sm text-fg-muted italic">{plan.tagline}</p>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-fg-muted">
                      <Check
                        className={cn(
                          "w-4 h-4 shrink-0 mt-0.5",
                          plan.popular ? "text-accent" : "text-fg-subtle"
                        )}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/${lang}/contact`}
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    plan.popular
                      ? "bg-accent text-bg hover:bg-accent-glow"
                      : "border border-border-strong hover:bg-fg hover:text-bg hover:border-fg"
                  )}
                >
                  {dict.pricing.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
