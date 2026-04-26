import type { Metadata } from "next";
import { Locale } from "@/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return {
    title: lang === "fr" ? "Carte de Visite Numérique | Nervure" : "Digital Business Card | Nervure",
    description: lang === "fr"
      ? "Téléchargez la carte de visite numérique de Nervure. Design prêt à imprimer au format PDF 85×55mm."
      : "Download Nervure's digital business card. Print-ready design in 85×55mm PDF format.",
    robots: { index: false, follow: false },
  };
}

export default function BusinessCardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
