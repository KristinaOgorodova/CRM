'use strict';

const generateRandomNumberArray = (arr) => {
  arr.push(Math.floor(Math.random() * 10 + 1));
  const result = arr.reduce((sum, elem) => sum + elem);

  if (result < 50) {
    return generateRandomNumberArray(arr);
  }
  return arr;
};

console.log(generateRandomNumberArray([]));

