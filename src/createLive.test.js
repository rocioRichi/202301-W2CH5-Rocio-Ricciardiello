import { createLive } from './createLive.js';
import { matrixMaker } from './matrixMaker.js';

describe('createLive', () => {
  test('The last spot should be filled', () => {
    const myMatrix2 = [
      ['O', 'O', 'O', 'x', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O', 'O'],
    ];

    createLive(myMatrix2);
    expect(myMatrix2[0][4]).toBe('O');
  });
});
