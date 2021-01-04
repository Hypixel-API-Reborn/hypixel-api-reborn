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

/**
 * BedWars class
 * @param {object} data BedWars data
 */
class BedWars {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Level
     * @type {number}
     */
    this.level = data.Experience ? getLevelForExp(data.Experience) : 0;
    /**
     * Prestige
     * @type {BedWarsPrestige}
     */
    this.prestige = data.Experience ? getBedWarsPrestige(getLevelForExp(data.Experience)) : 'Stone';
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games_played_bedwars || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_bedwars || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.winstreak || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_bedwars || 0;
    /**
     * Final kills
     * @type {number}
     */
    this.finalKills = data.final_kills_bedwars || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses_bedwars || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_bedwars || 0;
    /**
     * Final deaths
     * @type {number}
     */
    this.finalDeaths = data.final_deaths_bedwars || 0;
    /**
     * Collected items
     * @type {BedWarsCollectedItems}
     */
    this.collectedItemsTotal = {
      iron: data.iron_resources_collected_bedwars || 0,
      gold: data.gold_resources_collected_bedwars || 0,
      diamond: data.diamond_resources_collected_bedwars || 0,
      emerald: data.emerald_resources_collected_bedwars || 0
    };
    /**
     * Beds lost/broken/BL Ratio
     * @type {BedWarsBeds}
     */
    this.beds = {
      lost: data.beds_lost_bedwars || 0,
      broken: data.beds_broken_bedwars || 0,
      BLRatio: divide(data.beds_broken_bedwars, data.beds_lost_bedwars)
    };
    /**
     * Average Kills/Final kills/Beds broken
     * @type {BedWarsAvg}
     */
    this.avg = {
      kills: divide(this.kills, this.playedGames),
      finalKills: divide(this.finalKills, this.playedGames),
      bedsBroken: divide(this.beds.broken, this.playedGames)
    };
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Final kill death ratio
     * @type {number}
     */
    this.finalKDRatio = divide(this.finalKills, this.finalDeaths);
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * BedWars Solo stats
     * @type {BedWarsModeStats}
     */
    this.solo = generateStatsForMode(data, 'eight_one');
    /**
     * BedWars Doubles stats
     * @type {BedWarsModeStats}
     */
    this.doubles = generateStatsForMode(data, 'eight_two');
    /**
     * BedWars 3v3v3v3 stats
     * @type {BedWarsModeStats}
     */
    this.threes = generateStatsForMode(data, 'four_three');
    /**
     * BedWars 4v4v4v4 stats
     * @type {BedWarsModeStats}
     */
    this.fours = generateStatsForMode(data, 'four_four');
    /**
     * BedWars 4v4 stats
     * @type {BedWarsModeStats}
     */
    this['4v4'] = generateStatsForMode(data, 'two_four');
  }
}
function getBedWarsPrestige (level) {
  return ['Stone', 'Iron', 'Gold', 'Diamond', 'Emerald', 'Sapphire', 'Ruby', 'Crystal', 'Opal', 'Amethyst', 'Rainbow', 'Iron Prime', 'Gold Prime', 'Diamond Prime', 'Emerald Prime', 'Sapphire Prime', 'Ruby Prime', 'Crystal Prime', 'Opal Prime', 'Amethyst Prime', 'Mirror', 'Light', 'Dawn', 'Dusk', 'Air', 'Wind', 'Nebula', 'Thunder', 'Earth', 'Water', 'Fire'][Math.floor(level / 100)] || 'Rainbow';
}
const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;

function getExpForLevel (level) {
  if (level === 0) return 0;
  const respectedLevel = getLevelRespectingPrestige(level);
  if (respectedLevel > EASY_LEVELS) return 5000;
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
 * @param {number} level
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
 * @param {number} level
 * @returns {number}
 */
function getLevelForExp (exp) {
  const prestiges = Math.floor(exp / XP_PER_PRESTIGE);
  let level = prestiges * LEVELS_PER_PRESTIGE;
  let expWithoutPrestiges = exp - (prestiges * XP_PER_PRESTIGE);

  for (let i = 1; i <= EASY_LEVELS; ++i) {
    const expForEasyLevel = getExpForLevel(i);
    if (expWithoutPrestiges < expForEasyLevel) {
      break;
    }
    level++;
    expWithoutPrestiges -= expForEasyLevel;
  }
  return level + Math.floor(expWithoutPrestiges / 5000);
}
/**
 * @typedef {string} BedWarsPrestige
 * * `Stone`
 * * `Iron`
 * * `Gold`
 * * `Diamond`
 * * `Emerald`
 * * `Sapphire`
 * * `Ruby`
 * * `Crystal`
 * * `Opal`
 * * `Amethyst`
 * * `Rainbow`
 * * `Iron Prime`
 * * `Gold Prime`
 * * `Diamond Prime`
 * * `Emerald Prime`
 * * `Sapphire Prime`
 * * `Ruby Prime`
 * * `Crystal Prime`
 * * `Opal Prime`
 * * `Amethyst Prime`
 * * `Mirror`
 * * `Light`
 * * `Dawn`
 * * `Dusk`
 * * `Air`
 * * `Wind`
 * * `Nebula`
 * * `Thunder`
 * * `Earth`
 * * `Water`
 * * `Fire`
 */
/**
 * @typedef {object} BedWarsAvg
 * @property {number} kills Average kills
 * @property {number} finalKills Average final kills
 * @property {number} bedsBroken Average beds broken
 */
/**
 * @typedef {object} BedWarsCollectedItems
 * @property {number} iron Iron
 * @property {number} gold Gold
 * @property {number} diamond Diamond
 * @property {number} emerald Emerald
 */
/**
 * @typedef {object} BedWarsBeds
 * @property {number} lost Beds lost
 * @property {number} broken Beds broken
 * @property {number} BLRatio Beds broken/Beds lost ratio
 */
/**
 * @typedef {Object} BedWarsModeStats
 * @property {number} winstreak Winstreak
 * @property {number} playedGames Played games
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} finalKills Final kills
 * @property {number} finalDeaths Final deaths
 * @property {BedWarsBeds} beds Beds
 * @property {BedWarsAvg} avg Average Kills/Final kills/Beds broken
 * @property {number} KDRatio Kill Death ratio
 * @property {number} WLRatio Win Loss ratio
 * @property {number} finalKDRatio Final kills/Final deaths ratio
 */
module.exports = BedWars;
