const { divide } = require('../../utils');

/**
 * Pit Class
 * TODO : Profile (inv, ender chest, armor), levels ( https://docs.google.com/spreadsheets/d/1ZnG7kv3dTZhsowr-8vK3kiJCFT-w-vJzY5lhJqLSSmc/edit#gid=0), Other minor stats
 */
class Pit {
  /**
   * Constructor
   * @param {Record<string,unknown>} data Data from API
   */
  constructor(data) {
    const stats = data.pit_stats_ptl || {};
    /**
     * Kills
     * @type {number}
     */
    this.kills = stats.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = stats.deaths || 0;
    /**
     * KDR
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Assists
     * @type {number}
     */
    this.assists = stats.assists || 0;
    /**
     * Max kill streak
     * @type {number}
     */
    this.maxKillStreak = stats.max_streak || 0;
    /**
     * Playtime in SECONDS
     * @type {number}
     */
    this.playtime = (stats.playtime_minutes || 0) * 60;
    /**
     * Times the played joined Pit
     * @type {number}
     */
    this.joins = stats.joins || 0;

    // Damage section (overall)
    /**
     * Damage received overall
     * @type {number}
     */
    this.damageReceived = stats.damage_received || 0;
    /**
     * Damage dealt overall
     * @type {number}
     */
    this.damageDealt = stats.damage_dealt || 0;
    /**
     * Damage dealt to damage received ratio
     * @type {number}
     */
    this.damageRatio = divide(this.damageDealt, this.damageReceived);
    // Melee damage
    /**
     * Damage received in melee
     * @type {number}
     */
    this.meleeDamageReceived = stats.melee_damage_received || 0;
    /**
     * Damage dealt in melee
     * @type {number}
     */
    this.meleeDamageDealt = stats.melee_damage_dealt || 0;
    /**
     * Sword hits
     * @type {number}
     */
    this.swordHits = stats.sword_hits || 0;
    /**
     * Left Clicks (sword clicks, hit or miss)
     * @type {number}
     */
    this.leftClicks = stats.left_clicks || 0;
    /**
     * Hits divided by left clicks
     * @type {number}
     */
    this.meleeAccuracy = divide(this.swordHits, this.leftClicks);
    /**
     * Damage dealt to damage received ratio in melee
     * @type {number}
     */
    this.meleeDamageRatio = divide(this.meleeDamageDealt, this.meleeDamageReceived);
    // Arrow damage
    /**
     * Damage received by arrow
     * @type {number}
     */
    this.bowDamageReceived = stats.bow_damage_received || 0;
    /**
     * Damage dealt with bow
     * @type {number}
     */
    this.bowDamageDealt = stats.bow_damage_dealt || 0;
    /**
     * Arrows hit
     * @type {number}
     */
    this.arrowsHit = stats.arrow_hits || 0;
    /**
     * Arrows fired (hit + missed)
     * @type {number}
     */
    this.arrowsFired = stats.arrows_fired || 0;
    /**
     * Hit divided by Fired
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsFired);
    /**
     * Damage dealt to damage received ratio in ranged (bow/arrow)
     * @type {number}
     */
    this.bowDamageRatio = divide(this.bowDamageDealt, this.bowDamageReceived);
    /**
     * Golden Heads eaten
     * @type {number}
     */
    this.goldenHeadsEaten = stats.ghead_eaten || 0;
  }
}

module.exports = Pit;
