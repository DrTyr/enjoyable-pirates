export class Answer {
  constructor({ text, shouldExit = false, goTo }) {
    this.text = text;
    this.shouldExit = shouldExit;
    this.goTo = goTo;
  }
}
