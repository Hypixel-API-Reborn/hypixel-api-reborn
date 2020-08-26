const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';
const getUuid = require('./utils/getUuid');
const isUUID = require('./utils/isUUID');
const isGuildID = require('./utils/isGuildID');
const objectToArray = require('./utils/objectToArray');
const Errors = require('./Errors');

class Client {
  constructor (key) {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if (typeof key !== 'string') throw new Error(Errors.KEY_MUST_BE_A_STRING);
    this.key = key;
  }

  async _makeRequest (url) {
    if (!url) return;
    const res = await fetch(BASE_URL + url + (url.match(/\?/g) ? `&key=${this.key}` : `?key=${this.key}`));
    if (res.status === 522) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/g, '522 Connection Timed Out'));
    const parsedRes = await res.json().catch(() => {
      throw new Error(Errors.INVALID_RESPONSE_BODY);
    });
    if (res.status === 400) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/g, '400 Bad Request').replace(/{cause}/g, (parsedRes.cause || '')));
    if (res.status === 403) throw new Error(Errors.ERROR_CODE_CAUSE.replace(/{code}/g, '403 Forbidden').replace(/{cause}/g, 'Invalid API Key'));
    if (res.status !== 200) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/g, res.statusText));
    return parsedRes;
  }

  async getPlayer (query) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    const Player = require('./structures/Player');

    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) {
        return {
          error: Errors.PLAYER_DOES_NOT_EXIST
        };
      }
      query = uuid;
    }
    const res = await this._makeRequest(`/player?uuid=${query}`);
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    return new Player(res.player);
  }

  async getGuild (searchParameter, query) {
    if (!query) throw new Error(Errors.NO_GUILD);
    const Guild = require('./structures/Guild/Guild');
    var res;
    switch (searchParameter) {
      case 'id': {
        if (!isGuildID(query)) {
          return {
            error: Errors.INVALID_GUILD_ID
          };
        }
        res = await this._makeRequest(`/guild?id=${query}`);
        break;
      }
      case 'name': {
        res = await this._makeRequest(`/guild?name=${encodeURI(query)}`);
        break;
      }
      case 'player': {
        if (!isUUID(query)) {
          const uuid = await getUuid(query);
          if (!uuid) {
            return {
              error: Errors.PLAYER_DOES_NOT_EXIST
            };
          };
          query = uuid;
        }
        res = await this._makeRequest(`/guild?player=${query}`);
        break;
      }
      default: {
        return {
          error: Errors.INVALID_GUILD_SEARCH_PARAMETER
        };
      }
    }

    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    if (!res.guild) {
      return {
        error: Errors.GUILD_DOES_NOT_EXIST
      };
    }

    return new Guild(res.guild);
  }

  async getFriends (query) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    const Friend = require('./structures/Friend');

    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) {
        return {
          error: Errors.PLAYER_DOES_NOT_EXIST
        };
      }
      query = uuid;
    }

    const res = await this._makeRequest(`/friends?uuid=${query}`);
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
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
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    return new WatchdogStats(res);
  }

  async getBoosters () {
    const Booster = require('./structures/Boosters/Booster');

    const res = await this._makeRequest('/boosters');
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    return res.boosters.length ? res.boosters.map(b => new Booster(b)) : [];
  }

  async getSkyblockProfiles (uuid) {
    if (!uuid) throw new Error(Errors.NO_UUID);
    const SkyblockProfile = require('./structures/SkyBlock/SkyblockProfile');

    if (!isUUID(uuid)) {
      return {
        error: Errors.MALFORMED_UUID
      };
    };

    let sbProfile = await this._makeRequest(`/player?uuid=${uuid}`);
    if (!sbProfile.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, sbProfile.cause)
      };
    }
    if (!sbProfile.player) {
      return {
        error: Errors.PLAYER_DOES_NOT_EXIST
      };
    }
    if (!('SkyBlock' in sbProfile.player.stats)) return [];
    sbProfile = sbProfile.player.stats.SkyBlock.profiles;

    const sbProfiles = objectToArray(sbProfile);

    const profilesAmount = sbProfiles.length;

    if (profilesAmount === 0) return [];

    const profiles = [];
    for (var i = 0; i < profilesAmount; i++) {
      let profile = await this._makeRequest(`/skyblock/profile?profile=${sbProfiles[i]}`);
      profile = profile.profile;
      if (!profile) return;
      profiles.push({
        profile_name: sbProfile[sbProfiles[i]].cute_name,
        profile_id: profile.profile_id,
        members: profile.members
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

  async getSkyblockAuctionsByPlayer (uuid) {
    if (!uuid) throw new Error('[hypixel-api-reborn] No uuid specified');
    const Auction = require('./structures/SkyBlock/Auctions/Auction');

    if (!isUUID(uuid)) {
      return {
        error: Errors.MALFORMED_UUID
      };
    }

    const res = await this._makeRequest(`/skyblock/auction?player=${uuid}`);
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    return res.auctions.length ? res.auctions.map(a => new Auction(a)) : [];
  }

  async getSkyblockBazaar () {
    const Product = require('./structures/SkyBlock/Bazzar/Product');

    const res = await this._makeRequest('/skyblock/bazaar');
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }
    const productsKeys = Object.keys(res.products);
    const products = [];

    for (let i = 0; i < productsKeys.length; i++) {
      products.push(new Product(res.products[productsKeys[i]]));
    }

    return products;
  }

  async getStatus (query) {
    const Status = require('./structures/Status');
    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) {
        return {
          error: Errors.PLAYER_DOES_NOT_EXIST
        };
      }
      query = uuid;
    }
    const res = await this._makeRequest(`/status?uuid=${query}`);
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }
    return new Status(res.session);
  }

  async getOnline () {
    const res = await this._makeRequest('/playerCount');
    if (!res.success) {
      return {
        error: Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause)
      };
    }

    return res.playerCount;
  }
}
module.exports = Client;
