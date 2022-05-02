const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = {
    0: 'winter',
    1: 'spring',
    2: 'summer',
    3: 'autumn'
  }
  if (date == undefined) return ('Unable to determine the time of year!');
  try {
    date.getTimezoneOffset();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) return season[0];
  if (date.getMonth() >= 2 && date.getMonth() <= 4) return season[1];
  if (date.getMonth() >= 5 && date.getMonth() <= 7) return season[2];
  if (date.getMonth() >= 8 && date.getMonth() <= 10) return season[3];
}

module.exports = {
  getSeason
};
