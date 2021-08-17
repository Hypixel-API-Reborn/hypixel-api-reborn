const { games } = require('../utils/Constants');
/**
 * Game class
 */
class Game {
  /**
   * @param {GameId|GameCode} game Game ID or Game Code
   */
  constructor (game) {
    /**
     * Input
     * @type {GameId|GameCode}
     */
    this.game = game.toString().toLowerCase();
    const result = games.find((g) => g.code.toLowerCase() === this.game || g.id.toString() === this.game || g.name.toLowerCase() === this.game);
    /**
     * ID of game
     * @type {GameId}
     */
    this.id = result ? result.id : 'Not Found';
    /**
     * Codename of game
     * @type {GameCode}
     */
    this.code = result ? result.code : 'Not Found';
    /**
     * Name of game
     * @type {GameString}
     */
    this.name = result ? result.name : 'Not Found';
    /**
     * Whether the game is found
     * @type {boolean}
     */
    this.found = !!result;
  }

  /**
   * Returns regular game name
   * @return {GameString}
   */
  toString () {
    return this.name;
  }

  /**
   * Static list of game IDs ( The list has the same order as CODES or NAMES )
   * @type {GameId[]}
   */
  static get IDS() {
    return games.map((x) => x.id);
  }

  /**
   * Static list of game codes
   * @type {GameCode[]}
   */
  static get CODES() {
    return games.map((x) => x.code);
  }

  /**
   * Static list of game strings
   * @type {GameString[]}
   */
  static get NAMES() {
    return games.map((x) => x.name);
  }
}
/**
 * @typedef {string} GameString
 * * QUAKECRAFT: `Quake Craft`
 * * WALLS: `Walls`
 * * PAINTBALL: `Paintball`
 * * SURVIVAL_GAMES: `Blitz Survival Games`
 * * TNTGAMES: `The TNT Games`
 * * VAMPIREZ: `VAMPIREZ`
 * * WALLS3: `Mega Walls`
 * * ARCADE: `Arcade`
 * * ARENA: `Arena Brawl`
 * * UHC: `UHC Champions`
 * * MCGO: `Cops And Crims`
 * * WARLORDS: `Warlords`
 * * SUPER_SMASH: `Smash Heroes`
 * * GINGERBREAD: `Turbo Kart Racers`
 * * HOUSING: `Housing`
 * * SKYWARS: `SkyWars`
 * * TRUE_COMBAT: `Crazy Walls`
 * * SPEED_UHC: `Speed UHC`
 * * SKYCLASH: `SkyClash`
 * * LEGACY: `Classic Games`
 * * PROTOTYPE: `Prototype`
 * * BEDWARS: `BedWars`
 * * MURDER_MYSTERY: `Murder Mystery`
 * * BUILD_BATTLE: `Build Battle`
 * * DUELS: `Duels`
 * * SKYBLOCK: `SkyBlock`
 * * PIT: `The Pit`
 */
/**
 * @typedef {string} GameCode
 * * QUAKECRAFT
 * * WALLS
 * * PAINTBALL
 * * SURVIVAL_GAMES
 * * TNTGAMES
 * * VAMPIREZ
 * * WALLS3
 * * ARCADE
 * * ARENA
 * * UHC
 * * MCGO
 * * WARLORDS
 * * SUPER_SMASH
 * * GINGERBREAD
 * * HOUSING
 * * SKYWARS
 * * TRUE_COMBAT
 * * SPEED_UHC
 * * SKYCLASH
 * * LEGACY
 * * PROTOTYPE
 * * BEDWARS
 * * MURDER_MYSTERY
 * * BUILD_BATTLE
 * * DUELS
 * * SKYBLOCK
 * * PIT
 */
/**
 * @typedef {number} GameId
 * * QUAKECRAFT: `2`
 * * WALLS: `3`
 * * PAINTBALL: `4`
 * * SURVIVAL_GAMES: `5`
 * * TNTGAMES: `6`
 * * VAMPIREZ: `7`
 * * WALLS3: `13`
 * * ARCADE: `14`
 * * ARENA: `17`
 * * UHC: `20`
 * * MCGO: `21`
 * * BATTLEGROUND: `23`
 * * SUPER_SMASH: `24`
 * * GINGERBREAD: `25`
 * * HOUSING: `26`
 * * SKYWARS: `51`
 * * TRUE_COMBAT: `52`
 * * SPEED_UHC: `54`
 * * SKYCLASH: `55`
 * * LEGACY: `56`
 * * PROTOTYPE: `57`
 * * BEDWARS: `58`
 * * MURDER_MYSTERY: `59`
 * * BUILD_BATTLE: `60`
 * * DUELS: `61`
 * * SKYBLOCK: `63`
 * * PIT: `64`
 */
module.exports = Game;
