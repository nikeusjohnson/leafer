import type { PageMeta } from "@/page-meta";
import ComparePicker from "@/components/ComparePicker";
import { clinics, feesChecked, getClinic, type Clinic } from "@/data/clinics";
import styles from "./compare.module.css";

export const metadata: PageMeta = {
  title: "Compare two clinics side by side",
  description:
    "Choose two UK medical cannabis clinics to compare appointment charges, ongoing fees, pharmacy costs and registration.",
  alternates: { canonical: "/clinics/compare" },
};

const fields: { label: string; render: (clinic: Clinic) => import("preact").ComponentChildren }[] =
  [
    {
      label: "Starting fee",
      render: (c) => (
        <>
          <strong className={styles.price}>{c.initialFee}</strong>
          <span>{c.initialFeeLabel}</span>
        </>
      ),
    },
    { label: "Follow-up care", render: (c) => c.followUpFee },
    { label: "Payment model", render: (c) => c.tag },
    { label: "Ongoing charges", render: (c) => c.ongoing },
    { label: "Medicine and extras", render: (c) => c.extraCosts },
    { label: "Appointments", render: (c) => c.format },
    {
      label: "Registered service",
      render: (c) => (
        <>
          {c.registeredName}
          <a href={c.regulatorUrl}>View {c.regulator} record</a>
        </>
      ),
    },
    {
      label: "Published fees",
      render: (c) => <a href={c.pricingUrl}>{c.name} fee schedule</a>,
    },
  ];

export default function ComparePage({
  query = {},
}: {
  query?: { a?: string; b?: string };
}) {
  const first = getClinic(typeof query.a === "string" ? query.a : "");
  const candidate = getClinic(typeof query.b === "string" ? query.b : "");
  const second = candidate?.slug === first?.slug ? undefined : candidate;
  const pair = first && second ? [first, second] : [];
  return (
    <>
      <header className={styles.header}>
        <div className="site-wrap">
          <nav aria-label="Breadcrumb">
            <a href="/clinics">Clinic directory</a> / Side-by-side
            comparison
          </nav>
          <h1>Compare two clinics</h1>
          <p>
            See the same costs and terms next to each other, from the first
            appointment to repeat care.
          </p>
        </div>
      </header>
      <div className={`site-wrap ${styles.main}`}>
        <details
          className={styles.picker}
          open={!pair.length}
          key={`${first?.slug}/${second?.slug}`}
        >
          <summary>
            {pair.length ? "Change clinics" : "Choose your clinics"}
          </summary>
          <ComparePicker
            key={`${first?.slug}/${second?.slug}`}
            choices={clinics.map(({ slug, name }) => ({ slug, name }))}
            first={first?.slug}
            second={second?.slug}
          />
        </details>
        {pair.length > 0 ? (
          <section aria-labelledby="pair-heading">
            <div className={styles.resultTitle}>
              <h2 id="pair-heading">Your comparison</h2>
              <p>Fees checked {feesChecked}. Medicine is priced separately.</p>
            </div>
            <table className={styles.table}>
              <caption className="sr-only">
                {first?.name} and {second?.name} clinic fees and terms
              </caption>
              <thead>
                <tr>
                  <td aria-hidden="true" />
                  {pair.map((c) => (
                    <th key={c.slug} scope="col">
                      <a href={`/clinics/${c.slug}`}>{c.name}</a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map((field) => (
                  <tr key={field.label}>
                    <th scope="row">{field.label}</th>
                    {pair.map((c) => (
                      <td key={c.slug}>{field.render(c)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <section className={styles.empty}>
            <h2>
              {first || second
                ? "Choose another clinic to compare"
                : "What would you like to compare?"}
            </h2>
            <p>
              {first || second
                ? "Your first choice is ready. Choose a different clinic in the other field to see both profiles together."
                : "Select two names above to see appointment fees, subscription terms, pharmacy charges and regulator links."}
            </p>
            <a href="/clinics" className="text-link">
              Browse all {clinics.length} clinics
            </a>
          </section>
        )}
        <aside className={styles.help}>
          <strong>Comparing a subscription with a one-off fee?</strong>{" "}
          <a
            className="text-link"
            href="/guides/membership-or-pay-as-you-go"
          >
            Work through a plan comparison
          </a>
        </aside>
      </div>
    </>
  );
}
