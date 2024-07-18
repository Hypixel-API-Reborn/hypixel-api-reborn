const divide = require('../../utils/divide');

class TNTRun {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_tntrun || 0;
    /**
     * Best Time (in seconds)
     * @type {number}
     */
    this.bestTime = data.record_tntrun || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_tntrun || 0;
    /**
     * Slowness Potion Perk Level
     * @type {number}
     */
    this.slownessPotions = data.new_tntrun_slowness_potions || 0;
    /**
     * Speed Potion Perk Level
     * @type {number}
     */
    this.speedPotions = data.new_tntrun_speed_potions || 0;
    /**
     * Double Jump Perk Level
     * @type {number}
     */
    this.doubleJumps = data.new_tntrun_double_jumps || 0;
    /**
     * prefix
     * @type {string}
     */
    this.prefix = data.prefix_tntrun || '';
  }
}
class PVPRun {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_pvprun || 0;
    /**
     * Best Time Alive (in seconds)
     * @type {number}
     */
    this.bestTime = data.record_pvprun || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_pvprun || 0;
    /**
     * Daths
     * @type {number}
     */
    this.deaths = data.deaths_pvprun || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Regeneration Perk Level
     * @type {number}
     */
    this.regeneration = data.new_pvprun_regeneration || 0;
    /**
     * Notoriety Perk Level
     * @type {number}
     */
    this.notoriety = data.new_pvprun_notoriety || 0;
    /**
     * Fortitude Perk Level
     * @type {number}
     */
    this.fortitude = data.new_pvprun_fortitude || 0;
    /**
     * Double Jump Perk level
     * @type {number}
     */
    this.doubleJumps = data.new_pvprun_double_jumps || 0;
    /**
     * Prefix
     * @type {string}
     */
    this.prefix = data.prefix_pvprun || '';
  }
}
class BowSpleef {
  constructor(data) {
    /**
     * wins
     * @type {number}
     */
    this.wins = data.wins_bowspleef || 0;
    /**
     * tags
     * @type {number}
     */
    this.tags = data.tags_bowspleef || 0;
    /**
     * deaths
     * @type {number}
     */
    this.deaths = data.deaths_bowspleef || 0;
    /**
     * prefix
     * @type {string}
     */
    this.prefix = data.prefix_bowspleef || '';
  }
}
class TNTTag {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_tntag || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_tntag || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_tntag || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Speed Perk Level
     * @type {number}
     */
    this.speed = data.new_tntag_speedy || 0;
    /**
     * Blast Protection Perk Level
     * @type {number}
     */
    this.blastProtection = data.tag_blastprotection || 0;
    /**
     * Speed It Up Perk Level
     * @type {number}
     */
    this.speedItUp = data.tag_speeditup || 0;
    /**
     * Slow It Down Perk Level
     * @type {number}
     */
    this.slowItDown = data.tag_slowitdown || 0;
    /**
     * Prefix
     * @type {string}
     */
    this.prefix = data.prefix_tntag || '';
  }
}
class TNTWizards {
  constructor(data) {
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins_capture || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills_capture || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists_capture || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths_capture || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Points
     * @type {number}
     */
    this.points = data.points_capture || 0;
    /**
     * Kinetic Healing
     * @type {number}
     */
    this.kineticHealing = data.kinetic_healing_capture || 0;
    /**
     * Air Time (In seconds)
     * @type {number}
     */
    this.airTime = data.air_time_capture || 0;
    /**
     * Prefix
     * @type {string}
     */
    this.prefix = data.prefix_capture || '';
  }
}

/**
 * The TNT Games class
 */
class TNTGames {
  /**
   * @param {object} data TNT Games data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.winstreak || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * TNT Run
     * @type {TNTRun}
     */
    this.tntrun = new TNTRun(data);
    /**
     * PVP Run
     * @type {PVPRun}
     */
    this.pvpRun = new PVPRun(data);
    /**
     * Bowspleef
     * @type {BowSpleef}
     */
    this.bowSpleef = new BowSpleef(data);
    /**
     * TNT Tag
     * @type {TNTTag}
     */
    this.tnttag = new TNTTag(data);
    /**
     * Wizards
     * @type {TNTWizards}
     */
    this.wizards = new TNTWizards(data);
  }
}

module.exports = TNTGames;
