const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';
const getUuid = require('./utils/getUuid');
const isUUID = require('./utils/isUUID');
const isGuildID = require('./utils/isGuildID');
const objectToArray = require('./utils/objectToArray');

const Player = require('./structures/Player');
const Guild = require('./structures/Guild/Guild');
const Friend = require('./structures/Friend');
const SkyblockProfile = require('./structures/SkyBlock/SkyblockProfile');
const WatchdogStats = require('./structures/Watchdog/Stats');
const Booster = require('./structures/Boosters/Booster');
const Auction = require('./structures/SkyBlock/Auctions/Auction');
const Product = require('./structures/SkyBlock/Bazzar/Product');

class Client {
	/**
	 * @param {string} key 
	 */
	constructor(key) {
		if (!key) throw new Error('[hypixel-api-reborn] No API key specified! For help join our Discord Server https://discord.gg/NSEBNMM');
		this.key = key;
	}
	/**
	 * @private
	 * @async
	 * @param {string} url 
	 * @returns {Object}
	 */
	async _makeRequest(url) {
		if (!url) return;
		const validApiKey = await this.validApiKey();
		if (!validApiKey) throw new Error('[hypixel-api-reborn] Code: 403 Forbidden - Invalid API key.');

		const res = await fetch(BASE_URL + url + (url.match(/\?/g) ? `&key=${this.key}` : `?key=${this.key}`));
		console.log(url + (url.match(/\?/g) ? `$key=${this.key}` : `?key=${this.key}`));
		const parsedRes = await res.json();

		if (res.status == 400) throw new Error(`[hypixel-api-reborn] Code: 400 Bad Request - ${parsedRes.cause ? parsedRes.cause : ''}. For help join our Discord Server https://discord.gg/NSEBNMM`);
		if (res.status == 403) throw new Error('[hypixel-api-reborn] Code: 403 Forbidden - Invalid API key. For help join our Discord Server https://discord.gg/NSEBNMM');
		if (res.status !== 200) throw new Error(`[hypixel-api-reborn] ${res.statusText}. For help join our Discord Server https://discord.gg/NSEBNMM`);
		return parsedRes;
	}
	/**
	 * @async
	 * @private
	 * @returns {Boolean}
	 */
	async validApiKey() {
		if (typeof this.key !== 'string') throw new TypeError('[hypixel-api-reborn] Specified API Key must be a string. For help join our Discord Server https://discord.gg/NSEBNMM');

		const res = await fetch(BASE_URL + '/key' + `?key=${this.key}`);
		const parsedRes = await res.json();

		if (res.status == 403) throw new Error('[hypixel-api-reborn] Specified API Key is invalid. For help join our Discord Server https://discord.gg/NSEBNMM');
		if (res.status == 200) {
			return true;
		}
		throw new Error(`[hypixel-api-reborn] Code: ${res.status} ${res.statusText}. ${parsedRes.cause}. For help join our Discord Server https://discord.gg/NSEBNMM`);
	}
	/**
	 * @async
	 * @param {string} uuid 
	 * @returns {Promise<Player>}
	 */
	async getPlayer(query) {
		if (!query) throw new TypeError('[hypixel-api-reborn] No nickname|uuid specified');

		await this.validApiKey();

		if (!isUUID(query)) {
			const uuid = await getUuid(query);
			if (!uuid) throw 'Player does not exist';//new Error('Player does not exist');
			query = uuid;
		}

		const res = await this._makeRequest(`/player?uuid=${query}`);
		if(!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}
		
		return new Player(res.player);
	}
	/**
	 * @async
	 * @param {'name'|'player'|'id'} searchParameter 
	 * @param {string} query 
	 * @returns {Promise<Guild>}
	 */
	async getGuild(searchParameter, query) {
		if (!query) throw '[hypixel-api-reborn] No nickname|uuid specified';
		var res;
		switch (searchParameter) {
		case 'id': {
			if (!isGuildID(query)) throw '[hypixel-api-reborn] Specified ID is not Guild ID';
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
				if (!uuid) throw 'Player does not exist';
				query = uuid;
			}
			res = await this._makeRequest(`/guild?player=${query}`);
		}
		}

		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}

		if (!res.guild) throw 'Guild does not exist';

		return new Guild(res.guild);
	}

	/**
	 * @async
	 * @param {string} query
	 * @returns {Promise<Array<Friend>>}
	 */
	async getFriends(query) {
		if (!query) throw '[hypixel-api-reborn] No nickname|uuid specified';

		if (!isUUID(query)) {
			const uuid = await getUuid(query);
			if (!uuid) {
				throw 'Player does not exist';
			}
			query = uuid;
		}

		const res = await this._makeRequest(`/friends?uuid=${query}`);
		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}

		if (res.records.length & res.records.length > 0) {
			return res.records.map(f => new Friend(f));
		} else {
			return [];
		}
	}

	/**
	 * @async
	 * @returns {Promise<WatchdogStats>}
	 */
	async getWatchdogStats() {
		await this.validApiKey();

		const res = await this._makeRequest('/watchdogstats');
		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}

		return new WatchdogStats(res);
	}

	/**
		 * @async
		 * @returns {Promise<Array<Booster>>}
		 */
	async getBoosters() {
		await this.validApiKey();

		const res = await this._makeRequest('/boosters');
		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}

		return res.boosters.length ? res.boosters.map(b => new Booster(b)) : [];
	}

	/**
		 * @async
		 * @param {string} uuid - Player UUID 
		 * @returns {Promise<Array<SkyblockProfile>>}
		 */
	async getSkyblockProfiles(uuid) {
		if (!uuid) throw '[hypixel-api-reborn] No uuid specified';
		await this.validApiKey();

		if (!isUUID(uuid)) throw 'Malformed UUID!';

		let sbProfile = await this._makeRequest(`/player?uuid=${uuid}`);
		if (!sbProfile.success) {
			throw '[hypixel-api-reborn] Something went wrong' + sbProfile.cause;
		}
		if (!sbProfile.player) throw 'Player does not exist';
		if (!('SkyBlock' in sbProfile.player.stats)) throw 'Player has no skyblock profiles';
		sbProfile = sbProfile.player.stats.SkyBlock.profiles;

		const sbProfiles = objectToArray(sbProfile);

		const profilesAmount = sbProfiles.length;

		if (profilesAmount === 0) {
			throw 'Player has no skyblock profiles';
		}

		const profiles = [];
		for (var i = 0; i < profilesAmount; i++) {
			let profile = await this._makeRequest(`/skyblock/profile?profile=${sbProfiles[i]}`);
			profile = profile.profile;
			if (!profile) throw '[hypixel-api-reborn] Something went wrong';
			profiles.push({
				profile_name: sbProfile[sbProfiles[i]].cute_name,
				profile_id: profile.profile_id,
				members: profile.members
			});
		}

		return profiles.map(p => new SkyblockProfile(p));
	}

	/**
		 * @async
		 * @param {number|null} page
		 * @returns {Promise<Array<Auction>>}
		 */
	async getSkyblockAuctions(page) {
		await this.validApiKey();

		const { totalPages, success } = await this._makeRequest('/skyblock/auctions');
		if (!success) {
			throw '[hypixel-api-reborn] Something went wrong';
		}

		let auctions = [];

		if(!page) {
			for (let i = 0; i < totalPages; i++) {
				let pageByi = await this._makeRequest(`/skyblock/auctions?page=${i}`);
				pageByi.auctions.forEach(auction => {
					auctions.push(new Auction(auction));
				});
			}
		} else {
			if(isNaN(page)) throw new TypeError('[hypixel-api-reborn] page must be a number');
			if(page > totalPages) return [];
			let pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`);
			pageBySpecifiedPage.auctions.forEach(auction => {
				auctions.push(new Auction(auction));
			});
		}

		return auctions;
	}

	/**
		 * @async
		 * @param {string} uuid 
		 * @returns {Promise<Array<Auction>>}
		 */
	async getSkyblockAuctionsByPlayer(uuid) {
		if (!uuid) throw 'No uuid specified';

		await this.validApiKey();

		if (!isUUID(uuid)) throw 'Malformed UUID!';

		const res = await this._makeRequest(`/skyblock/auction?player=${uuid}`);
		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}

		return res.auctions.length ? res.auctions.map(a => new Auction(a)) : [];
	}

	/**
		 * @async
		 * @returns {Promise<Array<Product>>}
		 */
	async getSkyblockBazaar() {

		await this.validApiKey();

		const res = await this._makeRequest('/skyblock/bazaar');
		if (!res.success) {
			throw '[hypixel-api-reborn] Something went wrong. ' + res.cause;
		}
		let productsKeys = Object.keys(res.products);
		const products = [];

		for (let i = 0; i < productsKeys.length; i++) {
			products.push(new Product(res.products[productsKeys[i]]));
		}

		return products;
	}
}
module.exports = Client;