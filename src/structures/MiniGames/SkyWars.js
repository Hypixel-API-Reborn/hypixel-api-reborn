const SkyWarsPrestigeIcons = require('../../utils/SkyWarsPrestigeIcons');
const divide = require('../../utils/divide');
const generateStatsForMode = (data, mode) => {
  return {
    kills: data[`kills_${mode}`] || 0,
    deaths: data[`deaths_${mode}`] || 0,
    wins: data[`wins_${mode}`] || 0,
    losses: data[`losses_${mode}`] || 0,
    KDRatio: divide(data[`kills_${mode}`], data[`deaths_${mode}`]),
    WLRatio: divide(data[`wins_${mode}`], data[`losses_${mode}`])
  };
};
class SkyWars {
  constructor (data) {
    this.coins = data.coins || 0;
    this.souls = data.souls || 0;
    this.tokens = data.cosmetic_tokens || 0;
    this.winstreak = data.win_streak || 0;
    this.kills = data.kills || 0;
    this.losses = data.losses || 0;
    this.deaths = data.deaths || 0;
    this.wins = data.wins || 0;
    this.lootChests = data.skywars_chests || 0;
    this.openedLootChests = data.SkyWars_openedChests || 0;
    this.heads = data.heads || 0;
    this.level = getSkyWarsLevel(data.skywars_experience);
    this.levelFormatted = data.levelFormatted ? (data.levelFormatted.replace(/§l/gm, '**').replace(/§([a-f]|[1-9])/gm, '').replace(/§r/gm, '')) : null;
    this.prestige = getSkyWarsPrestige(this.level);
    this.prestigeIcon = data.selected_prestige_icon ? SkyWarsPrestigeIcons[data.selected_prestige_icon] : null;
    this.playedGames = (data.games_solo || 0) + (data.games_team || 0) + (data.games_ranked || 0) + (data.games_mega || 0) + (data.games_mega_doubles || 0) + (data.games_lab || 0);
    this.KDRatio = divide(this.kills, this.deaths);
    this.WLRatio = divide(this.wins, this.losses);
    this.opals = data.opals || 0;
    this.avarice = data.avarice || 0;
    this.tenacity = data.tenacity || 0;
    this.shards = data.shards || 0;
    this.shardsInMode = {
      solo: data.shard_solo || 0,
      team: data.shard_team || 0,
      ranked: data.shard_ranked || 0,
      mega: (data.shard_mega || 0) + (data.shard_mega_doubles || 0),
      lab: data.shard_lab || 0
    };
    this.solo = {
      total: {
        played: data.games_solo || 0,
        kills: data.kills_solo || 0,
        wins: data.wins_solo || 0,
        losses: data.losses_solo || 0,
        deaths: data.deaths_solo || 0,
        winstreak: data.winstreak_solo || 0,
        killstreak: data.killstreak_solo || 0,
        KDRatio: divide(data.kills_solo, data.deaths_solo),
        WLRatio: divide(data.wins_solo, data.losses_solo)
      },
      normal: generateStatsForMode(data, 'solo_normal'),
      insane: generateStatsForMode(data, 'solo_insane')
    };
    this.team = {
      total: {
        played: data.games_team || 0,
        kills: data.kills_team || 0,
        wins: data.wins_team || 0,
        losses: data.losses_team || 0,
        deaths: data.deaths_team || 0,
        KDRatio: divide(data.kills_team, data.deaths_team),
        WLRatio: divide(data.wins_team, data.losses_team)
      },
      normal: generateStatsForMode(data, 'team_normal'),
      insane: generateStatsForMode(data, 'team_insane')
    };
    this.ranked = {
      played: data.games_ranked || 0,
      kills: data.kills_ranked || 0,
      wins: data.wins_ranked || 0,
      losses: data.losses_ranked || 0,
      deaths: data.deaths_ranked || 0,
      KDRatio: divide(data.kills_ranked, data.deaths_ranked),
      WLRatio: divide(data.wins_ranked, data.losses_ranked)
    };
    this.mega = {
      played: (data.games_mega || 0) + (data.games_mega_doubles || 0),
      kills: (data.kills_mega || 0) + (data.kills_mega_doubles || 0),
      wins: (data.wins_mega || 0) + (data.wins_mega_doubles || 0),
      losses: (data.losses_mega || 0) + (data.losses_mega_doubles || 0),
      deaths: (data.deaths_mega || 0) + (data.deaths_mega_doubles || 0),
      KDRatio: divide(((data.kills_mega || 0) + (data.kills_mega_doubles || 0)), ((data.deaths_mega || 0) + (data.deaths_mega_doubles || 0))),
      WLRatio: divide(((data.wins_mega || 0) + (data.wins_mega_doubles || 0)), ((data.losses_mega || 0) + (data.losses_mega_doubles || 0)))
    };
    this.lab = {
      played: data.games_lab || 0,
      kills: data.kills_lab || 0,
      wins: data.wins_lab || 0,
      losses: data.losses_lab || 0,
      deaths: data.deaths_lab || 0,
      KDRatio: divide(data.kills_lab, data.deaths_lab),
      WLRatio: divide(data.wins_lab, data.losses_lab)
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
  if (level < 10) {
    return 'Iron';
  } else if (level < 15) {
    return 'Gold';
  } else if (level < 20) {
    return 'Diamond';
  } else if (level < 25) {
    return 'Emerald';
  } else if (level < 30) {
    return 'Sapphire';
  } else if (level < 35) {
    return 'Ruby';
  } else if (level < 40) {
    return 'Crystal';
  } else if (level < 45) {
    return 'Opal';
  } else if (level < 50) {
    return 'Amethyst';
  } else if (level >= 50) {
    return 'Rainbow';
  } else {
    return null;
  }
}
function getSkyWarsLevel (xp) {
  if (xp < 20) return 1;
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
