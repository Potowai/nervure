import { getDictionary, Locale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { slug: "product-design" },
    { slug: "websites" },
    { slug: "software" },
    { slug: "automation" },
    { slug: "ads" },
    { slug: "graphics" },
    { slug: "seo" },
  ];
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ lang: string; slug: string }> 
}) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const dict = await getDictionary(lang);
  
  const service = dict.services.items.find((item: any) => item.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 text-xs tracking-widest uppercase opacity-40 mb-12">
          <Link href={`/${lang}`} className="hover:text-accent transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3" />
          <Link href={`/${lang}#services`} className="hover:text-accent transition-colors">Services</Link>
          <ArrowRight className="w-3 h-3" />
          <span className="text-accent">{service.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Content */}
          <div>
            <h1 className="font-display text-6xl md:text-8xl leading-none mb-10">
              {service.title}
            </h1>
            <p className="text-2xl text-fg-muted mb-12 leading-relaxed">
              {service.details.overview}
            </p>

            <div className="space-y-6">
              <h3 className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
                {lang === 'fr' ? 'CE QUE NOUS OFFRONS' : 'WHAT WE OFFER'}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.details.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-3 bg-bg-subtle/30 border border-border p-4 rounded-2xl">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="sticky top-32">
            <div className="bg-bg-subtle border border-border-strong rounded-[2.5rem] p-10 md:p-14 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-accent/10 transition-colors" />
              
              <h2 className="text-3xl font-display mb-6 relative z-10">
                {lang === 'fr' ? 'Besoin d\'un expert ?' : 'Need an expert?'}
              </h2>
              <p className="text-fg-muted mb-10 relative z-10">
                {lang === 'fr' 
                  ? 'Travaillons ensemble pour donner vie à votre vision avec précision et élégance.' 
                  : 'Let\'s work together to bring your vision to life with precision and elegance.'}
              </p>
              
              <Link 
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center w-full bg-accent text-bg font-bold py-5 rounded-2xl gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
              >
                {lang === 'fr' ? 'DÉMARRER UN PROJET' : 'START A PROJECT'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
