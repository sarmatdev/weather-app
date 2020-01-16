export default class Dark {
  constructor() {
    this.dark;
  }

  saveMode() {
    localStorage.setItem('dark', JSON.stringify(this.dark));
  }

  readMode() {
    const dark = JSON.parse(localStorage.getItem('dark'));
    if (dark) this.dark = dark;
  }
}
