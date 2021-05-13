export class Answer {
  constructor({
    text,
    exit = { shouldExit: false, timeout: 1000 },
    goTo,
    getItem = false,
    itemProps = [],
    reusable = true,
    goToUnit = { shouldGo: false, coord: { x: 0, y: 0 } },
  }) {
    this.text = text;
    this.exit = exit;
    this.goTo = goTo;
    this.getItem = getItem;
    this.itemProps = itemProps;
    this.reusable = reusable;
    this.goToUnit = goToUnit;
  }
}
