module.exports = (exp) => {
  if (exp < 100000) {
    return 0;
  } else if (exp < 250000) {
    return 1;
  } else if (exp < 500000) {
    return 2;
  } else if (exp < 1000000) {
    return 3;
  } else if (exp < 1750000) {
    return 4;
  } else if (exp < 2750000) {
    return 5;
  } else if (exp < 4000000) {
    return 6;
  } else if (exp < 5500000) {
    return 7;
  } else if (exp < 7500000) {
    return 8;
  } else if (exp >= 7500000) {
    if (exp < 15000000) {
      return Math.floor((exp - 7500000) / 2500000) + 9;
    } else {
      return Math.floor((exp - 15000000) / 3000000) + 12;
    }
  }
};
