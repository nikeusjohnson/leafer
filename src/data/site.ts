// Vercel supplies the production hostname on both preview and production builds.
export const siteUrl = new URL(
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || "leafer-one.vercel.app"}`,
);
