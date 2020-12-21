/* eslint-disable camelcase */
const { decode, getLevelByXp, getLevelByAchievement, getSlayerLevel } = require('../../utils/SkyblockUtils');
const { skyblock_year_0, skills, skills_achievements, pet_score } = require('../../utils/Constants');
const InventoryItem = require('./SkyblockInventoryItem');
const objectPath = require('object-path');
/**
 * Skyblock member class
 * @param {object} data Skyblock member data
 */
class SkyblockMember {
  constructor (data) {
    /**
     * Skyblock member UUID
     * @type {string}
     */
    this.uuid = data.uuid;
    /**
     * Skyblock member's player profile<br>
     * If `fetchPlayer` option is `true`.
     * @type {Player|null}
     */
    this.player = data.m.player || null;
    /**
     * Skyblock member's profile name
     * @type {string}
     */
    this.profileName = data.profileName;
    /**
     * Timestamp when player first joined to SkyBlock
     * @type {number}
     */
    this.firstJoinTimestamp = data.m.first_join;
    /**
     * Timestamp when player first joined to SkyBlock as Date
     * @type {Date}
     */
    this.firstJoinAt = new Date(data.m.first_join);
    /**
     * Last save timestamp
     * @type {number}
     */
    this.lastSave = data.m.last_save;
    /**
     * Last save timestamp as Date
     * @type {Date}
     */
    this.lastSaveAt = new Date(data.m.last_save);
    /**
     * Last death timestamp as Date
     * @type {Date}
     */
    this.lastDeathAt = new Date(skyblock_year_0 + data.m.last_death * 1000);
    /**
     * Last save timestamp
     * @type {number}
     */
    this.lastDeath = data.m.last_death;
    /**
     * Equipped armor
     * @type {SkyblockMemberArmor}
     */
    this.getArmor = async () => {
      const base64 = data.m.inv_armor;
      const decoded = await decode(base64.data);
      const armor = {
        helmet: decoded[3].id ? new InventoryItem(decoded[3]) : null,
        chestplate: decoded[2].id ? new InventoryItem(decoded[2]) : null,
        leggings: decoded[1].id ? new InventoryItem(decoded[1]) : null,
        boots: decoded[0].id ? new InventoryItem(decoded[0]) : null
      };
      return armor;
    };
    /**
     * Collected fairy souls
     * @type {SkyblockMemberArmor}
     */
    this.fairySouls = data.m.fairy_souls_collected || 0;
    /**
     * Skyblock member skills
     * @type {SkyblockMemberSkills}
     */
    this.skills = getSkills(data.m);
    /**
     * Skyblock member slayer
     * @type {SkyblockMemberSlayer|null}
     */
    this.slayer = getSlayer(data.m);
    /**
     * Skyblock member dangeons
     * @type {SkyblockMemberDungeons|null}
     */
    this.dungeons = getDungeons(data.m);
    /**
     * Skyblock member collections
     * @type {object}
     */
    this.collections = data.m.collection ? data.m.collection : null;
    /**
     * Skyblock member enderchest
     * @returns {Promise<InventoryItem[]|null>}
     */
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
          edited.push(new InventoryItem(enderChest[i]));
        }
        return edited;
      } catch (e) {
        return e;
      }
    };
    /**
     * Skyblock member inventory
     * @returns {Promise<InventoryItem[]|null>}
     */
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
          edited.push(new InventoryItem(inventory[i]));
        }
        return edited;
      } catch (e) {
        return e;
      }
    };
    this.getPetScore = function () {
      if (!data.m.pets) return 0;
      let petScore = 0;
      for (const pet of data.m.pets) {
        petScore += pet_score[pet.tier] || 0;
      }
      return petScore;
    };
    this.stats = (data.m.stats ? {
      purse: Math.floor(data.m.coin_purse) || 0,
      kills: data.m.stats.kills || 0,
      deaths: data.m.stats.deaths || 0,
      highestCritDamage: Math.round(data.m.stats.highest_crit_damage * 100) / 100 || 0,
      highestCriticalDamage: Math.round(data.m.stats.highest_critical_damage * 100) / 100 || 0,
      giftsGiven: data.m.stats.gifts_given || 0,
      giftsReceived: data.m.stats.gifts_received || 0
    } : null);
  }
}
/**
 * @param {object} data
 * @return {object}
 */
function getSkills (data) {
  const skillsObject = {};
  if (!objectPath.has(data, 'experience_skill_foraging')) {
    if (data.player) {
      for (const [skill, achievement] of Object.entries(skills_achievements)) {
        skillsObject[skill] = getLevelByAchievement(data.player.achievements[achievement], skill);
      }
      skillsObject.usedAchievementApi = true;
      return skillsObject;
    }
    return null;
  }
  for (const skill of skills) {
    skillsObject[skill] = getLevelByXp(data[`experience_skill_${skill}`], skill, data.player ? data.player.achievements : undefined);
  }
  if (data.player) skillsObject.usedAchievementApi = false;
  return skillsObject;
}
/**
 * @param {object} data
 * @return {object}
 */
function getSlayer (data) {
  if (!objectPath.has(data, 'slayer_bosses')) {
    return null;
  }
  return {
    zombie: getSlayerLevel(data.slayer_bosses.zombie),
    spider: getSlayerLevel(data.slayer_bosses.spider),
    wolf: getSlayerLevel(data.slayer_bosses.wolf)
  };
}
/**
 * @param {object} data
 * @return {object}
 */
function getDungeons (data) {
  if (!objectPath.has(data, 'dungeons')) {
    return null;
  }
  return {
    types: {
      catacombs: getLevelByXp(data.dungeons.dungeon_types.catacombs ? data.dungeons.dungeon_types.catacombs.experience : null, 'dungeons')
    },
    classes: {
      healer: getLevelByXp(data.dungeons.player_classes.healer ? data.dungeons.player_classes.healer.experience : null, 'dungeons'),
      mage: getLevelByXp(data.dungeons.player_classes.mage ? data.dungeons.player_classes.mage.experience : null, 'dungeons'),
      berserk: getLevelByXp(data.dungeons.player_classes.berserk ? data.dungeons.player_classes.berserk.experience : null, 'dungeons'),
      archer: getLevelByXp(data.dungeons.player_classes.archer ? data.dungeons.player_classes.archer.experience : null, 'dungeons'),
      tank: getLevelByXp(data.dungeons.player_classes.tank ? data.dungeons.player_classes.tank.experience : null, 'dungeons')
    }
  };
}
/**
 * @typedef {object} SkyblockMemberArmor Equipped armor
 * @property {InventoryItem|null} helmet Helmet
 * @property {InventoryItem|null} chestplate Chestplate
 * @property {InventoryItem|null} leggings Leggings
 * @property {InventoryItem|null} boots Boots
 */
/**
 * @typedef {object} SkyblockMemberSkills
 * @property {SkyblockSkillLevel} farming Farming skill
 * @property {SkyblockSkillLevel} mining Mining skill
 * @property {SkyblockSkillLevel} combat Combat skill
 * @property {SkyblockSkillLevel} foraging Foraging skills
 * @property {SkyblockSkillLevel} fishing Fishing skill
 * @property {SkyblockSkillLevel} enchanting Enchanting skill
 * @property {SkyblockSkillLevel} alchemy Alchemy skill
 * @property {SkyblockSkillLevel} taming Taming skill
 * @property {SkyblockSkillLevel} carpentry Carpentry skill
 * @property {SkyblockSkillLevel} runecrafting Runecrafting skill
 */
/**
 * @typedef {object} SkyblockSkillLevel
 * There is list of skills: {@link SkyblockMemberSkills}. <br>
 * Usage: `<SkyblockMember>.skills.farming.xp`.
 *
 * @property {number} xp Total XP
 * @property {number} level Level
 * @property {number} maxLevel Max level
 * @property {number} xpCurrent Current XP
 * @property {number} xpForNext XP for next level
 * @property {number} progress Progress
 */
/**
 * @typedef {object} SkyblockMemberSlayer
 * @property {SkyblockMemberSlayerLevel} zombie
 * @property {SkyblockMemberSlayerLevel} spider
 * @property {SkyblockMemberSlayerLevel} wolf
 */
/**
 * @typedef {object} SkyblockMemberSlayerLevel
 * @property {number} xp Total XP
 * @property {number} tier1 Tier 1
 * @property {number} tier2 Tier 2
 * @property {number} tier3 Tier 3
 * @property {number} tier4 Tier 4
 * @property {number} level Level
 */
/**
 * @typedef {object} SkyblockMemberDungeons
 * @property {object} types Dungeons types
 * @property {object} classes Dungeons classes
 */
/**
 * @typedef {object} SkyblockMemberDungeonsTypes
 * @property {SkyblockSkillLevel} catacombs
 */
/**
 * @typedef {object} SkyblockMemberDungeonsClasses
 * @property {SkyblockSkillLevel} healer Healer class
 * @property {SkyblockSkillLevel} mage Mage class
 * @property {SkyblockSkillLevel} berserk Berserk class
 * @property {SkyblockSkillLevel} archer Archer class
 * @property {SkyblockSkillLevel} tank Tank class
 */
module.exports = SkyblockMember;
