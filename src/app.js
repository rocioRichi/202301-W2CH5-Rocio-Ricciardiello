import { matrixMaker } from './matrixMaker.js';
import { random } from './random.js';

const myMatrix = matrixMaker(5);
const range = 5;
const cementery = [];

const startGame = () => {
  for (let i = 0; i < myMatrix.length * 3; i++) {
    createLive();
  }

  reaper();
  setInterval(() => {
    createLive();
    console.log(myMatrix);
    console.log('------------');
    reaper();
  }, 10000);
};

// Create a cell and insert into the myMatrix

const createLive = () => {
  const column = random(range - 1);
  const row = random(range - 1);
  if (myMatrix[row][column] === 'O') {
    createLive();
  } else {
    myMatrix[row][column] = 'O';
  }
};

// Evaluate if the cell will live or die
const reaper = () => {
  const kissedByTheReaper = [];

  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      if (myMatrix[i][j] === 'O') {
        let liveNeighbour = 0;
        if (myMatrix[i - 1]?.[j - 1] === 'O') liveNeighbour++;
        if (myMatrix[i - 1]?.[j] === 'O') liveNeighbour++;
        if (myMatrix[i - 1]?.[j + 1] === 'O') liveNeighbour++;
        if (myMatrix[i]?.[j - 1] === 'O') liveNeighbour++;
        if (myMatrix[i]?.[j + 1] === 'O') liveNeighbour++;
        if (myMatrix[i + 1]?.[j - 1] === 'O') liveNeighbour++;
        if (myMatrix[i + 1]?.[j] === 'O') liveNeighbour++;
        if (myMatrix[i + 1]?.[j + 1] === 'O') liveNeighbour++;

        if (liveNeighbour !== 2 && liveNeighbour !== 3) {
          kissedByTheReaper.push({
            i,
            j,
          });
        }
      }
      // for every cell we are gonna do
      // Count every neighbour
    }
  }
  for (const kissed of kissedByTheReaper) {
    guillotineCell(kissed.i, kissed.j);
  }
};

// Send the cell to purgatory
const guillotineCell = (i, j) => {
  cementery.push({
    i,
    j,
  });
  myMatrix[i][j] = 'x';
};

// Reborn the cell previously death
const reBorn = () => {};

startGame();
