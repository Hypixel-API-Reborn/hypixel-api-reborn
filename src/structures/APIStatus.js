const APIIncident = require('./APIIncident');
/**
 * API status class
 * @param {object} data API status data
 */
class APIStatus {
  constructor (data) {
    /**
     * Source url
     * @type {string|null}
     */
    this.sourceUrl = data.feedUrl || null;
    /**
     * Title
     * @type {string|null}
     */
    this.title = data.title || null;
    /**
     * Description
     * @type {string|null}
     */
    this.description = data.description || null;
    /**
     * API incident
     * @type {APIIncident[]}
     */
    this.incidents = data.items.map(x => new APIIncident(x));
  }
}

module.exports = APIStatus;
