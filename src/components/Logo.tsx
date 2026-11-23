import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
      aria-label="Leafer — home"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M13 24V10"
          stroke={dark ? "#FBF8F1" : "#0C341A"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13 14C13 14 6.5 13.2 4.2 6.4C11 6.4 13 11.5 13 14Z"
          fill={dark ? "#FBF8F1" : "#2F7D4F"}
        />
        <path
          d="M13 11C13 11 19.5 10.2 21.8 3.4C15 3.4 13 8.5 13 11Z"
          fill={dark ? "#8FBF9B" : "#1F5C38"}
        />
      </svg>
      <span
        className={`font-serif text-[22px] font-semibold tracking-[-0.02em] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        leafer
        <span className={dark ? "text-cream/50" : "text-ink-muted"}>.co.uk</span>
      </span>
    </Link>
  );
}
