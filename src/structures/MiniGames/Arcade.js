// IMPORTANT : a lot of the properties from the API seem to be nonsense
/**
 * Arcade class
 */
class Arcade {
  /**
     * Constructor
     * @param {Otbject} data Data from the API
     */
  constructor(data = {}) {
    /**
     * Amount of coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Weekly coins, a + b
     * @type {number}
     */
    this.weeklyCoins = parseInt(data.weekly_coins_a + data.weekly_coins_b);
    /**
     * Monthly coins, a + b
     * @type {number}
     */
    this.monthlyCoins = parseInt(data.monthly_coins_a + data.monthly_coins_b);
    /**
     * Draw their thing stats
     * @type {BaseGame}
     */
    this.drawTheirThing = new BaseGame(data, 'draw_their_thing');
    /**
     * Dragon wars "2"
     * @type {BaseGame}
     */
    this.dragonWars = new BaseGame(data, 'dragonwars2');
    this.easterSimulator = new BaseGame(data, 'easter_simulator');
    this.grinchSimulator = new BaseGame(data, 'grinch_simulator_v2');
    this.scubaSimulator = new BaseGame(data, 'scuba_simulator');
    this.santaSays = new BaseGame(data, 'santa_says');
    this.simonSays = new BaseGame(data, 'simon_says');
    this.farmHunt = new BaseGame(data, 'farm_hunt');
    this.holeInTheWall = new BaseGame(data, 'hole_in_the_wall'); // needs extension, aka hitw
    this.miniWalls = new BaseGame(data, 'mini_walls'); // also needs extension
    this.partyGames = new BaseGame(data, 'party');
    this.partyGames2 = new BaseGame(data, 'party_2');
    this.partyGames3 = new BaseGame(data, 'party_3');
    this.throwOut = new BaseGame(data, 'throw_out');
    this.soccer = new BaseGame(data, 'soccer');
    this.hypixelSports = new BaseGame(data, 'hypixel_sports');
    this.enderSpleef = new BaseGame(data, 'ender');
    this.blockingDead = new BaseGame(data, 'dayone'); // blocking dead was this tf
  }
}
/**
 * Most basic game class, used by all arcade games
 */
class BaseGame {
  /**
   * @param {Object} data data
   * @param {string} gameName Game Name ( snake )
   */
  constructor(data, gameName) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = parseInt(data['wins_'+gameName]);
    /**
     * Kills
     * @type {number|undefined}
     */
    this.kills = parseInt(data['kills_'+gameName]) || undefined;
    /**
     * Deaths
     * @type {number|undefined}
     */
    this.deaths = parseInt(data['deaths_'+gameName]) || undefined;
  }
}

module.exports = Arcade;
