const Perk = require('./Perk');
/**
 * Candidate class
 */
class Candidate {
  /**
   * Constructor
   * @param {Object} data data
   * @param {boolean} [isMayor=false] if this candidate is the current mayor
   */
  constructor(data, isMayor = false) {
    /**
     * Mayor's name
     * @type {string}
     */
    this.name = data.name;
    /**
     * Mayor's Key Benefit (in 1 word)
     * @type {string}
     */
    this.keyBenefit = data.key;
    /**
     * Perks
     * @type {Perk[]}
     */
    this.perks = data.perks.map((x) => new Perk(x));
    /**
     * If this candidate is the current mayor
     * @type {boolean}
     */
    this.isMayor = isMayor || false;
    /**
     * The number of votes received by this candidate
     * @type {number}
     */
    this.votesReceived = parseInt(data.votes, 10) || 0;
  }
}

module.exports = Candidate;
