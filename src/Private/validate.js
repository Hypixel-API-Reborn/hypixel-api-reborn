const Errors = require('../Errors');
const { isStrArray, strToArray } = require('../utils/arrayTools');
module.exports = class Validation {
  validateOptions (options) {
    if (typeof options.cacheTime !== 'number') throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if (typeof options.cacheSize !== 'number') throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
    if (typeof options.rateLimit !== 'string' || !['AUTO', 'HARD', 'NONE'].includes(options.rateLimit)) throw new Error(Errors.INVALID_RATE_LIMIT_OPTION);
  }

  parseOptions (options) {
    if (typeof options !== 'object' || options === null) throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    return {
      cache: options.cache || false,
      cacheTime: options.cacheTime || 60,
      cacheSize: (options.cacheSize === -1 ? Infinity : options.cacheSize) || Infinity,
      cacheFilter: typeof options.cacheFilter === 'function' ? options.cacheFilter : this._handleFilter(options.cacheFilter),
      rateLimit: options.rateLimit || 'AUTO'
    };
  }

  validateKey (key) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if (typeof key !== 'string') throw new Error(Errors.KEY_MUST_BE_A_STRING);
    return key;
  }

  cacheSuboptions (input) {
    if (typeof input !== 'object' || input === null) return false;
    if (!input.noCacheCheck && !input.noCaching) return false;
    return true;
  }

  _handleFilter (filter) {
    if (!filter) return () => true;
    if (typeof filter === 'object' && !Array.isArray(filter)) {
      if (filter.whitelist && isStrArray(filter.whitelist)) return (x) => strToArray(filter.whitelist).includes(x);
      if (filter.blacklist && isStrArray(filter.blacklist)) return (x) => !strToArray(filter.blacklist).includes(x);
      throw new Error(Errors.CACHE_FILTER_INVALID);
    }
    if (!isStrArray(filter)) throw new Error(Errors.CACHE_FILTER_INVALID);
    // blacklist by default
    return (x) => !strToArray(filter).includes(x);
  }
};
