/**
 * Candidate class
 */
class Perk {
  /**
   * Constructor
   * @param {Object} data data
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
