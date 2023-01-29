import { guillotineCell } from './guillotineCell.js';
import { random } from './random.js';

describe('guillotine.Cell', () => {
  test('O must be replaced for x', () => {
    const matrix = [
      ['x', 'x', 'O', 'x', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ];

    const guillotineCell = (i, j, cementery, matrix) => {
      i = 2;
      j = 0;
      cementery = [i, j];
      const freshdead = cementery.find(
        (deathbody) => deathbody.i === i && deathbody.j === j
      );
      if (!freshdead) {
        cementery.push({
          i,
          j,
        });
      }
      matrix[i][j] = 'x';
    };
    expect(matrix[2][0]).toBe('x');
  });
});
