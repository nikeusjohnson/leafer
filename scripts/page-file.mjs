export function htmlFile(route) {
  if (route === "/") return "index.html";
  // The public comparison URL is resolved by query-aware CDN rewrites.
  if (route === "/clinics/compare") return "pairs/_/_.html";
  return route.slice(1) + ".html";
}
