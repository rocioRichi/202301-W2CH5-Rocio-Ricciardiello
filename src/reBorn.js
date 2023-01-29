import { checkNeighbour } from './checkNeighbour.js';

export const reBorn = (cementery, matrix) => {
  const readyForResurrection = cementery.filter(
    (deadbody) => checkNeighbour(deadbody.i, deadbody.j, matrix) === 3
  );
  readyForResurrection.forEach((deadbody) => {
    matrix[deadbody.i][deadbody.j] = 'O';
  });

  cementery = cementery.filter(
    (deadbody) => checkNeighbour(deadbody.i, deadbody.j, matrix) !== 3
  );
};
