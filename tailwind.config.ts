import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFFDF4",
          deep: "#F7F2DE",
          tint: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#143C14",
          soft: "#33512F",
          muted: "#64755C",
        },
        leaf: {
          DEFAULT: "#1F6B2A",
          deep: "#173F15",
          tint: "#E9F5DC",
        },
        sage: {
          DEFAULT: "#F0EDDA",
          deep: "#E3DFC5",
        },
        forest: "#0E2A0F",
        line: "#E5E1CC",
        amber: "#8A6A1F",
        amberTint: "#F6EFDA",
        gold: "#F5A623",
        sun: "#F6E35C",
        lime: "#C5E47D",
      },
      fontFamily: {
        serif: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "72rem",
        prose2: "44rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 27, 70, 0.05)",
        lift: "0 8px 24px rgba(15, 27, 70, 0.10)",
      },
      transitionDuration: {
        fast: "160ms",
      },
    },
  },
  plugins: [],
};

export default config;
