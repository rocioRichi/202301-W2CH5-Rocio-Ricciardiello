// Send the cell to cementery
export const guillotineCell = (i, j, cementery, matrix) => {
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
