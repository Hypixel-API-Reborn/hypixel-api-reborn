const VanityPet = require('./VanityPet.js');

/**
 * Achievement class
 */
class VanityPets {
  /**
   * @param {object} data data
   */
  constructor (data) {
    /**
     * Last time this resource was updated
     * @type {number}
     */
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    /**
     * Last time this resource was updated, as Date
     * @type {Date|null}
     */
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    /**
     * Color associated with each rarity
     * @type {RarityColor[]}
     */
    this.rarityColors = data.rarities || [];
    /**
     * Vanity Pets
     * @type {VanityPet[]}
     */
    this.pets = (data.types || []).map((type)=>new VanityPet(type, this.rarityColors));
  }
}

/**
 * @typedef {Object} RarityColor
 * @property {string} name Name of rarity
 * @property {string} color Associated color
 */
module.exports = VanityPets;
