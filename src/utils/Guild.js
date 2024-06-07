/* eslint-disable jsdoc/require-jsdoc */
const GuildMember = require('../structures/Guild/GuildMember');
const GuildRank = require('../structures/Guild/GuildRank');
const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;

function parseDate(date) {
  date[1] -= 1;
  return new Date(Math.round(new Date(new Date().setUTCFullYear(...date)).setUTCHours(5, 0, 0) / 1000) * 1000);
}

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

function getGuildLevel(exp) {
  const EXP_NEEDED = [
    100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 2500000, 2500000, 2500000,
    2500000, 3000000
  ];

  let level = 0;

  for (let i = 0; 1000 >= i; i += 1) {
    let need;
    if (i >= EXP_NEEDED.length) {
      need = EXP_NEEDED[EXP_NEEDED.length - 1];
    } else {
      need = EXP_NEEDED[i];
    }

    if (0 > exp - need) {
      return Math.round((level + exp / need) * 100) / 100;
    }
    level += 1;
    exp -= need;
  }

  return 1000;
}

function members(data) {
  return data.members.length ? data.members.map((m) => new GuildMember(m)) : [];
}

function ranks(data) {
  return data.ranks && data.ranks.length
    ? data.ranks.map((r) => new GuildRank(r)).sort((a, b) => a.priority - b.priority)
    : [];
}

function totalWeeklyGexp(data) {
  return members(data)
    .map((m) => m.weeklyExperience)
    .reduce((acc, cur) => acc + cur);
}

function expLimit(exp) {
  return 2e5 < exp ? (7e5 < exp ? 2.5e5 + Math.round(exp * 0.03) : 2e5 + Math.round((exp - 2e5) / 10)) : exp;
}

function calculateExpHistory(data) {
  const finalObj = {};
  for (const day of Object.keys(data.members[0].expHistory)) {
    let gexp = 0;
    for (const member of data.members) {
      gexp += member.expHistory[day] || 0;
    }
    finalObj[day] = expLimit(gexp);
  }
  return parseHistory(finalObj);
}

/**
 * @typedef {object} ExpHistory
 * @property {string} day String Date ( unparsed )
 * @property {Date} date Parsed Date
 * @property {number} exp Experience of the day
 * @property {number} totalExp Experience earned from day 0 to this day
 */
module.exports = { parseHistory, getGuildLevel, calculateExpHistory, totalWeeklyGexp, ranks, members };
