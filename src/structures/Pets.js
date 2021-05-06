const Pet = require('./Pet');
/**
 * Pets class
 */
class Pets {
  /**
   * @param {string[]} pets Array of pets
   * @param {object} data data
   */
  constructor (pets, data) {
    /**
     * Array of pets
     * @type {Pet[]}
     */
    this.pets = pets.map((x) => new Pet(x, data));
    /**
     * Last Pet Journey ( as timestamp )
     * @type {number|null}
     */
    this.lastJourneyTimestamp = data.petJourneyTimestamp || null;
    /**
     * Last Pet Journey ( as Date )
     * @type {Date|null}
     */
    this.lastJourneyAt = this.lastJourneyTimestamp ? new Date(this.lastJourneyTimestamp) : null;
    /**
     * Pet food/drink/toys
     * @type {PetConsumables}
     */
    this.petConsumables = data.petConsumables;
  }
}
/**
 * @typedef {Object} PetConsumables
 * @property {number} BAKED_POTATO Food
 * @property {number} COOKIE Food
 * @property {number} FEATHER Toy
 * @property {number} HAY_BLOCK Food
 * @property {number} SLIME_BALL Toy
 * @property {number} COOKED_BEEF Food
 * @property {number} RED_ROSE Food
 * @property {number} WATER_BUCKET Drinks
 * @property {number} MELON Food
 * @property {number} STICK Toy
 * @property {number} WOOD_SWORD Toy ( but not irl )
 * @property {number} MILK_BUCKET Drinks
 * @property {number} GOLD_RECORD Food
 * @property {number} LEASH Toy
 * @property {number} LAVA_BUCKET Drinks
 * @property {number} BONE Food
 * @property {number} MAGMA_CREAM Food
 * @property {number} WHEAT Food
 * @property {number} MUSHROOM_SOUP Food
 * @property {number} BREAD Food
 * @property {number} PUMPKIN_PIE Food
 * @property {number} APPLE Food
 * @property {number} CARROT_ITEM Carrots
 * @property {number} RAW_FISH Food
 * @property {number} PORK Food
 * @property {number} CAKE Food
 * @property {number} ROTTEN_FLESH Food
 */

module.exports = Pets;
