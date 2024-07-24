const divide = require('../../utils/divide');

class SpeedUHCMode {
  /**
   * @param {object} data Speed UHC data
   */
  constructor(data, mode) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${mode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${mode}`] || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${mode}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`losses_${mode}`] || 0;
    /**
     * Played Games
     * @type {number}
     */
    this.playedGames = data[`games_${mode}`] || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data[`win_streak_${mode}`] || 0;
    /**
     * Kill Streak
     * @type {number}
     */
    this.killStreak = data[`killstreak_${mode}`] || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data[`assists_${mode}`] || 0;
  }
}

/**
 * Speed UHC class
 */
class SpeedUHC {
  /**
   * @param {object} data Speed UHC data
   */
  constructor(data) {
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
     * @type {SpeedUHCMode}
     */
    this.solo = new SpeedUHCMode(data, 'solo');
    /**
     * Solo Normal
     * @type {SpeedUHCMode}
     */
    this.soloNormal = new SpeedUHCMode(data, 'solo_normal');
    /**
     * Solo Insane
     * @type {SpeedUHCMode}
     */
    this.soloInsane = new SpeedUHCMode(data, 'solo_insane');
    /**
     * Team
     * @type {SpeedUHCMode}
     */
    this.team = new SpeedUHCMode(data, 'team');
    /**
     * Team Normal
     * @type {SpeedUHCMode}
     */
    this.teamNormal = new SpeedUHCMode(data, 'team_normal');
    /**
     * Team Insane
     * @type {SpeedUHCMode}
     */
    this.teamInsane = new SpeedUHCMode(data, 'team_insane');
  }
}

module.exports = SpeedUHC;
