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
     * Pet food/drink/exercisers
     * @type {Object}
     */
    this.petConsumables = data.petConsumables;
  }
}

module.exports = Pets;
