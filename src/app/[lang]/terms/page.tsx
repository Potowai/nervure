import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return lang === "fr"
    ? {
        title: "Conditions d'Utilisation | Nervure",
        description: "Conditions d'utilisation de Nervure régissant l'accès à notre site web et aux services digitaux que nous fournissons aux entreprises en France.",
      }
    : {
        title: "Terms of Use | Nervure Web Agency",
        description: "Nervure's terms of use governing access to our website and the digital agency services we provide to businesses across France. Please read carefully.",
      };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-5xl mb-4">{dict.terms.title}</h1>
      <p className="text-fg-subtle mb-12">{dict.terms.lastUpdated}</p>
      
      <div className="space-y-10">
        {dict.terms.sections.map((section: any, index: number) => (
          <section key={index}>
            <h2 className="font-display text-2xl mb-4">{section.title}</h2>
            <p className="text-fg-muted leading-relaxed whitespace-pre-wrap">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
