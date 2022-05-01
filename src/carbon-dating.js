const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if(!sampleActivity || typeof sampleActivity !== "string" || MODERN_ACTIVITY < sampleActivity ||
    sampleActivity < 0) {
    return false;
  }
  const activity = parseFloat(sampleActivity);
  if(!activity) {
    return false;
  }
  return Math.ceil(((Math.log(MODERN_ACTIVITY / activity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};
