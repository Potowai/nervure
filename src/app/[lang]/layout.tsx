import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getDictionary, Locale } from "@/dictionaries";

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
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: "website",
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
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
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nervure",
    "description": dict.metadata.description,
    "url": "https://nervure.com", // Adjust to the actual domain when available
    "logo": "https://nervure.com/forgeweb-logo.png",
    "sameAs": [
      // Add social links here if any
    ]
  };

  return (
    <html lang={lang} className={`${playfair.variable} ${inter.variable} ${robotoMono.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
