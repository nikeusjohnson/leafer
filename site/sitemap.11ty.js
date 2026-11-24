export default class Sitemap {
  data() {
    return { permalink: "sitemap.xml" };
  }
  render() {
    return this.siteMapXml();
  }
}
