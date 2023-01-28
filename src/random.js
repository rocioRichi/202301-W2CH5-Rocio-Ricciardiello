export const random = (max) => {
  let min = 0;
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};
