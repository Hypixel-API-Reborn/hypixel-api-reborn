/**
 * House class
 */
class House {
  /**
   * @param {object} data data
   */
  constructor(data) {
    /**
     * Name of the house
     * @type {string}
     */
    this.name = data.name || '';
    /**
     * UUID of the house
     * @type {string}
     */
    this.uuid = data.uuid || '';
    /**
     * UUID of the house owner
     * @type {string}
     */
    this.owner = data.owner || '';
    /**
     * Timestamp when the house was created
     * @type {number}
     */
    this.createdAtTimestamp = data.createdAt || 0;
    /**
     * Date when the house was created
     * @type {Date|null}
     */
    this.createdAt = new Date(this.createdAtTimestamp);
    /**
     * Number of players currently at the house
     * @type {number}
     */
    this.players = data.players || 0;
    /**
     * Number of cookies the house has
     * @type {number}
     */
    this.cookies = data.cookies?.current || 0;
  }
  /**
   * House Nmae
   * @return {string}
   */
  toString() {
    return this.name;
  }
}

module.exports = House;
