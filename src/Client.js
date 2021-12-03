/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const validate = new (require('./Private/validate'))();
const rateLimit = new (require('./Private/rateLimit'))();
const Requests = require('./Private/requests');
const updater = new (require('./Private/updater'))();
const Errors = require('./Errors');
const API = require('./API/index');
const EventEmitter = require('events');
const clients = [];
/**
 * Client class
 */
class Client extends EventEmitter {
  /**
   * @param {string} key API key [(?)](https://stavzdev.is-inside.me/cCMiZdoy.gif)
   * @param {ClientOptions} [options={}] Client options
   */
  constructor (key, options = {}) {
    super();
    this.requests = new Requests(this, options.cacheHandler);
    // eslint-disable-next-line no-console
    if (options && !options.silent) this.on('warn', console.warn);
    // Test to check for multiple instances of client
    if (clients.find((x) => x.key === key)) {
      this.emit('warn', Errors.MULTIPLE_INSTANCES);
      return clients.find((x) => x.key === key);
    }
    validate.validateNodeVersion();
    this.key = validate.validateKey(key);
    this.options = validate.parseOptions(options);
    validate.validateOptions(this.options);
    // eslint-disable-next-line guard-for-in
    for (const func in API) {
      Client.prototype[func] = function (...args) {
        const lastArg = args[args.length - 1];
        return API[func].apply(
          {
            _makeRequest: this._makeRequest.bind(this, { ...(validate.cacheSuboptions(lastArg) ? lastArg : {}) }),
            ...this
          },
          args);
      };

      if (this.options.checkForUpdates) {
        updater.checkForUpdates();
      }
    }
    /**
     * All cache entries
     * @type {Map<string,object>}
     */
    this.cache = this.requests.cache;
    clients.push(this);
    rateLimit.init(this.getKeyInfo(), this.options, this).then(() => this.emit('ready'));
  }
  /**
   * Private function - make request
   * @param {MethodOptions} options Options for request
   * @param {string} url Endpoint URL to request
   * @param {boolean} [useRateLimitManager=true] Use rate limit
   * @returns {Promise<Object>} Response
   * @private
   */
  async _makeRequest (options, url, useRateLimitManager = true) {
    if (!url) return;
    if (url !== '/key' && !options.noCacheCheck && await this.requests.cache.has(url)) return await this.requests.cache.get(url);
    if (useRateLimitManager) await rateLimit.rateLimitManager();
    this.emit('outgoingRequest', url, {...options, headers: {...options.headers, ...this.options.headers}});
    const result = await this.requests.request.call(this.requests, url, {...options, headers: {...options.headers, ...this.options.headers}});
    if (this.options.syncWithHeaders) rateLimit.sync(result._headers);
    return result;
  }
  /**
   * Emitted when a request is going to be sent
   * @event
   * @name Client#outgoingRequest
   * @param {string} url URL
   * @param {object} [options] Options, if any
   */
  /**
   * Emitted when rate limiter is ready. ( You don't have to wait for this event to emit UNLESS you are planning to do data scraping which means spamming requests )
   * @event
   * @name Client#ready
   * @example
   * // This example gets the first 100 friends of a player and gets their stats.
   * hypixel.once('ready',()=>{
   *  hypixel.getFriends('StavZDev')
   *  .then(friends => friends.map(x=>x.uuid).slice(0, 100).map(hypixel.getPlayer))
   *  .catch(console.log);
   * })
   */
  /**
   * Emitted when there is a warning.
   * @event
   * @name Client#warn
   * @param {string} error Warning Message
   */
  /**
   * Allows you to get statistics of player
   * @method
   * @name Client#getPlayer
   * @param {string} query Player nickname or UUID
   * @param {PlayerMethodOptions} [options={}] Method options
   * @return {Promise<Player>}
   * @example
   * hypixel.getPlayer('StavZDev').then(player => {
   *   console.log(player.level); // 141
   *   console.log(player.rank); // 'MVP+'
   * }).catch(e => {
   *   console.log(e);
   * })
   * @example
   * // Get player's guild along with player stats
   * hypixel.getPlayer('Minikloon', { guild: true }).then(player => {
   *   console.log(player.guild) // null if player isn't is guild
   *   console.log(player.guild.name) // Mini Squid
   *   console.log(player.guild.level) // 110
   * }).catch(e => {
   *   console.log(e);
   * });
   * @example
   * // async/await
   * const player = await hypixel.getPlayer('Minikloon').catch(console.log);
   * // If player doesn't exist, or if an error occurred ( check console )
   * console.log(player); // null
   * // Check if player exists
   * if(player) console.log(player.uuid); // 20934ef9488c465180a78f861586b4cf
   */
  /**
   * Allows you to get statistics of hypixel guild
   * @method
   * @name Client#getGuild
   * @param {id|name|player} searchParameter Search for guild by id, name or player (if player is in guild)
   * @param {string} query Guild ID, Guild name or player uuid/nickname
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<Guild>}
   * @example
   * hypixel.getGuild('name', 'The Foundation').then(guild => {
   *   console.log(guild.level); // 111
   *   console.log(guild.id); // '52e5719284ae51ed0c716c69'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you get player's list of friends
   * @method
   * @name Client#getFriends
   * @param {string} query Player nickname or UUID
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<Array<Friend>>}
   * @example
   * hypixel.getFriends('StavZDev').then(friends => {
   *   console.log(friends[0].friendSinceTimestamp); // 1528363745834
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get statistics of watchdog, the server anticheat
   * @method
   * @name Client#getWatchdogStats
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<WatchdogStats>}
   * @example
   * hypixel.getWatchdogStats().then(watchdog => {
   *   console.log(watchdog.byWatchdogTotal); // 5931897
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get all active boosters
   * @method
   * @name Client#getBoosters
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<Array<Booster>>}
   * @example
   * hypixel.getBoosters().then(boosters => {
   *   console.log(boosters[0].purchaser); // '978ddb705a8e43618e41749178c020b0'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get all skyblock profiles of player
   * @method
   * @name Client#getSkyblockProfiles
   * @param {string} query Player nickname or UUID
   * @param {SkyblockMethodOptions} [options={}] Method options
   * @return {Promise<Array<SkyblockProfile>>}
   * @example
   * hypixel.getSkyblockProfiles('StavZDev').then(profiles => {
   *   console.log(profiles[0].members[0].uuid); // '52d9a36f66ce4cdf9a56ad9724ae9fb4'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get a player's skyblock member data from all their profiles
   * @method
   * @name Client#getSkyblockMember
   * @param {string} query Player nickname or UUID
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<Map<string,SkyblockMember>>}
   * @example
   * hypixel.getSkyblockMember('StavZDev').then(member => {
   *   // 'Cucumber' - profile name
   *   console.log(member.get('Cucumber').uuid); // '52d9a36f66ce4cdf9a56ad9724ae9fb4'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Allows you to get the Hypixel API's Status and past Incidents, no key needed.
   * @method
   * @name Client#getAPIStatus
   * @return {Promise<APIStatus>}
   * @example
   * hypixel.getAPIStatus().then(status => {
   *   console.log(status.incidents[0].link); // 'https://status.hypixel.net/incidents/zdd5gppdtcc3'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Gets Key information
   * @method
   * @name Client#getKeyInfo
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<KeyInfo>}
   * @example
   * hypixel.getKeyInfo().then(keyInfo => {
   *   console.log(keyInfo.owner); // '52d9a36f66ce4cdf9a56ad9724ae9fb4'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Gets all leaderboards
   * @method
   * @name Client#getLeaderboards
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<{ ARENA: Leaderboard[], COPS_AND_CRIMS: Leaderboard[], WARLORDS: Leaderboard[], BLITZ_SURVIVAL_GAMES: Leaderboard[], UHC: Leaderboard[], WALLS: Leaderboard[], PROTOTYPE: Leaderboard[], PAINTBALL: Leaderboard[], SKYWARS: Leaderboard[], MURDER_MYSTERY: Leaderboard[], SMASH_HEROES: Leaderboard[], DUELS: Leaderboard[], SPEED_UHC: Leaderboard[], TNTGAMES: Leaderboard[], BEDWARS: Leaderboard[], TURBO_KART_RACERS: Leaderboard[], BUILD_BATTLE: Leaderboard[], ARCADE: Leaderboard[], SKYCLASH: Leaderboard[], QUAKECRAFT: Leaderboard[], CRAZY_WALLS: Leaderboard[], MEGA_WALLS: Leaderboard[], VAMPIREZ: Leaderboard[] }>}
   * @example
   * hypixel.getLeaderboards().then(leaderboards => {
   *   console.log(leaderboards.ARENA[0].name); // 'Wins'
   * }).catch(e => {
   *   console.log(e);
   * })
   */
  /**
   * Sends a STATUS packet to hypixel and parses the return info (a 0x00 and 0x01 packet)
   * @method
   * @name Client#getServerInfo
   * @param {number} [repeats=3] Sends x amount of ping requests and gets the average. Should be between 1 and 10
   * @return {Promise<ServerInfo>}
   * @example
   * hypixel.getServerInfo(3).then(serverInfo =>{
   *   console.log(serverInfo.ping); // 69
   * }).catch(console.log)
   */
  /**
   * Allows you to get recent games of a player
   * @method
   * @name Client#getRecentGames
   * @param {string} query Player nickname or UUID
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<RecentGame[]>}
   * @example
   * hypixel.getRecentGames().then(recentGames =>{
   *   console.log(recentGames[0].endedTimestamp); // 1609670588789
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get the status of a player
   * @method
   * @name Client#getStatus
   * @param {string} query Player nickname or UUID
   * @param {MethodOptions} [options={}] Method options
   * @return {Promise<Status>}
   * @example
   * hypixel.getStatus('Stavzdev').then(status =>{
   *   console.log(status.online); // true
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get skyblock auctions
   * @method
   * @name Client#getSkyblockAuctions
   * @param {string|number|number[]} page - "*", a page number, or an array with the start and the end page number ( automatically sorted )
   * @param {auctionsOptions} [options={}] Options
   * @return {Promise<{info:AuctionInfo,auctions:Auction[]}>}
   * @example
   * hypixel.getSkyblockAuctions(0).then(auctions =>{
   *   console.log(auctions[0].item); // Mythic Farmer Boots
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get player's skyblock auctions
   * @method
   * @name Client#getSkyblockAuctionsByPlayer
   * @param {string} query - player nickname or uuid
   * @param {boolean} [includeItemBytes=false] - include item bytes (optional)
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<Auction[]>}
   * @example
   * hypixel.getSkyblockAuctionsByPlayer('hypixel').then(auctions =>{
   *   console.log(auctions[0].auctionId); // b0491da3e81c43c88fd287ea3b3eacc0
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get all ended auctions in around the last 60 seconds
   * @method
   * @name Client#getEndedSkyblockAuctions
   * @param {boolean} [includeItemBytes=false] - include item bytes (optional)
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<{info:AuctionInfo,auctions:PartialAuction[]}>}
   * @example
   * hypixel.getEndedSkyblockAuctions().then(ended =>{
   *   console.log(ended.auctions[0].auctionId); // 0fe7fd132367474e86ff3022b4a84a13
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get list of products
   * @method
   * @name Client#getSkyblockBazaar
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<Product[]>}
   * @example
   * hypixel.getSkyblockBazaar().then(products =>{
   *   console.log(products[0].productId); // INK_SACK:3
   * })
   * .catch(console.log);
   */
  /**
   * Allows you to get skyblock news
   * @method
   * @name Client#getSkyblockNews
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<SkyblockNews[]>}
   * @example
   * hypixel.getSkyblockNews().then((news) => {
   *   console.log(news[0].link); // https://hypixel.net/threads/3749492/
   * })
   * .catch(console.log)
   */
  /**
   * Allows you to get player count along with the player count of each public game
   * @method
   * @name Client#getGameCounts
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<GameCounts>}
   * @example
   * hypixel.getGameCounts().then((gameCounts) => {
   *   console.log(gameCounts.mainLobby.players);
   * })
   * .catch(console.log)
   */
  /**
   * Allows you to get Ranked SkyWars data for current season of a player
   * @method
   * @name Client#getRankedSkyWars
   * @param {string} query Player nickname or uuid
   * @param {MethodOptions} [options={}] Options
   * @return {Promise<SkyWarsRanked>}
   * @example
   * hypixel.getRankedSkyWars('gypu').then((ranked) => {
   *   console.log(ranked.position); // 4
   * }).catch(console.log);
   * @example
   * // if player has no stats for current ranked season
   * hypixel.getRankedSkyWars('StavZDev').then((ranked) => {
   *   console.log(ranked); // null
   * }).catch(console.log) // throws 404 error;
   */
  /**
   * Delete x (by default all) cache entries
   * @param {?number} amount Amount of cache to delete
   * @return {Promise<void|boolean[]>}
   */
  sweepCache (amount) {
    return this.requests.sweepCache(amount);
  }
}
/**
 * @typedef {object} ClientOptions
 * @prop {boolean} [cache=false] Enable/Disable request caching.
 * @prop {number} [cacheTime=60] Amount of time in seconds to cache the requests.
 * @prop {CacheHandler} [cacheHandler] Custom Cache Handler
 * @prop {AUTO|HARD|NONE} [rateLimit='AUTO'] Rate limit mode.
 * @prop {boolean} [syncWithHeaders=false] Sync with headers rate limit information. Usually not necessary nor recommended ( because of latency )
 * @prop {number} [keyLimit=120] Key limit of your key.
 * @prop {number} [cacheSize=-1] The amount how many results will be cached. (`-1` for infinity)
 * @prop {boolean} [silent=false] Don't automatically put warnings into console.
 * @prop {object} [headers={}] Extra Headers ( like User-Agent ) to add to request.
 * @prop {boolean} [checkForUpdates=false] Enable/Disable check for new version of hypixel-api-reborn.
 */
/**
 * @typedef {import('./Private/defaultCache')} Cache
 */
/**
 * @typedef {Cache} CacheHandler
 */
/**
 * @typedef {object} MethodOptions
 * @property {boolean} [noCacheCheck=false] Disable/Enable cache checking
 * @property {boolean} [noCaching=false] Disable/Enable writing to cache
 * @prop {object} [headers={}] Extra Headers ( like User-Agent ) to add to request. Overrides the headers globally provided.
 */
/**
 * @typedef {object} PlayerMethodOptions
 * @property {boolean} [noCacheCheck=false] Disable/Enable cache checking
 * @property {boolean} [noCaching=false] Disable/Enable writing to cache
 * @property {boolean} [guild=false] Disable/Enable request for player's guild
 * @property {boolean} [recentGames=false] Disable/Enable request for player's recent game
 * @property {boolean} [currentRankedSW=false] Disable/Enable request for player's current ranked SkyWars rating. Previous ratings will always show mindless of this option.
 * @prop {object} [headers={}] Extra Headers ( like User-Agent ) to add to request. Overrides the headers globally provided.
 */
/**
 * @typedef {object} SkyblockMethodOptions
 * @property {?boolean} [noCacheCheck=false] Disable/Enable cache checking
 * @property {?boolean} [noCaching=false] Disable/Enable writing to cache
 * @property {?boolean} [fetchPlayer=false] Disable/Enable player profile request for each member
 * @prop {object} [headers={}] Extra Headers ( like User-Agent ) to add to request. Overrides the headers globally provided.
 */
/**
 * @typedef {object} auctionsOptions
 * @property {boolean} [noCacheCheck=false] Disable/Enable cache checking
 * @property {boolean} [noCaching=false] Disable/Enable writing to cache
 * @property {boolean} [noInfo=false] If true, result doesn't show Auction Info
 * @property {boolean} [noAuctions=false] If true, result doesn't show auctions
 * @property {boolean} [raw=false] If true, result will not contain parsed auctions, but will present them as it is received. This can speed up performance in some cases.
 * @property {number} [retries=3] Number of times to retry fetching a page before abandoning
 * @property {number} [cooldown=100] Cooldown between each fetch, only works if race is unset or false;
 * @property {boolean} [race=false] Issues simultaneous requests to the API, instead of requesting then parsing one by one. Can largely increase speed at the cost of hogging bandwidth and memory
 * @property {boolean} [includeItemBytes=false] Whether to include item bytes in the result
 * @prop {object} [headers={}] Extra Headers ( like User-Agent ) to add to request. Overrides the headers globally provided.
 */
module.exports = Client;
