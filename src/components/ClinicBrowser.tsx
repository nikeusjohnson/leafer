"use client";

import { useState } from "react";
import Link from "next/link";
import ClinicCard from "@/components/ClinicCard";
import type { Clinic } from "@/data/clinics";
import styles from "@/app/clinics/clinics.module.css";

export default function ClinicBrowser({ clinics }: { clinics: Clinic[] }) {
  const [search, setSearch] = useState("");
  const [format, setFormat] = useState("all");
  const [sort, setSort] = useState("name");
  const [view, setView] = useState<"cards" | "table">("cards");
  const query = search.trim().toLocaleLowerCase("en-GB");
  const results = clinics
    .filter((clinic) => {
      const names = [clinic.name, clinic.registeredName, clinic.slug];
      if (clinic.slug === "lyphe")
        names.push("TMCC", "The Medical Cannabis Clinics");
      return (
        (!query ||
          names.join(" ").toLocaleLowerCase("en-GB").includes(query)) &&
        (format === "all" || clinic.inPerson)
      );
    })
    .sort(
      (a, b) =>
        (sort === "price" ? a.initialFeeNum - b.initialFeeNum : 0) ||
        a.name.localeCompare(b.name, "en-GB"),
    );

  return (
    <section aria-labelledby="directory-heading" className={styles.results}>
      <div className={styles.toolbar}>
        <label>
          Find a clinic
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by clinic name"
          />
        </label>
        <label>
          Appointment format
          <select
            value={format}
            onChange={(event) => setFormat(event.target.value)}
          >
            <option value="all">All formats</option>
            <option value="inperson">In-person option</option>
          </select>
        </label>
        <label>
          Sort by
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="name">Clinic name (A–Z)</option>
            <option value="price">Lowest starting fee</option>
          </select>
        </label>
      </div>
      <div className={styles.resultHeader}>
        <h2 id="directory-heading" aria-live="polite">
          {results.length} {results.length === 1 ? "clinic" : "clinics"}
        </h2>
        <div
          className={styles.viewSwitch}
          aria-label="Display results"
          role="group"
        >
          <button
            type="button"
            aria-pressed={view === "cards"}
            onClick={() => setView("cards")}
          >
            Cards
          </button>
          <button
            type="button"
            aria-pressed={view === "table"}
            onClick={() => setView("table")}
          >
            Table
          </button>
        </div>
      </div>
      {results.length === 0 ? (
        <div className={styles.empty}>
          <p>No clinics match your search and appointment format.</p>
          <button
            type="button"
            className={styles.link}
            onClick={() => {
              setSearch("");
              setFormat("all");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : view === "cards" ? (
        <div className={styles.cardGrid}>
          {results.map((clinic) => (
            <ClinicCard key={clinic.slug} clinic={clinic} />
          ))}
        </div>
      ) : (
        <div
          className={styles.scrollTable}
          tabIndex={0}
          role="region"
          aria-label="Clinic fees comparison table"
        >
          <table>
            <caption className="sr-only">
              Published starting fees, follow-ups and appointment formats
            </caption>
            <thead>
              <tr>
                <th scope="col">Clinic</th>
                <th scope="col">Starting fee</th>
                <th scope="col">Follow-up care</th>
                <th scope="col">Appointments</th>
              </tr>
            </thead>
            <tbody>
              {results.map((clinic) => (
                <tr key={clinic.slug}>
                  <th scope="row">
                    <Link
                      className={styles.link}
                      href={`/clinics/${clinic.slug}`}
                    >
                      {clinic.name}
                    </Link>
                  </th>
                  <td>
                    <strong>{clinic.initialFee}</strong>
                    <span>{clinic.initialFeeLabel}</span>
                  </td>
                  <td>{clinic.followUpFee}</td>
                  <td>{clinic.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
