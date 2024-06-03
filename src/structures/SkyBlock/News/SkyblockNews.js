const dateRegExp = /(\d{1,2})(?:st|nd|rd|th|) ([A-z]+) (\d+)/;
const versionRegExp = /v\d+(\.\d+){1,}/;
/**
 * SkyblockNews
 */
class SkyblockNews {
  /**
   * @param {object} data
   * @example
   */
  constructor(data) {
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
    /**
     * The version from the title (Skyblock v0.12.57673856757.327.2 => v0.12.57673856757.327.2)
     * @author linearaccelerator
     * @type {string | null}
     */
    this.version = parseVer(this.title);
  }
  /**
   * News title
   * @return {string}
   * @example
   */
  toString() {
    return this.title;
  }
}
// eslint-disable-next-line jsdoc/require-jsdoc
function parseDate(stringDate) {
  const matched = stringDate.match(dateRegExp);
  if (!matched) return null;
  return new Date(matched.slice(1).join(' ')); // Ok this is lazy, but should work
}

// eslint-disable-next-line jsdoc/require-jsdoc
function parseVer(stringVer) {
  const matches = versionRegExp.exec(stringVer);
  if (!matches?.length) return null; // this shouldn't really happen
  return matches[0];
}
module.exports = SkyblockNews;
