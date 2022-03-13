const getRandomPositiveInteger = (x, y) => {
  const lower = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const upper = Math.floor(Math.max(Math.abs(x), Math.abs(y)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;

export {getRandomPositiveInteger, checkStringLength};
