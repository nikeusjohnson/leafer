import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSections from "@/components/ArticleSections";
import { conditions, getCondition } from "@/data/conditions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return conditions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const condition = getCondition((await params).slug);
  return condition
    ? { title: condition.name, description: condition.short }
    : {};
}

export default async function ConditionPage({ params }: Props) {
  const condition = getCondition((await params).slug);
  if (!condition) notFound();
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-[15px] text-ink-muted">
        <Link className="link-underline" href="/conditions">
          Conditions
        </Link>
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
      <Link className="btn-secondary mt-10" href="/guides/first-consultation">
        Prepare for an appointment
      </Link>
    </article>
  );
}
