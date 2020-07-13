const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';
const getUuid = require('./utils/getUuid');
const isUUID = require('./utils/isUUID');
const isGuildID = require('./utils/isGuildID');
const objectToArray = require('./utils/objectToArray');

class Client {
  constructor (key) {
    if (!key) throw new Error('[hypixel-api-reborn] No API key specified! For help join our Discord Server https://discord.gg/NSEBNMM');
    this.key = key;
  }

  async _makeRequest (url) {
    if (!url) return;
    const validApiKey = await this.validApiKey();
    if (!validApiKey) throw new Error('[hypixel-api-reborn] Code: 403 Forbidden - Invalid API key.');

    const res = await fetch(BASE_URL + url + (url.match(/\?/g) ? `&key=${this.key}` : `?key=${this.key}`));
    const parsedRes = await res.json();

    if (res.status === 400) throw new Error(`[hypixel-api-reborn] Code: 400 Bad Request - ${parsedRes.cause ? parsedRes.cause : ''}. For help join our Discord Server https://discord.gg/NSEBNMM`);
    if (res.status === 403) throw new Error('[hypixel-api-reborn] Code: 403 Forbidden - Invalid API key. For help join our Discord Server https://discord.gg/NSEBNMM');
    if (res.status !== 200) throw new Error(`[hypixel-api-reborn] ${res.statusText}. For help join our Discord Server https://discord.gg/NSEBNMM`);
    return parsedRes;
  }

  async validApiKey () {
    if (typeof this.key !== 'string') throw new TypeError('[hypixel-api-reborn] Specified API Key must be a string. For help join our Discord Server https://discord.gg/NSEBNMM');

    const res = await fetch(BASE_URL + '/key' + `?key=${this.key}`);
    const parsedRes = await res.json();

    if (res.status === 403) throw new Error('[hypixel-api-reborn] Specified API Key is invalid. For help join our Discord Server https://discord.gg/NSEBNMM');
    if (res.status === 200) return true;
    throw new Error(`[hypixel-api-reborn] Code: ${res.status} ${res.statusText}. ${parsedRes.cause}. For help join our Discord Server https://discord.gg/NSEBNMM`);
  }

  async getPlayer (query) {
    if (!query) throw new Error('[hypixel-api-reborn] No nickname|uuid specified');
    const Player = require('./structures/Player');

    await this.validApiKey();

    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) throw new Error('Player does not exist');
      query = uuid;
    }

    const res = await this._makeRequest(`/player?uuid=${query}`);
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return new Player(res.player);
  }

  async getGuild (searchParameter, query) {
    if (!query) throw new Error('[hypixel-api-reborn] No nickname|uuid specified');
    const Guild = require('./structures/Guild/Guild');
    var res;
    switch (searchParameter) {
      case 'id': {
        if (!isGuildID(query)) throw new Error('[hypixel-api-reborn] Specified ID is not Guild ID');
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
          if (!uuid) throw new Error('Player does not exist');
          query = uuid;
        }
        res = await this._makeRequest(`/guild?player=${query}`);
      }
    }

    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    if (!res.guild) return undefined;

    return new Guild(res.guild);
  }

  async getFriends (query) {
    if (!query) throw new Error('[hypixel-api-reborn] No nickname|uuid specified');
    const Friend = require('./structures/Friend');

    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) throw new Error('Player does not exist');
      query = uuid;
    }

    const res = await this._makeRequest(`/friends?uuid=${query}`);
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    if (res.records.length & res.records.length > 0) {
      return res.records.map(f => new Friend(f));
    } else {
      return [];
    }
  }

  async getWatchdogStats () {
    await this.validApiKey();
    const WatchdogStats = require('./structures/Watchdog/Stats');

    const res = await this._makeRequest('/watchdogstats');
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return new WatchdogStats(res);
  }

  async getBoosters () {
    await this.validApiKey();
    const Booster = require('./structures/Boosters/Booster');

    const res = await this._makeRequest('/boosters');
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return res.boosters.length ? res.boosters.map(b => new Booster(b)) : [];
  }

  async getSkyblockProfiles (uuid) {
    if (!uuid) throw new Error('[hypixel-api-reborn] No uuid specified');
    const SkyblockProfile = require('./structures/SkyBlock/SkyblockProfile');
    await this.validApiKey();

    if (!isUUID(uuid)) throw new Error('Malformed UUID!');

    let sbProfile = await this._makeRequest(`/player?uuid=${uuid}`);
    if (!sbProfile.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${sbProfile.cause}`);
    if (!sbProfile.player) throw new Error('Player does not exist');
    if (!('SkyBlock' in sbProfile.player.stats)) throw new Error('Player has no skyblock profiles');
    sbProfile = sbProfile.player.stats.SkyBlock.profiles;

    const sbProfiles = objectToArray(sbProfile);

    const profilesAmount = sbProfiles.length;

    if (profilesAmount === 0) throw new Error('Player has no skyblock profiles');

    const profiles = [];
    for (var i = 0; i < profilesAmount; i++) {
      let profile = await this._makeRequest(`/skyblock/profile?profile=${sbProfiles[i]}`);
      profile = profile.profile;
      if (!profile) throw new Error('[hypixel-api-reborn] Something went wrong');
      profiles.push({
        profile_name: sbProfile[sbProfiles[i]].cute_name,
        profile_id: profile.profile_id,
        members: profile.members
      });
    }

    return profiles.map(p => new SkyblockProfile(p));
  }

  async getSkyblockAuctions (page) {
    await this.validApiKey();
    const Auction = require('./structures/SkyBlock/Auctions/Auction');

    const { totalPages, success } = await this._makeRequest('/skyblock/auctions');
    if (!success) throw new Error('[hypixel-api-reborn] Something went wrong');

    const auctions = [];

    if (!page) {
      for (let i = 0; i < totalPages; i++) {
        const pageByi = await this._makeRequest(`/skyblock/auctions?page=${i}`);
        pageByi.auctions.forEach(auction => {
          auctions.push(new Auction(auction));
        });
      }
    } else {
      if (isNaN(page)) throw new TypeError('[hypixel-api-reborn] page must be a number');
      if (page > totalPages) return [];
      const pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`);
      pageBySpecifiedPage.auctions.forEach(auction => {
        auctions.push(new Auction(auction));
      });
    }

    return auctions;
  }

  async getSkyblockAuctionsByPlayer (uuid) {
    if (!uuid) throw new Error('No uuid specified');
    const Auction = require('./structures/SkyBlock/Auctions/Auction');

    await this.validApiKey();

    if (!isUUID(uuid)) throw new Error('Malformed UUID!');

    const res = await this._makeRequest(`/skyblock/auction?player=${uuid}`);
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return res.auctions.length ? res.auctions.map(a => new Auction(a)) : [];
  }

  async getSkyblockBazaar () {
    await this.validApiKey();
    const Product = require('./structures/SkyBlock/Bazzar/Product');

    const res = await this._makeRequest('/skyblock/bazaar');
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);
    const productsKeys = Object.keys(res.products);
    const products = [];

    for (let i = 0; i < productsKeys.length; i++) {
      products.push(new Product(res.products[productsKeys[i]]));
    }

    return products;
  }

  async getStatus (query) {
    await this.validApiKey();
    const Status = require('./structures/Status');
    if (!isUUID(query)) {
      const uuid = await getUuid(query);
      if (!uuid) throw new Error('Player does not exist');
      query = uuid;
    }
    const res = await this._makeRequest(`/status?uuid=${query}`);
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return new Status(res.session);
  }

  async getOnline () {
    await this.validApiKey();

    const res = await this._makeRequest('/playerCount');
    if (!res.success) throw new Error(`[hypixel-api-reborn] Something went wrong. ${res.cause}`);

    return res.playerCount;
  }
}
module.exports = Client;
