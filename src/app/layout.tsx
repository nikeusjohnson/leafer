import type { ComponentChildren } from "preact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { PageMeta } from "@/page-meta";
import { siteUrl } from "@/data/site";

export type Assets = Record<string, string>;
const defaultTitle = "Compare UK medical cannabis clinics | Leafer";
const defaultDescription =
  "Compare UK medical cannabis clinics, check published consultation fees and find the regulator record for each service. Explore free UK patient guides.";

export default function Layout({
  pathname,
  meta,
  assets,
  share,
  children,
}: {
  pathname: string;
  meta: PageMeta;
  assets: Assets;
  children: ComponentChildren;
  share: {
    path: string;
    title?: string;
    image: string;
    alt: string;
    pair: boolean;
  };
}) {
  const title = meta.title ? meta.title + " | Leafer" : defaultTitle;
  const description = meta.description || defaultDescription;
  const canonical = new URL(meta.alternates?.canonical || pathname, siteUrl)
    .href;
  const shareUrl = new URL(share.path, siteUrl).href;
  const shareImage = new URL(share.image, siteUrl).href;
  const editorial = /^\/(guides|conditions)\/[^/]+$/.test(pathname);
  const shareLabel = share.pair
    ? "Share comparison"
    : editorial
      ? "Share guide"
      : /^\/clinics\/(?!compare$)/.test(pathname)
        ? "Share clinic"
        : "";
  const brandId = new URL("/#organisation", siteUrl).href;
  const websiteId = new URL("/#website", siteUrl).href;
  const graph = [
    ...(pathname === "/"
      ? [
          {
            "@type": "Organization",
            "@id": brandId,
            name: "Leafer",
            url: siteUrl.href,
            logo: new URL("/brand/leafer-green.svg", siteUrl).href,
          },
          {
            "@type": "WebSite",
            "@id": websiteId,
            name: "Leafer",
            url: siteUrl.href,
            inLanguage: "en-GB",
            publisher: { "@id": brandId },
          },
        ]
      : []),
    {
      "@type": editorial ? "Article" : "WebPage",
      url: shareUrl,
      name: share.title || title,
      ...(editorial ? { headline: meta.title } : {}),
      description,
      inLanguage: "en-GB",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": brandId },
      image: {
        "@type": "ImageObject",
        url: shareImage,
        width: 1200,
        height: 630,
      },
    },
  ];
  const style = pathname.startsWith("/guides")
    ? "guides"
    : pathname === "/clinics/compare"
      ? "compare"
      : pathname.startsWith("/clinics")
        ? "clinics"
        : undefined;
  const script =
    pathname === "/clinics"
      ? "directory"
      : pathname === "/eligibility"
        ? "eligibility"
        : pathname === "/" || pathname === "/clinics/compare"
          ? "picker"
          : undefined;
  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/icons/pinned-tab.svg" {...{ color: "#156234" }} />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#156234" />
        <meta name="application-name" content="Leafer" />
        <meta name="apple-mobile-web-app-title" content="Leafer" />
        {meta.robots?.index === false && (
          <meta name="robots" content="noindex" />
        )}
        <meta property="og:title" content={share.title || title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Leafer" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content={editorial ? "article" : "website"} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={share.alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={share.title || title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
        <meta name="twitter:image:alt" content={share.alt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": graph,
            }).replace(/</g, "\\u003c"),
          }}
        />
        <link
          rel="preload"
          href="/fonts/dm-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={assets.site} />
        {style && <link rel="stylesheet" href={assets[style]} />}
        <script defer src={assets.navigation}></script>
        {script && <script defer src={assets[script]}></script>}
        {shareLabel && <script defer src={assets.share}></script>}
        <noscript>
          <style>
            {
              "@media (max-width:61rem){.masthead .nav-toggle{display:none}.masthead-inner{flex-wrap:wrap;padding-block:.5rem}.masthead .site-nav{display:flex;position:static;order:3;width:100%;flex-wrap:wrap;box-shadow:none;border:0}.site-nav a span{display:none}}"
            }
          </style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header pathname={pathname} />
        <main id="main-content" className="flex-1">
          {children}
          {shareLabel && (
            <div className="site-wrap share-row" hidden>
              <button type="button" data-share-path={share.path}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path d="M12 15V3m-5 5 5-5 5 5M5 13v7h14v-7" />
                </svg>
                {shareLabel}
              </button>
              <span role="status"></span>
            </div>
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
