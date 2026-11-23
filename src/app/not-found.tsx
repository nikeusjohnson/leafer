import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-5 py-24 text-center md:py-28">
      <p className="eyebrow">404</p>
      <h1 className="headline mt-4 text-[40px] leading-tight md:text-[52px]">
        That page has <em>wandered off</em>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
        The link might be old, or the page might have moved. The homepage is a
        good place to start again.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to the homepage
      </Link>
    </section>
  );
}
