import Link from "next/link";
import Image from "next/image";
import type { Guide } from "@/data/guides";

const artwork: Record<string, string> = {
  costs: "/images/guide-appointments.webp",
  "talking-to-your-gp": "/images/guide-records.webp",
  "first-consultation": "/images/guide-stethoscope.webp",
};

export default function GuideTile({ guide }: { guide: Guide }) {
  const src = artwork[guide.slug];
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-soft"
    >
      {src && (
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src={src}
            alt=""
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col px-6 py-6">
        <p className="text-[14px] font-semibold text-leaf-deep">
          {guide.kicker}
        </p>
        <h2 className="headline mt-2 text-[25px] leading-tight group-hover:underline">
          {guide.title}
        </h2>
        <p className="mb-5 mt-3 text-[16px] leading-relaxed text-ink-soft">
          {guide.description}
        </p>
        <span className="mt-auto text-[14px] text-ink-muted">
          {guide.readTime}
        </span>
      </div>
    </Link>
  );
}
