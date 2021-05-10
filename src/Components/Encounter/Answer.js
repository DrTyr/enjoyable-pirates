export class Answer {
  constructor({ text, exit: bolean, goto }) {
    if (bolean === undefined) {
      bolean = false;
    }

    this.text = text;
    this.exit = bolean;
    this.goto = goto;
  }
}
