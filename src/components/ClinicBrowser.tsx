import { useLayoutEffect, useState } from "preact/hooks";
import ClinicCard from "@/components/ClinicCard";
import type { Clinic } from "@/data/clinics";
import styles from "@/app/clinics/clinics.module.css";

export default function ClinicBrowser({ clinics }: { clinics: Clinic[] }) {
  const [query, setQuery] = useState<string | null>(null);
  useLayoutEffect(() => {
    const sync = () => setQuery(location.search);
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("pageshow", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("pageshow", sync);
    };
  }, []);
  const ready = query !== null;
  const params = new URLSearchParams(query ?? "");
  const search = params.get("q") || "";
  const format = params.get("format") === "inperson" ? "inperson" : "all";
  const sort = params.get("sort") === "price" ? "price" : "name";
  const table = params.get("view") === "table";
  const selection = [...new Set((params.get("pick") || "").split(","))]
    .map((slug) => clinics.find((c) => c.slug === slug))
    .filter((clinic): clinic is Clinic => Boolean(clinic))
    .slice(0, 2);

  function update(changes: Record<string, string>) {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(changes)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", url);
    setQuery(url.search);
  }
  function choose(clinic: Clinic) {
    const chosen = selection.some((c) => c.slug === clinic.slug);
    if (!chosen && selection.length === 2) return;
    const next = chosen
      ? selection.filter((c) => c.slug !== clinic.slug)
      : [...selection, clinic];
    update({ pick: next.map((c) => c.slug).join(",") });
  }
  function compareOption(clinic: Clinic) {
    const chosen = selection.some((c) => c.slug === clinic.slug);
    return (
      <label className={styles.pickOption}>
        <input
          type="checkbox"
          aria-label={`Compare ${clinic.name}`}
          checked={chosen}
          disabled={!ready || (!chosen && selection.length === 2)}
          onChange={() => choose(clinic)}
        />
        Compare
      </label>
    );
  }
  const term = search.toLocaleLowerCase("en-GB").trim();
  const results = clinics
    .filter((c) => {
      const names = [
        c.name,
        c.slug,
        c.registeredName,
        c.slug === "lyphe" ? "TMCC The Medical Cannabis Clinics" : "",
      ];
      return (
        names.join(" ").toLocaleLowerCase("en-GB").includes(term) &&
        (format === "all" || c.inPerson)
      );
    })
    .sort(
      (a, b) =>
        (sort === "price" ? a.initialFeeNum - b.initialFeeNum : 0) ||
        a.name.localeCompare(b.name, "en-GB"),
    );
  return (
    <section className={styles.results} aria-labelledby="directory-heading">
      <div className={styles.toolbar}>
        <label>
          Find a clinic
          <input
            type="search"
            disabled={!ready}
            value={search}
            placeholder="Search by clinic name"
            onInput={(e) => update({ q: e.currentTarget.value })}
          />
        </label>
        <label>
          Appointment format
          <select
            disabled={!ready}
            value={format}
            onChange={(e) =>
              update({ format: e.currentTarget.value === "all" ? "" : e.currentTarget.value })
            }
          >
            <option value="all">All formats</option>
            <option value="inperson">In-person option</option>
          </select>
        </label>
        <label>
          Sort by
          <select
            disabled={!ready}
            value={sort}
            onChange={(e) =>
              update({ sort: e.currentTarget.value === "name" ? "" : e.currentTarget.value })
            }
          >
            <option value="name">Clinic name (A–Z)</option>
            <option value="price">Lowest starting fee</option>
          </select>
        </label>
      </div>
      <div className={styles.resultHeader}>
        <div>
          <h2 id="directory-heading" aria-live="polite">
            {results.length} {results.length === 1 ? "clinic" : "clinics"}
          </h2>
          {search || format !== "all" ? (
            <button
              type="button"
              className={styles.link}
              onClick={() => update({ q: "", format: "" })}
            >
              Clear filters
            </button>
          ) : (
            <p className={styles.resultHint}>
              Select two clinics for a detailed comparison.
            </p>
          )}
        </div>
        <div
          role="group"
          aria-label="Display results"
          className={styles.viewSwitch}
        >
          <button
            type="button"
            aria-pressed={!table}
            disabled={!ready}
            onClick={() => update({ view: "" })}
          >
            Cards
          </button>
          <button
            type="button"
            aria-pressed={table}
            disabled={!ready}
            onClick={() => update({ view: "table" })}
          >
            Table
          </button>
        </div>
      </div>
      {selection.length > 0 && (
        <div className={styles.tray}>
          <div>
            <strong aria-live="polite">{selection.length} of 2 selected</strong>
            <div className={styles.chips}>
              {selection.map((c) => (
                <button
                  key={c.slug}
                  aria-label={`Remove ${c.name} from comparison`}
                  onClick={() => choose(c)}
                >
                  {c.name} <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
          </div>
          {selection.length === 2 ? (
            <a
              className="btn-primary"
              href={`/clinics/compare?a=${selection[0].slug}&b=${selection[1].slug}`}
            >
              Compare selected clinics
            </a>
          ) : (
            <span>Choose one more clinic</span>
          )}
        </div>
      )}
      {!results.length ? (
        <div className={styles.empty}>
          <p>No clinics match your search and appointment format.</p>
        </div>
      ) : !table ? (
        <div className={styles.cardGrid}>
          {results.map((c) => (
            <ClinicCard key={c.slug} clinic={c} comparison={compareOption(c)} />
          ))}
        </div>
      ) : (
        <div
          tabIndex={0}
          role="region"
          aria-label="Clinic fees comparison table"
          className={styles.scrollTable}
        >
          <table>
            <caption className="sr-only">
              Published starting fees, follow-ups and appointment formats
            </caption>
            <thead>
              <tr>
                {[
                  "Clinic",
                  "Starting fee",
                  "Follow-up care",
                  "Appointments",
                  "Select",
                ].map((label) => (
                  <th key={label} scope="col">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((c) => (
                <tr key={c.slug}>
                  <th scope="row">
                    <a className={styles.link} href={`/clinics/${c.slug}`}>
                      {c.name}
                    </a>
                  </th>
                  <td>
                    <strong>{c.initialFee}</strong>
                    <span>{c.initialFeeLabel}</span>
                  </td>
                  <td>{c.followUpFee}</td>
                  <td>{c.format}</td>
                  <td>{compareOption(c)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
