const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;
/**
 * Parses exp history
 * @param {object} historyData History data from the API
 * @returns {ExpHistory[]} Array of ExpHistory
 */
function parseHistory(historyData) {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date: parseDate(x[0].match(dateRegExp).slice(1).map((x) => parseInt(x, 10))) || undefined,
    exp: x[1] || 0,
    totalExp: Object.values(historyData).slice(0, index + 1).reduce((pV, cV) => pV + cV, 0)
  }));
}

/**
 * Parses date
 * Because hypixel's oscillation precises that exp resets at 5 am UTC, the hour is set accordingly
 * @param {number[]} date Date from regexp
 * @returns {Date} Parsed Date
 */
function parseDate(date) {
  date[1] -= 1;
  return new Date(Math.round(new Date(new Date().setUTCFullYear(...date)).setUTCHours(5, 0, 0) / 1000) * 1000);
}

/**
 * Converts guild exp to guild level ( possible rewrite )
 * @param {number} exp Experience
 * @return {number}
 */
function getGuildLevel(exp) {
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
}

/**
 * @typedef {object} ExpHistory
 * @property {string} day String Date ( unparsed )
 * @property {Date} date Parsed Date
 * @property {number} exp Experience of the day
 * @property {number} totalExp Experience earned from day 0 to this day
 */
module.exports = {parseHistory, getGuildLevel};
