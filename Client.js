const fetch = require('node-fetch');

const BASE_URL = 'https://api.hypixel.net'

const Player = require('./structures/Player')
const getUuid = require('./utils/getUuid')

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
     * @returns {Boolean} 
     * @param {String} uuid - valid Minecraft Player UUID
     */
    isUUID(uuid) {
        let f = new RegExp(`[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}`);
        let s = new RegExp(`[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}`);
        let test = f.test(uuid);
        let test1 = s.test(uuid);
        return test == false && test1 == false ? false : true;
    }


    /**
     * @async
     * @returns {Promise} 
     * @param {String} uuid 
     */
    async getPlayer (uuid) {
        return new Promise(async (resolve, reject) => {
            if(this.isUUID(uuid) == false) {
                let uid = await getUuid(uuid)
                if(uid == 'Player does not exist') {
                    return reject({
                        player: null,
                        error: 'Player does not exist'
                    })
                }
                uuid = uid;
            }
            fetch(BASE_URL + `/player` + `?key=${this.key}` + `&uuid=${uuid}`).then(r => r.json()).then(res => {
                if(res.success == false && res.cause == 'Invalid API key!') {
                    return reject({error: res.cause})
                }
                if(!res.player || res.cause == 'Malformed UUID!') {
                    return reject({
                        player: null,
                        error: 'Player does not exist'
                    })
                }
                
                if(this.compacted == true) {
                    return resolve(new Player(res))
                } else {
                    return resolve(res)
                }
            })
        })
    }
}

module.exports = Client;