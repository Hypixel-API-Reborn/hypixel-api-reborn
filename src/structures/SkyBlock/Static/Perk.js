/**
 * Candidate class
 */
class Perk {
  /**
   * Constructor
   * @param {Object} data data
   * @param {boolean} [isMayor=false] if this candidate is the current mayor
   */
  constructor(data) {
    /**
     * Perk's Name
     * @type {string}
     */
    this.name = data.name;
    /**
     * Perk's Description
     * @type {string}
     */
    this.description = data.description;
  }
}

module.exports = Perk;
