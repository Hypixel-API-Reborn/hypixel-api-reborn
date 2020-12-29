const validate = new (require('./Private/validate'))();
const rateLimit = new (require('./Private/rateLimit'))();
const requests = new (require('./Private/requests'))();
const API = require('./API/index');
/**
 * Client class
 * @param {string} key API key [(?)](https://stavzdev.is-inside.me/cCMiZdoy.gif)
 * @param {ClientOptions} options Client options
 */
class Client {
  constructor (key, options = {}) {
    this.key = validate.validateKey(key);
    this.options = validate.parseOptions(options);

    console.log(`[hypixel-api-reborn] Using key ${key.slice(0, 8) + key.slice(8).replace(/[^-]/g, '*')}.`);
    validate.validateOptions(this.options);
    // eslint-disable-next-line no-return-assign
    Object.keys(API).forEach(func => Client.prototype[func] = function () { return API[func].apply({ _makeRequest: this._makeRequest.bind(this, { ...(validate.cacheSuboptions(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : {}) }), ...this }, arguments); });
    rateLimit.init(this.getKeyInfo(), this.options.rateLimit);
  }

  async _makeRequest (options, url, useRateLimitManager = true) {
    if (!url) return;
    if (url !== '/key' && !options.noCacheCheck && requests.cache.has(url)) return requests.cache.get(url);
    if (useRateLimitManager) await rateLimit.rateLimitManager(this.options);
    return requests.request.call(this, url, options);
  }

  /**
   * Returns all cache entries
   * @type {Map<string,data>}
   */
  get cache () {
    return requests.cache;
  }

  /**
   * Delete all cache entries
   * @param {?number} amount
   * @returns {Promise<void|boolean[]>}
   */
  sweepCache (amount) {
    return requests.sweepCache(amount);
  }
}
/**
 * @typedef {?object} ClientOptions
 * @prop {?boolean} [cache=false] Enable/Disable request caching.
 * @prop {?number} [cacheTime=60] Amount of time in seconds to cache the requests.
 * @prop {AUTO|HARD|NONE} [rateLimit='AUTO'] Rate limit mode.
 * @prop {?number} [cacheSize=-1] The amount how many results will be cached. (`-1` for infinity)
 */
module.exports = Client;
