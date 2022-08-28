// IMPORTANT : a lot of the properties from the API seem to be nonsense

const divide = require('../../utils/divide');
const { weekAB, monthAB } = require('../../utils/oscillation');
const { removeSnakeCaseString } = require('../../utils/removeSnakeCase');

/**
 * Arcade class
 */
class Arcade {
  /**
   * Constructor
   * @param {Object} data Data from the API
   */
  constructor (data = {}) {
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
     * Weekly coins
     * @type {number}
     */
    this.weeklyCoins = parseInt(data[`weekly_coins_${weekAB()}`] || 0, 10);
    /**
     * Monthly coins
     * @type {number}
     */
    this.monthlyCoins = parseInt(data[`monthly_coins_${monthAB()}`] || 0, 10);
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
     * @type {MiniWalls}
     */
    this.miniWalls = new MiniWalls(data); // needs extension
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
    this.blockingDead = new BaseGame(data, 'dayone').extend('headshots', data.headshots_dayone || 0);
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
    this.oitq = this.oneInTheQuiver = new BaseGame(data, 'oneinthequiver').extend('bountyKills', data.bounty_kills_oneinthequiver || 0);
    /**
     * Zombies
     * @type {Zombies}
     */
    this.zombies = new Zombies(data);
    /**
     * Capture The Wool
     * @type {{kills: number, captures: number}}
     */
    this.captureTheWool = { kills: data.arcade_ctw_slayer || 0, captures: data.arcade_ctw_oh_sheep || 0 };
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
  constructor (data, gameName) {
    /**
     * Wins
     * @type {?number}
     */
    this.wins = parseInt(data['wins_' + gameName], 10) || 0;
    /**
     * Kills, only available in combat games
     * @type {?number}
     */
    this.kills = parseInt(data['kills_' + gameName], 10) || 0;
    /**
     * Deaths, only available in combat games
     * @type {?number}
     */
    this.deaths = parseInt(data['deaths_' + gameName], 10) || 0;
    /**
     * Rounds Played, only available in Santa says, Simon Says, and HITW
     * @type {?number}
     */
    this.roundsPlayed = parseInt(data['rounds_' + gameName], 10) || 0;
  }
  /**
   * Extend BaseGame without creating a new class
   * @param {string} name Property to add
   * @param {*} value Corresponding value
   * @private
   * @returns {BaseGame}
   */
  extend (name, value) {
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
  constructor (data) {
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
     * Total weekly kills
     * @type {number}
     */
    this.weeklyKills = parseInt(data[`weekly_kills_${weekAB()}`] || 0, 10);
    /**
     * Total Monthly kills
     * @type {number}
     */
    this.monthlyKills = parseInt(data[`monthly_kills_${monthAB()}`] || 0, 10);
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
  constructor (data) {
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
  constructor (data) {
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
    this.scoreRecordOverall = this.scoreRecordFinals + this.scoreRecordNormal;
  }
}
/**
 * Mini Walls class
 */
class MiniWalls extends BaseGame {
  /**
   * Constructor
   * @param {Object} data data from API
   */
  constructor (data) {
    super(data, 'mini_walls');
    /**
     * Total Arrow Hits
     * @type {number}
     */
    this.arrowHits = data.arrows_hit_mini_walls || 0;
    /**
     * Total Arrow shots
     * @type {number}
     */
    this.arrowShots = data.arrows_shot_mini_walls || 0;
    /**
     * Bow Accuracy based on hits/shots
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowHits, this.arrowShots);
    /**
     * Final Kills
     * @type {number}
     */
    this.finalKills = data.final_kills_mini_walls || 0;
    /**
     * Total damage dealt to withers
     * @type {number}
     */
    this.witherDamage = data.wither_damage_mini_walls || 0;
    /**
     * Wither Killed
     * @type {number}
     */
    this.witherKills = data.wither_kills_mini_walls || 0;
  }
}
/**
 * Zombies - Overall stats
 */
class Zombies {
  /**
   * Constructor
   * @param {Object} data Data from API
   */
  constructor (data) {
    /**
     * Overall Stats
     * @type {ZombiesStats}
     */
    this.overall = new ZombiesStats(data);
    /**
     * Stats for Dead End
     * @type {ZombieMap}
     */
    this.deadEnd = new ZombieMap(data, 'deadend');
    /**
     * Stats for Bad Blood
     * @type {ZombieMap}
     */
    this.badBlood = new ZombieMap(data, 'badblood');
    /**
     * Stats for Alien Arcadium
     * @type {ZombieMap}
     */
    this.alienArcadium = new ZombieMap(data, 'alienarcadium');
    /**
     * Kills By Zombie
     * @type {Record<string,number>}
     */
    this.killsByZombie = parseZombiesKills(data);
    /**
     * Bullets Hit
     * @type {number}
     */
    this.bulletsHit = data.bullets_hit_zombies || 0;
    /**
     * Bullets Shot
     * @type {number}
     */
    this.bulletsShot = data.bullets_shot_zombies || 0;
    /**
     * Gun Accuracy
     * @type {number}
     */
    this.gunAccuracy = divide(this.bulletsHit, this.bulletsShot);
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = data.headshots_zombies || 0;
    /**
     * Headshot Accuracy
     * @type {number}
     */
    this.headshotAccuracy = divide(this.headshots, this.bulletsShot);
  }
}
/**
 * Zombie stats by map
 */
class ZombieMap {
  /**
   * Constructor
   * @param {Object} data Data from API
   * @param {string} mapName String map name
   */
  constructor (data, mapName) {
    /**
     * Normal mode
     * @type {ZombiesStats}
     */
    this.normal = new ZombiesStats(data, `${mapName}_normal`);
    /**
     * Hard mode ( parties only )
     * @type {ZombiesStats}
     */
    this.hard = new ZombiesStats(data, `${mapName}_hard`);
    /**
     * RIP mode ( parties only )
     * @type {ZombiesStats}
     */
    this.rip = new ZombiesStats(data, `${mapName}_rip`);
    /**
     * Overall ( 3 modes combined )
     * @type {ZombiesStats}
     */
    this.overall = new ZombiesStats(data, mapName);
  }
}
/**
 * Zombies - Stats by Map + Difficulty
 */
class ZombiesStats {
  /**
   * Constructor
   * @param {Object} data Data from API
   * @param {string} type Map name + difficulty ( default overall )
   */
  constructor (data, type = '') {
    if (type) type = `_${type}`;
    /**
     * Best Round
     * @type {number}
     */
    this.bestRound = data[`best_round_zombies${type}`] || 0;
    /**
     * Deaths ( NOT losses )
     * @type {number}
     */
    this.deaths = data[`deaths_zombies${type}`] || 0;
    /**
     * Doors opened
     * @type {number}
     */
    this.doorsOpened = data[`doors_opened_zombies${type}`] || 0;
    /**
     * Fastest time to reach round 10 in seconds
     * @type {number}
     */
    this.fastestRound10 = data[`fastest_time_10_zombies${type}`] || 0;
    /**
     * Fastest time to reach round 20 in seconds
     * @type {number}
     */
    this.fastestRound20 = data[`fastest_time_20_zombies${type}`] || 0;
    /**
     * Fastest time to reach round 30 in seconds
     * @type {number}
     */
    this.fastestRound30 = data[`fastest_time_30_zombies${type}`] || 0;
    /**
     * Players revived
     * @type {number}
     */
    this.playersRevived = data[`players_revived_zombies${type}`] || 0;
    /**
     * Number of times player is knocked down
     * @type {number}
     */
    this.timesKnockedDown = data[`times_knocked_down_zombies${type}`] || 0;
    /**
     * Total amount of rounds the player survived
     * @type {number}
     */
    this.roundsSurvived = data[`total_rounds_survived_zombies${type}`] || 0;
    /**
     * Total amount of windows fully repaired by player
     * @type {number}
     */
    this.windowsRepaired = data[`windows_repaired_zombies${type}`] || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_zombies${type}`] || 0;
    /**
     * Total Zombie Kills
     * @type {number}
     */
    this.zombieKills = data[`zombie_kills_zombies${type}`] || 0;
  }
}
/**
 * Parses Kills in Zombie and return it as an object
 * @param {Object} data data from API
 * @returns {Object}
 */
function parseZombiesKills (data) {
  const matches = Array.from(Object.keys(data)).map((x) => x.match(/^([A-z]+)_zombie_kills_zombies$/)).filter((x) => x);
  // From entries might be broken
  return Object.fromEntries(matches.map((x) => [removeSnakeCaseString(x[1]), data[x[0]] || 0]));
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
 * @typedef {JSON} BlockingDead
 * @extends BaseGame
 * @property {number} headshots Headshots
 */
module.exports = Arcade;
