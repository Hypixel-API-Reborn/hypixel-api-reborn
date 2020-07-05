/**
 * @param {Number} exp
 * @description Guild level by exp
 * @returns {Number}
 */
module.exports = (exp) => {
  let level;
  if (exp < 100000) {
    level = 0;
  } else if (exp < 250000) {
    level = 1;
  } else if (exp < 500000) {
    level = 2;
  } else if (exp < 1000000) {
    level = 3;
  } else if (exp < 1750000) {
    level = 4;
  } else if (exp < 2750000) {
    level = 5;
  } else if (exp < 4000000) {
    level = 6;
  } else if (exp < 5500000) {
    level = 7;
  } else if (exp < 7500000) {
    level = 8;
  } else if (exp >= 7500000) {
    if (exp < 15000000) {
      level = Math.floor((exp - 7500000) / 2500000) + 9;
    } else {
      level = Math.floor((exp - 15000000) / 3000000) + 12;
    }
  }
  return level;
};
