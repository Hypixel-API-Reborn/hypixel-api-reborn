/**
 * @typedef {import("./VanityPets").RarityColor} RarityColor
 */
/**
 * VanityPet Class
 */
class VanityPet {
  /**
   * constructor
   * @param {Object} data
   * @param {RarityColor[]} rarityColor
   */
  constructor(data, rarityColor) {
    /**
     * Name of Pet
     * @type {string}
     */
    this.name = data.name;
    /**
     * Internal Key of Pet
     * @type {string}
     */
    this.key = data.key;
    /**
     * Rarity of pet (nullable for companions)
     * @type {string?}
     */
    this.rarity = data.rarity;
    /**
     * Associated color for this pet's rarity
     * @type {string?}
     */
    this.associatedColor = rarityColor.find((x) => x.name === this.rarity)?.color;
    /**
     * Packge in which you can find the pet
     * @type {string}
     */
    this.package = data.package;
  }
  /**
   * As string
   * @return {string}
   */
  toString() {
    return this.name;
  }
}

module.exports = VanityPet;
