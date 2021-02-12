const dateRegExp = /(\d{1,2})(?:st|nd|rd|th|) ([A-z]+) (\d+)/;
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
     * Raw Date from the API Response
     * @type {string}
     */
    this.rawDate = data.text;
    /**
     * Parsed Date
     * @type {Date}
     */
    this.date = parseDate(data.text);
  }
  /**
   * News title
   * @return {string}
   */
  toString() {
    return this.title;
  }
}
/**
 * Parses a string date
 * @param {string} stringDate
 * @returns {Date | null}
 */
function parseDate(stringDate) {
  const matched = stringDate.match(dateRegExp);
  if (!matched) return null;
  return new Date(matched.slice(1).join(' ')); // Ok this is lazy, but should work
}
module.exports = SkyblockNews;
