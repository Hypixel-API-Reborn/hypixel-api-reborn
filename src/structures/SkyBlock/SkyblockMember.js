const {
  getMemberStats,
  decode,
  getSkills,
  getBestiaryLevel,
  getSlayer,
  getCrimson,
  getDungeons,
  getJacobData,
  getChocolateFactory,
  getPetLevel,
  getHOTM
} = require('../../utils/SkyblockUtils');
const SkyblockInventoryItem = require('./SkyblockInventoryItem');
const SkyblockMuseum = require('./SkyblockMuseum');
const SkyblockGarden = require('./SkyblockGarden');
const Constants = require('../../utils/Constants');
const skyhelper = require('skyhelper-networth');
const SkyblockPet = require('./SkyblockPet');
const Player = require('../Player');

/**
 * Skyblock member class
 */
class SkyblockMember {
  /**
   * @param {object} data Skyblock member data
   */
  constructor(data) {
    /**
     * Skyblock member UUID
     * @type {string}
     */
    this.uuid = data.uuid;
    /**
     * Skyblock member's player profile
     * If `fetchPlayer` option is `true`.
     * @type {Player|null}
     */
    this.player = data.m.player || null;
    /**
     * If `getMuseum` option is `true`.
     * @type {SkyblockMuseum|null}
     */
    this.museum = data.museum || null;
    /**
     * If `getGarden` option is `true`.
     * @type {SkyblockGarden|null}
     */
    this.garden = data.garden || null;
    /**
     * Profile's gamemode
     * @type {string|null}
     */
    this.gameMode = data.gameMode;
    /**
     * Profile is selected
     * @type {boolean}
     */
    this.selected = data.selected;
    /**
     * Skyblock member's profile name
     * @type {string}
     */
    this.profileName = data.profileName;
    /**
     * Skyblock member's profile id
     * @type {string}
     */
    this.profileId = data.profileId;
    /**
     * Timestamp when player first joined SkyBlock
     * @type {number}
     */
    this.firstJoinTimestamp = data.m.profile?.first_join;
    /**
     * Timestamp when player first joined SkyBlock as Date
     * @type {Date}
     */
    this.firstJoinAt = new Date(data.m.profile?.first_join);
    /**
     * Experience
     * @type {number}
     */
    this.experience = data.m.leveling?.experience ?? 0;
    /**
     * Skyblock Level
     * @type {number}
     */
    this.level = this.experience ? this.experience / 100 : 0;
    /**
     * Heart of the Mountain - MiningSkill
     * @type {SkyblockMemberHotm}
     */
    this.hotm = getHOTM(data.m);
    /**
     * The highest magical power **Not current one**
     * @type {number}
     */
    this.highestMagicalPower = data.m.accessory_bag_storage?.highest_magical_power ?? 0;
    /**
     * Collected fairy souls
     * @type {number}
     */
    this.fairySouls = data.m?.fairy_soul?.total_collected ?? 0;
    /**
     * Amount of fairy soul exchanges
     * @type {number}
     */
    this.fairyExchanges = data.m?.fairy_soul?.fairy_exchanges ?? 0;
    /**
     * Skyblock member skills
     * @type {SkyblockMemberSkills}
     */
    this.skills = getSkills(data.m);
    /**
     * Bestiary of the user
     * @type {number}
     */
    this.bestiary = getBestiaryLevel(data.m);
    /**
     * Skyblock member slayer
     * @type {SkyblockMemberSlayer|null}
     */
    this.slayer = getSlayer(data.m);
    /**
     * Skyblock Member Crimson Isle
     * @type {SkyblockMemberCrimsonIsle}
     */
    this.crimson = getCrimson(data.m);
    /**
     * Skyblock member dungeons
     * @type {SkyblockMemberDungeons|null}
     */
    this.dungeons = getDungeons(data.m);
    /**
     * Skyblock member collections
     * @type {object}
     */
    this.collections = data.m.collection ? data.m.collection : null;
    /**
     * Skyblock coins in purse
     * @type {number}
     */
    this.purse = data.m?.currencies?.coin_purse ?? 0;
    /**
     * Skyblock member stats
     * @type {object}
     */
    this.stats = data.m.player_stats ? getMemberStats(data.m.player_stats) : null;
    /**
     * Skyblock pets
     * @type {SkyblockPet[]}
     */
    this.pets = data.m?.pets_data?.pets ? data.m.pets_data.pets.map((pet) => new SkyblockPet(pet)) : [];
    /**
     * Skyblock jacob data
     * @type {jacobData}
     */
    this.jacob = getJacobData(data.m);
    /**
     * Skyblock Chocolate Factory
     * @type {chocolateFactoryData}
     */
    this.chocolate = getChocolateFactory(data.m);
    /**
     * Equipped armor
     * @return {Promise<SkyblockMemberArmor>}
     */
    this.getArmor = async () => {
      const base64 = data.m.inventory.inv_armor;
      const decoded = await decode(base64.data);
      const armor = {
        helmet: decoded[3].id ? new SkyblockInventoryItem(decoded[3]) : null,
        chestplate: decoded[2].id ? new SkyblockInventoryItem(decoded[2]) : null,
        leggings: decoded[1].id ? new SkyblockInventoryItem(decoded[1]) : null,
        boots: decoded[0].id ? new SkyblockInventoryItem(decoded[0]) : null
      };
      return armor;
    };
    /**
     * Wardrobe contents
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getWardrobe = async () => {
      const base64 = data.m?.inventory?.wardrobe_contents?.data;
      if (!base64) return [];
      const decoded = await decode(base64);
      const armor = decoded
        .filter((item) => 0 !== Object.keys(item).length)
        .map((item) => new SkyblockInventoryItem(item));
      return armor;
    };
    /**
     * Skyblock member enderchest
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getEnderChest = async () => {
      let chest = data.m.inventory.ender_chest_contents;
      if (!chest) return [];

      try {
        chest = await decode(chest.data);
        const edited = [];
        for (let i = 0; i < chest.length; i++) {
          if (!chest[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(chest[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    /**
     * Skyblock member inventory
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getInventory = async () => {
      let inventory = data.m.inventory.inv_contents;
      if (!inventory) return [];

      try {
        inventory = await decode(inventory.data);
        const edited = [];
        for (let i = 0; i < inventory.length; i++) {
          if (!inventory[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(inventory[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    /**
     * Skyblock Member pet score
     * @return {number}
     */
    this.getPetScore = () => {
      const highestRarity = {};
      for (const pet of data.m.pets_data.pets) {
        if (!(pet.type in highestRarity) || Constants.petScore[pet.tier] > highestRarity[pet.type]) {
          highestRarity[pet.type] = Constants.petScore[pet.tier];
          if ('PET_ITEM_TIER_BOOST' === pet.heldItem && 'MYTHIC' !== pet.tier) {
            highestRarity[pet.type] += 1;
          }
        }
      }

      const highestLevel = {};
      for (const pet of data.m.pets_data.pets) {
        const maxLevel = 'GOLDEN_DRAGON' === pet.type ? 200 : 100;
        const petLevel = getPetLevel(pet.exp, pet.tier, maxLevel);

        if (!(pet.type in highestLevel) || petLevel.level > highestLevel[pet.type]) {
          if (petLevel.level < maxLevel) {
            continue;
          }

          highestLevel[pet.type] = 1;
        }
      }

      return (
        Object.values(highestRarity).reduce((a, b) => a + b, 0) + Object.values(highestLevel).reduce((a, b) => a + b, 0)
      );
    };
    /**
     * Skyblock member equipment
     * @return {Promise<SkyblockMemberEquipment>}
     */
    this.getEquipment = async () => {
      let equipment = data.m.inventory.equipment_contents;
      if (!equipment) return [];

      try {
        equipment = await decode(equipment.data);
        const playerEquipment = {
          gauntlet: equipment[3].id ? new SkyblockInventoryItem(equipment[3]) : null,
          belt: equipment[2].id ? new SkyblockInventoryItem(equipment[2]) : null,
          cloak: equipment[1].id ? new SkyblockInventoryItem(equipment[1]) : null,
          necklace: equipment[0].id ? new SkyblockInventoryItem(equipment[0]) : null
        };
        return playerEquipment;
      } catch {
        return [];
      }
    };
    /**
     * Skyblock member Personal Vault
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getPersonalVault = async () => {
      let vault = data.m.inventory.personal_vault_contents;
      if (!vault) return [];

      try {
        vault = await decode(vault.data);
        const edited = [];
        for (let i = 0; i < vault.length; i++) {
          if (!vault[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(vault[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };
    /**
     * Skyblock member networth (Credit to skyhelper-networth package)
     * @return {Promise<skyhelper.NetworthResult>}
     */
    this.getNetworth = async () => {
      try {
        const nw = await skyhelper.getNetworth(data.m, data.banking?.balance ?? 0, {
          onlyNetworth: true,
          v2Endpoint: true,
          cache: true,
          museumData: data.museum?.raw ?? {}
        });
        return nw;
      } catch {
        return [];
      }
    };
  }
  /**
   * UUID
   * @return {string}
   */
  toString() {
    return this.uuid;
  }
}
/**
 * @typedef {object} SkyblockMemberEquipment
 * @property {SkyblockInventoryItem|null} gauntlet Gauntlet
 * @property {SkyblockInventoryItem|null} belt Belt
 * @property {SkyblockInventoryItem|null} cloak Cloak
 * @property {SkyblockInventoryItem|null} necklace Necklace
 */
/**
 * @typedef {object} SkyblockMemberArmor
 * @property {SkyblockInventoryItem|null} helmet Helmet
 * @property {SkyblockInventoryItem|null} chestplate Chestplate
 * @property {SkyblockInventoryItem|null} leggings Leggings
 * @property {SkyblockInventoryItem|null} boots Boots
 */
/**
 * @typedef {object} SkyblockMemberSkills
 * @property {SkyblockSkillLevel} combat Combat skill
 * @property {SkyblockSkillLevel} farming Farming skill
 * @property {SkyblockSkillLevel} fishing Fishing skill
 * @property {SkyblockSkillLevel} mining Mining skill
 * @property {SkyblockSkillLevel} foraging Foraging skills
 * @property {SkyblockSkillLevel} enchanting Enchanting skill
 * @property {SkyblockSkillLevel} alchemy Alchemy skill
 * @property {SkyblockSkillLevel} carpentry Carpentry skill
 * @property {SkyblockSkillLevel} runecrafting Runecrafting skill
 * @property {SkyblockSkillLevel} taming Taming skill
 * @property {SkyblockSkillLevel} social Social skill
 * @property {number} average Average skill level
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
 * @property {boolean} cosmetic Cosmetic
 */
/**
 * @typedef {object} SkyblockMemberSlayer
 * @property {SkyblockMemberSlayerLevel} zombie Zombie
 * @property {SkyblockMemberSlayerLevel} spider Spider
 * @property {SkyblockMemberSlayerLevel} wolf Wolf
 * @property {SkyblockMemberSlayerLevel} enderman Enderman
 * @property {SkyblockMemberSlayerLevel} blaze Blaze
 * @property {SkyblockMemberSlayerLevel} vampire Vampire
 */
/**
 * @typedef {object} SkyblockMemberSlayerLevel
 * @property {number} xp Total XP
 * @property {number} tier1 Tier 1
 * @property {number} tier2 Tier 2
 * @property {number} tier3 Tier 3
 * @property {number} tier4 Tier 4
 * @property {number} tier5 Tier 5
 * @property {number} level Level
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsle
 * @property {"mages"|"barbarians"|null} faction Faction
 * @property {SkyblockMemberCrimsonIsleRepuation} repuation Repuation
 * @property {SkyblockMemberCrimsonIsleTrophyFish} trophyFish trophyFish
 * @property {SkyblockMemberCrimsonIsleKuudra} kuudra Kuudra
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleTrophyFishDojo
 * @property {"Black"|"Brown"|"Blue"|"Green"|"Yellow"|"White"} belt Belt Color
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} force Force
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} stamina Stamina
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} mastery Mastery
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} discipline Discipline
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} swiftness Swiftness
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} control Control
 * @property {SkyblockMemberCrimsonIsleTrophyFishDojoMode} tenacity Tenacity
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleTrophyFishDojoMode
 * @property {number} points Points
 * @property {"S"|"A"|"B"|"C"|"D"|"F"} rank Rank
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleTrophyFish
 * @property {'Bronze'|'Silver'|'Gold'|'Diamond'|null} rank Trophy Fish Rank
 * @property {SkyblockMemberCrimsonIsleTrophyFishCaught} caught
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleTrophyFishCaught
 * @property {number} total Total Caught
 * @property {number} bronze Bronze Caught
 * @property {number} silver Silver Caught
 * @property {number} gold Gold Caught
 * @property {number} diamond Diamond Caught
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleRepuation
 * @property {number} barbarians barbarian Repuation
 * @property {number} mages mage Repuation
 */
/**
 * @typedef {object} SkyblockMemberCrimsonIsleKuudra
 * @property {number} none None Completions
 * @property {number} hot Hot Completions
 * @property {number} burning Burning Completions
 * @property {number} fiery Fiery Completions
 * @property {number} highestWaveHot Highest Wave Hot
 * @property {number} highestWaveFiery Highest Wave Fiery
 * @property {number} infernal Infernal Completions
 * @property {number} highestWaveInfernal Highest Wave Infernal
 * @property {number} highestWaveBurning Highest Wave Burning
 */
/**
 * @typedef {object} SkyblockMemberDungeons
 * @property {SkyblockSkillLevel} experience Dungeons Experience
 * @property {number} secrets Amount of secrets found
 * @property {SkyblockMemberDungeonsCompletions} completions Dungeon completions
 * @property {SkyblockMemberDungeonsFloors} floors Dungeon Floor Stats
 */
/**
 * @typedef {object} SkyblockMemberDungeonsCompletions
 * @property {Record<string, number>} catacombs Normal Dungeons
 * @property {Record<string, number>} masterCatacombs Master Mode Dungeons
 */
/**
 * @typedef {object} SkyblockMemberDungeonsClasses
 * @property {SkyblockSkillLevel} healer Healer class
 * @property {SkyblockSkillLevel} mage Mage class
 * @property {SkyblockSkillLevel} berserk Berserk class
 * @property {SkyblockSkillLevel} archer Archer class
 * @property {SkyblockSkillLevel} tank Tank class
 * @property {string} selected Current Selected Class
 */
/**
 * @typedef {object} SkyblockMemberDungeonsFloorRun
 * @property {number} timestamp Timestamp
 * @property {number} score_exploration Score Exploration
 * @property {number} score_speed Score Speed
 * @property {number} score_skill Score Skill
 * @property {number} score_bonus Score Bonus
 * @property {string} dungeon_class Dungeon Class
 * @property {string[]} teammates Teammates
 * @property {number} elapsed_time Elapsed Time
 * @property {number} damage_dealt Damage Dealt
 * @property {number} deaths Deaths
 * @property {number} mobs_killed Mobs Killed
 * @property {number} secrets_found Secrets Found
 * @property {number} damage_mitigated Damage Mitigated
 */
/**
 * @typedef {object} SkyblockMemberDungeonsFloor
 * @property {SkyblockMemberDungeonsFloorRun} fastestRun Fastest Run
 * @property {SkyblockMemberDungeonsFloorRun} fastestSRun Fastest S Run
 * @property {SkyblockMemberDungeonsFloorRun} fastestSPlusRun Fastest S+ Run
 * @property {number} completions Completions
 */
/**
 * @typedef {object} SkyblockMemberDungeonsFloors
 * @property {SkyblockMemberDungeonsFloor} entrance Entrance Stats
 * @property {SkyblockMemberDungeonsFloor} floor1 Floor 1 Stats
 * @property {SkyblockMemberDungeonsFloor} floor2 Floor 2 Stats
 * @property {SkyblockMemberDungeonsFloor} floor3 Floor 3 Stats
 * @property {SkyblockMemberDungeonsFloor} floor4 Floor 4 Stats
 * @property {SkyblockMemberDungeonsFloor} floor5 Floor 5 Stats
 * @property {SkyblockMemberDungeonsFloor} floor6 Floor 6 Stats
 * @property {SkyblockMemberDungeonsFloor} floor7 Floor 7 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs1 Master Mode Floor 1 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs2 Master Mode Floor 2 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs3 Master Mode Floor 3 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs4 Master Mode Floor 4 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs5 Master Mode Floor 5 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs6 Master Mode Floor 6 Stats
 * @property {SkyblockMemberDungeonsFloor} masterCatacombs7 Master Mode Floor 7 Stats
 */
/**
 * @typedef {object} jacobDataPerks
 * @property {number} doubleDrops Double drops
 * @property {number} farmingLevelCap Farming level cap
 * @property {boolean} personalBests Personal Bests
 */
/**
 * @typedef {object} jacobDataMedals
 * @property {number} gold gold medals
 * @property {number} silver silver medals
 * @property {number} bronze bronze medals
 */
/**
 * @typedef {object} jacobData
 * @property {jacobDataMedals} medals Medals
 * @property {jacobDataPerks} perks Perks
 * @property {object} contests Contests
 */
/**
 * @typedef {object} chocolateFactoryDataEmployees
 * @property {number} bro bro employee level
 * @property {number} cousin cousin employee level
 * @property {number} sis sis employee level
 * @property {number} father father employee level
 * @property {number} grandma grandma employee level
 * @property {number} dog dog employee level
 * @property {number} uncle uncle employee level
 */
/**
 * @typedef {object} chocolateFactoryDataChocolate
 * @property {number} count amount of current chocolate
 * @property {number} total total amount of chocolate
 * @property {number} sincePrestige amount of chocolate since prestige
 */
/**
 * @typedef {object} chocolateFactoryDataTimeTower
 * @property {number} charge amount of charges in the time tower
 * @property {number} level level of the time tower
 */
/**
 * @typedef {object} chocolateFactoryDataUpgrades
 * @property {number} click amount of click upgrades
 * @property {number} multiplier amount of multiplier upgrades
 * @property {number} rabbitRarity amount of rabbit rarity upgrades
 */
/**
 * @typedef {object} chocolateFactoryDataGoldenClick
 * @property {number} amount amount of golden clicks
 * @property {number} year year
 */
/**
 * @typedef {object} chocolateFactoryData
 * @property {chocolateFactoryDataEmployees} employees Employees
 * @property {chocolateFactoryDataChocolate} chocolate Chocolate
 * @property {chocolateFactoryDataTimeTower} timeTower Time Tower
 * @property {chocolateFactoryDataUpgrades} upgrades Upgrades
 * @property {chocolateFactoryDataGoldenClick} goldenClick Golden Click
 * @property {number} barnCapacity Barn Capacity
 * @property {number} prestige Prestige
 */
/**
 * @typedef {object} SkyblockMemberHotmPowderData
 * @property {number} spent Spent HOTM Powder
 * @property {number} current Current HOTM Powder
 * @property {number} total Total HOTM Powder
 */
/**
 * @typedef {object} SkyblockMemberHotmPowder
 * @property {SkyblockMemberHotmPowderData} mithril Mithril Powder
 * @property {SkyblockMemberHotmPowderData} gemstone Gemstone Powder
 * @property {SkyblockMemberHotmPowderData} glacite Glacite Powder
 */
/**
 * @typedef {object} SkyblockMemberHotm
 * @property {SkyblockSkillLevel} experience Experience
 * @property {string} ability Selected Ability
 * @property {SkyblockMemberHotmPowder} powder Powder Data
 */
module.exports = SkyblockMember;
