import Link from "next/link";
import type { Condition } from "@/data/conditions";

/* Go.Compare-style flat illustration palette */
const INK = "#173F15";
const SKIN = "#F4C9A6";
const LIME = "#C5E47D";
const TINT = "#E9F5DC";
const SUN = "#F6E35C";
const WHITE = "#FFFFFF";

function Base({ children }: { children?: React.ReactNode }) {
  return (
    <svg viewBox="0 0 120 96" fill="none" aria-hidden="true" className="mx-auto h-24 w-auto">
      {/* backdrop blob */}
      <circle cx="60" cy="54" r="40" fill={TINT} />
      {/* body */}
      <path d="M33 96C33 67 87 67 87 96H33Z" fill={INK} />
      {/* arms */}
      <path d="M37 82q-9 4 -12 12" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
      <path d="M83 82q9 4 12 12" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
      {/* head */}
      <circle cx="60" cy="39" r="15" fill={SKIN} />
      {/* hair cap */}
      <path d="M45 37a15 15 0 0 1 30 0c-4-7-26-7-30 0Z" fill={INK} />
      {/* face */}
      <circle cx="55" cy="40" r="1.4" fill={INK} />
      <circle cx="65" cy="40" r="1.4" fill={INK} />
      <path d="M56 46q4 3 8 0" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      {children}
    </svg>
  );
}

function art(slug: string) {
  switch (slug) {
    case "chronic-pain":
      return (
        <Base>
          {/* pain sparks at lower back */}
          <path d="M92 66l3-6 3 6 6 2-6 2-3 6-3-6-6-2 6-2Z" fill={SUN} />
          <path d="M22 70l2-4 2 4 4 1.4-4 1.4-2 4-2-4-4-1.4 4-1.4Z" fill={SUN} />
        </Base>
      );
    case "anxiety-disorders":
      return (
        <Base>
          {/* spiral thoughts */}
          <path
            d="M86 14c8 0 12 6 9 11-2 4-8 4-9 0-1-3 3-5 4-2"
            stroke={INK}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="30" cy="16" r="2.4" fill={INK} />
          <circle cx="24" cy="26" r="1.8" fill={INK} />
        </Base>
      );
    case "ptsd":
      return (
        <Base>
          {/* storm cloud + bolt */}
          <path
            d="M80 26a7 7 0 0 1 13-3 6 6 0 0 1 9 5c0 3-2 5-5 5H84c-3 0-5-3-4-7Z"
            fill={WHITE}
          />
          <path d="M90 34l-3 7h4l-3 7" stroke={SUN} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </Base>
      );
    case "epilepsy":
      return (
        <Base>
          {/* seizure zigzag */}
          <path d="M88 14l-7 12h6l-7 12" stroke={SUN} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        </Base>
      );
    case "multiple-sclerosis":
      return (
        <Base>
          {/* walking cane */}
          <path d="M96 58v34" stroke={SUN} strokeWidth="3.4" strokeLinecap="round" />
          <path d="M96 58q0-7 -7-6" stroke={SUN} strokeWidth="3.4" strokeLinecap="round" />
        </Base>
      );
    case "fibromyalgia":
      return (
        <Base>
          {/* tender points */}
          <circle cx="52" cy="76" r="2.6" fill={SUN} />
          <circle cx="64" cy="84" r="2.6" fill={SUN} />
          <circle cx="70" cy="72" r="2.6" fill={SUN} />
          <path d="M22 30q4-6 8 0t8 0" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
        </Base>
      );
    case "insomnia":
      return (
        <Base>
          {/* moon + stars */}
          <path d="M92 16a10 10 0 1 0 8 16 8 8 0 1 1-8-16Z" fill={SUN} />
          <path d="M26 18l1.6 3.4L31 23l-3.4 1.6L26 28l-1.6-3.4L21 23l3.4-1.6L26 18Z" fill={WHITE} />
          <circle cx="34" cy="34" r="1.6" fill={WHITE} />
        </Base>
      );
    case "migraines":
      return (
        <Base>
          {/* pulsing temple arcs */}
          <path d="M80 34a12 12 0 0 1 0 12" stroke={SUN} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M86 30a18 18 0 0 1 0 20" stroke={SUN} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M92 26a24 24 0 0 1 0 28" stroke={SUN} strokeWidth="2.6" strokeLinecap="round" />
        </Base>
      );
    case "tourette-syndrome":
      return (
        <Base>
          {/* speech burst */}
          <path
            d="M84 12h18a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-8l-6 6v-6h-4a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
            fill={WHITE}
          />
          <path d="M89 18v5M89 26v.5M98 18v5M98 26v.5" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
        </Base>
      );
    case "cancer-related-symptoms":
      return (
        <Base>
          {/* caring heart */}
          <path
            d="M95 58c-5-6-14-2-13 5 .6 5 7 9 13 13 6-4 12.4-8 13-13 1-7-8-11-13-5Z"
            fill={SUN}
          />
        </Base>
      );
    case "adhd":
      return (
        <Base>
          {/* scattered dots + arrows */}
          <circle cx="92" cy="16" r="2.6" fill={INK} />
          <circle cx="102" cy="30" r="2.2" fill={LIME} />
          <circle cx="24" cy="20" r="2.6" fill={LIME} />
          <path d="M28 34l-6 6m0-3v3h3" stroke={INK} strokeWidth="2" strokeLinecap="round" />
          <path d="M96 44l7 5m-1-4v4h-4" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        </Base>
      );
    default:
      return <Base />;
  }
}

export default function ConditionTile({ condition }: { condition: Condition }) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#F7EA9E] shadow-soft transition-all duration-fast ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <h3 className="px-4 pt-5 text-center text-[17px] font-extrabold leading-snug text-ink">
        {condition.name}
      </h3>
      <div className="flex flex-1 items-end justify-center px-4 pt-3 pb-4">
        {art(condition.slug)}
      </div>
      <span className="flex h-12 items-center justify-center bg-leaf-deep text-[15px] font-bold text-sun transition-colors duration-fast group-hover:bg-forest">
        See the facts
      </span>
    </Link>
  );
}
