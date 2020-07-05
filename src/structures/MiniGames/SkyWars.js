const inRange = require('../../utils/inRange');
const SkyWarsPrestigeIcons = require('../../utils/SkyWarsPrestigeIcons');
class SkyWars {
  constructor (data) {
    this.coins = data.coins || 0;
    this.souls = data.souls || 0;
    this.tokens = data.cosmetic_tokens || 0;
    this.winStreak = data.win_streak || 0;
    this.kills = data.kills || 0;
    this.losses = data.losses || 0;
    this.deaths = data.deaths || 0;
    this.wins = data.wins || 0;
    this.lootChests = data.skywars_chests || 0;
    this.openedLootChests = data.SkyWars_openedChests || 0;
    this.heads = data.heads || 0;
    this.level = getSkyWarsLevel(data.skywars_experience);
    this.levelFormatted = data.levelFormatted ? (data.levelFormatted.replace(/§([a-f]|[1-9])/gm, '')) : null;
    this.prestige = getSkyWarsPrestige(this.level);
    this.prestigeIcon = data.selected_prestige_icon ? SkyWarsPrestigeIcons[data.selected_prestige_icon] : null;
    this.playedGames = (data.games_solo || 0) + (data.games_team || 0) + (data.games_ranked || 0) + (data.games_mega || 0) + (data.games_mega_doubles || 0) + (data.games_lab || 0);
    this.KDRatio = isNaN((this.kills) / (this.deaths)) ? 0 : Math.round(((this.kills) / (this.deaths)) * 100) / 100;
    this.WLRatio = isNaN((this.wins) / (this.losses)) ? 0 : Math.round(((this.wins) / (this.losses)) * 100) / 100;
    this.solo = {
      total: {
        played: data.games_solo || 0,
        kills: data.kills_solo || 0,
        wins: data.wins_solo || 0,
        losses: data.losses_solo || 0,
        deaths: data.deaths_solo || 0,
        winstreak: data.winstreak_solo || 0,
        killstreak: data.killstreak_solo || 0,
        KDRatio: isNaN((data.kills_solo || 0) / (data.deaths_solo || 0)) ? 0 : Math.round(((data.kills_solo || 0) / (data.deaths_solo || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_solo || 0) / (data.losses_solo || 0)) ? 0 : Math.round(((data.wins_solo || 0) / (data.losses_solo || 0)) * 100) / 100
      },
      normal: {
        kills: data.kills_solo_normal || 0,
        wins: data.wins_solo_normal || 0,
        losses: data.losses_solo_normal || 0,
        deaths: data.deaths_solo_normal || 0,
        KDRatio: isNaN((data.wins_solo_normal || 0) / (data.losses_solo_normal || 0)) ? 0 : Math.round(((data.kills_solo_normal || 0) / (data.deaths_solo_normal || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_solo_normal || 0) / (data.losses_solo_normal || 0)) ? 0 : Math.round(((data.wins_solo_normal || 0) / (data.losses_solo_normal || 0)) * 100) / 100
      },
      insane: {
        kills: data.kills_solo_insane || 0,
        wins: data.wins_solo_insane || 0,
        losses: data.losses_solo_insane || 0,
        deaths: data.deaths_solo_insane || 0,
        KDRatio: isNaN((data.kills_solo_insane || 0) / (data.deaths_solo_insane || 0)) ? 0 : Math.round(((data.kills_solo_insane || 0) / (data.deaths_solo_insane || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_solo_insane || 0) / (data.losses_solo_insane || 0)) ? 0 : Math.round(((data.wins_solo_insane || 0) / (data.losses_solo_insane || 0)) * 100) / 100
      }
    };
    this.team = {
      total: {
        played: data.games_team || 0,
        kills: data.kills_team || 0,
        wins: data.wins_team || 0,
        losses: data.losses_team || 0,
        deaths: data.deaths_team || 0,
        KDRatio: isNaN((data.kills_team || 0) / (data.deaths_team || 0)) ? 0 : Math.round(((data.kills_team || 0) / (data.deaths_team || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_team || 0) / (data.losses_team || 0)) ? 0 : Math.round(((data.wins_team || 0) / (data.losses_team || 0)) * 100) / 100
      },
      normal: {
        kills: data.kills_team_normal || 0,
        wins: data.wins_team_normal || 0,
        losses: data.losses_team_normal || 0,
        deaths: data.deaths_team_normal || 0,
        KDRatio: isNaN((data.kills_team_normal || 0) / (data.deaths_team_normal || 0)) ? 0 : Math.round(((data.kills_team_normal || 0) / (data.deaths_team_normal || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_team_normal || 0) / (data.losses_team_normal || 0)) ? 0 : Math.round(((data.wins_team_normal || 0) / (data.losses_team_normal || 0)) * 100) / 100
      },
      insane: {
        kills: data.kills_team_insane || 0,
        wins: data.wins_team_insane || 0,
        losses: data.losses_team_insane || 0,
        deaths: data.deaths_team_insane || 0,
        KDRatio: isNaN((data.kills_team_insane || 0) / (data.deaths_team_insane || 0)) ? 0 : Math.round(((data.kills_team_insane || 0) / (data.deaths_team_insane || 0)) * 100) / 100,
        WLRatio: isNaN((data.wins_team_insane || 0) / (data.losses_team_insane || 0)) ? 0 : Math.round(((data.wins_team_insane || 0) / (data.losses_team_insane || 0)) * 100) / 100
      }
    };
    this.ranked = {
      played: data.games_ranked || 0,
      kills: data.kills_ranked || 0,
      wins: data.wins_ranked || 0,
      losses: data.losses_ranked || 0,
      deaths: data.deaths_ranked || 0,
      KDRatio: isNaN((data.kills_ranked || 0) / (data.deaths_ranked || 0)) ? 0 : Math.round((data.kills_ranked || 0) / (data.deaths_ranked || 0) * 100) / 100,
      WLRatio: isNaN((data.wins_ranked || 0) / (data.losses_ranked || 0)) ? 0 : Math.round((data.wins_ranked || 0) / (data.losses_ranked || 0) * 100) / 100
    };
    this.mega = {
      played: data.games_mega || 0,
      kills: (data.kills_mega || 0) + (data.kills_mega_doubles || 0),
      wins: (data.wins_mega || 0) + (data.wins_mega_doubles || 0),
      losses: (data.losses_mega || 0) + (data.losses_mega_doubles || 0),
      deaths: (data.deaths_mega || 0) + (data.deaths_mega_doubles || 0),
      KDRatio: isNaN(((data.kills_mega || 0) + (data.kills_mega_doubles || 0)) / ((data.deaths_mega || 0) + (data.deaths_mega_doubles || 0))) ? 0 : Math.round(((data.kills_mega || 0) + (data.kills_mega_doubles || 0)) / ((data.deaths_mega || 0) + (data.deaths_mega_doubles || 0)) * 100) / 100,
      WLRatio: isNaN(((data.wins_mega || 0) + (data.wins_mega_doubles || 0)) / ((data.losses_mega || 0) + (data.losses_mega_doubles || 0))) ? 0 : Math.round(((data.wins_mega || 0) + (data.wins_mega_doubles || 0)) / ((data.losses_mega || 0) + (data.losses_mega_doubles || 0)) * 100) / 100
    };
    this.lab = {
      played: data.games_lab || 0,
      kills: data.kills_lab || 0,
      wins: data.wins_lab || 0,
      losses: data.losses_lab || 0,
      deaths: data.deaths_lab || 0,
      KDRatio: isNaN((data.kills_lab || 0) / (data.deaths_lab || 0)) ? 0 : Math.round(((data.kills_lab || 0) / (data.deaths_lab || 0)) * 100) / 100,
      WLRatio: isNaN((data.wins_lab || 0) / (data.losses_lab || 0)) ? 0 : Math.round(((data.wins_lab || 0) / (data.losses_lab || 0)) * 100) / 100
    };
  }
}
module.exports = SkyWars;
/**
 *
 * @param {number} level
 *
 * @returns {string}
 */
function getSkyWarsPrestige (level) {
  let prestige;
  if (inRange(level, 1, 9)) {
    prestige = 'Iron';
  } else if (inRange(level, 10, 14)) {
    prestige = 'Gold';
  } else if (inRange(level, 15, 19)) {
    prestige = 'Diamond';
  } else if (inRange(level, 20, 24)) {
    prestige = 'Emerald';
  } else if (inRange(level, 25, 29)) {
    prestige = 'Sapphire';
  } else if (inRange(level, 30, 34)) {
    prestige = 'Ruby';
  } else if (inRange(level, 35, 39)) {
    prestige = 'Crystal';
  } else if (inRange(level, 40, 44)) {
    prestige = 'Opal';
  } else if (inRange(level, 45, 49)) {
    prestige = 'Amethyst';
  } else if (inRange(level, 50, 59)) {
    prestige = 'Rainbow';
  } else {
    prestige = null;
  }
  return prestige;
}
function getSkyWarsLevel (xp) {
  var totalXp = [20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
  var exactLevel = 0;
  if (xp >= 15000) {
    exactLevel = (xp - 15000) / 10000 + 12;
  } else {
    var c = 0;
    // eslint-disable-next-line no-unmodified-loop-condition
    while (xp >= 0) {
      if (xp - totalXp[c] >= 0) {
        c++;
      } else {
        exactLevel = c + 1 + (xp - totalXp[c - 1]) / (totalXp[c] - totalXp[c - 1]);
        break;
      }
    }
  }
  return Math.floor(exactLevel);
}
