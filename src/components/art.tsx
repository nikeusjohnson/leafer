/* Shared flat-illustration building blocks (Go.Compare style) */
export const INK = "#173F15";
export const SKIN = "#F4C9A6";
export const LIME = "#C5E47D";
export const TINT = "#E9F5DC";
export const SUN = "#F6E35C";
export const WHITE = "#FFFFFF";

export function PersonArt({ children }: { children?: import("preact").ComponentChildren }) {
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
