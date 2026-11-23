import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // The parent folder contains an unrelated Next project + lockfile;
  // pin tracing to this app so builds don't get confused.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
