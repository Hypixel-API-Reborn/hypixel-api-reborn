/**
 * KeyInfo class
 * @param {object} data Key data
 */
class KeyInfo {
  constructor (data) {
    const record = data.record;
    /**
     * API key
     * @type {string}
     */
    this.key = record.key;
    /**
     * Key owner UUID
     * @type {string}
     */
    this.owner = record.owner;
    /**
     * Limit per minute
     * @type {number}
     */
    this.limitPerMinute = record.limit || 0;
    /**
     * Requests in past minute
     * @type {number}
     */
    this.requestsInPastMin = record.queriesInPastMin || 0;
    /**
     * Total requests
     * @type {number}
     */
    this.totalRequests = record.totalQueries || 0;
    /**
     * Limit resets after in seconds
     * @type {number}
     */
    this.resetsAfter = parseInt(data._headers.get('ratelimit-reset'));
  }
}
module.exports = KeyInfo;
