const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net';


const Player = require('./structures/Player');
const Guild = require('./structures/Guild/Guild')


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
     * @returns {Object} Hypixel player Object or Error
     * 
     * @param {String} uuid 
     */
    async getPlayer(uuid) {
        // let checkUUID = await isUUID(uuid);
        // if (checkUUID == false) {
        //     let uid = await getUuid(uuid)
        //     if (uid == 'Player does not exist') {
        //         return {
        //             success: false,
        //             error: 'Player does not exist'
        //         };
        //     };
        //     uuid = uid;
        // };

        // let validKey = await validateApiKey(this.key);
        // if (validKey == false) {
        //     return {
        //         success: false,
        //         error: 'Invalid API key!'
        //     };
        // };
        let valid = await validateAll(this.key, uuid)
        if (valid.key == false) {
            return {
                success: false,
                error: 'Invalid API key!'
            };
        }
        if (valid.uuid == false) {
            let getUuid = await getUuid(uuid);
            if (getUuid == 'Player does not exist') {
                return {
                    success: false,
                    error: 'Player does not exist'
                }
            }
        }

        let res = await fetch(BASE_URL + `/player` + `?key=${this.key}` + `&uuid=${uuid}`).then(r => r.json());
        if (!res.player || res.cause == 'Malformed UUID!') {
            return {
                success: false,
                error: 'Player does not exist'
            };
        };

        if (this.compacted == true) {
            return {
                success: true,
                player: new Player(res)
            };
        };

        return {
            success: true,
            player: res.player
        };
    }

    /**
     * @async
     * 
     * @param {string} nameOrUUID
     * @param {'player'|'name'} searchParameter
     * 
     * @returns {object} Hypixel Guild
     */
    async getGuild(nameOrUUID, searchParameter) {
        let validKey = await validateApiKey(this.key);
        if (validKey == false) {
            return {
                success: false,
                error: 'Invalid API key!'
            };
        };
        switch (searchParameter) {
            case 'name': {


                let url = BASE_URL + `/guild` + `?key=${this.key}&name=${nameOrUUID}`;
                let res = await fetch(url).then(r => r.json());

                if (res.guild == null) {
                    return {
                        success: false,
                        error: 'Guild does not exist'
                    }
                }

                if (this.compacted == true) {
                    return {
                        success: true,
                        guild: new Guild(res.guild)
                    }
                } else {
                    return {
                        success: true,
                        guild: res.guild
                    }
                }


            }

            case 'player': {
                let validUuid = await isUUID(nameOrUUID);
                if (validUuid == false) {
                    let uuid = await getUuid(nameOrUUID)
                    if (uuid == 'Player does not exist') {
                        return {
                            success: false,
                            error: 'Player does not exist'
                        };
                    };
                    nameOrUUID = uuid;
                };
                let url = BASE_URL + `/guild` + `?key=${this.key}&player=${nameOrUUID}`;
                let res = await fetch(url).then(r => r.json());

                if (res.guild == null) {
                    return {
                        success: false,
                        error: 'Player does not have a guild'
                    }
                }

                if (this.compacted == true) {
                    return {
                        success: true,
                        guild: new Guild(res.guild)
                    }
                } else {
                    return {
                        success: true,
                        guild: res.guild
                    }
                }
            }
                break;

            default: {
                return {
                    success: false,
                    error: 'Define guild search parameter'
                }
            }
        }
    }
}

/**
 * @description Checks key validity
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
 * @description Checks input on UUID or on player name
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


module.exports = Client;