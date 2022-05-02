const { NotImplementedError } = require('../extensions/index.js');

function countCats(arr) {
  let count = 0;
  arr.flat().forEach((elem) => {
    if (elem === "^^") {
    count++;
  }
  });
  return count;
}

module.exports = {
  countCats
};