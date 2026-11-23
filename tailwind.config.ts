import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFFFFF",
          deep: "#F4F7FD",
          tint: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0F1B46",
          soft: "#33406B",
          muted: "#5A6486",
        },
        leaf: {
          DEFAULT: "#0057D9",
          deep: "#003FA3",
          tint: "#EAF1FF",
        },
        sage: {
          DEFAULT: "#E9F0FE",
          deep: "#D6E4FD",
        },
        forest: "#0A1433",
        line: "#E3E8F2",
        amber: "#8A6A1F",
        amberTint: "#F6EFDA",
        gold: "#F5A623",
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
