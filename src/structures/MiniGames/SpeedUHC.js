const divide = require('../../utils/divide');
/**
 * Speed UHC class
 */
class SpeedUHC {
  /**
   * @param {object} data Speed UHC data
   */
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
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
     * Kill/Death ratio
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
     * Win/Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Killstreak
     * @type {number}
     */
    this.killstreak = data.killstreak || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data.blocks_broken || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data.blocks_placed || 0;
    /**
     * Game Quits
     * @type {number}
     */
    this.quits = data.quits || 0;
    /**
     * Items Enchanted
     * @type {number}
     */
    this.itemsEnchanted = data.items_enchanted || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
    /**
     * Solo
     * @type {SpeedUHCModeStats}
     */
    this.solo = {
      kills: data.kills_solo || 0,
      deaths: data.deaths_solo || 0,
      wins: data.wins_solo || 0,
      losses: data.losses_solo || 0,
      playedGames: data.games_solo || 0,
      winstreak: data.win_streak_solo || 0,
      killstreak: data.killstreak_solo || 0,
      assists: data.assists_solo || 0
    };
    /**
     * Team
     * @type {SpeedUHCModeStats}
     */
    this.teams = {
      kills: data.kills_team || 0,
      deaths: data.deaths_team || 0,
      wins: data.wins_team || 0,
      losses: data.losses_team || 0,
      playedGames: data.games_team || 0,
      winstreak: data.win_streak_team || 0,
      killstreak: data.killstreak_team || 0,
      assists: data.assists_team || 0
    };
  }
}
module.exports = SpeedUHC;
