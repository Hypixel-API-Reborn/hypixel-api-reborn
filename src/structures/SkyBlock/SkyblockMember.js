/* eslint-disable camelcase */
const { decode, getLevelByXp, getLevelByAchievement, getSlayerLevel } = require('../../utils/SkyblockUtils');
const { skyblock_year_0, skills, skills_achievements } = require('../../utils/Constants');
const { single } = require('../../utils/removeSnakeCase');
const SkyblockInventoryItem = require('./SkyblockInventoryItem');
const SkyblockPet = require('./SkyblockPet');
const objectPath = require('object-path');
/**
 * Skyblock member class
 */
class SkyblockMember {
  /**
   * @param {object} data Skyblock member data
   */
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
     * Timestamp when player first joined SkyBlock
     * @type {number}
     */
    this.firstJoinTimestamp = data.m.first_join;
    /**
     * Timestamp when player first joined SkyBlock as Date
     * @type {Date}
     */
    this.firstJoinAt = new Date(data.m.first_join);
    /**
     * Timestamp when player first joined the SkyBlock Hub
     * @type {number}
     */
    this.firstJoinHubTimestamp = data.m.first_join_hub;
    /**
     * Timestamp when player first joined the SkyBlock Hub as Date
     * @type {Date}
     */
    this.firstJoinHubAt = new Date(this.firstJoinTimestamp + data.m.first_join_hub);
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
     * @return {Promise<SkyblockMemberArmor>}
     */
    this.getArmor = async () => {
      const base64 = data.m.inv_armor;
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
     * @return {Promise<SkyblockMemberItem[]>}
     */
    this.getWardrobe = async () => {
      const base64 = data.m?.wardrobe_contents?.data;
      if (!base64) return [];
      const decoded = await decode(base64);
      const armor = decoded.filter((item) => Object.keys(item).length !== 0)
        .map((item) => new SkyblockInventoryItem(item));
      return armor;
    };
    /**
     * Collected fairy souls
     * @type {number}
     */
    this.fairySouls = data.m.fairy_souls_collected || 0;
    /**
     * Amount of fairy soul exchanges
     * @type {number}
     */
    this.fairyExchanges = data.m.fairyExchanges || 0;
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
     * Skyblock member enderchest
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getEnderChest = async () => {
      const chest = data.m.ender_chest_contents;
      if (!chest) return [];

      try {
        const enderChest = await decode(chest.data);

        const edited = [];
        for (let i = 0; i < enderChest.length; i++) {
          if (!enderChest[i].id) {
            continue;
          }
          edited.push(new SkyblockInventoryItem(enderChest[i]));
        }
        return edited;
      } catch (e) {
        return e;
      }
    };
    /**
     * Skyblock member inventory
     * @return {Promise<SkyblockInventoryItem[]>}
     */
    this.getInventory = async () => {
      let inventory = data.m.inv_contents;
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
      } catch (e) {
        return e;
      }
    };
    /**
     * Skyblock coins in purse
     * @type {number}
     */
    this.purse = data.m.coin_purse || 0;
    /**
     * Skyblock member stats
     * @type {SkyblockMemberStats}
     */
    this.stats = data.m.stats ? single(data.m.stats) : null;
    /**
     * Skyblock pets
     * @type {SkyblockPet[]}
     */
    this.pets = data.m.pets ? data.m.pets.map((pet) => new SkyblockPet(pet)) : [];
    /**
     * Skyblock jacob data
     * @type {jacobData}
     */
    this.jacob = getJacobData(data);
  }
  /**
   * Skyblock Member pet score
   * @return {number}
   */
  getPetScore () {
    return this.pets.reduce((acc, cur) => acc + (cur.petScore || 0), 0);
  }
  /**
   * UUID
   * @return {string}
   */
  toString () {
    return this.uuid;
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
    skillsObject[skill] = getLevelByXp(data[`experience_skill_${skill}`], skill, skill === 'farming' ? (data.jacob2 && data.jacob2.perks && data.jacob2.perks.farming_level_cap) || 0 : null);
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
 * @param {object} data
 * @return {jacobData}
 */
function getJacobData (data) {
  if (!data.m.jacob2) {
    return {
      medals: {
        bronze: 0,
        silver: 0,
        gold: 0
      },
      perks: {
        doubleDrops: 0,
        farmingLevelCap: 0
      },
      contests: {}
    };
  }
  return {
    medals: data.m.jacob2.medals_inv ?
      { bronze: data.m.jacob2.medals_inv.bronze || 0, silver: data.m.jacob2.medals_inv.silver || 0, gold: data.m.jacob2.medals_inv.gold || 0 } :
      { bronze: 0, silver: 0, gold: 0 },
    perks: data.m.jacob2.perks ?
      { doubleDrops: data.m.jacob2.perks.doubleDrops || 0, farmingLevelCap: data.m.jacob2.perks.farmingLevelCap || 0 } :
      { doubleDrops: 0, farmingLevelCap: 0 },
    contests: data.m.jacob2.contests || {}
  };
}
/**
 * @typedef {object} SkyblockMemberArmor Equipped armor
 * @property {SkyblockInventoryItem|null} helmet Helmet
 * @property {SkyblockInventoryItem|null} chestplate Chestplate
 * @property {SkyblockInventoryItem|null} leggings Leggings
 * @property {SkyblockInventoryItem|null} boots Boots
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
 * @typedef {object} jacobData
 * @property {object} medals Medals
 * @property {number} medals.bronze Bronze medals
 * @property {number} medals.silver Silver medals
 * @property {number} medals.gold Gold medals
 * @property {object} perks Perks
 * @property {number} perks.doubleDrops Double drops
 * @property {number} perks.farmingLevelCap Farming level cap
 * @property {object} contests Contests
 */
module.exports = SkyblockMember;
