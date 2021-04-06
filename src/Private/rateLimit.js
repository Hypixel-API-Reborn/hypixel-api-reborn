/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable camelcase */
const Errors = require('../Errors');

/* eslint-disable require-jsdoc */
module.exports = class RateLimit {
  constructor() {
    this.initialized = 0;
  }

  async rateLimitManager () {
    if (!this.initialized) return;
    this.requests++;
    this.requestQueue.unshift(Date.now());
    if (this.options.rateLimit === 'NONE' || !this.requestQueue.length) return;
    if (this.options.rateLimit === 'AUTO' && this.requests <= this.options.keyLimit / 2) return;
    const cooldown = this.computeCooldownTime();
    this.requestQueue[0] = Date.now() + cooldown;
    await new Promise((r) => setTimeout(r, cooldown), true);
    return;
  }

  sync(data) {
    this.options.keyLimit = parseInt(data.get('ratelimit-limit'));
    this.requests = parseInt(data.get('ratelimit-ramaining'));
    if (Math.round(Date.now() / 1000) - (60 - parseInt(data.get('ratelimit-reset'))) != Math.round(this.lastResetHappenedAt/1000)) {
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(this.reset, parseInt(data.get('ratelimit-reset')) * 1000, this);
    }
  }

  computeCooldownTime() {
    const overhead = this.requestQueue[1] <= Date.now() ? 0 : this.requestQueue[1] - Date.now();
    const multiplier = Math.floor(this.requests / this.options.keyLimit ) + 1;
    return overhead + (- overhead - Date.now() + 60000 * multiplier + this.lastResetHappenedAt) / (this.options.keyLimit * multiplier-this.requests);
  }

  reset(fthis) {
    fthis.requests = fthis.requests - fthis.options.keyLimit;
    if (fthis.requests < 0) fthis.requests = 0;
    fthis.lastResetHappenedAt = Date.now();
    fthis.resetTimer = setTimeout(fthis.reset, 60000, fthis);
    fthis.requestQueue = fthis.requestQueue.filter((x)=>x >= Date.now());
  }

  rateLimitMonitor () {
    this.resetTimer = setTimeout(this.reset, 1000 * 60, this);
  }

  init (keyInfo, options) {
    /**
     * Rate limit Options
     * @type {RLOptions}
     */
    this.options = options;
    /**
     * Requests in past min
     * @type {number}
     */
    this.requests = 0;
    /**
     * Cooldown
     * @type {number}
     */
    this.cooldownTime = 60000 / this.options.keyLimit; // Initial value
    /**
     * Request Queue ( Array of timestamps )
     * @type {number[]}
     */
    this.requestQueue = [];
    return keyInfo
      .then((info) => {
        this.requests = info.requestsInPastMin;
        this.lastResetHappenedAt = Date.now() - (60 - info.resetsAfter) * 1000; // Computed reset time
        this.resetTimer = setTimeout(this.rateLimitMonitor.bind(this), 1000 * info.resetsAfter);
        this.initialized = 1;
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.warn(Errors.RATE_LIMIT_INIT_ERROR);
        this.requests = 0;
        this.lastResetHappenedAt = Date.now();
        this.rateLimitMonitor();
        this.initialized = 1;
      });
    // Still make the requests per min possible
  }
};
/**
 * @typedef {Object} RLOptions
 * @property {number} keyLimit Max request of key per min
 * @property {NONE|AUTO|HARD} rateLimit rate limit mode
 * @property {boolean} syncWithHeaders Sync rate limits with headers
 */
