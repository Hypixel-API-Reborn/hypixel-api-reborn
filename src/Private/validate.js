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
  validateOptions(options) {
    if ('number' !== typeof options.hypixelCacheTime) throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if ('number' !== typeof options.mojangCacheTime) throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if ('number' !== typeof options.cacheSize) throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
    if ('string' !== typeof options.rateLimit || !['AUTO', 'HARD', 'NONE'].includes(options.rateLimit)) {
      throw new Error(Errors.INVALID_RATE_LIMIT_OPTION);
    }
    if ('number' !== typeof options.keyLimit) throw new Error(Errors.INVALID_KEY_LIMIT_OPTION);
    if ('boolean' !== typeof options.syncWithHeaders) throw new Error(Errors.INVALID_HEADER_SYNC_OPTION);
    if ('object' !== typeof options.headers) throw new Error(Errors.INVALID_HEADERS);
    if ('boolean' !== typeof options.silent) throw new Error(Errors.INVALID_SILENT_OPTION);
    if ('boolean' !== typeof options.checkForUpdates) throw new Error(Errors.INVALID_UPDATE_OPTION);
    if (!['boolean', 'string'].includes(typeof options.useThirdPartyAPI)) {
      throw new Error(Errors.INVALID_THIRD_PARTY_API_OPTION);
    }
  }

  /**
   * Parses cache options
   * @param {Object} options Options to be parsed
   * @returns {Object} Parsed cache options
   * @private
   */
  parseOptions(options) {
    if ('object' !== typeof options || null === options) throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    return {
      cache: options.cache ?? true,
      hypixelCacheTime: options.hypixelCacheTime ?? 60,
      mojangCacheTime: options.mojangCacheTime ?? 600,
      cacheSize: (-1 === options.cacheSize ? Infinity : options.cacheSize) || Infinity,
      cacheFilter:
        // eslint-disable-next-line no-underscore-dangle
        'function' === typeof options.cacheFilter ? options.cacheFilter : this._handleFilter(options.cacheFilter),
      rateLimit: options.rateLimit ?? 'AUTO',
      keyLimit: options.keyLimit ?? 60,
      syncWithHeaders: Boolean(options.syncWithHeaders),
      headers: options.headers ?? {},
      silent: Boolean(options.silent),
      checkForUpdates: options.checkForUpdates ?? true,
      useThirdPartyAPI: options.useThirdPartyAPI ?? false
    };
  }

  /**
   * Checks if Key is provided in a correct format
   * @param {string} key API Key
   * @returns {string} Key
   * @private
   */
  validateKey(key) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if ('string' !== typeof key) throw new Error(Errors.KEY_MUST_BE_A_STRING);
    return key;
  }

  /**
   * Check if suboptions are valid
   * @param {Object} input Cache options
   * @returns {boolean} Whether options are valid
   * @private
   */
  cacheSuboptions(input) {
    if ('object' !== typeof input || null === input) return false;
    if (!input.noCacheCheck && !input.noCaching && !input.raw) return false;
    return true;
  }

  /**
   * Handles & parses the filter
   * @param {*} filter FilterResolvable to be parsed
   * @returns {Function} Filter function
   * @private
   */
  _handleFilter(filter) {
    if (!filter) return () => true;
    if ('object' === typeof filter && !Array.isArray(filter)) {
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
    if (12 > nodeVersion) throw new Error(Errors.NODE_VERSION_ERR);
  }
}
module.exports = Validation;
