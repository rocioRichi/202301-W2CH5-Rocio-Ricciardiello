import { matrixMaker } from './matrixMaker.js';

// cementery[({ i: 0, j: 1 }, { i: 1, j: 3 }, { i: 5, j: 1 }, { i: 5, j: 3 })];

describe('matrixMaker', () => {
  test('All cell have to have an x', () => {
    let allFilled = true;
    const myMatrix = matrixMaker(5);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (myMatrix[i][j] !== 'x') {
          allFilled = false;
        }
      }
    }
    console.log(myMatrix);
    expect(allFilled).toBe(true);
  });
});
