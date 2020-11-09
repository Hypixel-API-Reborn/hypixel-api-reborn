const validate = new (require('./Private/validate'))();
const rateLimit = new (require('./Private/rateLimit'))();
const requests = new (require('./Private/requests'))();
const API = require('./API/index');

class Client {
  constructor (key, options = {}) {
    this.key = validate.validateKey(key);
    this.options = validate.parseOptions(options);

    console.log(`[hypixel-api-reborn] Using key ${key.slice(0, 8) + key.slice(8).replace(/[^-]/g, '*')}.`);
    validate.validateOptions(this.options);
    // eslint-disable-next-line no-return-assign
    Object.keys(API).forEach(func => Client.prototype[func] = function () { return API[func].apply({ _makeRequest: this._makeRequest.bind(this, { nocache: false, ...(validate.cacheSuboptions(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : {}) }), ...this }, arguments); });
    rateLimit.init(this.getKeyInfo(), this.options.rateLimit);
  }

  async _makeRequest (options, url) {
    if (!url) return;
    if (url !== '/key' && !options.noCacheCheck) {
      if (requests.cache.has(url)) return requests.cache.get(url);
      rateLimit.rateLimitManager();
    }

    return requests.request.call(this, url, options);
  }

  get cache () {
    return requests.cache;
  }

  get sweepCache () {
    return requests.sweepCache;
  }
}

module.exports = Client;
