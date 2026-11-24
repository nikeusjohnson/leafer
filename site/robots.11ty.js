export default class Robots {
  data() {
    return { permalink: "robots.txt" };
  }
  render() {
    return this.robotsText();
  }
}
