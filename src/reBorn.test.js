import { reBorn } from './reBorn.js';
import { checkNeighbour } from './checkNeighbour.js';

describe('reBorn', () => {
  const myMatrix = [
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'O', 'O', 'O', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
  ];

  const cementery = [{ i: 0, j: 2 }];
  const readyForResurrection = [{ i: 0, j: 2 }];
  test('The already death(0,2) cell has to have 3 alive´s cells around it', () => {
    let with3AlivesArround = false;
    if (
      myMatrix[1][1] === 'O' &&
      myMatrix[1][2] === 'O' &&
      myMatrix[1][3] === 'O'
    ) {
      with3AlivesArround = true;
    }
    expect(with3AlivesArround).toBe(true);
  });

  // test('The cell has to have 3 alive´s cells around it', () => {
  //   const readyForResurrection = cementery.filter(
  //     (deadbody) => checkNeighbour(deadbody.i, deadbody.j, matrix) === 3
  //   );
  //   readyForResurrection.forEach((deadbody) => {
  //     myMatrix[0][3] = 'O';
  //   });

  //   expect(matrix[0][3]).toBe('O');
  // });
});
