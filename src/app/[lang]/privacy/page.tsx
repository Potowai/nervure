import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return lang === "fr"
    ? {
        title: "Politique de Confidentialité | Nervure",
        description: "Politique de confidentialité de Nervure : comment nous collectons, utilisons et protégeons vos données personnelles en tant qu'agence web à Nantes.",
      }
    : {
        title: "Privacy Policy | Nervure Web Agency",
        description: "Nervure's privacy policy: how we collect, use and protect your personal data when using our web agency services in Nantes and across France.",
      };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-5xl mb-4">{dict.privacy.title}</h1>
      <p className="text-fg-subtle mb-12">{dict.privacy.lastUpdated}</p>
      
      <div className="space-y-10">
        {dict.privacy.sections.map((section: any, index: number) => (
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
