const VanityPet = require('./VanityPet');

/**
 * Vanity Companions
 */
class VanityCompanion extends VanityPet {
  /**
   * Constructor
   * @param {Object} data data
   */
  constructor(...args) {
    super(...args);
    /**
     * Companion's name
     * @type {string}
     */
    this.name = this.name.replace('\\u0027', '\u0027');
  }
}

module.exports = VanityCompanion;
