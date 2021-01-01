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
   * Allows you to get statistics of player
   * @method
   * @name Client#getPlayer
   * @param {string} query Player nickname or UUID
   * @param {?PlayerMethodOptions} options Method options
   * @returns {Promise<Player>}
   * @example
   * // { guild: true } - fetch player's guild
   * hypixel.getPlayer('StavZDev', { guild: true }).then(player => {
   *   console.log(player.level); - 141
   *   console.log(player.rank); - 'MVP+'
   *   console.log(player.guild); - null (player is not in guild)
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get statistics of hypixel guild
   * @method
   * @name Client#getGuild
   * @param {id|name|player} searchParameter Search for guild by id, name or player
   * @param {string} query Guild ID, Guild name or player uuid/nickname
   * @param {?MethodOptions} options Method options
   * @returns {Promise<Guild>}
   * @example
   * hypixel.getGuild('name', 'The Foundation').then(guild => {
   *   console.log(guild.level); - 111
   *   console.log(guild.id); - '52e5719284ae51ed0c716c69'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you get player's list of friends
   * @method
   * @name Client#getFriends
   * @param {string} query Player nickname or UUID
   * @param {?MethodOptions} options Method options
   * @returns {Promise<Array<Friend>>}
   * @example
   * hypixel.getFriends('StavZDev').then(friends => {
   *   console.log(friends[0].friendSinseTimestamp); - 1528363745834
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get statistics of watchdog anticheat
   * @method
   * @name Client#getWatchdogStats
   * @param {?MethodOptions} options Method options
   * @returns {Promise<WatchdogStats>}
   * @example
   * hypixel.getWatchdogStats('StavZDev').then(watchdog => {
   *   console.log(watchdog.byWatchdogTotal); - 5931897
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get all active boosters
   * @method
   * @name Client#getBoosters
   * @param {?MethodOptions} options Method options
   * @returns {Promise<Array<Booster>>}
   * @example
   * hypixel.getBoosters().then(boosters => {
   *   console.log(boosters[0].purchaser); - '978ddb705a8e43618e41749178c020b0'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get all active boosters
   * @method
   * @name Client#getSkyblockProfiles
   * @param {string} query Player nickname or UUID
   * @param {?SkyblockMethodOptions} options Method options
   * @returns {Promise<Array<SkyblockProfile>>}
   * @example
   * hypixel.getSkyblockProfiles('StavZDev').then(profiles => {
   *   console.log(profiles[0].members[0].uuid); - '52d9a36f66ce4cdf9a56ad9724ae9fb4'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get a player's skyblock member data from all their profiles
   * @method
   * @name Client#getSkyblockMember
   * @param {string} query Player nickname or UUID
   * @param {?MethodOptions} options Method options
   * @returns {Promise<Map<string,SkyblockMember>>}
   * @example
   * hypixel.getSkyblockMember('StavZDev').then(member => {
   *   // 'Cucumber' - profile name
   *   console.log(member.get('Cucumber').uuid); - '52d9a36f66ce4cdf9a56ad9724ae9fb4'
   * }).catch(e => {
   *   console.log(e);
   * })
   */

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
/**
 * @typedef {?object} MethodOptions
 * @property {?boolean} noCacheCheck Disable/Enable cache checking
 * @property {?boolean} noCaching Disable/Enable writing to cache
 */
/**
 * @typedef {?object} PlayerMethodOptions
 * @property {?boolean} noCacheCheck Disable/Enable cache checking
 * @property {?boolean} noCaching Disable/Enable writing to cache
 * @property {?boolean} guild Disable/Enable request for player's guild
 */
/**
 * @typedef {?object} SkyblockMethodOptions
 * @property {?boolean} noCacheCheck Disable/Enable cache checking
 * @property {?boolean} noCaching Disable/Enable writing to cache
 * @property {?boolean} fetchPlayer Disable/Enable player profile request for each member
 */
module.exports = Client;
