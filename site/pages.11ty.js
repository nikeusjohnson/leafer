export default class Pages {
  data() {
    return {
      pagination: { data: "routePaths", size: 1, alias: "route" },
      permalink: ({ route }) =>
        route === "/" ? "index.html" : route.slice(1) + ".html",
      eleventyExcludeFromCollections: true,
    };
  }
  render({ route }) {
    return this.renderRoute(route);
  }
}
