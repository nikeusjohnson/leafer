import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import ArticleSections from "@/components/ArticleSections";
import { getGuide, guides } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return { title: g.title, description: g.description };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <article className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        <Link href="/guides" className="hover:text-ink">Guides</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{g.kicker}</span>
      </nav>

      <div className="mt-8 max-w-3xl">
        <Eyebrow label={`${g.kicker} · ${g.readTime}`} />
        <h1 className="headline mt-5 text-[38px] leading-[1.08] md:text-[50px]">
          {g.title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[20px] leading-[1.65] text-ink-soft">
          {g.intro}
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-12">
        <ArticleSections sections={g.sections} />
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-leaf-tint px-6 py-10 md:px-10">
        <div>
          <h2 className="headline text-[24px] md:text-[28px]">
            Still working it <em>out?</em>
          </h2>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The checker takes a minute and might save you a wasted consultation fee.
          </p>
        </div>
        <Link href="/eligibility" className="btn-primary">Check eligibility — free</Link>
      </div>
    </article>
  );
}
