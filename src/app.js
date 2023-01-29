import { matrixMaker } from './matrixMaker.js';
import { random } from './random.js';
import { reaper } from './reaper.js';
import { reBorn } from './reBorn.js';
import { createLive } from './createLive.js';

const myMatrix = matrixMaker(5);
const range = 5;
const cementery = [];
const readyForResurrection = [];

const startGame = () => {
  for (let i = 0; i < myMatrix.length * 3; i++) {
    createLive(myMatrix);
  }
  console.log('esta es la matriz original');
  console.log(myMatrix);
  setInterval(() => {
    console.log('------------');
    reaper(myMatrix, cementery);
    createLive(myMatrix);
    reBorn(cementery, myMatrix);
    console.log(myMatrix);
  }, 10000);
};

startGame();
