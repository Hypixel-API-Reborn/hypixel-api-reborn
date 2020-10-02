const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';
const getUuid = require('./utils/getUuid');
const isUUID = require('./utils/isUUID');
const isGuildID = require('./utils/isGuildID');
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
        throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
      }
      query = uuid;
    }
    const res = await this._makeRequest(`/player?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
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
        if (!isUUID(query)) {
          const uuid = await getUuid(query);
          if (!uuid) {
            throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
          };
          query = uuid;
        }
        res = await this._makeRequest(`/guild?player=${query}`);
        break;
      }
      default: {
        throw new Error(Errors.INVALID_GUILD_SEARCH_PARAMETER);
      }
    }

    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }

    if (!res.guild) {
      throw new Error(Errors.GUILD_DOES_NOT_EXIST);
    }

    return new Guild(res.guild);
  }

  async getFriends (query) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    const Friend = require('./structures/Friend');

    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) {
        throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
      }
      query = uuid;
    }

    const res = await this._makeRequest(`/friends?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
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
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }

    return new WatchdogStats(res);
  }

  async getBoosters () {
    const Booster = require('./structures/Boosters/Booster');

    const res = await this._makeRequest('/boosters');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }

    return res.boosters.length ? res.boosters.map(b => new Booster(b)) : [];
  }

  async getSkyblockProfiles (uuid) {
    if (!uuid) throw new Error(Errors.NO_UUID);
    const SkyblockProfile = require('./structures/SkyBlock/SkyblockProfile');
    if (!isUUID(uuid)) {
      throw new Error(Errors.MALFORMED_UUID);
    };

    const res = await this._makeRequest(`/skyblock/profiles?uuid=${uuid}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
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

  async getSkyblockAuctionsByPlayer (uuid) {
    if (!uuid) throw new Error('[hypixel-api-reborn] No uuid specified');
    const Auction = require('./structures/SkyBlock/Auctions/Auction');

    if (!isUUID(uuid)) {
      throw new Error(Errors.MALFORMED_UUID);
    }

    const res = await this._makeRequest(`/skyblock/auction?player=${uuid}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }

    return res.auctions.length ? res.auctions.map(a => new Auction(a)) : [];
  }

  async getSkyblockBazaar () {
    const Product = require('./structures/SkyBlock/Bazzar/Product');

    const res = await this._makeRequest('/skyblock/bazaar');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
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
        throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
      }
      query = uuid;
    }
    const res = await this._makeRequest(`/status?uuid=${query}`);
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }
    return new Status(res.session);
  }

  async getOnline () {
    const res = await this._makeRequest('/playerCount');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
    }

    return res.playerCount;
  }

  async getKeyInfo () {
    const KeyInfo = require('./structures/KeyInfo');
    const res = await this._makeRequest('/key');
    if (!res.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/g, res.cause));
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
    return {
      ARENA: res.leaderboards.ARENA.length ? res.leaderboards.ARENA.map(lb => new Leaderboard(lb)) : [],
      COPS_AND_CRIMS: res.leaderboards.MCGO.length ? res.leaderboards.MCGO.map(lb => new Leaderboard(lb)) : [],
      WARLORDS: res.leaderboards.BATTLEGROUND.length ? res.leaderboards.BATTLEGROUND.map(lb => new Leaderboard(lb)) : [],
      BLITZ_SURVIVAL_GAMES: res.leaderboards.SURVIVAL_GAMES.length ? res.leaderboards.SURVIVAL_GAMES.map(lb => new Leaderboard(lb)) : [],
      UHC: res.leaderboards.UHC.length ? res.leaderboards.UHC.map(lb => new Leaderboard(lb)) : [],
      WALLS: res.leaderboards.WALLS.length ? res.leaderboards.WALLS.map(lb => new Leaderboard(lb)) : [],
      PROTOTYPE: res.leaderboards.PROTOTYPE.length ? res.leaderboards.PROTOTYPE.map(lb => new Leaderboard(lb)) : [],
      PAINTBALL: res.leaderboards.PAINTBALL.length ? res.leaderboards.PAINTBALL.map(lb => new Leaderboard(lb)) : [],
      SKYWARS: res.leaderboards.SKYWARS.length ? res.leaderboards.SKYWARS.map(lb => new Leaderboard(lb)) : [],
      MURDER_MYSTERY: res.leaderboards.MURDER_MYSTERY.length ? res.leaderboards.MURDER_MYSTERY.map(lb => new Leaderboard(lb)) : [],
      SMASH_HEROES: res.leaderboards.SUPER_SMASH.length ? res.leaderboards.SUPER_SMASH.map(lb => new Leaderboard(lb)) : [],
      DUELS: res.leaderboards.DUELS.length ? res.leaderboards.DUELS.map(lb => new Leaderboard(lb)) : [],
      SPEED_UHC: res.leaderboards.SPEED_UHC.length ? res.leaderboards.SPEED_UHC.map(lb => new Leaderboard(lb)) : [],
      TNTGAMES: res.leaderboards.TNTGAMES.length ? res.leaderboards.TNTGAMES.map(lb => new Leaderboard(lb)) : [],
      BEDWARS: res.leaderboards.BEDWARS.length ? res.leaderboards.BEDWARS.map(lb => new Leaderboard(lb)) : [],
      TURBO_KART_RACERS: res.leaderboards.GINGERBREAD.length ? res.leaderboards.GINGERBREAD.map(lb => new Leaderboard(lb)) : [],
      BUILD_BATTLE: res.leaderboards.BUILD_BATTLE.length ? res.leaderboards.BUILD_BATTLE.map(lb => new Leaderboard(lb)) : [],
      ARCADE: res.leaderboards.ARCADE.length ? res.leaderboards.ARCADE.map(lb => new Leaderboard(lb)) : [],
      SKYCLASH: res.leaderboards.SKYCLASH.length ? res.leaderboards.SKYCLASH.map(lb => new Leaderboard(lb)) : [],
      QUAKECRAFT: res.leaderboards.QUAKECRAFT.length ? res.leaderboards.QUAKECRAFT.map(lb => new Leaderboard(lb)) : [],
      CRAZY_WALLS: res.leaderboards.TRUE_COMBAT.length ? res.leaderboards.TRUE_COMBAT.map(lb => new Leaderboard(lb)) : [],
      MEGA_WALLS: res.leaderboards.WALLS3.length ? res.leaderboards.WALLS3.map(lb => new Leaderboard(lb)) : [],
      VAMPIREZ: res.leaderboards.VAMPIREZ.length ? res.leaderboards.VAMPIREZ.map(lb => new Leaderboard(lb)) : []
    };
  }
}
module.exports = Client;
