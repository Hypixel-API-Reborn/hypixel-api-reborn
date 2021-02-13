const APIIncident = require('./APIIncident');
/**
 * API status class
 */
class APIStatus {
  /**
   * @param {object} data API status data
   */
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
    this.incidents = data.items.map((x) => new APIIncident(x));
    /**
     * All incidents that aren't completed/resolved
     * @author linearaccelerator
     * @type {APIIncident[]}
     * @version >6.0.1
     */
    this.currentIncidents = this.incidents.filter((i) => !i.isResolved);
  }
  /**
   * Status Title
   * @return {string}
   */
  toString() {
    return this.title;
  }
}

module.exports = APIStatus;
