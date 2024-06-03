const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;
// eslint-disable-next-line jsdoc/require-jsdoc
function parseHistory(historyData) {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date:
      parseDate(
        x[0]
          .match(dateRegExp)
          .slice(1)
          .map((x) => parseInt(x, 10))
      ) || undefined,
    exp: x[1] || 0,
    totalExp: Object.values(historyData)
      .slice(0, index + 1)
      .reduce((pV, cV) => pV + cV, 0)
  }));
}

// eslint-disable-next-line jsdoc/require-jsdoc
function parseDate(date) {
  date[1] -= 1;
  return new Date(Math.round(new Date(new Date().setUTCFullYear(...date)).setUTCHours(5, 0, 0) / 1000) * 1000);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getGuildLevel(exp) {
  const EXP_NEEDED = [
    100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 2500000, 2500000, 2500000,
    2500000, 3000000
  ];

  let level = 0;

  for (let i = 0; i <= 1000; i += 1) {
    let need = 0;
    if (i >= EXP_NEEDED.length) {
      need = EXP_NEEDED[EXP_NEEDED.length - 1];
    } else {
      need = EXP_NEEDED[i];
    }

    if (exp - need < 0) {
      return Math.round((level + exp / need) * 100) / 100;
    }
    level += 1;
    exp -= need;
  }

  return 1000;
}

/**
 * @typedef {object} ExpHistory
 * @property {string} day String Date ( unparsed )
 * @property {Date} date Parsed Date
 * @property {number} exp Experience of the day
 * @property {number} totalExp Experience earned from day 0 to this day
 */
module.exports = { parseHistory, getGuildLevel };
