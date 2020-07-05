const { decode, getLevelByXp } = require('../../utils/SkyblockUtils');
const Armor = require('./SkyblockArmor');
const Item = require('./SkyblockItem');
const objectPath = require('object-path');

class SkyblockMember {
  constructor (data) {
    this.uuid = data.uuid;
    this.firstJoin = data.m.first_join;
    this.lastSave = data.m.last_save;
    this.getArmor = async () => {
      const base64 = data.m.inv_armor;
      const decoded = await decode(base64.data);
      const armor = {
        helmet: decoded[3].id ? new Armor(decoded[3]) : null,
        chestplate: decoded[2].id ? new Armor(decoded[2]) : null,
        leggings: decoded[1].id ? new Armor(decoded[1]) : null,
        boots: decoded[0].id ? new Armor(decoded[0]) : null
      };
      return armor;
    };
    this.fairySouls = data.m.fairy_souls_collected || 0;
    this.skills = getSkills(data.m);
    this.collections = data.m.collection ? data.m.collection : null;
    this.getEnderChest = async () => {
      const chest = data.m.ender_chest_contents;
      if (!chest) return null;

      try {
        const enderChest = await decode(chest.data);

        const edited = [];
        for (let i = 0; i < enderChest.length; i++) {
          if (!enderChest[i].id) {
            continue;
          }
          edited.push(new Item(enderChest[i]));
        }
        return edited;
      } catch (e) {
        return e;
      }
    };
    this.getInventory = async () => {
      let inventory = data.m.inv_contents;
      if (!inventory) return null;

      try {
        inventory = await decode(inventory.data);
        const edited = [];
        for (let i = 0; i < inventory.length; i++) {
          if (!inventory[i].id) {
            continue;
          }
          edited.push(new Item(inventory[i]));
        }
        return edited;
      } catch (e) {
        return e;
      }
    };
    this.stats = (data.m.stats ? {
      purse: Math.floor(data.m.coin_purse) || 0,
      kills: data.m.stats.kills || 0,
      deaths: data.m.stats.deaths || 0,
      highest_crit_damage: Math.round(data.m.stats.highest_crit_damage * 100) / 100 || 0,
      highest_critical_damage: Math.round(data.m.stats.highest_critical_damage * 100) / 100 || 0,
      gifts_given: data.m.stats.gifts_given || 0,
      gifts_received: data.m.stats.gifts_received || 0
    } : null);
  }
}
/**
 * @param {object} data
 *
 * @return {object}
 */
function getSkills (data) {
  let skills = {};
  if (!objectPath.has(data, 'experience_skill_foraging')) {
    return null;
  }
  skills = {
    taming: getLevelByXp(data.experience_skill_taming),
    farming: getLevelByXp(data.experience_skill_farming),
    mining: getLevelByXp(data.experience_skill_mining),
    combat: getLevelByXp(data.experience_skill_combat),
    foraging: getLevelByXp(data.experience_skill_foraging),
    fishing: getLevelByXp(data.experience_skill_fishing),
    enchanting: getLevelByXp(data.experience_skill_enchanting),
    alchemy: getLevelByXp(data.experience_skill_alchemy),
    carpentry: getLevelByXp(data.experience_skill_carpentry),
    runecrafting: getLevelByXp(data.experience_skill_runecrafting, true)
  };
  return skills;
}

module.exports = SkyblockMember;
