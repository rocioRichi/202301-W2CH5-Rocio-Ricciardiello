export const matrixMaker = (n) => {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 'x';
    }
  }
  return matrix;
};
