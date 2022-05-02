const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesArr = new Array(matrix.length+2).fill('').map(item=>new Array(matrix[0].length+2).fill(0));
  for (let i = 1; i < minesArr.length-1; i++) {
    for (let k = 1; k < minesArr[i].length-1; k++) {
      if (!matrix[i-1][k-1]) {
        continue;
      }
      minesArr[i - 1][k]++; minesArr[i - 1][k - 1]++; minesArr[i - 1][k + 1]++;
      minesArr[i][k - 1]++; minesArr[i][k + 1]++; minesArr[i + 1][k]++; minesArr[i + 1][k - 1]++; minesArr[i + 1][k + 1]++;    
    }
  }  
  return minesArr.slice(1, -1).map(item => item.slice(1, -1))
}

module.exports = {
  minesweeper
};
