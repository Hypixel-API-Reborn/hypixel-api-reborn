/**
 * SkyblockNews
 */
class SkyblockNews {
  /**
   * @param {object} data
   */
  constructor (data) {
    /**
     * Title
     * @type {string}
     */
    this.title = data.title;
    /**
     * Thread
     * @type {string}
     */
    this.link = data.link;
    /**
     * Date
     * @type {string}
     */
    this.date = data.text;
  }
}
module.exports = SkyblockNews;
