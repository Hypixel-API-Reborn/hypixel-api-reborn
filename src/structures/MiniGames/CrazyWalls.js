const divide = require('../../utils/divide');
/**
 * Crazy Walls class. https://hypixel.net/threads/2990753/
 * @deprecated
 * @param {object} data CrazyWalls data
 */
class CrazyWalls {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Solo mode
     * @type {CrazyWallsMode}
     */
    this.solo = {
      normal: {
        kills: data.crazywalls_kills_solo || 0,
        deaths: data.crazywalls_deaths_solo,
        KDRatio: divide(data.crazywalls_kills_solo, data.crazywalls_deaths_solo),
        wins: data.crazywalls_wins_solo || 0,
        losses: data.crazywalls_losses_solo || 0,
        WLRatio: divide(data.crazywalls_wins_solo, data.crazywalls_losses_solo)
      },
      lucky: {
        kills: data.crazywalls_kills_solo_chaos || 0,
        deaths: data.crazywalls_deaths_solo_chaos || 0,
        KDRatio: divide(data.crazywalls_kills_solo_chaos, data.crazywalls_deaths_solo_chaos),
        wins: data.crazywalls_wins_solo_chaos || 0,
        losses: data.crazywalls_losses_solo_chaos || 0,
        WLRatio: divide(data.crazywalls_wins_solo_chaos, data.crazywalls_losses_solo_chaos)
      }
    };
    /**
     * Team mode
     * @type {CrazyWallsMode}
     */
    this.team = {
      normal: {
        kills: data.crazywalls_kills_team || 0,
        deaths: data.crazywalls_deaths_team || 0,
        KDRatio: divide(data.crazywalls_kills_team, data.crazywalls_deaths_team),
        wins: data.crazywalls_wins_team || 0,
        losses: data.crazywalls_losses_team || 0,
        WLRatio: divide(data.crazywalls_wins_team, data.crazywalls_losses_team)
      },
      lucky: {
        kills: data.crazywalls_kills_team_chaos || 0,
        deaths: data.crazywalls_deaths_team_chaos || 0,
        KDRatio: divide(data.crazywalls_kills_team_chaos, data.crazywalls_deaths_team_chaos),
        wins: data.crazywalls_wins_team_chaos || 0,
        losses: data.crazywalls_losses_team_chaos || 0,
        WLRatio: divide(data.crazywalls_wins_team_chaos, data.crazywalls_losses_team_chaos)
      }
    };
  }
}
/**
 * @typedef {object} CrazyWallsMode
 * @property {CrazyWallsModeStats} normal Normal
 * @property {CrazyWallsModeStats} lucky Lucky
 */
/**
 * @typedef {object} CrazyWallsModeStats
 * @property {object} kills Kills
 * @property {object} deaths Deaths
 * @property {object} KDRatio Kill Death ratio
 * @property {object} wins Wins
 * @property {object} losses Losses
 * @property {object} WLRatio WLRatio
 */
module.exports = CrazyWalls;
