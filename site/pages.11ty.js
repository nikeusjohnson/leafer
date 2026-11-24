import { htmlFile } from "../scripts/page-file.mjs";

export default class Pages {
  data() {
    return {
      pagination: { data: "routePaths", size: 1, alias: "route" },
      permalink: ({ route }) => htmlFile(route),
      eleventyExcludeFromCollections: true,
    };
  }
  render({ route }) {
    return this.renderRoute(route);
  }
}
