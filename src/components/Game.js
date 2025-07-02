export default class Game {
  constructor(ui) {
    this.ui = ui;
    this.score = 0;
    this.missed = 0;
    this.interval = null;
  }

  start() {
    this.ui.renderField();
    this.interval = setInterval(() => this.nextGoblin(), 1000);
  }

  nextGoblin() {
    const index = Math.floor(Math.random() * this.ui.cells.length);
    this.ui.showGoblin(index);

    this.ui.setOnClick(index, () => {
      this.score++;
      this.ui.hideGoblin();
    });

    setTimeout(() => {
      if (this.ui.isGoblinVisible()) {
        this.missed++;
        if (this.missed >= 5) {
          clearInterval(this.interval);
          alert('Игра окончена!');
        }
        this.ui.hideGoblin();
      }
    }, 1000);
  }
}
