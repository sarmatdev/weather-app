export default class Dark {
  constructor() {
    this.dark = '';
  }

  saveMode() {
    localStorage.setItem('dark', this.dark);
    console.log('Mode saved');
  }

  readMode() {
    console.log('Mode readed');
    localStorage.getItem('dark')
  }
}
