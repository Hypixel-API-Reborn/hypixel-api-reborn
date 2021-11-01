/* eslint-disable require-jsdoc */
const Errors = require('../Errors');
const { isStrArray, strToArray } = require('../utils/arrayTools');
/**
 * Validation Class, used internally to validate provided arguments
 */
class Validation {
  /**
   * Check if cache options are valid
   * @param {Object} options Global Cache Options to be validated
   * @returns {void} Void
   * @private
   */
  validateOptions (options) {
    if (typeof options.cacheTime !== 'number') throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if (typeof options.cacheSize !== 'number') throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
    if (typeof options.rateLimit !== 'string' || !['AUTO', 'HARD', 'NONE'].includes(options.rateLimit)) throw new Error(Errors.INVALID_RATE_LIMIT_OPTION);
    if (typeof options.keyLimit !== 'number') throw new Error(Errors.INVALID_KEY_LIMIT_OPTION);
    if (typeof options.syncWithHeaders !== 'boolean') throw new Error(Errors.INVALID_HEADER_SYNC_OPTION);
    if (typeof options.headers !== 'object') throw new Error(Errors.INVALID_HEADERS);
  }

  /**
   * Parses cache options
   * @param {Object} options Options to be parsed
   * @returns {Object} Parsed cache options
   * @private
   */
  parseOptions (options) {
    if (typeof options !== 'object' || options === null) throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    return {
      cache: options.cache || false,
      cacheTime: options.cacheTime || 60,
      cacheSize: (options.cacheSize === -1 ? Infinity : options.cacheSize) || Infinity,
      cacheFilter: typeof options.cacheFilter === 'function' ? options.cacheFilter : this._handleFilter(options.cacheFilter),
      rateLimit: options.rateLimit || 'AUTO',
      keyLimit: options.keyLimit || 120,
      syncWithHeaders: !!options.syncWithHeaders,
      headers: options.headers || {},
      silent: !!options.silent,
      checkForUpdates: options.checkForUpdates || false
    };
  }

  /**
   * Checks if Key is provided in a correct format
   * @param {string} key API Key
   * @returns {string} Key
   * @private
   */
  validateKey (key) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if (typeof key !== 'string') throw new Error(Errors.KEY_MUST_BE_A_STRING);
    return key;
  }

  /**
   * Check if suboptions are valid
   * @param {Object} input Cache options
   * @returns {boolean} Whether options are valid
   * @private
   */
  cacheSuboptions (input) {
    if (typeof input !== 'object' || input === null) return false;
    if (!input.noCacheCheck && !input.noCaching) return false;
    return true;
  }

  /**
   * Handles & parses the filter
   * @param {*} filter FilterResolvable to be parsed
   * @returns {Function} Filter function
   * @private
   */
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
  /**
   * Checks user's node version
   * -12 will return an error; -14 will result in a warning
   * @returns {void}
   * @private
   */
  validateNodeVersion() {
    const nodeVersion = parseInt(process.version.match(/v(\d{2})\.\d{1,}\.\d+/)[1], 10);
    if (nodeVersion < 12) throw new Error(Errors.NODE_VERSION_ERR);
  }
}
module.exports = Validation;
