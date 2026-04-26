import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";
import { ContactForm } from "@/components/ui/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return lang === "fr"
    ? {
        title: "Contact | Démarrez Votre Projet Web — Nervure",
        description: "Contactez Nervure, agence web à Nantes. Parlez-nous de votre projet et obtenez un devis gratuit et détaillé sous 24h. Sans engagement.",
      }
    : {
        title: "Contact | Start Your Web Project — Nervure",
        description: "Get in touch with Nervure, a Nantes web agency. Tell us about your project and receive a free, detailed quote within 24 hours. No commitment required.",
      };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block font-medium">
              {dict.contact.tag}
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
              {dict.contact.heading}
            </h1>
            <p className="text-xl text-fg-muted max-w-md mb-12">
              {dict.contact.description}
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-widest uppercase opacity-40 mb-2">Email</p>
                <a href={`mailto:${dict.contact.info.email}`} className="text-2xl hover:text-accent transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-accent">
                  {dict.contact.info.email}
                </a>
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase opacity-40 mb-2">Location</p>
                <p className="text-2xl">{dict.contact.info.location}</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-bg-subtle/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
            <ContactForm dict={dict.contact.form} />
          </div>
        </div>
      </div>
    </main>
  );
}
