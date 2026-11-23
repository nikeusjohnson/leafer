"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import type { Clinic } from "@/data/clinics";

type Choice = Pick<Clinic, "slug" | "name">;

export default function ComparePicker({
  choices,
  first = "",
  second = "",
  compact = false,
}: {
  choices: Choice[];
  first?: string;
  second?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const id = useId();
  const [a, setA] = useState(first);
  const [b, setB] = useState(second);
  const inputs = [
    { name: "a", label: "First clinic", value: a, other: b, change: setA },
    { name: "b", label: "Second clinic", value: b, other: a, change: setB },
  ];

  return (
    <form
      className="compare-picker"
      action="/clinics/compare"
      method="get"
      aria-label="Choose clinics to compare"
      onSubmit={(event) => {
        event.preventDefault();
        const query = new URLSearchParams({ a, b });
        router.push(`/clinics/compare?${query}`, { scroll: !compact });
      }}
    >
      {inputs.map((input) => (
        <label key={input.name}>
          <span id={`${id}-${input.name}`}>{input.label}</span>
          <select
            aria-labelledby={`${id}-${input.name}`}
            name={input.name}
            required
            value={input.value}
            onChange={(event) => input.change(event.target.value)}
          >
            <option value="" disabled>
              Choose a clinic
            </option>
            {choices.map((clinic) => (
              <option
                key={clinic.slug}
                value={clinic.slug}
                disabled={clinic.slug === input.other}
              >
                {clinic.name}
              </option>
            ))}
          </select>
        </label>
      ))}
      <button type="submit" className="btn-primary">
        {first && second ? "Update comparison" : "Compare clinics"}
      </button>
    </form>
  );
}
