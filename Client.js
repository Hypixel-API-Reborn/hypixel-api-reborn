const BASE_URL = 'https://api.hypixel.net';

const fetch = require('node-fetch');
const Player = require('./structures/Player');
const Guild = require('./structures/Guild/Guild')
const WatchdogStats = require('./structures/Watchdog/Stats')
const Friend = require('./structures/Friend')
const Booster = require('./structures/Boosters/Booster')
const SBProfile = require('./structures/SkyBlock/Profile')

const getUuid = require('./utils/getUuid');
Array.prototype.removeOne = function (i) {
    return this.filter(t => t !== i);
}

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
            }

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
     * @param {string} uuid - Player UUID
     * 
     * @returns {object} - Skyblock statictic
     */
    async getSkyblockStats(uuid) {
        return new Promise(async (res, rej) => {
            if (!(await isUUID(uuid))) return rej('Malformed UUID');

            if (!(await validateApiKey(this.key))) return rej('Invalid API key!');

            let sb_profile = await fetch(BASE_URL + `/player` + `?key=${this.key}` + `&uuid=${uuid}`).then(r => r.json());
            sb_profile = sb_profile['player']['stats']['SkyBlock']['profiles'];
            
            let sb_profiles = await objectToArray(sb_profile);

            let profiles_amount = sb_profiles.length;

            if (profiles_amount == 0) return rej('Player does not have Skyblock profiles')

            if (profiles_amount > 1) {

                let profiles = [];
                for (let i = 0; i < profiles_amount; i++) {
                    let profile = await fetch(BASE_URL + `/skyblock/profile` + `?key=${this.key}` + `&profile=${sb_profiles[i]}`).then(r => r.json())
                    profile = profile.profile
                    if(!profile) return rej('Something went wrong!')
                    profiles.push({
                        profile_name: sb_profile[sb_profiles[i]]['cute_name'],
                        profile_id: profile.profile_id,
                        members: profile.members
                    })
                }

                if (this.compacted) {
                    return res(profiles.map(p => new SBProfile(p)))
                } else {
                    return profiles;
                }

            } else {

                let id = Object.keys(sb_profile)[0]
                let profile = await fetch(BASE_URL + `/skyblock/profile` + `?key=${this.key}` + `&profile=${id}`).then(r => r.json())
                let pr = profile.profile;
                if(!pr) return rej('Something went wrong!')
                profile = {
                    profile_name: sb_profile[id]['cute_name'],
                    profile_id: pr.profile_id,
                    members: pr.members
                }

                if (this.compacted) {
                    return res(new SBProfile(profile))
                } else {
                    return profile
                }

            }
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
            if (!response.records.length || response.records.lenght == 0) return res('Player does not have any friends');

            if (this.compacted) {
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
            if (!(await validateApiKey(this.key))) return rej('Invalid API key!');

            let response = await fetch(BASE_URL + '/boosters' + `?key=${this.key}`).then(r => r.json());

            if (this.compacted) {
                return res(response.boosters.map(b => new Booster(b))) || [];
            } else {
                return response.boosters;
            }
        })
    }
}

/**
 * @async
 * 
 * @param {object} object
 * 
 * @returns {Array} Array
 */
async function objectToArray(object) {
    let array = [];

    let object_length = Object.keys(object).length
    for (let i = 0; i < object_length; i++) {
        array.push(Object.keys(object)[i])
    }
    return array;
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
 * @returns {Boolean} 
 * 
 * @param {String} uuid - valid Minecraft Player UUID
 */
function isUUID(uuid) {
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

