const { decode } = require('../../utils/SkyblockUtils');
const PitInventoryItem = require('./PitInventoryItem');
const { divide } = require('../../utils');
const {
  pit: { Levels, Prestiges }
} = require('../../utils/Constants');

/**
 * Pit Class
 */
class Pit {
  /**
   * Constructor
   * @param {Record<string,unknown>} data Data from API
   */
  constructor(data) {
    const stats = data.pit_stats_ptl || {};
    /**
     * Prestige
     * @type {number}
     */
    this.prestige = data.profile?.prestiges?.[data.profile?.prestiges?.length - 1].index || 0;
    /**
     * Xp
     * @type {number}
     */
    this.xp = data.profile?.xp || 0;
    /**
     * Level
     * @type {number}
     */
    this.level =
      Pit.calcLevel(this.prestige, 0 < this.prestige ? this.xp - Prestiges[this.prestige - 1].SumXp : this.xp).level ??
      0;
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
    /**
     * Pit Player Inv
     * @return {Promise<PitInventoryItem[]>}
     */
    this.getInventory = async () => {
      let inventory = data.profile.inv_contents;
      if (!inventory) return [];

      try {
        inventory = await decode(inventory.data);
        const edited = [];
        for (let i = 1; i < inventory.length; i++) {
          if (!inventory[i].id) {
            continue;
          }
          edited.push(new PitInventoryItem(inventory[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    /**
     * Pit Player Ender Chest
     * @return {Promise<PitInventoryItem[]>}
     */
    this.getEnterChest = async () => {
      let chest = data.profile.inv_enderchest;
      if (!chest) return [];

      try {
        chest = await decode(chest.data);
        const edited = [];
        for (let i = 1; i < chest.length; i++) {
          if (!chest[i].id) {
            continue;
          }
          edited.push(new PitInventoryItem(chest[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    /**
     * Pit Player Armor
     * @return {Promise<PitArmor>}
     */
    this.getArmor = async () => {
      const base64 = data.profile.inv_armor;
      const decoded = await decode(base64.data);
      const armor = {
        helmet: decoded[3].id ? new PitInventoryItem(decoded[3]) : null,
        chestplate: decoded[2].id ? new PitInventoryItem(decoded[2]) : null,
        leggings: decoded[1].id ? new PitInventoryItem(decoded[1]) : null,
        boots: decoded[0].id ? new PitInventoryItem(decoded[0]) : null
      };
      return armor;
    };
  }
  // Credit https://github.com/PitPanda/PitPandaProduction/blob/b1971f56ea1aa8c829b722cbb33247c96591c0cb/structures/Pit.js
  /**
   * Converts XP to Level
   * @param {number} prestige Prestige Level
   * @param {number} xp Current xp into the prestige
   * @return {number}
   */
  static calcLevel(prestige, xp) {
    const multiplier = Prestiges[prestige].Multiplier;
    let level = 0;
    while (0 < xp && 120 > level) {
      const levelXp = Levels[Math.floor(level / 10)].Xp * multiplier;
      if (xp >= levelXp * 10) {
        xp -= levelXp * 10;
        level += 10;
      } else {
        const gain = Math.floor(xp / levelXp);
        level += gain;
        xp = 0;
      }
    }
    return level;
  }
}

/**
 * @typedef {object} PitArmor Equipped armor
 * @property {PitInventoryItem|null} helmet Helmet
 * @property {PitInventoryItem|null} chestplate Chestplate
 * @property {PitInventoryItem|null} leggings Leggings
 * @property {PitInventoryItem|null} boots Boots
 */

module.exports = Pit;
