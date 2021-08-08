/**
 * SkyWars Ranked class
 */
class SkyWarsRanked {
  /**
   * @param {object} data
   */
  constructor (data) {
    /**
     * Ranked season key (e.g. 7_21 - July 2021)
     * @type {string}
     */
    this.seasonKey = data.key;
    /**
     * Current position
     * @type {number}
     */
    this.position = data.position;
    /**
     * Current rating
     * @type {number}
     */
    this.rating = data.score;
  }
}
module.exports = SkyWarsRanked;
