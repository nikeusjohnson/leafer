import type { Clinic } from "@/data/clinics";

export default function ComparePicker({
  choices,
  first = "",
  second = "",
}: {
  choices: Pick<Clinic, "slug" | "name">[];
  first?: string;
  second?: string;
}) {
  return (
    <form
      className="compare-picker"
      action="/clinics/compare"
      method="get"
      aria-label="Choose clinics to compare"
    >
      {(["a", "b"] as const).map((name) => (
        <label key={name}>
          <span id={"compare-label-" + name}>
            {name === "a" ? "First clinic" : "Second clinic"}
          </span>
          <select
            aria-labelledby={"compare-label-" + name}
            name={name}
            required
            value={name === "a" ? first : second}
          >
            <option value="" disabled>
              Choose a clinic
            </option>
            {choices.map((c) => (
              <option
                key={c.slug}
                value={c.slug}
                disabled={c.slug === (name === "a" ? second : first)}
              >
                {c.name}
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
