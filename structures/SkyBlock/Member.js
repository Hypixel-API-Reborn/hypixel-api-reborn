const { decode, getLevelByXp } = require('../../utils/SkyblockUtils')
const Armor = require('./Armor')
const Item = require('./Item')
const objectPath = require('object-path')

class SkyblockMember {
    constructor(data) {
        //this.data = data;
        this.uuid = data.uuid;

        this.first_join = data.m.first_join;
        this.last_save = data.m.last_save;

        this.getArmor = async () => {
            return new Promise(async (res, rej) => {

                let base64 = data.m.inv_armor;
                let decoded = await decode(base64.data);
                let armor = {
                    helmet: decoded[3].id != undefined ? new Armor(decoded[3]) : null,
                    chestplate: decoded[2].id != undefined ? new Armor(decoded[2]) : null,
                    leggings: decoded[1].id != undefined ? new Armor(decoded[1]) : null,
                    boots: decoded[0].id != undefined ? new Armor(decoded[0]) : null
                }
                res(armor)
            })
        }

        this.fairy_souls = data.m.fairy_souls_collected || 0;

        this.skills = getSkills(data.m)
        this.collections = data.m.collection ? data.m.collection : null;
        this.getEnderChest = async () => {
            return new Promise(async (res, rej) => {
                let chest = data.m.ender_chest_contents;
                if (!chest) return res(null);

                try {
                    let enderChest = await decode(chest.data);

                    let edited = [];
                    for (let i = 0; i < enderChest.length; i++) {
                        if(!enderChest[i].id) {
                            edited.push({})
                        } else {
                            edited.push(new Item(enderChest[i]))
                        }
                    }
                    return res(edited)
                } catch (e) {
                    rej(e);
                }
            })
        }
        this.getInventory = async () => {
            return new Promise(async (res, rej) => {
                let inventory = data.m.inv_contents;
                if (!inventory) return res(null);

                try {
                    inventory = await decode(inventory.data);
                    let edited = [];
                    for (let i = 0; i < inventory.length; i++) {
                        if(!inventory[i].id) {
                            edited.push({})
                        } else {
                            edited.push(new Item(inventory[i]))
                        }
                    }
                    return res(edited)
                } catch (e) {
                    rej(e);
                }
            })
        }

        this.stats = {
            purse: Math.floor(data.m.coin_purse) || 0,
            kills: data.m.stats.kills || 0,
            deaths: data.m.stats.deaths || 0,
            highest_crit_damage: Math.round(data.m.stats.highest_crit_damage * 100) / 100 || 0,
            highest_critical_damage: Math.round(data.m.stats.highest_critical_damage * 100) / 100 || 0,

            gifts_given: data.m.stats.gifts_given || 0,
            gifts_received: data.m.stats.gifts_received || 0
        }
    }
}

function getSkills(data) {
    let skills = {};
    if (!objectPath.has(data, 'experience_skill_foraging')) return skills = null
    skills = {
        farming: getLevelByXp(data.experience_skill_farming),
        mining: getLevelByXp(data.experience_skill_mining),
        combat: getLevelByXp(data.experience_skill_combat),
        foraging: getLevelByXp(data.experience_skill_foraging),
        fishing: getLevelByXp(data.experience_skill_fishing),
        enchanting: getLevelByXp(data.experience_skill_enchanting),
        alchemy: getLevelByXp(data.experience_skill_alchemy),
        carpentry: getLevelByXp(data.experience_skill_carpentry),
        runecrafting: getLevelByXp(data.experience_skill_runecrafting, true),
    }
    return skills
}

module.exports = SkyblockMember;