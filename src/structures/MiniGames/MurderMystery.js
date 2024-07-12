const divide = require('../../utils/divide');

/**
 * MurderMystery stats by gamemode
 */
class MurderMysteryModeStats {
  /**
   * Constructor
   * @param {Object} data Data from API
   * @param {string} gamemode String gamemode name
   */
  constructor(data, gamemode) {
    /**
     * Amount of gold picked up in games
     * @type {number}
     */
    this.goldPickedUp = data[`coins_pickedup_${gamemode}`] || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${gamemode}`] || 0;
    /**
     * Thrown Knife Kills
     * @type {number}
     */
    this.thrownKnifeKills = data[`thrown_knife_kills_${gamemode}`] || 0;
    /**
     * Knife Kills
     * @type {number}
     */
    this.knifeKills = data[`knife_kills_${gamemode}`] || 0;
    /**
     * Bow Kills
     * @type {number}
     */
    this.bowKills = data[`bow_kills_${gamemode}`] || 0;
    /**
     * Trap Kills
     * @type {number}
     */
    this.trapKills = data[`trap_kills_${gamemode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${gamemode}`] || 0;
    /**
     * Suicides
     * @type {number}
     */
    this.suicides = data[`suicides_${gamemode}`] || 0;

    /**
     * Kill/Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins as Murderer
     * @type {number}
     */
    this.wins = data[`wins_${gamemode}`] || 0;
    /**
     * Wins as Detective
     * @type {number}
     */
    this.winsAsDetective = data[`detective_wins_${gamemode}`] || 0;
    /**
     * Wins as Murderer
     * @type {number}
     */
    this.winsAsMurderer = data[`murderer_wins_${gamemode}`] || 0;
    /**
     * Wins as Hero
     * @type {number}
     */
    this.winsAsHero = data[`was_hero_${gamemode}`] || 0;
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data[`games_${gamemode}`] || 0;
  }
}

/**
 * MurderMystery class
 */
class MurderMystery {
  /**
   * @param {object} data MurderMystery data
   */
  constructor(data) {
    /**
     * Tokens
     * @type {number}
     */
    this.tokens = data.coins || 0;
    /**
     * Amount of gold picked up in games
     * @type {number}
     */
    this.goldPickedUp = data.coins_pickedup || 0;
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Thrown Knife Kills
     * @type {number}
     */
    this.thrownKnifeKills = data.thrown_knife_kills || 0;
    /**
     * Knife Kills
     * @type {number}
     */
    this.knifeKills = data.knife_kills || 0;
    /**
     * Trap Kills
     * @type {number}
     */
    this.trapKills = data.trap_kills || 0;
    /**
     * Bow Kills
     * @type {number}
     */
    this.bowKills = data.bow_kills || 0;
    /**
     * Kills As Murderer
     * @type {number}
     */
    this.killsAsMurderer = data.kills_as_murderer || 0;
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
     * Wins as Murderer
     * @type {number}
     */
    this.winsAsMurderer = data.murderer_wins || 0;
    /**
     * Wins as Detective
     * @type {number}
     */
    this.winsAsDetective = data.detective_wins || 0;
    /**
     * Wins as Hero
     * @type {number}
     */
    this.winsAsHero = data.was_hero || 0;
    /**
     * Fastest win as the Murderer (Time in seconds)
     * @type {number}
     */
    this.fastestWinAsMurderer = data.quickest_murderer_win_time_seconds || 0;
    /**
     * Fastest win as the Detective (Time in seconds)
     * @type {number}
     */
    this.fastestWinAsDetective = data.quickest_detective_win_time_seconds || 0;
    /**
     * Total time Survived (Time in seconds)
     * @type {number}
     */
    this.totalTimeSurvived = data.total_time_survived_seconds || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Suicides
     * @type {number}
     */
    this.suicides = data.suicides || 0;
    /**
     * Classic
     * @type {MurderMysteryModeStats}
     */
    this.classic = new MurderMysteryModeStats(data, 'MURDER_CLASSIC');
    /**
     * Assasins
     * @type {MurderMysteryModeStats}
     */
    this.assassins = new MurderMysteryModeStats(data, 'MURDER_ASSASSINS');
    /**
     * Double Up
     * @type {MurderMysteryModeStats}
     */
    this.doubleUp = new MurderMysteryModeStats(data, 'MURDER_DOUBLE_UP');

    /**
     * Infection
     * @type {MurderMysteryModeStats}
     */
    this.infection = new MurderMysteryModeStats(data, 'MURDER_INFECTION');
  }
}

module.exports = MurderMystery;
