import type { PageMeta } from "@/page-meta";
import ArticleSections from "@/components/ArticleSections";
import { conditions, getCondition } from "@/data/conditions";

type Props = { params: { slug: string } };

export function slugs() {
  return conditions.map(({ slug }) => ({ slug }));
}

export function pageMeta({ params }: Props): PageMeta {
  const condition = getCondition(params.slug);
  return condition
    ? { title: condition.name, description: condition.short }
    : {};
}

export default function ConditionPage({ params }: Props) {
  const condition = getCondition(params.slug);
  if (!condition) throw new Error("Missing page record");
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-[15px] text-ink-muted">
        <a className="link-underline" href="/conditions">
          Conditions
        </a>
        <span aria-hidden="true"> / </span>
        {condition.name}
      </nav>
      <h1 className="headline mt-7 max-w-3xl text-[40px] leading-[1.05] md:text-[56px]">
        {condition.name}
      </h1>
      <p className="mt-5 max-w-2xl text-[19px] leading-relaxed text-ink-soft">
        {condition.intro}
      </p>
      <div className="mt-10 border-t border-line pt-9">
        <ArticleSections sections={condition.sections} />
      </div>
      <a className="btn-secondary mt-10" href="/guides/first-consultation">
        Prepare for an appointment
      </a>
    </article>
  );
}
