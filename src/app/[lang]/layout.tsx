import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getDictionary, Locale } from "@/dictionaries";

const BASE_URL = "https://nervure.site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | Nervure`,
    },
    description: dict.metadata.description,
    keywords: lang === "fr"
      ? ["agence web Nantes", "création site internet Nantes", "développement web", "design web", "SEO Nantes", "agence digitale", "Nervure", "site vitrine", "e-commerce Nantes", "développeur freelance Nantes"]
      : ["web agency Nantes", "website creation", "web development", "web design", "SEO", "digital agency", "Nervure", "e-commerce", "freelance developer Nantes", "France"],
    authors: [{ name: "Nervure", url: BASE_URL }],
    creator: "Nervure",
    publisher: "Nervure",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${BASE_URL}/${lang}`,
      siteName: "Nervure",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      alternateLocale: lang === "fr" ? "en_US" : "fr_FR",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Nervure — Agence Web Nantes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [`${BASE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    category: "technology",
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);

  // LocalBusiness schema — essential for local/geo SEO in Nantes
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#organization`,
    name: "Nervure",
    alternateName: "Nervure Agency",
    description: dict.metadata.description,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    image: `${BASE_URL}/og-image.png`,
    telephone: "+33759664470",
    email: "hello@nervure.site",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nantes",
      addressRegion: "Pays de la Loire",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.2184,
      longitude: -1.5536,
    },
    areaServed: [
      { "@type": "City", name: "Nantes" },
      { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
      { "@type": "Country", name: "France" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://instagram.com/x_forgeweb",
      "https://twitter.com/x_forgeweb",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "fr" ? "Services numériques" : "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: lang === "fr" ? "Création de sites web" : "Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: lang === "fr" ? "Développement logiciel" : "Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO",
          },
        },
      ],
    },
  };

  // WebSite schema — enables sitelinks in Google
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nervure",
    url: BASE_URL,
    inLanguage: lang === "fr" ? "fr-FR" : "en-US",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  return (
    <html lang={lang} className={`${playfair.variable} ${inter.variable} ${robotoMono.variable}`} data-scroll-behavior="smooth">
      <head>
        {/* Geo meta tags for local SEO — Nantes, France */}
        <meta name="geo.region" content="FR-44" />
        <meta name="geo.placename" content="Nantes" />
        <meta name="geo.position" content="47.2184;-1.5536" />
        <meta name="ICBM" content="47.2184, -1.5536" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="font-sans bg-bg text-fg antialiased">
        <CustomCursor />
        <Navbar dict={dict} lang={lang} />
        {children}
        <Footer dict={dict} lang={lang} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
