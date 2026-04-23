import { getDictionary, Locale } from "@/dictionaries";
import { site } from "@/lib/content";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
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
    </div>
  );
}
