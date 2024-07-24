const divide = require('../../utils/divide');

class QuakecraftMode {
  /**
   * @param {object} data Quakecraft data
   * @param {string} gamemode Gamemode Name
   */
  constructor(data, gamemode) {
    if (gamemode) gamemode = `_${gamemode}`;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins${gamemode}`] || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills${gamemode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths${gamemode}`] || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Kill streaks
     * @type {number}
     */
    this.killstreaks = data[`killstreaks${gamemode}`] || 0;
    /**
     * Distance travelled
     * @type {number}
     */
    this.distanceTravelled = data[`distance_travelled${gamemode}`] || 0;
    /**
     * Shots fired
     * @type {number}
     */
    this.shotsFired = data[`shots_fired${gamemode}`] || 0;
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = data[`headshots${gamemode}`] || 0;
  }
}

/**
 * Quakecraft class
 */
class Quakecraft {
  /**
   * @param {object} data Quakecraft data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Solo Quakecraft stats
     * @type {QuakecraftMode}
     */
    this.solo = new QuakecraftMode(data);
    /**
     * Teams Quakecraft stats
     * @type {QuakecraftMode}
     */
    this.teams = new QuakecraftMode(data, 'teams');
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.solo.wins + this.teams.wins;
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.solo.kills + this.teams.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.solo.deaths + this.teams.deaths;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Kill streaks
     * @type {number}
     */
    this.killstreaks = this.solo.killstreaks + this.teams.killstreaks;
    /**
     * Distance travelled
     * @type {number}
     */
    this.distanceTravelled = this.solo.distanceTravelled + this.teams.distanceTravelled;
    /**
     * Shots fired
     * @type {number}
     */
    this.shotsFired = this.solo.shotsFired + this.teams.shotsFired;
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = this.solo.headshots + this.teams.headshots;
    /**
     * Instant Respawn
     * @type {boolean}
     */
    this.instantRespawn = data.instantRespawn || false;
    /**
     * Kill Prefix Color
     * @type {string}
     */
    this.killPrefixColor = data.selectedKillPrefix || '';
    /**
     * Show Prefix
     * @type {boolean}
     */
    this.showPrefix = data.showKillPrefix || false;
    /**
     * Kill Sound
     * @type {string}
     */
    this.killSound = data.killsound || '';
    /**
     * Barrel
     * @type {string}
     */
    this.barrel = data.barrel || '';
    /**
     * Case
     * @type {string}
     */
    this.case = data.case || '';
    /**
     * Muzzle
     * @type {string}
     */
    this.muzzle = data.muzzle || '';
    /**
     * Sight
     * @type {string}
     */
    this.sight = data.sight || '';
    /**
     * Trigger
     * @type {string}
     */
    this.trigger = data.trigger || '';
  }
}

module.exports = Quakecraft;
