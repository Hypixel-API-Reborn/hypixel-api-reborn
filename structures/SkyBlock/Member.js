const { decode, getLevelByXp } = require('../../utils/SkyblockUtils')
const Armor = require('./Armor')
const objectPath = require('object-path')

class SkyblockMember {
    constructor(data) {
        //this.data = data;
        this.uuid = data.uuid;

        this.first_join = data.m.first_join;
        this.last_save = data.m.last_save;

        this.getArmor = async() => {
            return new Promise(async (res, rej) => {
                let base64 = data.m.inv_armor;

                let decode = await decode(base64);
                let armor = {
                    helmet: decode[3] != {} ? new Armor(decode[3]) : null,
                    chestplate: decode[2] != {} ? new Armor(decode[2]) : null,
                    leggings: decode[1] != {} ? new Armor(decode[1]) : null,
                    boots: decode[0] != {} ? new Armor(decode[0]) : null
                }
                res(armor)
            })
        }

        this.fairy_souls = data.m.fairy_souls_collected || 0;

        this.skills = getSkills(data.m)
        this.collections = data.m.collection ? data.m.collection : null;
        this.getEnderChest = async () => {
            return new Promise(async (res, rej) => {
                let enderChest = data.m.ender_chest_contents;
                if (!enderChest) return res(null);

                try {
                    enderChest = await decode(enderChest.data);
                    return res(enderChest)
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
                    return res(inventory)
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