import { checkNeighbour } from './checkNeighbour.js';
import { guillotineCell } from './guillotineCell.js';

// Evaluate if the cell will live or die
export const reaper = (matrix, cementery) => {
  const kissedByTheReaper = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'O') {
        let liveNeighbour = checkNeighbour(i, j, matrix);

        if (liveNeighbour !== 2 && liveNeighbour !== 3) {
          kissedByTheReaper.push({
            i,
            j,
          });
        }
      }
    }
  }

  for (const kissed of kissedByTheReaper) {
    guillotineCell(kissed.i, kissed.j, cementery, matrix);
  }
};
