import './style.css';
import goblin from './goblin.png';

const field = document.getElementById('field');

const cells = [];
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.appendChild(cell);
  cells.push(cell);
}

const goblinImg = document.createElement('img');
goblinImg.src = goblin;
goblinImg.alt = 'Goblin';

let currentIndex = -1;

function moveGoblin() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * 16);
  } while (nextIndex === currentIndex);

  cells[nextIndex].appendChild(goblinImg);
  currentIndex = nextIndex;
}

moveGoblin();
setInterval(moveGoblin, 1000);
