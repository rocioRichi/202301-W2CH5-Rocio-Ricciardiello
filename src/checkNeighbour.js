export const checkNeighbour = (i, j, matrix) => {
  let liveNeighbour = 0;
  if (matrix[i - 1]?.[j - 1] === 'O') liveNeighbour++;
  if (matrix[i - 1]?.[j] === 'O') liveNeighbour++;
  if (matrix[i - 1]?.[j + 1] === 'O') liveNeighbour++;
  if (matrix[i]?.[j - 1] === 'O') liveNeighbour++;
  if (matrix[i]?.[j + 1] === 'O') liveNeighbour++;
  if (matrix[i + 1]?.[j - 1] === 'O') liveNeighbour++;
  if (matrix[i + 1]?.[j] === 'O') liveNeighbour++;
  if (matrix[i + 1]?.[j + 1] === 'O') liveNeighbour++;

  return liveNeighbour;
};
