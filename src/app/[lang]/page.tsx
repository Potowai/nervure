import { Hero } from "@/components/sections/Hero";
import { ServicesTicker } from "@/components/sections/ServicesTicker";
import dynamic from "next/dynamic";
import { getDictionary, Locale } from "@/dictionaries";

const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then(mod => mod.TechStack));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services));
const Works = dynamic(() => import("@/components/sections/Works").then(mod => mod.Works));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => mod.CTA));

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return (
    <main className="relative">
      <Hero dict={dict} lang={lang} />
      <ServicesTicker dict={dict} />
      <About dict={dict} />
      <TechStack dict={dict} />
      <Services dict={dict} />
      <Works dict={dict} lang={lang} />
      <Pricing dict={dict} lang={lang} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} />
      <CTA dict={dict} lang={lang} />
    </main>
  );
}
