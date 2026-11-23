"use client";

import { useMemo, useState } from "react";
import ClinicCard from "@/components/ClinicCard";
import type { Clinic } from "@/data/clinics";

type Sort = "score" | "price" | "name";
type Format = "all" | "online" | "inperson";

export default function ClinicBrowser({ clinics }: { clinics: Clinic[] }) {
  const [sort, setSort] = useState<Sort>("score");
  const [format, setFormat] = useState<Format>("all");

  const shown = useMemo(() => {
    let list = [...clinics];
    if (format === "online") list = list.filter((c) => !c.inPerson);
    if (format === "inperson") list = list.filter((c) => c.inPerson);
    if (sort === "score") list.sort((a, b) => b.score - a.score);
    if (sort === "price") list.sort((a, b) => a.initialFeeNum - b.initialFeeNum);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [clinics, sort, format]);

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-fast ${
      active
        ? "bg-ink text-cream"
        : "border border-line bg-cream-tint text-ink-soft hover:border-ink/30"
    }`;

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-line bg-sage/40 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            Sort
          </span>
          {(
            [
              ["score", "Leafer score"],
              ["price", "Lowest fee"],
              ["name", "A–Z"],
            ] as [Sort, string][]
          ).map(([v, label]) => (
            <button
              key={v}
              type="button"
              aria-pressed={sort === v}
              onClick={() => setSort(v)}
              className={chip(sort === v)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            Format
          </span>
          {(
            [
              ["all", "All"],
              ["online", "Online only"],
              ["inperson", "Offers in-person"],
            ] as [Format, string][]
          ).map(([v, label]) => (
            <button
              key={v}
              type="button"
              aria-pressed={format === v}
              onClick={() => setFormat(v)}
              className={chip(format === v)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="ml-auto font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
          {shown.length} of {clinics.length} clinics
        </p>
      </div>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {shown.map((c, i) => (
          <ClinicCard key={c.slug} clinic={c} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
