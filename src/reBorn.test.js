import { reBorn } from './reBorn.js';
import { checkNeighbour } from './checkNeighbour.js';

describe('reBorn', () => {
  test('All cells have to have an O', () => {
    const myMatrix = [
      ['O', 'O', 'O', 'x', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ];
    const readyForResurrection = [{ i: 0, j: 3 }];

    let allFilled = true;

    readyForResurrection.forEach((deadbody) => {
      myMatrix[deadbody.i][deadbody.j] = 'O';
    });
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (myMatrix[0][3] !== 'O') {
          allFilled = false;
        }
      }
    }

    console.log(myMatrix);
    expect(allFilled).toBe(true);
  });

  test('The cell 1,0 has to have 3 alive´s cell around it', () => {
    const myMatrix2 = [
      ['x', 'x', 'O', 'x', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ];
    let neighbourhoddOf01Cell = checkNeighbour(1, 0, myMatrix2);

    console.log(myMatrix2);
    expect(neighbourhoddOf01Cell).toBe(3);
  });

  test('Check all the cementery´s cells than have 3 alive´s Cells around it', () => {
    const myMatrix3 = [
      ['x', 'x', 'O', 'x', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ];

    const cementery = [({ i: 0, j: 1 }, { i: 1, j: 3 }, { i: 3, j: 3 })];
    const readyForResurrection = cementery.filter(
      (deadbody) => checkNeighbour(deadbody.i, deadbody.j, myMatrix3) === 3
    );
    let neighbourhoddOf01Cell = checkNeighbour(1, 0, myMatrix3);

    expect(neighbourhoddOf01Cell).toBe(3);
  });
});
