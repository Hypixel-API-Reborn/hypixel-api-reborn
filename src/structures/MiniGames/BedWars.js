const inRange = require('../../utils/inRange');
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
      BLRatio: isNaN(((data.beds_broken_bedwars || 0) / (data.beds_lost_bedwars || 0)) ? 0 : Math.round(((data.beds_broken_bedwars || 0) / (data.beds_lost_bedwars || 0))) * 100) / 100
    };

    this.avg = {
      finalKills: isNaN(this.finalKills / this.playedGames) ? 0 : Math.round((this.finalKills / this.playedGames) * 100) / 100,
      kills: isNaN(this.kills / this.playedGames) ? 0 : Math.round((this.kills / this.playedGames) * 100) / 100,
      bedsBroken: isNaN(this.beds.broken / this.playedGames) ? 0 : Math.round((this.beds.broken / this.playedGames) * 100) / 100
    };

    this.KDRatio = isNaN((this.kills / this.deaths)) ? 0 : Math.round((this.kills / this.deaths) * 100) / 100;
    this.finalKDRatio = isNaN((this.finalKills / this.finalDeaths)) ? 0 : Math.round((this.finalKills / this.finalDeaths) * 100) / 100;
    this.WLRatio = isNaN((this.wins / this.losses)) ? 0 : Math.round((this.wins / this.losses) * 100) / 100;
    this.solo = {
      winstreak: data.eight_one_winstreak || 0,
      kills: data.eight_one_kills_bedwars || 0,
      deaths: data.eight_one_deaths_bedwars || 0,
      finalKills: data.eight_one_final_kills_bedwars || 0,
      wins: data.eight_one_wins_bedwars || 0,
      losses: data.eight_one_losses_bedwars || 0,
      played: data.eight_one_games_played_bedwars || 0,
      KDRatio: isNaN((data.eight_one_kills_bedwars || 0) / (data.eight_one_deaths_bedwars || 0)) ? 0 : Math.round((data.eight_one_kills_bedwars / data.eight_one_deaths_bedwars) * 100) / 100,
      finalKDRatio: isNaN(((data.eight_one_final_kills_bedwars || 0) / (data.eight_one_final_deaths_bedwars || 0))) ? 0 : Math.round((data.eight_one_final_kills_bedwars / data.eight_one_final_deaths_bedwars) * 100) / 100,
      WLRatio: isNaN(((data.eight_one_wins_bedwars || 0) / (data.eight_one_losses_bedwars || 0))) ? 0 : Math.round((data.eight_one_wins_bedwars / data.eight_one_losses_bedwars) * 100) / 100,
      avg: {
        kills: isNaN((data.eight_one_kills_bedwars || 0) / (data.eight_one_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_one_kills_bedwars / data.eight_one_games_played_bedwars) * 100) / 100,
        finalKills: isNaN((data.eight_one_final_kills_bedwars || 0) / (data.eight_one_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_one_final_kills_bedwars / data.eight_one_games_played_bedwars) * 100) / 100,
        bedsBroken: isNaN((data.eight_one_beds_broken_bedwars || 0) / (data.eight_one_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_one_beds_broken_bedwars / data.eight_one_games_played_bedwars) * 100) / 100
      },
      beds: {
        lost: data.eight_one_beds_lost_bedwars || 0,
        broken: data.eight_one_beds_broken_bedwars || 0,
        BLRatio: isNaN(((data.eight_one_beds_broken_bedwars || 0) / (data.eight_one_beds_lost_bedwars || 0))) ? 0 : Math.round((data.eight_one_beds_broken_bedwars / data.eight_one_beds_lost_bedwars) * 100) / 100
      }
    };
    this.doubles = {
      winstreak: data.eight_two_winstreak || 0,
      kills: data.eight_two_kills_bedwars || 0,
      deaths: data.eight_two_deaths_bedwars || 0,
      finalKills: data.eight_two_final_kills_bedwars || 0,
      wins: data.eight_two_wins_bedwars || 0,
      losses: data.eight_two_losses_bedwars || 0,
      played: data.eight_two_games_played_bedwars || 0,
      KDRatio: isNaN(((data.eight_two_kills_bedwars || 0) / (data.eight_two_deaths_bedwars || 0))) ? 0 : Math.round((data.eight_two_kills_bedwars / data.eight_two_deaths_bedwars) * 100) / 100,
      finalKDRatio: isNaN(((data.eight_two_final_kills_bedwars || 0) / (data.eight_two_final_deaths_bedwars || 0))) ? 0 : Math.round((data.eight_two_final_kills_bedwars / data.eight_two_final_deaths_bedwars) * 100) / 100,
      WLRatio: isNaN(((data.eight_two_wins_bedwars || 0) / (data.eight_two_losses_bedwars || 0))) ? 0 : Math.round((data.eight_two_wins_bedwars / data.eight_two_losses_bedwars) * 100) / 100,
      avg: {
        kills: isNaN((data.eight_two_kills_bedwars || 0) / (data.eight_two_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_two_kills_bedwars / data.eight_two_games_played_bedwars) * 100) / 100,
        finalKills: isNaN((data.eight_two_final_kills_bedwars || 0) / (data.eight_two_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_two_final_kills_bedwars / data.eight_two_games_played_bedwars) * 100) / 100,
        bedsBroken: isNaN((data.eight_two_beds_broken_bedwars || 0) / (data.eight_two_games_played_bedwars || 0)) ? 0 : Math.round((data.eight_two_beds_broken_bedwars / data.eight_two_games_played_bedwars) * 100) / 100
      },
      beds: {
        lost: data.eight_two_beds_lost_bedwars || 0,
        broken: data.eight_two_beds_broken_bedwars || 0,
        BLRatio: isNaN(((data.eight_two_beds_broken_bedwars || 0) / (data.eight_two_beds_lost_bedwars || 0))) ? 0 : Math.round((data.eight_two_beds_broken_bedwars / data.eight_two_beds_lost_bedwars) * 100) / 100
      }
    };
    this.three = {
      winstreak: data.four_three_winstreak || 0,
      kills: data.four_three_kills_bedwars || 0,
      deaths: data.four_three_deaths_bedwars || 0,
      finalKills: data.four_three_final_kills_bedwars || 0,
      wins: data.four_three_wins_bedwars || 0,
      losses: data.four_three_losses_bedwars || 0,
      played: data.four_three_games_played_bedwars || 0,
      KDRatio: isNaN((data.four_three_kills_bedwars / data.four_three_deaths_bedwars)) ? 0 : Math.round((data.four_three_kills_bedwars / data.four_three_deaths_bedwars) * 100) / 100,
      finalKDRatio: isNaN((data.four_three_final_kills_bedwars / data.four_three_final_deaths_bedwars)) ? 0 : Math.round((data.four_three_final_kills_bedwars / data.four_three_final_deaths_bedwars) * 100) / 100,
      WLRatio: isNaN((data.four_three_wins_bedwars / data.four_three_losses_bedwars)) ? 0 : Math.round((data.four_three_wins_bedwars / data.four_three_losses_bedwars) * 100) / 100,
      avg: {
        kills: isNaN((data.four_three_kills_bedwars || 0) / (data.four_three_games_played_bedwars || 0)) ? 0 : Math.round((data.four_three_kills_bedwars / data.four_three_games_played_bedwars) * 100) / 100,
        finalKills: isNaN((data.four_three_final_kills_bedwars || 0) / (data.four_three_games_played_bedwars || 0)) ? 0 : Math.round((data.four_three_final_kills_bedwars / data.four_three_games_played_bedwars) * 100) / 100,
        bedsBroken: isNaN((data.four_three_beds_broken_bedwars || 0) / (data.four_three_games_played_bedwars || 0)) ? 0 : Math.round((data.four_three_beds_broken_bedwars / data.four_three_games_played_bedwars) * 100) / 100
      },
      beds: {
        lost: data.four_three_beds_lost_bedwars || 0,
        broken: data.four_three_beds_broken_bedwars || 0,
        BLRatio: isNaN(((data.four_three_beds_broken_bedwars || 0) / (data.four_three_beds_lost_bedwars || 0))) ? 0 : Math.round((data.four_three_beds_broken_bedwars / data.four_three_beds_lost_bedwars) * 100) / 100
      }
    };
    this.four = {
      winstreak: data.four_four_winstreak || 0,
      kills: data.four_four_kills_bedwars || 0,
      deaths: data.four_four_deaths_bedwars || 0,
      finalKills: data.four_four_final_kills_bedwars || 0,
      wins: data.four_four_wins_bedwars || 0,
      losses: data.four_four_losses_bedwars || 0,
      played: data.four_four_games_played_bedwars || 0,
      KDRatio: isNaN(((data.four_four_kills_bedwars || 0) / (data.four_four_deaths_bedwars || 0))) ? 0 : Math.round((data.four_four_kills_bedwars / data.four_four_deaths_bedwars) * 100) / 100,
      finalKDRatio: isNaN(((data.four_four_final_kills_bedwars || 0) / (data.four_four_final_deaths_bedwars || 0))) ? 0 : Math.round((data.four_four_final_kills_bedwars / data.four_four_final_deaths_bedwars) * 100) / 100,
      WLRatio: isNaN(((data.four_four_wins_bedwars || 0) / (data.four_four_losses_bedwars || 0))) ? 0 : Math.round((data.four_four_wins_bedwars / data.four_four_losses_bedwars) * 100) / 100,
      avg: {
        kills: isNaN((data.four_four_kills_bedwars || 0) / (data.four_four_games_played_bedwars || 0)) ? 0 : Math.round((data.four_four_kills_bedwars / data.four_four_games_played_bedwars) * 100) / 100,
        finalKills: isNaN((data.four_four_final_kills_bedwars || 0) / (data.four_four_games_played_bedwars || 0)) ? 0 : Math.round((data.four_four_final_kills_bedwars / data.four_four_games_played_bedwars) * 100) / 100,
        bedsBroken: isNaN((data.four_four_beds_broken_bedwars || 0) / (data.four_four_games_played_bedwars || 0)) ? 0 : Math.round((data.four_four_beds_broken_bedwars / data.four_four_games_played_bedwars) * 100) / 100
      },
      beds: {
        lost: data.four_four_beds_lost_bedwars || 0,
        broken: data.four_four_beds_broken_bedwars || 0,
        BLRatio: isNaN(((data.four_four_beds_broken_bedwars || 0) / (data.four_four_beds_lost_bedwars || 0))) ? 0 : Math.round((data.four_four_beds_broken_bedwars / data.four_four_beds_lost_bedwars) * 100) / 100
      }
    };
  }
}
function getBedWarsPrestige (level) {
  let prestige;
  if (inRange(level, 1, 99)) {
    prestige = 'Stone';
  } else if (inRange(level, 100, 199)) {
    prestige = 'Iron';
  } else if (inRange(level, 200, 299)) {
    prestige = 'Gold';
  } else if (inRange(level, 300, 399)) {
    prestige = 'Diamond';
  } else if (inRange(level, 400, 499)) {
    prestige = 'Emerald';
  } else if (inRange(level, 500, 599)) {
    prestige = 'Sapphire';
  } else if (inRange(level, 600, 699)) {
    prestige = 'Ruby';
  } else if (inRange(level, 700, 799)) {
    prestige = 'Crystal';
  } else if (inRange(level, 800, 899)) {
    prestige = 'Opal';
  } else if (inRange(level, 900, 999)) {
    prestige = 'Amethyst';
  } else if (inRange(level, 1000, 1099)) {
    prestige = 'Rainbow';
  }
  return prestige;
}
const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;
/**
 *
 * @param {number} level
 *
 * @returns {number}
 */
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
