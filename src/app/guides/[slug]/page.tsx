import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSections from "@/components/ArticleSections";
import { getGuide, guides } from "@/data/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-[15px] text-ink-muted">
        <Link className="link-underline" href="/guides">
          Patient guides
        </Link>
        <span aria-hidden="true"> / </span>
        {guide.kicker}
      </nav>
      <div className="mt-7 max-w-3xl">
        <p className="eyebrow">
          {guide.kicker} · {guide.readTime}
        </p>
        <h1 className="headline mt-4 text-[40px] leading-[1.05] md:text-[56px]">
          {guide.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[19px] leading-relaxed text-ink-soft">
          {guide.intro}
        </p>
      </div>
      <div className="mt-10 border-t border-line pt-9">
        <ArticleSections sections={guide.sections} />
      </div>
      <Link className="btn-secondary mt-10" href="/guides">
        Browse patient guides
      </Link>
    </article>
  );
}
