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
    /**
     * Season key parsed as date, should usually be current season
     * @type {Date}
     */
    this.date = getDateFromKey(this.seasonKey);
  }
}

/**
 * Gets date from season key
 * @param {string} key Season Key
 * @return {Date|null}
 */
function getDateFromKey(key) {
  const initDate = new Date(1000 * 60 * 60 * 5);
  const [month, year] = key.split('_').map(Number);
  // month needs to be 0 indexed cuz js :)
  if (isNaN(month) || isNaN(year) || month > 11) return null;
  return new Date(initDate.setFullYear(2000 + year, month - 1, 1));
}

module.exports = SkyWarsRanked;
