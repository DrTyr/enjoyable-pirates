export class Answer {
  constructor({
    text,
    exit = { shouldExit: false, timeout: 1000 },
    goTo,
    getItem = false,
    itemProps = [],
  }) {
    this.text = text;
    this.exit = exit;
    this.goTo = goTo;
    this.getItem = getItem;
    this.itemProps = itemProps;
  }
}
