const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleNum = Number.parseFloat(sampleActivity);
  if(typeof sampleActivity !== 'string' || isNaN(sampleNum ) || sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
    return false;
  }
  const half = MODERN_ACTIVITY / sampleNum;
  const m = Math.log(2) / HALF_LIFE_PERIOD;
  const age = Math.log(half) / m;
  return Math.ceil(age);
};
