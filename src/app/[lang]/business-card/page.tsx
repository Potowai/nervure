"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { Mail, Phone, Globe, MapPin, MessageSquare } from "lucide-react";
import { useParams } from "next/navigation";

export default function BusinessCardPage() {
  const params = useParams();
  const lang = params.lang as string;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#EBE8E0] py-20 px-6 flex flex-col items-center gap-12">
      <div className="text-center space-y-4 mb-8 no-print">
        <h1 className="font-display text-4xl">Business Card Generator</h1>
        <p className="text-fg-muted max-w-md mx-auto">
          Preview your professional business card. Click the button below to download as PDF (use "Save as PDF" in the print menu).
        </p>
        <button
          onClick={handlePrint}
          className="bg-fg text-bg px-8 py-3 rounded-full font-medium hover:bg-fg/90 transition-all shadow-lg"
        >
          Download PDF
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-16 items-center justify-center print:gap-0 print:flex-col">
        {/* FRONT FACE */}
        <div className="card-container print:mb-[10mm]">
          <div className="business-card bg-bg-elevated relative overflow-hidden flex flex-col items-center justify-center border border-border shadow-2xl print:shadow-none print:border-none">
            {/* Design elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-accent/30 -translate-x-16 -translate-y-16 rounded-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-accent/30 translate-x-16 translate-y-16 rounded-full" />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-6xl text-accent">◆</div>
              <h2 className="font-display text-5xl tracking-tighter text-fg uppercase">{site.name}</h2>
              <div className="h-px w-12 bg-accent/40 my-2" />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-fg-subtle uppercase tracking-widest no-print">Front Face (85x55mm)</p>
        </div>

        {/* BACK FACE */}
        <div className="card-container">
          <div className="business-card bg-fg relative overflow-hidden p-8 flex flex-col justify-between border border-fg shadow-2xl print:shadow-none print:border-none">
            {/* Design elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 -translate-y-20 translate-x-20 rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent text-xl">◆</span>
                <span className="font-display text-xl text-bg uppercase tracking-tight">{site.name}</span>
                <span className="font-display text-xl text-bg uppercase tracking-tight"> - Alexis F.</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-bg/80">
                  <Mail className="w-3 h-3 text-accent" />
                  <span>{site.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-bg/80">
                  <Phone className="w-3 h-3 text-accent" />
                  <span>{site.contact.phones[0]}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-bg/80">
                  <Globe className="w-3 h-3 text-accent" />
                  <span>nervure.site</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-bg/10 flex justify-between items-end">
              <div className="flex items-center gap-2 text-[10px] text-bg/60">
                <MapPin className="w-3 h-3 text-accent" />
                <span>Nantes, France</span>
              </div>
              <div className="text-[9px] text-accent font-mono uppercase tracking-tighter opacity-50">
                EST. 2024
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-fg-subtle uppercase tracking-widest no-print">Back Face (85x55mm)</p>
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
          
          header, footer, .no-print, #whatsapp-button {
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
            display: block !important;
          }

          .flex-col.xl\:flex-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 10mm !important;
          }

          .card-container {
            margin: 0 !important;
            padding: 0 !important;
            page-break-inside: avoid;
          }

          .business-card {
            border: none !important;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
