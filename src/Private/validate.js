const Errors = require('../Errors');
module.exports = class Validation {
  validateOptions (options) {
    if (typeof options !== 'object') throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    if (typeof options.cacheTime !== 'number') throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if (typeof options.cacheSize !== 'number') throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
    if (typeof options.rateLimit !== 'string' || !['AUTO', 'HARD', 'NONE'].includes(options.rateLimit)) throw new Error(Errors.INVALID_RATE_LIMIT_OPTION);
  }

  parseOptions (options) {
    return {
      cache: options.cache || false,
      cacheTime: options.cacheTime || 60,
      cacheSize: (options.cacheSize === -1 ? Infinity : options.cacheSize) || Infinity,
      rateLimit: options.rateLimit || 'AUTO'
    };
  }

  validateKey (key) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if (typeof key !== 'string') throw new Error(Errors.KEY_MUST_BE_A_STRING);
    return key;
  }
};
