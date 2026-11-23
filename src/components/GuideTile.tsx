import Link from "next/link";
import type { Guide } from "@/data/guides";
import { PersonArt, INK, LIME, SUN, WHITE } from "@/components/art";

function art(slug: string) {
  switch (slug) {
    case "costs":
      return (
        <PersonArt>
          {/* pound coin */}
          <circle cx="93" cy="26" r="13" fill={SUN} />
          <path
            d="M90 22v9h6M90 22c0-2 1.5-3 3-3s3 1 3 2.5M88 26h6"
            stroke={INK}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="26" cy="60" r="7" fill={SUN} />
          <path d="M24 57v6h4M24 57c0-1.4 1-2 2-2M22.5 60h4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        </PersonArt>
      );
    case "first-consultation":
      return (
        <PersonArt>
          {/* clipboard */}
          <rect x="86" y="14" width="22" height="28" rx="3" fill={WHITE} />
          <rect x="92" y="11" width="10" height="6" rx="2" fill={INK} />
          <path d="M91 23h12M91 28h12M91 33h7" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        </PersonArt>
      );
    case "driving":
      return (
        <PersonArt>
          {/* steering wheel */}
          <circle cx="93" cy="60" r="14" stroke={SUN} strokeWidth="4" />
          <circle cx="93" cy="60" r="3.4" fill={SUN} />
          <path d="M93 63v9M82 56l8 3M104 56l-8 3" stroke={SUN} strokeWidth="3.4" strokeLinecap="round" />
        </PersonArt>
      );
    case "travelling":
      return (
        <PersonArt>
          {/* suitcase */}
          <rect x="86" y="48" width="24" height="18" rx="3" fill={SUN} />
          <path d="M93 48v-5h10v5" stroke={SUN} strokeWidth="3" strokeLinecap="round" />
          <path d="M98 48v18" stroke={INK} strokeWidth="2" />
          <path d="M16 22l14 6m-14 0l3.4-4.6M30 16l-4.6 3.4" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        </PersonArt>
      );
    case "flower-vs-oil":
      return (
        <PersonArt>
          {/* leaf + oil drop */}
          <path d="M92 30c0-8 6-14 14-14 0 8-6 14-14 14Z" fill={LIME} />
          <path d="M92 30c3-5 7-9 12-12" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M24 54c-3 4-4 7-4 9a7 7 0 0 0 14 0c0-2-1-5-4-9-1.4-1.8-4.6-1.8-6 0Z" fill={WHITE} />
        </PersonArt>
      );
    case "cbd-vs-medical-cannabis":
      return (
        <PersonArt>
          {/* shop bottle vs prescription bottle */}
          <rect x="88" y="24" width="10" height="18" rx="2" fill={WHITE} />
          <rect x="90" y="20" width="6" height="5" rx="1" fill={INK} />
          <rect x="100" y="20" width="12" height="22" rx="2" fill={LIME} />
          <rect x="103" y="16" width="6" height="5" rx="1" fill={INK} />
          <path d="M96 24v.5" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        </PersonArt>
      );
    case "side-effects":
      return (
        <PersonArt>
          {/* dizzy swirl */}
          <path
            d="M28 20c10-4 18 4 13 11-4 5-12 3-11-2 .8-4 7-3 6 0"
            stroke={SUN}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="94" cy="20" r="2.4" fill={INK} />
          <circle cx="100" cy="30" r="1.8" fill={INK} />
        </PersonArt>
      );
    case "talking-to-your-gp":
      return (
        <PersonArt>
          {/* speech bubble with medical cross */}
          <path
            d="M82 12h22a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-10l-7 7v-7h-5a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
            fill={WHITE}
          />
          <path d="M93 17v10M88 22h10" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        </PersonArt>
      );
    case "tolerance-breaks":
      return (
        <PersonArt>
          {/* pause + calendar */}
          <rect x="86" y="16" width="24" height="22" rx="3" fill={WHITE} />
          <path d="M86 23h24" stroke={INK} strokeWidth="2" />
          <path d="M92 12v6M104 12v6" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M94 29v5M102 29v5" stroke={SUN} strokeWidth="3" strokeLinecap="round" />
        </PersonArt>
      );
    default:
      return <PersonArt />;
  }
}

export default function GuideTile({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream-tint shadow-soft transition-all duration-fast ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <p className="px-4 pt-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
        {guide.kicker}
      </p>
      <h3 className="px-4 pt-1.5 text-center text-[16px] font-extrabold leading-snug text-ink">
        {guide.title}
      </h3>
      <div className="flex flex-1 items-end justify-center px-4 pt-3 pb-4">
        {art(guide.slug)}
      </div>
      <span className="flex h-12 items-center justify-center bg-lime text-[15px] font-bold text-forest transition-colors duration-fast group-hover:bg-sun">
        Read the guide
      </span>
    </Link>
  );
}
