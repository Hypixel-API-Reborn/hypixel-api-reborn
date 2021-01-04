const divide = require('../../utils/divide');
/**
 * The TNT Games class
 * @param {object} data TNT Games data
 */
class TNTGames {
  constructor (data) {
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
    this.tntrun = {
      wins: data.wins_tntrun || 0,
      deaths: data.deaths_tntrun || 0,
      KDRatio: divide(data.wins_tntrun, data.deaths_tntrun),
      record: data.record_tntrun || 0
    };
    /**
     * PVP Run
     * @type {PVPRun}
     */
    this.pvprun = {
      kills: data.kills_pvprun || 0,
      wins: data.wins_pvprun || 0,
      deaths: data.deaths_pvprun || 0,
      KDRatio: divide(data.kills_pvprun, data.deaths_pvprun),
      record: data.record_pvprun || 0
    };
    /**
     * TNT Tag
     * @type {TNTTag}
     */
    this.tnttag = {
      kills: data.kills_tntag || 0,
      wins: data.wins_tntag || 0,
      speed: data.tag_speed || 0
    };
    /**
     * Bowspleef
     * @type {Bowspleef}
     */
    this.bowspleef = {
      wins: data.wins_bowspleef || 0,
      tags: data.tags_bowspleef || 0,
      deaths: data.deaths_bowspleef || 0
    };
    /**
     * Wizards
     * @type {TNTWizards}
     */
    this.wizards = {
      points: data.points_capture || 0,
      class: (data.capture_class ? data.capture_class : null),
      kills: data.kills_capture || 0,
      assists: data.assists_capture || 0,
      wins: data.wins_capture || 0,
      deaths: data.deaths_capture || 0,
      KDRatio: divide(data.kills_capture, data.deaths_capture)
    };
  }
}
/**
 * @typedef {object} TNTRun
 * @property {number} wins Wins
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} record Record in seconds
 */
/**
 * @typedef {object} PVPRun
 * @property {number} kills Kills
 * @property {number} wins Wins
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} record Record in seconds
 */
/**
 * @typedef {object} TNTTag
 * @property {number} kills Kills
 * @property {number} wins Wins
 * @property {number} speed Speed
 */
/**
 * @typedef {object} Bowspleef
 * @property {number} wins Wins
 * @property {number} tags Tags
 * @property {number} deaths Deaths
 */
/**
 * @typedef {object} TNTWizards
 * @property {number} points Points
 * @property {string} class Class
 * @property {number} kills Kills
 * @property {number} assists Assists
 * @property {number} wins Wins
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 */
module.exports = TNTGames;
