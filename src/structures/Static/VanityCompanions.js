const VanityPets = require('./VanityPets');
const VanityCompanion = require('./VanityCompanion');

/**
 * Vanity Companions
 */
class VanityCompanions extends VanityPets {
  /**
   * Constructor
   * @param {Object} data data
   */
  constructor(data) {
    super(data);
    // NB. Remove pets
    this.pets = null;
    /**
     * Vanity Companions
     * @type {VanityCompanions[]}
     */
    this.companions = (data.types || []).map((type) => new VanityCompanion(type, this.rarityColors));
  }
}

module.exports = VanityCompanions;
