// Send the cell to cementery
export const guillotineCell = (i, j, cementery, matrix) => {
  const freshdeath = cementery.find(
    (deathbody) => deathbody.i === i && deathbody.j === j
  );
  if (!freshdeath) {
    cementery.push({
      i,
      j,
    });
  }
  matrix[i][j] = 'x';
};
