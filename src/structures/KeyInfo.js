class KeyInfo {
  constructor (data) {
    const record = data.record;
    this.key = record.key;
    this.owner = record.owner;
    this.limitPerMinute = record.limit || 0;
    this.requestsInPastMin = record.queriesInPastMin || 0;
    this.totalRequests = record.totalQueries || 0;
    this.resetsAfter = parseInt(data._headers.get('ratelimit-reset'));
  }
}
module.exports = KeyInfo;
