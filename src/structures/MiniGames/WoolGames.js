const { divide } = require('../../utils');

class WoolWarsClass {
  /**
   * Constructor
   * @param {Record<string, unknown>} data Data from API
   */
  constructor(data, className) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data?.[className]?.wins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data?.[className]?.kills || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data?.[className]?.assists || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data?.[className]?.deaths || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.[className]?.games_played || 0;
    /**
     * Wools Placed
     * @type {number}
     */
    this.woolsPlaced = data?.[className]?.wool_placed || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data?.[className]?.blocks_broken || 0;
    /**
     * Place Break Ratio
     * @type {number}
     */
    this.placeBreakRatio = divide(this.woolsPlaced, this.blocksBroken);
    /**
     * Powerups Collected
     * @type {number}
     */
    this.powerups = data?.[className]?.powerups_gotten || 0;
  }
}

/**
 * Wool Wars Class
 */
class WoolWars {
  /**
   * Constructor
   * @param {Record<string, unknown>} data Data from API
   */
  constructor(data) {
    /**
     * Selected Class
     * @type {'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER' | 'NONE'}
     */
    this.selectedClass = data?.selected_class || 'NONE';
    /**
     * Wins
     * @type {number}
     */
    this.wins = data?.stats.wins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data?.stats.kills || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data?.stats.assists || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data?.stats.deaths || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.stats.games_played || 0;
    /**
     * Wools Placed
     * @type {number}
     */
    this.woolsPlaced = data?.stats.wool_placed || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data?.stats.blocks_broken || 0;
    /**
     * Place Break Ratio
     * @type {number}
     */
    this.placeBreakRatio = divide(this.woolsPlaced, this.blocksBroken);
    /**
     * powerups
     * @type {number}
     */
    this.powerups = data?.powerups_gotten || 0;
    /**
     * Assault Class Stats
     * @type {WoolWarsClass}
     */
    this.assault = new WoolWarsClass(data.stats.classes, 'assault');
    /**
     * Tank Class Stats
     * @type {WoolWarsClass}
     */
    this.tank = new WoolWarsClass(data.stats.classes, 'tank');
    /**
     * Golem Class Stats
     * @type {WoolWarsClass}
     */
    this.golem = new WoolWarsClass(data.stats.classes, 'golem');
    /**
     * Swordsman Class Stats
     * @type {WoolWarsClass}
     */
    this.swordsman = new WoolWarsClass(data.stats.classes, 'swordsman');
    /**
     * Engineer Class Stats
     * @type {WoolWarsClass}
     */
    this.engineer = new WoolWarsClass(data.stats.classes, 'engineer');
    /**
     * Archer Class Stats
     * @type {WoolWarsClass}
     */
    this.archer = new WoolWarsClass(data.stats.classes, 'archer');
  }
}
/**
 * Capture The Wool Stats Class
 */
class CaptureTheWool {
  /**
   * Constructor
   * @param {Record<string, unknown>} data Data from API
   */
  constructor(data) {
    /**
     * kills
     * @type {number}
     */
    this.kills = data?.stats.kills || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data?.stats.assists || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data?.stats.deaths || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Kills With Wool
     * @type {number}
     */
    this.killsWithWool = data?.stats.kills_with_wool || 0;
    /**
     * Deaths With Wool
     * @type {number}
     */
    this.deathsWithWool = data?.stats.deaths_with_wool || 0;
    /**
     * KDRatio With Wool
     * @type {number}
     */
    this.KDRatioWithWool = divide(this.killsWithWool, this.deathsWithWool);
    /**
     * Wool Captured
     * @type {number}
     */
    this.woolCaptured = data?.stats.wools_captured || 0;
    /**
     * Wool Stolen
     * @type {number}
     */
    this.woolStolen = data?.stats.wools_stolen || 0;
    /**
     * Wool Capture Stolen Ratio
     * @type {number}
     */
    this.woolCaptureStolenRatio = divide(this.woolCaptured, this.woolStolen);
  }
}
/**
 * Sheep Wars Stats Class
 */
class SheepWars {
  /**
   * Constructor
   * @param {Record<string, unknown>} data Data from API
   */
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data?.stats?.wins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data?.stats?.kills || 0;
    /**
     * Kills Void
     * @type {number}
     */
    this.killsVoid = data?.stats?.kills_void || 0;
    /**
     K kills Bow
     * @type {number}
     */
    this.killsBow = data?.stats?.kills_bow || 0;
    /**
     * Kills Explosive
     * @type {number}
     */
    this.killsExplosive = data?.stats?.kills_explosive || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data?.stats?.deaths || 0;
    /**
     * Deaths Void
     * @type {number}
     */
    this.deathsVoid = data?.stats?.deaths_void || 0;
    /**
     * Deaths Melee
     * @type {number}
     */
    this.deathsMelee = data?.stats?.deaths_melee || 0;
    /**
     * Deaths Explosive
     * @type {number}
     */
    this.deathsExplosive = data?.stats?.deaths_explosive || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.wins, this.deaths);
    /**
     * Losses
     * @type {number}
     */
    this.losses = data?.stats?.losses || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data?.stats?.games_played || 0;
    /**
     * Damage Dealt
     * @type {number}
     */
    this.damageDealt = data?.stats?.damage_dealt || 0;
    /**
     * Sheep Thrown
     * @type {number}
     */
    this.sheepThrown = data?.stats?.sheep_thrown || 0;
    /**
     * Magic Wool Hit
     * @type {number}
     */
    this.magicWoolHit = data?.stats?.magic_wool_hit || 0;
  }
}

class WoolGames {
  constructor(data) {
    /**
     * Layers
     * @type {number}
     */
    this.layers = data.progression?.available_layers || 0;
    /**
     * XP
     * @type {number}
     */
    this.xp = data.progression?.experience || 0;
    /**
     * exactLevel
     * @type {number}
     */
    this.exactLevel = this.convertXPToLevel(this.xp);
    /**
     * level
     * @type {number}
     */
    this.level = Math.floor(this.exactLevel);
    /**
     * coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Owned Cosmetics
     * @type {string[]}
     */
    this.ownedCosmetics = data.packages || [];
    /**
     * Private Games Config
     * @type {number}
     */
    this.privateGamesConfig = data.privategames || {};
    /**
     * Playtime
     * @type {number}
     */
    this.playtime = data.playtime || 0;
    /**
     * Wool Wars
     * @type {WoolWars}
     */
    this.woolWars = new WoolWars(data.wool_wars);
    /**
     * Capture The Wool
     * @type {CaptureTheWool}
     */
    this.captureTheWool = new CaptureTheWool(data.capture_the_wool);
    /**
     * Sheep Wars
     * @type {SheepWars}
     */
    this.sheepWars = new SheepWars(data.sheep_wars);
  }

  /**
   * Converts XP to Level
   * @param {number} exp xp
   * @return {number}
   */
  convertXPToLevel(exp) {
    const minimalExp = [0, 1e3, 3e3, 6e3, 1e4, 15e3];
    const baseLevel = minimalExp.length;
    const baseExp = minimalExp[minimalExp.length - 1];
    const expToLevel100 = 49e4;
    if (exp < baseExp) return minimalExp.findIndex((x) => exp < x);
    const theoreticalLevel = (exp - baseExp) / 5e3 + baseLevel;
    if (100 < theoreticalLevel) return 100 + this.convertXPToLevel(exp - expToLevel100);
    return theoreticalLevel;
  }
}

/**
 * @typedef {object} SkyblockMemberHotm
 * @property {boolean} one_hit_one_kill one hit one kill
 * @property {'Enabled' | 'Disabled'} rainbow_wool rainbow wool
 * @property {string} health_buff health buff
 * @property {string} game_speed game speed
 * @property {string} speed speed
 * @property {'Enabled' | 'Disabled'} no_class no class
 * @property {boolean} respawn_enable respawn enable
 */

module.exports = WoolGames;
