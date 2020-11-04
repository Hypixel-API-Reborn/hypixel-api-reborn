class KeyInfo {
  constructor (data) {
    this.key = data[0].key;
    this.owner = data[0].owner;
    this.limitPerMinute = data[0].limit || 0;
    this.requestsInPastMin = data[0].queriesInPastMin || 0;
    this.totalRequests = data[0].totalQueries || 0;
    this.resetsAfter = data[1].get('ratelimit-reset');
  }
}
module.exports = KeyInfo;
