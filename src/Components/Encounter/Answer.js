export class Answer {
  constructor({
    text,
    shouldExit = false,
    goTo,
    getItem = false,
    itemProps = [],
  }) {
    this.text = text;
    this.shouldExit = shouldExit;
    this.goTo = goTo;
    this.getItem = getItem;
    this.itemProps = itemProps;
  }
}
