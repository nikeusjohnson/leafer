export default function Eyebrow({
  num,
  label,
  dark = false,
}: {
  num?: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <p className="eyebrow-badge">
      {num && (
        <span
          className={`eyebrow-num ${
            dark ? "!bg-cream/10 !text-cream/80" : ""
          }`}
        >
          {num}
        </span>
      )}
      <span className={`eyebrow ${dark ? "!text-cream/70" : ""}`}>{label}</span>
    </p>
  );
}
