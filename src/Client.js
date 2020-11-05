const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';
const toUuid = require('./utils/toUuid');
const isGuildID = require('./utils/isGuildID');
const Errors = require('./Errors');
const cached = new Map();

class Client {
  constructor (key, options = {}) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if (typeof key !== 'string') throw new Error(Errors.KEY_MUST_BE_A_STRING);

    this.options = {
      cache: options.cache === undefined ? false : options.cache,
      cacheTime: options.cacheTime === undefined ? 60 : options.cacheTime,
      cacheSize: options.cacheSize === undefined ? -1 : options.cacheSize
    };
    this.key = key;
    this._validateOptions(options);
  }

  _validateOptions (options) {
    if (typeof options !== 'object') throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    if (typeof this.options.cache !== 'boolean') throw new Error(Errors.CACHE_MUST_BE_A_BOOLEAN);
    if (typeof this.options.cacheTime !== 'number') throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if (typeof this.options.cacheSize !== 'number') throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
  }

  async _makeRequest (url) {
    if (!url) return;
    if (cached.has(url)) return cached.get(url);
    const res = await fetch(BASE_URL + url + (/\?/.test(url) ? '&' : '?') + `key=${this.key}`);
    if (res.status === 522) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, '522 Connection Timed Out'));
    const parsedRes = await res.json().catch(() => {
      throw new Error(Errors.INVALID_RESPONSE_BODY);
    });
    if (res.status === 400) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, (parsedRes.cause || '')));
    if (res.status === 403) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/, '403 Forbidden').replace(/{cause}/, 'Invalid API Key'));
    if (res.status !== 200) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    if (this.options.cache && (this.options.cacheSize === -1 || this.options.cacheSize > cached.size)) {
      cached.set(url, parsedRes);
      setTimeout(() => cached.delete(url), 1000 * this.options.cacheTime);
    }
    return parsedRes;
  }

  async getPlayer (query, options = {}) {
    query = await toUuid(query);
    if (typeof options !== 'object') throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    const { guild = false } = options;
    const Player = require('./structures/Player');
    const res = await this._makeRequest(`/player?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    if (guild) {
      const guildRes = await this._makeRequest(`/guild?player=${query}`);
      if (!guildRes.success) {
        throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, guildRes.cause));
      }
      res.player.guild = guildRes.guild;
    }
    return new Player(res.player);
  }

  async getGuild (searchParameter, query) {
    if (!query) throw new Error(Errors.NO_GUILD_QUERY);
    const Guild = require('./structures/Guild/Guild');
    let res;
    switch (searchParameter) {
      case 'id': {
        if (!isGuildID(query)) {
          throw new Error(Errors.INVALID_GUILD_ID);
        }
        res = await this._makeRequest(`/guild?id=${query}`);
        break;
      }
      case 'name': {
        res = await this._makeRequest(`/guild?name=${encodeURI(query)}`);
        break;
      }
      case 'player': {
        query = await toUuid(query);
        res = await this._makeRequest(`/guild?player=${query}`);
        break;
      }
      default: {
        throw new Error(Errors.INVALID_GUILD_SEARCH_PARAMETER);
      }
    }

    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    if (!res.guild) {
      throw new Error(Errors.GUILD_DOES_NOT_EXIST);
    }

    return new Guild(res.guild);
  }

  async getFriends (query) {
    query = await toUuid(query);
    const Friend = require('./structures/Friend');
    const res = await this._makeRequest(`/friends?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    if (res.records.length & res.records.length > 0) {
      return res.records.map(f => new Friend(f));
    } else {
      return [];
    }
  }

  async getWatchdogStats () {
    const WatchdogStats = require('./structures/Watchdog/Stats');
    const res = await this._makeRequest('/watchdogstats');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    return new WatchdogStats(res);
  }

  async getBoosters () {
    const Booster = require('./structures/Boosters/Booster');
    const res = await this._makeRequest('/boosters');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    return res.boosters.length ? res.boosters.map(b => new Booster(b)) : [];
  }

  async getSkyblockProfiles (query) {
    query = await toUuid(query);
    const SkyblockProfile = require('./structures/SkyBlock/SkyblockProfile');
    const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    if (!res.profiles || !res.profiles.length) {
      return [];
    }
    const profiles = [];
    for (let i = 0; i < res.profiles.length; i++) {
      profiles.push({
        profile_name: res.profiles[i].cute_name,
        profile_id: res.profiles[i].profile_id,
        members: res.profiles[i].members
      });
    }

    return profiles.map(p => new SkyblockProfile(p));
  }

  async getSkyblockAuctions (page) {
    const Auction = require('./structures/SkyBlock/Auctions/Auction');

    const { totalPages, success } = await this._makeRequest('/skyblock/auctions');
    if (!success) return [];

    const auctions = [];
    if (!page || isNaN(page)) {
      for (let i = 0; i < totalPages; i++) {
        const pageByi = await this._makeRequest(`/skyblock/auctions?page=${i}`);
        pageByi.auctions.forEach(auction => {
          auctions.push(new Auction(auction));
        });
      }
    } else {
      page = Math.floor(page);
      if (page > totalPages) return [];
      const pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`);
      pageBySpecifiedPage.auctions.forEach(auction => {
        auctions.push(new Auction(auction));
      });
    }

    return auctions;
  }

  async getSkyblockAuctionsByPlayer (query) {
    query = await toUuid(query);
    const Auction = require('./structures/SkyBlock/Auctions/Auction');
    const res = await this._makeRequest(`/skyblock/auction?player=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    return res.auctions.length ? res.auctions.map(a => new Auction(a)) : [];
  }

  async getSkyblockBazaar () {
    const Product = require('./structures/SkyBlock/Bazzar/Product');
    const res = await this._makeRequest('/skyblock/bazaar');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    const productsKeys = Object.keys(res.products);
    const products = [];

    for (let i = 0; i < productsKeys.length; i++) {
      products.push(new Product(res.products[productsKeys[i]]));
    }

    return products;
  }

  async getStatus (query) {
    query = await toUuid(query);
    const Status = require('./structures/Status');
    const res = await this._makeRequest(`/status?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }
    return new Status(res.session);
  }

  async getOnline () {
    const res = await this._makeRequest('/playerCount');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    }

    return res.playerCount;
  }

  async getKeyInfo () {
    const KeyInfo = require('./structures/KeyInfo');
    const res = await this._makeRequest('/key');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    };
    return new KeyInfo(res.record);
  }

  async getLeaderboards () {
    const Leaderboard = require('./structures/Leaderboard');
    const res = await this._makeRequest('/leaderboards');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.cause));
    };
    if (!res.leaderboards) throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    const lbnames = Object.create(require('./utils/Constants').leaderboardNames);
    for (const name in lbnames) {
      lbnames[name] = res.leaderboards[lbnames[name]].length ? res.leaderboards[lbnames[name]].map(lb => new Leaderboard(lb)) : [];
    }
    return lbnames;
  }
}
module.exports = Client;
