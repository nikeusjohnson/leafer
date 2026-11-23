import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFFFFF",
          deep: "#F0F7F2",
          tint: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#103E30",
          soft: "#35584B",
          muted: "#50695F",
        },
        leaf: {
          DEFAULT: "#0C7753",
          deep: "#105F41",
          tint: "#DBF4E5",
        },
        sage: {
          DEFAULT: "#DDF4E7",
          deep: "#C8E8D5",
        },
        forest: "#103C30",
        line: "#D2E2D6",
        amber: "#8A6A1F",
        amberTint: "#F6EFDA",
        gold: "#F5A623",
        sun: "#F6E35C",
        lime: "#C5E47D",
      },
      fontFamily: {
        serif: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["Consolas", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "78rem",
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
