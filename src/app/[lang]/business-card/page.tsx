"use client";

import { site } from "@/lib/content";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useParams } from "next/navigation";

export default function BusinessCardPage() {
  const params = useParams();
  const lang = params.lang as string;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-20 px-6 flex flex-col items-center gap-12">
      <div className="text-center space-y-4 mb-8 no-print">
        <h1 className="font-display text-4xl text-white">
          {lang === "fr" ? "Carte de Visite" : "Business Card"}
        </h1>
        <p className="text-white/50 max-w-md mx-auto text-sm">
          {lang === "fr"
            ? "Aperçu de votre carte. Cliquez pour télécharger en PDF."
            : "Preview your card. Click to download as PDF."}
        </p>
        <button
          onClick={handlePrint}
          className="bg-[#C5A059] text-[#1a1a1a] px-8 py-3 rounded-full font-medium hover:bg-[#D4B475] transition-all shadow-lg"
        >
          {lang === "fr" ? "Télécharger PDF" : "Download PDF"}
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-16 items-center justify-center">
        {/* ═══════════ FRONT FACE ═══════════ */}
        <div className="card-container">
          <div className="business-card relative overflow-hidden flex flex-col items-center justify-center rounded-lg shadow-2xl print:shadow-none print:rounded-none"
            style={{ background: "linear-gradient(145deg, #2F4A3A 0%, #1E3328 60%, #162520 100%)" }}>

            {/* Subtle geometric pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C5A059' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Gold accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #C5A059 30%, #C5A059 70%, transparent)" }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              {/* Diamond mark */}
              <div className="text-[#C5A059] text-3xl mb-1">◆</div>

              {/* Brand name */}
              <h2 className="font-display text-4xl tracking-[0.15em] text-white uppercase" style={{ fontWeight: 300 }}>
                NERVURE
              </h2>

              {/* Separator */}
              <div className="flex items-center gap-3 mt-1">
                <div className="w-8 h-[0.5px] bg-[#C5A059]/50" />
                <div className="w-1 h-1 bg-[#C5A059] rotate-45" />
                <div className="w-8 h-[0.5px] bg-[#C5A059]/50" />
              </div>

              {/* Tagline */}
              <p className="text-[8px] tracking-[0.35em] uppercase text-white/40 mt-1">
                {lang === "fr" ? "Agence Web & Développement" : "Web Agency & Development"}
              </p>
            </div>

            {/* Gold accent line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #C5A059 30%, #C5A059 70%, transparent)" }}
            />
          </div>
          <p className="mt-4 text-center text-[10px] text-white/30 uppercase tracking-widest no-print">
            Recto — 85 × 55 mm
          </p>
        </div>

        {/* ═══════════ BACK FACE ═══════════ */}
        <div className="card-container">
          <div className="business-card bg-[#F5F3EE] relative overflow-hidden p-7 flex flex-col justify-between rounded-lg shadow-2xl print:shadow-none print:rounded-none">

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#C5A059]/30" />
              <div className="absolute top-0 left-0 h-full w-[0.5px] bg-[#C5A059]/30" />
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-[0.5px] bg-[#C5A059]/30" />
              <div className="absolute bottom-0 right-0 h-full w-[0.5px] bg-[#C5A059]/30" />
            </div>

            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-[#C5A059] text-sm">◆</span>
                <span className="font-display text-base text-[#2F4A3A] uppercase tracking-[0.1em]" style={{ fontWeight: 400 }}>
                  Nervure
                </span>
              </div>
              <div className="ml-[22px]">
                <p className="font-display text-lg text-[#2F4A3A]" style={{ fontWeight: 500 }}>
                  Alexis F.
                </p>
                <p className="text-[8px] tracking-[0.2em] uppercase text-[#C5A059] mt-0.5">
                  Fondateur & Développeur
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="relative z-10 my-3">
              <div className="h-[0.5px] bg-[#2F4A3A]/10" />
            </div>

            {/* Contact info */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3 h-3 text-[#C5A059]" strokeWidth={1.5} />
                <span className="text-[10px] text-[#2F4A3A]/70 tracking-wide">{site.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3 h-3 text-[#C5A059]" strokeWidth={1.5} />
                <span className="text-[10px] text-[#2F4A3A]/70 tracking-wide">{site.contact.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3 h-3 text-[#C5A059]" strokeWidth={1.5} />
                <span className="text-[10px] text-[#2F4A3A]/70 tracking-wide font-medium">nervure.site</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3 h-3 text-[#C5A059]" strokeWidth={1.5} />
                <span className="text-[10px] text-[#2F4A3A]/70 tracking-wide">Nantes, France</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-white/30 uppercase tracking-widest no-print">
            Verso — 85 × 55 mm
          </p>
        </div>
      </div>

      <style jsx global>{`
        .business-card {
          width: 85mm;
          height: 55mm;
          min-width: 85mm;
          min-height: 55mm;
        }

        @media print {
          @page {
            margin: 10mm;
            size: auto;
          }

          header, footer, nav, .no-print, #whatsapp-button {
            display: none !important;
          }

          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .min-h-screen {
            min-height: 0 !important;
            padding: 0 !important;
            background: white !important;
            display: block !important;
          }

          .card-container {
            margin: 0 auto !important;
            padding: 0 !important;
            page-break-inside: avoid;
          }

          .business-card {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
