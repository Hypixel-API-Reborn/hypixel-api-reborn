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
     * Last Tournament Advertisement as timestamp, only appears when a tournament is announced
     * @type {number}
     */
    this.lastTourneyAdTimestamp = data.lastTourneyAd || undefined;
    /**
     * Last Tournament Advertisement as Date, only appears when a tournament is announced
     * @type {Date}
     */
    this.lastTourneyAdAt = this.lastTourneyAdTimestamp ? new Date(data.lastTourneyAd) : undefined;
    /**
     * Amount of coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Weekly coins, a + b
     * @type {number}
     */
    this.weeklyCoins = parseInt((data.weekly_coins_a || 0) + (data.weekly_coins_b || 0));
    /**
     * Monthly coins, a + b
     * @type {number}
     */
    this.monthlyCoins = parseInt((data.monthly_coins_a || 0) + (data.monthly_coins_b || 0));
    /**
     * Hints Disabled
     * @type {Boolean}
     */
    this.hintsDisabled = !data.hints;
    /**
     * Flash Disabled
     * @type {Boolean}
     */
    this.flashDisabled = !data.flash;
    /**
     * Draw their thing stats
     * @type {BaseGame}
     */
    this.drawTheirThing = new BaseGame(data, 'draw_their_thing');
    /**
     * Dragon wars "2" stats
     * @type {BaseGame}
     */
    this.dragonWars = new BaseGame(data, 'dragonwars2');
    /**
     * Easter Simulator stats
     * @type {EasterSimulator}
     */
    this.easterSimulator = new BaseGame(data, 'easter_simulator').extend('eggsFound', data.eggs_found_easter_simulator || 0);
    /**
     * Grinch Simulator stats
     * @type {GrinchSimulator}
     */
    this.grinchSimulator = new BaseGame(data, 'grinch_simulator_v2').extend('giftsFound', data.gifts_grinch_simulator_v2 || 0);
    /**
     * Scuba Simulator stats
     * @type {ScubaSimulator}
     */
    this.scubaSimulator = new BaseGame(data, 'scuba_simulator').extend('itemsFound', data.items_found_scuba_simulator || 0);
    /**
     * Santa Simulator stats
     * @type {SantaSimulator}
     */
    this.santaSimulator = new BaseGame(data, 'santa_simulator').extend('giftsDelivered', data.delivered_santa_simulator || 0);
    /**
     * Santa Says stats
     * @type {BaseGame}
     */
    this.santaSays = new BaseGame(data, 'santa_says');
    /**
     * Simon Says stats
     * @type {BaseGame}
     */
    this.simonSays = new BaseGame(data, 'simon_says');
    /**
     * Farm Hunt stats
     * @type {BaseGame}
     */
    this.farmHunt = new BaseGame(data, 'farm_hunt');
    /**
     * Hole in the Wall stats
     * @type {HITW}
     */
    this.holeInTheWall = new HITW(data, 'hole_in_the_wall');
    /**
     * Mini Walls stats
     * @type {BaseGame}
     */
    this.miniWalls = new BaseGame(data, 'mini_walls'); // needs extension
    /**
     * Party games (1) stats
     * @type {BaseGame}
     */
    this.partyGames = new BaseGame(data, 'party');
    /**
     * Party Games 2 stats ( legacy )
     * @type {BaseGame}
     * @deprecated
     */
    this.partyGames2 = new BaseGame(data, 'party_2');
    /**
     * Party Games 3 stats ( legacy )
     * @type {BaseGame}
     * @deprecated
     */
    this.partyGames3 = new BaseGame(data, 'party_3');
    /**
     * Throw out stats
     * @type {BaseGame}
     */
    this.throwOut = new BaseGame(data, 'throw_out');
    /**
     * Soccer stats
     * @type {Soccer}
     */
    this.soccer = new Soccer(data);
    /**
     * Hypixel Sports stats
     * @type {BaseGame}
     * @deprecated
     */
    this.hypixelSports = new BaseGame(data, 'hypixel_sports');
    /**
     * Ender Spleef stats
     * @type {BaseGame}
     */
    this.enderSpleef = new BaseGame(data, 'ender');
    /**
     * Blocking dead ( previously known as DayOne ) stats
     * @type {BlockingDead}
     */
    this.blockingDead = new BaseGame(data, 'dayone').extend('headshots', data.headshots_dayone);
    /**
     * Galaxy Wars stats
     * @type {GalaxyWars}
     */
    this.galaxyWars = new GalaxyWars(data);
    // Lenient parsing
    /**
     * OITQ / One In The Quiver stats
     * @type {OITQ}
     */
    this.oitq = this.oneInTheQuiver = new BaseGame(data, 'oneinthequiver').extend('bountyKills', data.bounty_kills_oneinthequiver);
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
     * Kills, only available in combat games
     * @type {?number}
     */
    this.kills = parseInt(data['kills_'+gameName]) || null;
    /**
     * Deaths, only available in combat games
     * @type {?number}
     */
    this.deaths = parseInt(data['deaths_'+gameName]) || null;
    /**
     * Rounds Played, only available in Santa says, Simon Says, and HITW
     * @type {?number|}
     */
    this.roundsPlayed = parseInt(data['rounds_'+gameName]) || null;
  }
  /**
   * Extend BaseGame without creating a new class
   * @param {string} name Property to add
   * @param {*} value Corresponding value
   * @private
   * @returns {BaseGame}
   */
  extend(name, value) {
    this[name] = value;
    return this;
  }
}

/**
 * Galxy Wars, aka sw class, totally different from normal stats
 */
class GalaxyWars {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.sw_game_wins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.sw_kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.sw_deaths || 0;
    /**
     * Total shots fired
     * @type {number}
     */
    this.shotsFired = data.sw_shots_fired || 0;
    /**
     * Total weekly kills ( a + b )
     * @type {number}
     */
    this.weeklyKills = parseInt((data.weekly_kills_a || 0) + (data.weekly_kills_b || 0));
    /**
     * Total Monthly kills ( a + b )
     * @type {number}
     */
    this.monthlyKills = parseInt((data.monthly_kills_a || 0) + (data.monthly_kills_b || 0));
    /**
     * Attacker Kills
     * @type {number}
     */
    this.attackerKills = data.sw_rebel_kills || 0;
    /**
     * Defender Kills
     * @type {number}
     */
    this.defenderKills = data.sw_empire_kills || 0;
  }
}
/**
 * Soccer class
 */
class Soccer {
  /**
   * @param {Object} data Data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_soccer || 0;
    /**
     * Number of Kicks
     * @type {number}
     */
    this.kicks = data.kicks_soccer || 0;
    /**
     * Number of Powerkicks
     * @type {number}
     */
    this.powerKicks = data.powerkicks_soccer || 0;
    /**
     * Goals
     * @type {number}
     */
    this.goals = data.goals_soccer || 0;
  }
}
/**
 * Hole in the Wall class
 */
class HITW extends BaseGame {
  /**
   * @param {Object} data Data From API
   */
  constructor(data) {
    super(data, 'hole_in_the_wall');
    /**
     * Score Record in Finals
     * @type {number}
     */
    this.scoreRecordFinals = data.hitw_record_f || 0;
    /**
     * Score Record in Normal
     * @type {number}
     */
    this.scoreRecordNormal = data.hitw_record_q || 0;
    /**
     * Score Record overall
     * @type {number}
     */
    this.scoreRecordFinals = this.scoreRecordFinals + this.scoreRecordNormal;
  }
}
/**
 * @typedef {Object} EasterSimulator
 * @extends BaseGame
 * @property {number} eggsFound Total eggs found
 */
/**
 * @typedef {Object} GrinchSimulator
 * @extends BaseGame
 * @property {number} giftsFound Total gifts found and stolen
 */
/**
 * @typedef {Object} ScubaSimulator
 * @extends BaseGame
 * @property {number} itemsFound Total items found
 */
/**
 * @typedef {Object} SantaSimulator
 * @extends BaseGame
 * @property {number} giftsDelivered Total gifts delivered
 */
/**
 * @typedef {Object} OITQ
 * @extends BaseGame
 * @property {number} bountyKills Bounty Kills
 */
/**
 * @typedef {Object} BlockingDead
 * @extends BaseGame
 * @property {number} headshots Headshots
 */
module.exports = Arcade;
