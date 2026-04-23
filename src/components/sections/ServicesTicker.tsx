import { motion } from "framer-motion";

export function ServicesTicker({ dict }: { dict: any }) {
  const items = [...dict.services.items, ...dict.services.items]; // duplicate for seamless loop
  return (
    <div className="relative py-6 border-y border-border bg-bg-elevated overflow-hidden">
      <div className="flex gap-3 animate-marquee whitespace-nowrap">
        {items.map((s: any, i: number) => (
          <div
            key={`${s.id}-${i}`}
            className="flex items-center gap-3 pl-3 pr-5 py-2 rounded-full border border-border-strong text-sm text-fg-muted shrink-0"
          >
            <span className="text-accent">◆</span>
            <span>{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
