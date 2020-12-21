module.exports = class RateLimit {
  rateLimitMonitor () {
    this.requests = 0;
    setInterval(() => { this.requests = 0; }, 1000 * 60);
  }

  async rateLimitManager (options) {
    this.requests++;
    if (options.rateLimit === 'NONE') return;
    if (options.rateLimit === 'AUTO' && this.requests <= 60) return;
    // eslint-disable-next-line no-return-assign
    if (Date.now() - this.lastRequestAt >= 500) return this.lastRequestAt = Date.now();
    // Wait before send, because user is on HARD RateLimit mode or AUTO, but passed 60 requests/min
    this.waitingRequests++;
    // With rate limit set to HARD, you will never be able to pass the Ratelimit set by hypixel API if this is the only script you are using the API key with.
    await new Promise(r => setTimeout(r, 500 * this.waitingRequests), true);
    this.waitingRequests--;
    this.lastRequestAt = Date.now();
  }

  init (keyInfo, rateLimit) {
    this.options = { rateLimit };
    this.requests = 0;
    this.waitingRequests = 0;
    this.lastRequestAt = 0; // Set to a large number so 1st request doesn't get rate limited already
    keyInfo
      .then(info => {
        this.requests = info.requestsInPastMin;
        setTimeout(this.rateLimitMonitor, 1000 * info.resetsAfter);
      })
      // eslint-disable-next-line camelcase
      .catch(O_o => {});
    // Still make the requests per min possible
  }
};
