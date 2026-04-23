import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F5F3EE", // blanc calcaire
          elevated: "#FFFFFF",
          card: "#EBE8E0",
        },
        border: {
          DEFAULT: "#D6D3C9",
          strong: "#C4C0B4",
        },
        fg: {
          DEFAULT: "#2F4A3A", // vert botanique profond
          muted: "#4F6A5A",
          subtle: "#7E9386",
        },
        accent: {
          DEFAULT: "#C5A059", // filets dorés
          soft: "#D4B475",
          glow: "#DEBB76",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 12vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
