import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF8F1",
          deep: "#F4EEDF",
          tint: "#FDFCF8",
        },
        ink: {
          DEFAULT: "#0C341A",
          soft: "#29432F",
          muted: "#5D6B57",
        },
        leaf: {
          DEFAULT: "#2F7D4F",
          deep: "#1F5C38",
          tint: "#E3EFE2",
        },
        forest: "#0B2A16",
        line: "#E6DECB",
        amber: "#8A6A1F",
        amberTint: "#F6EFDA",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "72rem",
        prose2: "44rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(12, 52, 26, 0.05)",
        lift: "0 8px 24px rgba(12, 52, 26, 0.08)",
      },
      transitionDuration: {
        fast: "160ms",
      },
    },
  },
  plugins: [],
};

export default config;
