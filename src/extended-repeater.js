const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  if (addition === null) {
    addition = 'null';
  }

  const addArr = new Array(additionRepeatTimes)
  .fill('')
  .map(item => item = addition)
  .join(additionSeparator);

  return new Array(repeatTimes)
  .fill('')
  .map(item => item = str + addArr)
  .join(separator);
}

module.exports = {
  repeater
};
