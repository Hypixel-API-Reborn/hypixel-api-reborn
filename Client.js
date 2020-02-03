const BASE_URL = 'https://api.hypixel.net';

const fetch = require('node-fetch');
const Player = require('./structures/Player');
const Guild = require('./structures/Guild/Guild')
const WatchdogStats = require('./structures/Watchdog/Stats')
const Friend = require('./structures/Friend')
const Booster = require('./structures/Boosters/Booster')

const getUuid = require('./utils/getUuid');


class Client {
    /**
     * 
     * @param {String} key - valid Hypixel API key 
     * @param {Boolean} compacted - returns compacted information
     */
    constructor(key, compacted) {
        this.key = key;
        this.compacted = compacted;
    }

    /**
     * @async
     * 
     * @param {String} uuid 
     * 
     * @returns {Object} Hypixel player Object or Error
     */
    async getPlayer(uuid) {
        return new Promise(async (res, rej) => {
            //Validation
            let valid = await validateAll(this.key, uuid)
            if (!valid.key) rej('Invalid API key!');
            if (!valid.uuid) {
                uuid = await getUuid(uuid);
                if (uuid == 'Player does not exist') {
                    return rej('Player does not exist');
                }
            }

            //Fetching
            let response = await fetch(BASE_URL + `/player` + `?key=${this.key}` + `&uuid=${uuid}`).then(r => r.json());
            if (!response.player || response.cause == 'Malformed UUID!') {
                rej('Player does not exist');
            } else {
                rej(response.cause)
            };

            if (this.compacted) {
                res((new Player(response.player)));
            } else {
                res(response.player);
            };
        })
    }

    /**
     * @async
     * 
     * @param {string} nameOrUUID
     * @param {'player'|'name'|'id'} searchParameter
     * 
     * @returns {object} Hypixel Guild
     */
    async getGuild(query, searchParameter) {
        return new Promise(async (res, rej) => {
            let validKey = await validateApiKey(this.key);
            if (!validKey) return rej('Invalid API key!');

            var RESPONSE;
            var URL;
            switch (searchParameter) {
                case 'name': {

                    URL = BASE_URL + `/guild` + `?key=${this.key}&name=${query}`;
                    RESPONSE = await fetch(URL).then(r => r.json());
                }
                    break;
                case 'player': {

                    let validUuid = await isUUID(query);
                    if (validUuid == false) {
                        let uuid = await getUuid(query)
                        if (uuid == 'Player does not exist') {
                            return rej('Player does not exist')
                        };
                        query = uuid;
                    };

                    URL = BASE_URL + `/guild` + `?key=${this.key}&player=${query}`;
                    RESPONSE = await fetch(URL).then(r => r.json());

                }
                    break;
                case 'id': {
                    if (!(await isGuildID(query))) return rej('Invalid Guild ID');
                    URL = BASE_URL + `/guild` + `?key=${this.key}&id=${query}`;
                    RESPONSE = await fetch(URL).then(r => r.json());
                }
                    break;
                default: {
                    return rej('Define guild search parameter')
                }
            }

            if (RESPONSE.guild == null) return rej('Guild does not exist');
            
            if (this.compacted) {
                res((new Guild(RESPONSE.guild)))
            } else {
                res(RESPONSE.guild)
            }
        })
    }

    /**
     * @async
     * 
     * @param {string} uuid
     * 
     * @returns {Map} 
     */
    async getFriends(query) {
        return new Promise(async (res, rej) => {
            let validKey = await validateApiKey(this.key);
            if (!validKey) return rej('Invalid API key!');

            let validUuid = await isUUID(query);
            if (validUuid == false) {
                let uuid = await getUuid(query)
                if (uuid == 'Player does not exist') {
                    return rej('Player does not exist')
                };
                query = uuid;
            };

            let response = await fetch(BASE_URL + `/friends` + `?key=${this.key}` + `&uuid=${query}`).then(r => r.json());
            if(!response.records.length || response.records.lenght == 0) return res('Player does not have any friends');

            if(this.compacted) {
                return res(response.records.map(r => new Friend(r)))
            } else {
                return res(response.records)
            }
        })
    }
    

    /**
     * @async
     * 
     * @returns {Object}
     */
    async getWatchdogStats() {
        return new Promise(async (res, rej) => {
            let validKey = await validateApiKey(this.key);
            if (!validKey) return rej('Invalid API key!');

            let response = await fetch(BASE_URL + '/watchdogstats' + `?key=${this.key}`).then(r => r.json());
            return res((new WatchdogStats(response)))
        })
    }


    /**
     * @async
     * 
     * @returns {number}
     */
    async getOnline() {
        return new Promise(async (res, rej) => {
            let validKey = await validateApiKey(this.key);
            if (!validKey) return rej('Invalid API key!');

            let response = await fetch(BASE_URL + '/playerCount' + `?key=${this.key}`).then(r => r.json());

            return res(response.playerCount || 0)
        })
    }

    /**
     * @async
     * 
     * @returns {Map}
     */
    getBoosters() {
        return new Promise(async (res, rej) => {
            if(!(await validateApiKey(this.key))) return rej('Invalid API key!');

            let response = await fetch(BASE_URL + '/boosters' + `?key=${this.key}`).then(r => r.json());

            if(this.compacted) {
                return res(response.boosters.map(b => new Booster(b))) || [];
            } else {
                return response.boosters;
            }
        })
    }
}

/**
 * @description Checks specidied API-KEY
 * @async
 * @returns {Boolean}
 * @param {String} key 
 */
async function validateApiKey(key) {
    let check = await fetch(BASE_URL + '/key' + `?key=${key}`).then(r => r.json());

    if (check.success == false && check.cause == 'Invalid API key!') {
        return false;
    } else {
        return true;
    };
}

/**
 * @description Checks specified UUID
 * @async
 * @returns {Boolean} 
 * 
 * @param {String} uuid - valid Minecraft Player UUID
 */
async function isUUID(uuid) {
    let f = new RegExp(`[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}`);
    let s = new RegExp(`[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}`);

    let test = f.test(uuid);
    let test1 = s.test(uuid);

    return test == false && test1 == false ? false : true;
}

/**
 * @async
 * 
 * @param {string} key 
 * @param {string} uuid 
 * 
 * @returns {{key, uuid}} 
 */
async function validateAll(key, uuid) {
    let validKey = await validateApiKey(key);
    let validUuid = await isUUID(uuid);
    return {
        key: validKey,
        uuid: validUuid
    }
}

/**
 * @async
 * 
 * @param {string} id
 * 
 * @returns {boolean} 
 */
async function isGuildID(id) {
    return id.length == 24 ? true : false
}

module.exports = Client;