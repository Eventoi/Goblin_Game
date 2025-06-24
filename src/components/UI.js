import goblin from '../goblin.gif';

export default class UI {
  constructor() {
    this.cells = [];
  }

  renderField() {
    const board = document.querySelector('.board');
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  showGoblin(index) {
    this.hideGoblin();
    const img = document.createElement('img');
    img.src = goblin;
    img.classList.add('goblin');
    this.cells[index].appendChild(img);
  }

  hideGoblin() {
    this.cells.forEach(cell => (cell.innerHTML = ''));
  }

  isGoblinVisible() {
    return this.cells.some(cell => cell.querySelector('.goblin'));
  }

  setOnClick(index, callback) {
    this.cells[index].onclick = () => {
      if (this.cells[index].querySelector('.goblin')) {
        callback();
      }
    };
  }
}
