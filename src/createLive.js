import { random } from './random.js';

export const createLive = (matrix) => {
  const range = 5;
  const column = random(range - 1);
  const row = random(range - 1);

  if (matrix[row][column] === 'O') {
    createLive(matrix);
  } else {
    matrix[row][column] = 'O';
  }
};
