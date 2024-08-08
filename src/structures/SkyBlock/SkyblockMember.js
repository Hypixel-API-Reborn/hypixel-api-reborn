const {
  getMemberStats,
  getLevelByXp,
  decode,
  getSkills,
  getBestiaryLevel,
  getSlayer,
  getCrimson,
  getDungeons,
  getJacobData,
  getChocolateFactory,
  getPetLevel
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
     * @type {number}
     */
    this.hotm = getLevelByXp(data.m.mining_core?.experience, 'hotm');
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
     * @type {object}
     */
    this.bestiary = getBestiaryLevel(data.m);
    /**
     * Skyblock member slayer
     * @type {SkyblockMemberSlayer|null}
     */
    this.slayer = getSlayer(data.m);
    /**
     * Skyblock Member Crimson Isle
     * @type {SkyblockMemberCrimsonIsle|null}
     */
    this.crimsonIsle = getCrimson(data.m);
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
     * @type {SkyblockMemberStats}
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
 * @property {SkyblockMemberCrimsonIsleKuudra} kuudra
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
 * @property {'Bronze'|'Silver'|'Gold'|'Diamond'} rank Trophy Fish Rank
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
 * @property {Record<string, number>} catacombs
 * @property {Record<string, number>} masterMode
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
 * @property {SkyblockMemberDungeonsFloor} masterMode1 Master Mode Floor 1 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode2 Master Mode Floor 2 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode3 Master Mode Floor 3 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode4 Master Mode Floor 4 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode5 Master Mode Floor 5 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode6 Master Mode Floor 6 Stats
 * @property {SkyblockMemberDungeonsFloor} masterMode7 Master Mode Floor 7 Stats
 */
/**
 * @typedef {object} SkyblockMemberStats
 * @property {number|undefined} auctionsBids
 * @property {number|undefined} auctionsBoughtCommon
 * @property {number|undefined} auctionsBoughtEpic
 * @property {number|undefined} auctionsBoughtLegendary
 * @property {number|undefined} auctionsBoughtRare
 * @property {number|undefined} auctionsBoughtSpecial
 * @property {number|undefined} auctionsBoughtUncommon
 * @property {number|undefined} auctionsCompleted
 * @property {number|undefined} auctionsCreated
 * @property {number|undefined} auctionsFees
 * @property {number|undefined} auctionsGoldEarned
 * @property {number|undefined} auctionsGoldSpent
 * @property {number|undefined} auctionsHighestBid
 * @property {number|undefined} auctionsNoBids
 * @property {number|undefined} auctionsSoldCommon
 * @property {number|undefined} auctionsSoldEpic
 * @property {number|undefined} auctionsSoldLegendary
 * @property {number|undefined} auctionsSoldRare
 * @property {number|undefined} auctionsSoldSpecial
 * @property {number|undefined} auctionsSoldUncommon
 * @property {number|undefined} auctionsWon
 * @property {number|undefined} chickenRaceBestTime_2
 * @property {number|undefined} deaths
 * @property {number|undefined} deathsBlaze
 * @property {number|undefined} deathsCactus
 * @property {number|undefined} deathsCatfish
 * @property {number|undefined} deathsCorruptedProtector
 * @property {number|undefined} deathsCryptDreadlord
 * @property {number|undefined} deathsCryptLurker
 * @property {number|undefined} deathsCryptSouleater
 * @property {number|undefined} deathsDiamondGuy
 * @property {number|undefined} deathsDiamondSkeleton
 * @property {number|undefined} deathsDiamondZombie
 * @property {number|undefined} deathsDungeonRespawningSkeleton
 * @property {number|undefined} deathsEmeraldSlime
 * @property {number|undefined} deathsEnderman
 * @property {number|undefined} deathsEndermite
 * @property {number|undefined} deathsFall
 * @property {number|undefined} deathsFire
 * @property {number|undefined} deathsFireballMagmaCube
 * @property {number|undefined} deathsGaiaConstruct
 * @property {number|undefined} deathsGeneratorMagmaCube
 * @property {number|undefined} deathsGeneratorSlime
 * @property {number|undefined} deathsHowlingSpirit
 * @property {number|undefined} deathsKingMidas
 * @property {number|undefined} deathsLapisZombie
 * @property {number|undefined} deathsLiquidHotMagma
 * @property {number|undefined} deathsLividClone
 * @property {number|undefined} deathsLostAdventurer
 * @property {number|undefined} deathsMagmaCube
 * @property {number|undefined} deathsMagmaCubeBoss
 * @property {number|undefined} deathsObsidianWither
 * @property {number|undefined} deathsOldDragon
 * @property {number|undefined} deathsOldWolf
 * @property {number|undefined} deathsPlayer
 * @property {number|undefined} deathsProfessor
 * @property {number|undefined} deathsProfessorGuardianSummon
 * @property {number|undefined} deathsProfessorMageGuardian
 * @property {number|undefined} deathsProtectorDragon
 * @property {number|undefined} deathsRandomSlime
 * @property {number|undefined} deathsRedstonePigman
 * @property {number|undefined} deathsRevenantZombie
 * @property {number|undefined} deathsRuinWolf
 * @property {number|undefined} deathsSadanStatue
 * @property {number|undefined} deathsScaredSkeleton
 * @property {number|undefined} deathsScarf
 * @property {number|undefined} deathsScarfMage
 * @property {number|undefined} deathsScarfWarrior
 * @property {number|undefined} deathsSeaGuardian
 * @property {number|undefined} deathsShadowAssassin
 * @property {number|undefined} deathsSkeleton
 * @property {number|undefined} deathsSkeletonEmperor
 * @property {number|undefined} deathsSkeletonGrunt
 * @property {number|undefined} deathsSkeletonMaster
 * @property {number|undefined} deathsSkeletonSoldier
 * @property {number|undefined} deathsSkeletor
 * @property {number|undefined} deathsSniperSkeleton
 * @property {number|undefined} deathsSoulOfTheAlpha
 * @property {number|undefined} deathsSpider
 * @property {number|undefined} deathsSpiderJockey
 * @property {number|undefined} deathsSpiritBat
 * @property {number|undefined} deathsSpiritRabbit
 * @property {number|undefined} deathsStrongDragon
 * @property {number|undefined} deathsSuffocation
 * @property {number|undefined} deathsSuperiorDragon
 * @property {number|undefined} deathsTarantulaSpider
 * @property {number|undefined} deathsTentaclees
 * @property {number|undefined} deathsTrap
 * @property {number|undefined} deathsUnburriedZombie
 * @property {number|undefined} deathsUnknown
 * @property {number|undefined} deathsUnstableDragon
 * @property {number|undefined} deathsVoid
 * @property {number|undefined} deathsVoraciousSpider
 * @property {number|undefined} deathsWatcher
 * @property {number|undefined} deathsWatcherSummonUndead
 * @property {number|undefined} deathsWeaverSpider
 * @property {number|undefined} deathsWiseDragon
 * @property {number|undefined} deathsWitherSkeleton
 * @property {number|undefined} deathsWolf
 * @property {number|undefined} deathsYoungDragon
 * @property {number|undefined} deathsZealotEnderman
 * @property {number|undefined} deathsZombie
 * @property {number|undefined} deathsZombieDeep
 * @property {number|undefined} deathsZombieGrunt
 * @property {number|undefined} deathsZombieSoldier
 * @property {number|undefined} dungeonHubCrystalCoreAnythingNoReturnBestTime
 * @property {number|undefined} dungeonHubCrystalCoreAnythingWithReturnBestTime
 * @property {number|undefined} dungeonHubCrystalCoreNoAbilitiesNoReturnBestTime
 * @property {number|undefined} dungeonHubCrystalCoreNoPearlsNoReturnBestTime
 * @property {number|undefined} dungeonHubCrystalCoreNoPearlsWithReturnBestTime
 * @property {number|undefined} dungeonHubCrystalCoreNothingNoReturnBestTime
 * @property {number|undefined} dungeonHubGiantMushroomAnythingNoReturnBestTime
 * @property {number|undefined} dungeonHubGiantMushroomNoAbilitiesNoReturnBestTime
 * @property {number|undefined} dungeonHubGiantMushroomNoPearlsNoReturnBestTime
 * @property {number|undefined} dungeonHubGiantMushroomNothingNoReturnBestTime
 * @property {number|undefined} dungeonHubPrecursorRuinsAnythingNoReturnBestTime
 * @property {number|undefined} dungeonHubPrecursorRuinsNoAbilitiesNoReturnBestTime
 * @property {number|undefined} dungeonHubPrecursorRuinsNoPearlsNoReturnBestTime
 * @property {number|undefined} dungeonHubPrecursorRuinsNothingNoReturnBestTime
 * @property {number|undefined} endRaceBestTime
 * @property {number|undefined} enderCrystalsDestroyed
 * @property {number|undefined} foragingRaceBestTime
 * @property {number|undefined} giftsGiven
 * @property {number|undefined} giftsReceived
 * @property {number|undefined} highestCritDamage
 * @property {number|undefined} highestCriticalDamage
 * @property {number|undefined} itemsFished
 * @property {number|undefined} itemsFishedLargeTreasure
 * @property {number|undefined} itemsFishedNormal
 * @property {number|undefined} itemsFishedTreasure
 * @property {number|undefined} kills
 * @property {number|undefined} killsBatPinata
 * @property {number|undefined} killsBatSpooky
 * @property {number|undefined} killsBattyWitch
 * @property {number|undefined} killsBlaze
 * @property {number|undefined} killsBlazeHigherOrLower
 * @property {number|undefined} killsBlueShark
 * @property {number|undefined} killsBonzoSummonUndead
 * @property {number|undefined} killsBroodMotherCaveSpider
 * @property {number|undefined} killsBroodMotherSpider
 * @property {number|undefined} killsCarrotKing
 * @property {number|undefined} killsCatfish
 * @property {number|undefined} killsCaveSpider
 * @property {number|undefined} killsCellarSpider
 * @property {number|undefined} killsChicken
 * @property {number|undefined} killsChickenDeep
 * @property {number|undefined} killsCorruptedProtector
 * @property {number|undefined} killsCow
 * @property {number|undefined} killsCreeper
 * @property {number|undefined} killsCryptDreadlord
 * @property {number|undefined} killsCryptLurker
 * @property {number|undefined} killsCryptSouleater
 * @property {number|undefined} killsCryptTankZombie
 * @property {number|undefined} killsCryptUndead
 * @property {number|undefined} killsCryptUndeadAlexander
 * @property {number|undefined} killsCryptUndeadApunch
 * @property {number|undefined} killsCryptUndeadBernhard
 * @property {number|undefined} killsCryptUndeadChristian
 * @property {number|undefined} killsCryptUndeadCodenameB
 * @property {number|undefined} killsCryptUndeadConnorlinfoot
 * @property {number|undefined} killsCryptUndeadDctr
 * @property {number|undefined} killsCryptUndeadFriedrich
 * @property {number|undefined} killsCryptUndeadJayavarmen
 * @property {number|undefined} killsCryptUndeadLikaos
 * @property {number|undefined} killsCryptUndeadMarius
 * @property {number|undefined} killsCryptUndeadNicholas
 * @property {number|undefined} killsCryptUndeadNitroholic_
 * @property {number|undefined} killsCryptUndeadPieter
 * @property {number|undefined} killsCryptUndeadRelenter
 * @property {number|undefined} killsCryptUndeadSfarnham
 * @property {number|undefined} killsCryptUndeadValentin
 * @property {number|undefined} killsCryptWitherskeleton
 * @property {number|undefined} killsDasherSpider
 * @property {number|undefined} killsDeepSeaProtector
 * @property {number|undefined} killsDiamondGuy
 * @property {number|undefined} killsDiamondSkeleton
 * @property {number|undefined} killsDiamondZombie
 * @property {number|undefined} killsDungeonRespawningSkeleton
 * @property {number|undefined} killsDungeonRespawningSkeletonSkull
 * @property {number|undefined} killsDungeonSecretBat
 * @property {number|undefined} killsEmeraldSlime
 * @property {number|undefined} killsEnderman
 * @property {number|undefined} killsEndermite
 * @property {number|undefined} killsFireballMagmaCube
 * @property {number|undefined} killsForestIslandBat
 * @property {number|undefined} killsFrostyTheSnowman
 * @property {number|undefined} killsFrozenSteve
 * @property {number|undefined} killsGaiaConstruct
 * @property {number|undefined} killsGeneratorGhast
 * @property {number|undefined} killsGeneratorMagmaCube
 * @property {number|undefined} killsGeneratorSlime
 * @property {number|undefined} killsGhast
 * @property {number|undefined} killsGuardianDefender
 * @property {number|undefined} killsGuardianEmperor
 * @property {number|undefined} killsHorsemanBat
 * @property {number|undefined} killsHorsemanHorse
 * @property {number|undefined} killsHorsemanZombie
 * @property {number|undefined} killsHowlingSpirit
 * @property {number|undefined} killsInvisibleCreeper
 * @property {number|undefined} killsJockeyShotSilverfish
 * @property {number|undefined} killsJockeySkeleton
 * @property {number|undefined} killsKingMidas
 * @property {number|undefined} killsLapisZombie
 * @property {number|undefined} killsLiquidHotMagma
 * @property {number|undefined} killsLonelySpider
 * @property {number|undefined} killsLostAdventurer
 * @property {number|undefined} killsMagmaCube
 * @property {number|undefined} killsMagmaCubeBoss
 * @property {number|undefined} killsMinosHunter
 * @property {number|undefined} killsMinotaur
 * @property {number|undefined} killsNightRespawningSkeleton
 * @property {number|undefined} killsNightSquid
 * @property {number|undefined} killsNurseShark
 * @property {number|undefined} killsObsidianWither
 * @property {number|undefined} killsOldWolf
 * @property {number|undefined} killsPackSpirit
 * @property {number|undefined} killsParasite
 * @property {number|undefined} killsPhantomSpirit
 * @property {number|undefined} killsPig
 * @property {number|undefined} killsPigman
 * @property {number|undefined} killsPlayer
 * @property {number|undefined} killsPondSquid
 * @property {number|undefined} killsProfessorGuardianSummon
 * @property {number|undefined} killsProtectorDragon
 * @property {number|undefined} killsRabbit
 * @property {number|undefined} killsRandomSlime
 * @property {number|undefined} killsRedstonePigman
 * @property {number|undefined} killsRespawningSkeleton
 * @property {number|undefined} killsRevenantZombie
 * @property {number|undefined} killsRuinWolf
 * @property {number|undefined} killsScaredSkeleton
 * @property {number|undefined} killsScarfArcher
 * @property {number|undefined} killsScarfMage
 * @property {number|undefined} killsScarfPriest
 * @property {number|undefined} killsScarfWarrior
 * @property {number|undefined} killsScaryJerry
 * @property {number|undefined} killsSeaArcher
 * @property {number|undefined} killsSeaGuardian
 * @property {number|undefined} killsSeaLeech
 * @property {number|undefined} killsSeaWalker
 * @property {number|undefined} killsSeaWitch
 * @property {number|undefined} killsShadowAssassin
 * @property {number|undefined} killsSheep
 * @property {number|undefined} killsSiameseLynx
 * @property {number|undefined} killsSkeleton
 * @property {number|undefined} killsSkeletonEmperor
 * @property {number|undefined} killsSkeletonGrunt
 * @property {number|undefined} killsSkeletonMaster
 * @property {number|undefined} killsSkeletonSoldier
 * @property {number|undefined} killsSkeletor
 * @property {number|undefined} killsSlime
 * @property {number|undefined} killsSniperSkeleton
 * @property {number|undefined} killsSoulOfTheAlpha
 * @property {number|undefined} killsSpider
 * @property {number|undefined} killsSpiderJockey
 * @property {number|undefined} killsSpiritBat
 * @property {number|undefined} killsSpiritBull
 * @property {number|undefined} killsSpiritChicken
 * @property {number|undefined} killsSpiritMiniboss
 * @property {number|undefined} killsSpiritRabbit
 * @property {number|undefined} killsSpiritSheep
 * @property {number|undefined} killsSpiritWolf
 * @property {number|undefined} killsSplitterSpider
 * @property {number|undefined} killsSplitterSpiderSilverfish
 * @property {number|undefined} killsStrongDragon
 * @property {number|undefined} killsSuperArcher
 * @property {number|undefined} killsSuperTankZombie
 * @property {number|undefined} killsTarantulaSpider
 * @property {number|undefined} killsTentaclees
 * @property {number|undefined} killsTigerShark
 * @property {number|undefined} killsTrickOrTreater
 * @property {number|undefined} killsUnburriedZombie
 * @property {number|undefined} killsVoraciousSpider
 * @property {number|undefined} killsWatcher
 * @property {number|undefined} killsWatcherBonzo
 * @property {number|undefined} killsWatcherSummonUndead
 * @property {number|undefined} killsWaterHydra
 * @property {number|undefined} killsWeaverSpider
 * @property {number|undefined} killsWitch
 * @property {number|undefined} killsWitchBat
 * @property {number|undefined} killsWitherGourd
 * @property {number|undefined} killsWitherSkeleton
 * @property {number|undefined} killsWraith
 * @property {number|undefined} killsZealotEnderman
 * @property {number|undefined} killsZombie
 * @property {number|undefined} killsZombieDeep
 * @property {number|undefined} killsZombieGrunt
 * @property {number|undefined} killsZombieKnight
 * @property {number|undefined} killsZombieSoldier
 * @property {number|undefined} killsZombieVillager
 * @property {number|undefined} mostWinterCannonballsHit
 * @property {number|undefined} mostWinterDamageDealt
 * @property {number|undefined} mostWinterMagmaDamageDealt
 * @property {number|undefined} mostWinterSnowballsHit
 * @property {number|undefined} mythosBurrowsChainsComplete
 * @property {number|undefined} mythosBurrowsChainsCompleteCommon
 * @property {number|undefined} mythosBurrowsChainsCompleteRare
 * @property {number|undefined} mythosBurrowsChainsCompleteNull
 * @property {number|undefined} mythosBurrowsDugCombat
 * @property {number|undefined} mythosBurrowsDugCombatCommon
 * @property {number|undefined} mythosBurrowsDugCombatRare
 * @property {number|undefined} mythosBurrowsDugCombatNull
 * @property {number|undefined} mythosBurrowsDugNext
 * @property {number|undefined} mythosBurrowsDugNextCommon
 * @property {number|undefined} mythosBurrowsDugNextRare
 * @property {number|undefined} mythosBurrowsDugNextNull
 * @property {number|undefined} mythosBurrowsDugTreasure
 * @property {number|undefined} mythosBurrowsDugTreasureCommon
 * @property {number|undefined} mythosBurrowsDugTreasureRare
 * @property {number|undefined} mythosBurrowsDugTreasureNull
 * @property {number|undefined} mythosKills
 * @property {number|undefined} petMilestoneOresMined
 * @property {number|undefined} petMilestoneSeaCreaturesKilled
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
module.exports = SkyblockMember;
