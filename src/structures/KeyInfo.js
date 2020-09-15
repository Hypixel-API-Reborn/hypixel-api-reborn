class KeyInfo {
  constructor (data) {
    this.key = data.key;
    this.owner = data.owner;
    this.limitPerMinute = data.limit || 0;
    this.requestsInPastMin = data.queriesInPastMin || 0;
    this.totalRequests = data.totalQueries || 0;
  }
}
module.exports = KeyInfo;
