const divide = require('../../utils/divide');

const generateStatsForMode = (data, mode) => {
  return {
    winstreak: data[`${mode}_winstreak`] || 0,
    playedGames: data[`${mode}_games_played_bedwars`] || 0,

    kills: data[`${mode}_kills_bedwars`] || 0,
    deaths: data[`${mode}_deaths_bedwars`] || 0,

    wins: data[`${mode}_wins_bedwars`] || 0,
    losses: data[`${mode}_losses_bedwars`] || 0,

    finalKills: data[`${mode}_final_kills_bedwars`] || 0,
    finalDeaths: data[`${mode}_final_deaths_bedwars`] || 0,

    beds: {
      broken: data[`${mode}_beds_broken_bedwars`] || 0,
      lost: data[`${mode}_beds_lost_bedwars`] || 0,
      BLRatio: divide(data[`${mode}_beds_broken_bedwars`], data[`${mode}_beds_lost_bedwars`])
    },

    avg: {
      kills: divide(data[`${mode}_kills_bedwars`], data[`${mode}_games_played_bedwars`]),
      finalKills: divide(data[`${mode}_final_kills_bedwars`], data[`${mode}_games_played_bedwars`]),
      bedsBroken: divide(data[`${mode}_beds_broken_bedwars`], data[`${mode}_games_played_bedwars`])
    },

    KDRatio: divide(data[`${mode}_kills_bedwars`], data[`${mode}_deaths_bedwars`]),
    WLRatio: divide(data[`${mode}_wins_bedwars`], data[`${mode}_losses_bedwars`]),
    finalKDRatio: divide(data[`${mode}_final_kills_bedwars`], data[`${mode}_final_deaths_bedwars`])
  };
};

class BedWars {
  constructor (data) {
    this.coins = data.coins || 0;
    this.level = data.Experience ? getLevelForExp(data.Experience) : 0;
    this.prestige = data.Experience ? getBedWarsPrestige(getLevelForExp(data.Experience)) : 'Stone';
    this.playedGames = data.games_played_bedwars || 0;
    this.wins = data.wins_bedwars || 0;
    this.winstreak = data.winstreak || 0;
    this.kills = data.kills_bedwars || 0;
    this.finalKills = data.final_kills_bedwars || 0;
    this.losses = data.losses_bedwars || 0;
    this.deaths = data.deaths_bedwars || 0;
    this.finalDeaths = data.final_deaths_bedwars || 0;
    this.collectedItemsTotal = {
      iron: data.iron_resources_collected_bedwars || 0,
      gold: data.gold_resources_collected_bedwars || 0,
      diamond: data.diamond_resources_collected_bedwars || 0,
      emerald: data.emerald_resources_collected_bedwars || 0
    };
    this.beds = {
      lost: data.beds_lost_bedwars || 0,
      broken: data.beds_broken_bedwars || 0,
      BLRatio: divide(data.beds_broken_bedwars, data.beds_lost_bedwars)
    };

    this.avg = {
      kills: divide(this.kills, this.playedGames),
      finalKills: divide(this.finalKills, this.playedGames),
      bedsBroken: divide(this.beds.broken, this.playedGames)
    };

    this.KDRatio = divide(this.kills, this.deaths);
    this.finalKDRatio = divide(this.finalKills, this.finalDeaths);
    this.WLRatio = divide(this.wins, this.losses);
    this.solo = generateStatsForMode(data, 'eight_one');
    this.doubles = generateStatsForMode(data, 'eight_two');
    this.three = generateStatsForMode(data, 'four_three');
    this.four = generateStatsForMode(data, 'four_four');
    this.fourV2 = generateStatsForMode(data, 'two_four');
  }
}
function getBedWarsPrestige (level) {
  if (level < 100) {
    return 'Stone';
  } else if (level < 200) {
    return 'Iron';
  } else if (level < 300) {
    return 'Gold';
  } else if (level < 400) {
    return 'Diamond';
  } else if (level < 500) {
    return 'Emerald';
  } else if (level < 600) {
    return 'Sapphire';
  } else if (level < 700) {
    return 'Ruby';
  } else if (level < 800) {
    return 'Crystal';
  } else if (level < 900) {
    return 'Opal';
  } else if (level < 1000) {
    return 'Amethyst';
  }

  return 'Rainbow';
}
const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;

function getExpForLevel (level) {
  if (level === 0) return 0;

  var respectedLevel = getLevelRespectingPrestige(level);
  if (respectedLevel > EASY_LEVELS) {
    return 5000;
  }

  switch (respectedLevel) {
    case 1:
      return 500;
    case 2:
      return 1000;
    case 3:
      return 2000;
    case 4:
      return 3500;
  }
  return 5000;
}

/**
 *
 * @param {number} level
 *
 * @returns {number}
 */
function getLevelRespectingPrestige (level) {
  if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
    return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE;
  } else {
    return level % LEVELS_PER_PRESTIGE;
  }
}

/**
 *
 * @param {number} level
 *
 * @returns {number}
 */
function getLevelForExp (exp) {
  var prestiges = Math.floor(exp / XP_PER_PRESTIGE);
  var level = prestiges * LEVELS_PER_PRESTIGE;
  var expWithoutPrestiges = exp - (prestiges * XP_PER_PRESTIGE);

  for (let i = 1; i <= EASY_LEVELS; ++i) {
    var expForEasyLevel = getExpForLevel(i);
    if (expWithoutPrestiges < expForEasyLevel) {
      break;
    }
    level++;
    expWithoutPrestiges -= expForEasyLevel;
  }
  return level + Math.floor(expWithoutPrestiges / 5000);
}

module.exports = BedWars;
