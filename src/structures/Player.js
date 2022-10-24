const SkyWars = require('./MiniGames/SkyWars');
const BedWars = require('./MiniGames/BedWars');
const UHC = require('./MiniGames/UHC');
const SpeedUHC = require('./MiniGames/SpeedUHC');
const MurderMystery = require('./MiniGames/MurderMystery');
const Duels = require('./MiniGames/Duels');
const BuildBattle = require('./MiniGames/BuildBattle');
const MegaWalls = require('./MiniGames/MegaWalls');
const CopsAndCrims = require('./MiniGames/CopsAndCrims');
const TNTGames = require('./MiniGames/TNTGames');
const SmashHeroes = require('./MiniGames/SmashHeroes');
const VampireZ = require('./MiniGames/VampireZ');
const BlitzSurvivalGames = require('./MiniGames/BlitzSurvivalGames');
const ArenaBrawl = require('./MiniGames/ArenaBrawl');
const Arcade = require('./MiniGames/Arcade');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Pit = require('./MiniGames/Pit');
const Color = require('./Color');
const Game = require('./Game');
const PlayerCosmetics = require('./PlayerCosmetics');
const { recursive } = require('../utils/removeSnakeCase');
const TurboKartRacers = require('./MiniGames/TurboKartRacers');
const Paintball = require('./MiniGames/Paintball');
const Quakecraft = require('./MiniGames/Quakecraft');
const Walls = require('./MiniGames/Walls');
const Warlords = require('./MiniGames/Warlords');
/**
 * Player class
 */
class Player {
  /**
   * @param {object} data Player data
   * @param {Record<string, any>} extraPayload extra data requested alongside player
   */
  constructor (data, extraPayload) {
    /**
     * Player nickname
     * @type {string}
     */
    this.nickname = data.displayname;
    /**
     * Player UUID
     * @type {string}
     */
    this.uuid = data.uuid;
    /**
     * Player nickname history known to Hypixel
     * @type {Array<string>}
     */
    this.history = data.knownAliases;
    /**
     * Player rank
     * @type {PlayerRank}
     */
    this.rank = getRank(data);
    /**
     * Player minecraft version
     * @type {string|null}
     */
    this.mcVersion = data.mcVersionRp || null;
    /**
     * Current chat channel, usually ALL, PARTY, or GUILD
     * @type {string|null}
     */
    this.channel = data.channel || null;
    /**
     * Timestamp when player last logged in
     * @type {number|null}
     */
    this.firstLoginTimestamp = data.firstLogin || null;
    /**
     * Timestamp when player last logged in as Date
     * @type {Date|null}
     */
    this.firstLogin = data.firstLogin ? new Date(data.firstLogin) : null;
    /**
     * Player's recently played game
     * @type {Game|null}
     */
    this.lastLoginTimestamp = data.lastLogin || null;
    /**
     * Timestamp when player first logged in
     * @type {number|null}
     */
    this.lastLogin = data.lastLogin ? new Date(data.lastLogin) : null;
    /**
     * Timestamp when player last logged out as Date
     * @type {Date|null}
     */
    this.lastLogoutTimestamp = data.lastLogout || null;
    /**
     * Timestamp when player first logged in as Date
     * @type {Date|null}
     */
    this.lastLogout = data.lastLogout ? new Date(data.lastLogout) : null;
    /**
     * Recently played game
     * @type {Game|null}
     */
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    /**
     * Player's plus color (must be a MVP+ rank)
     * @type {Color|null}
     */
    this.plusColor = this.rank === 'MVP+' || this.rank === 'MVP++' ? (data.rankPlusColor ? new Color(data.rankPlusColor) : new Color('RED')) : null;
    /**
     * MVP++ prefix color
     * @type {Color|null}
     */
    this.prefixColor = this.rank === 'MVP++' ? (data.monthlyRankColor ? new Color(data.monthlyRankColor) : new Color('GOLD')) : null;
    /**
     * Player karma
     * @type {number}
     */
    this.karma = data.karma || 0;
    /**
     * Player achievements
     * @type {Object}
     */
    this.achievements = recursive(data.achievements);
    /**
     * Player achievement points
     * @type {number}
     */
    this.achievementPoints = data.achievementPoints || 0;
    /**
     * Player total experience
     * @type {number}
     */
    this.totalExperience = data.networkExp || 0;
    /**
     * Player level
     * @type {number}
     */
    this.level = getPlayerLevel(this.totalExperience) || 0;
    /**
     * Player social media, if any
     * @type {Array<PlayerSocialMedia>}
     */
    this.socialMedia = getSocialMedia(data.socialMedia) || [];
    /**
     * Amount of gift bundles sent
     * @type {number}
     */
    this.giftBundlesSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    /**
     * Amount of gift bundles received
     * @type {number}
     */
    this.giftBundlesReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;
    /**
     * Amount of gifts sent
     * @type {number}
     */
    this.giftsSent = data.giftingMeta ? data.giftingMeta.giftsGiven || 0 : null;
    /**
     * Is player online?
     * @type {boolean}
     */
    this.isOnline = this.lastLoginTimestamp > this.lastLogoutTimestamp;
    /**
     * Last time player claimed the daily reward
     * @type {Date | null}
     */
    this.lastDailyReward = new Date(data.lastAdsenseGenerateTime) || null;
    /**
     * Last time player claimed the daily reward, as timestamp
     * @type {number | null}
     */
    this.lastDailyRewardTimestamp = data.lastAdsenseGenerateTime || null;
    /**
     * Total amount of Daily Rewards
     * @type {number | null}
     */
    this.totalRewards = data.totalRewards || null;
    /**
     * Total amount of Daily Rewards claimed
     * @type {number | null}
     */
    this.totalDailyRewards = data.totalDailyRewards || null;
    /**
     * Honestly no clue what this is specifically
     * @type {number | null}
     */
    this.rewardStreak = data.rewardStreak || null;
    /**
     * Current Daily Rewards streak
     * @type {number | null}
     */
    this.rewardScore = data.rewardScore || null;
    /**
     * Highest Daily Rewards streak
     * @type {number | null}
     */
    this.rewardHighScore = data.rewardHighScore || null;
    /**
     * Player leveling progress.
     * @type {LevelProgress}
     */
    this.levelProgress = playerLevelProgress(data);
    /**
     * Player's Guild if requested in options
     * @type {Guild|null}
     */
    this.guild = extraPayload?.guild || null;
    /**
     * Recent Games if requested in options
     * @type {RecentGame[]|null}
     */
    this.recentGames = extraPayload?.recentGames || null;
    /**
     * Player stats for each mini-game
     * @type {PlayerStats}
     */
    this.stats = (data.stats ? {
      skywars: (data.stats.SkyWars ? new SkyWars(data.stats.SkyWars, extraPayload?.rankedSW || null) : null),
      bedwars: (data.stats.Bedwars ? new BedWars(data.stats.Bedwars) : null),
      uhc: (data.stats.UHC ? new UHC(data.stats.UHC) : null),
      speeduhc: (data.stats.SpeedUHC ? new SpeedUHC(data.stats.SpeedUHC) : null),
      murdermystery: (data.stats.MurderMystery ? new MurderMystery(data.stats.MurderMystery) : null),
      duels: (data.stats.Duels ? new Duels(data.stats.Duels) : null),
      buildbattle: (data.stats.BuildBattle ? new BuildBattle(data.stats.BuildBattle) : null),
      megawalls: (data.stats.Walls3 ? new MegaWalls(data.stats.Walls3) : null),
      copsandcrims: (data.stats.MCGO ? new CopsAndCrims(data.stats.MCGO) : null),
      tntgames: (data.stats.TNTGames ? new TNTGames(data.stats.TNTGames) : null),
      smashheroes: (data.stats.SuperSmash ? new SmashHeroes(data.stats.SuperSmash) : null),
      vampirez: (data.stats.VampireZ ? new VampireZ(data.stats.VampireZ) : null),
      blitzsg: (data.stats.HungerGames ? new BlitzSurvivalGames(data.stats.HungerGames) : null),
      arena: (data.stats.Arena ? new ArenaBrawl(data.stats.Arena) : null),
      arcade: (data.stats.Arcade ? new Arcade({...data.stats.Arcade, ...data.achievements}) : null),
      paintball: (data.stats.Paintball ? new Paintball(data.stats.Paintball) : null),
      quakecraft: (data.stats.Quake ? new Quakecraft(data.stats.Quake) : null),
      turbokartracers: (data.stats.GingerBread ? new TurboKartRacers(data.stats.GingerBread) : null),
      walls: (data.stats.Walls ? new Walls(data.stats.Walls) : null),
      warlords: (data.stats.Battleground ? new Warlords(data.stats.Battleground) : null),
      pit: null
    } : null);
    /**
     * User's current language
     * @type {string}
     * @default ENGLISH Default to english
     */
    this.userLanguage = data.userLanguage || 'ENGLISH';
    /**
     * Claimed Leveling Rewards
     * @type {number[]}
     */
    this.claimedLevelingRewards = parseClaimedRewards(data) || [];
    /**
     * Global Cosmetics a player owns
     * @type {PlayerCosmetics}
     */
    this.globalCosmetics = new PlayerCosmetics(data) || null;
    /**
     * Time at which the ranks were purchased. Can be all null if bought a long time ago, and some values can be null if player bought directly a rank above that
     * @type {RanksPurchaseTime}
     */
    this.ranksPurchaseTime = {
      VIP: data.levelUp_VIP ? new Date(data.levelUp_VIP) : null,
      VIP_PLUS: data.levelUp_VIP_PLUS ? new Date(data.levelUp_VIP_PLUS) : null,
      MVP: data.levelUp_MVP ? new Date(data.levelUp_MVP) : null,
      MVP_PLUS: data.levelUp_MVP_PLUS ? new Date(data.levelUp_MVP_PLUS) : null
    };
  }
  /**
   * Player Name ( at least last known to hypixel )
   * @return {string}
   */
  toString () {
    return this.nickname;
  }
}

/**
* @async
* @description Get player's rank
* @param {object} player
* @return {string}
*/
function getRank (player) {
  let rank;
  if (player.prefix) {
    rank = player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '');
  } else if (player.rank && player.rank !== 'NORMAL') {
    switch (player.rank) {
      case 'YOUTUBER':
        rank = 'YouTube';
        break;
      case 'GAME_MASTER':
        rank = 'Game Master';
        break;
      case 'ADMIN':
        rank = 'Admin';
        break;
    }
  } else {
    switch (player.newPackageRank) {
      case 'MVP_PLUS':
        rank = player.monthlyPackageRank && player.monthlyPackageRank === 'SUPERSTAR' ? 'MVP++' : 'MVP+';
        break;
      case 'MVP':
        rank = 'MVP';
        break;
      case 'VIP_PLUS':
        rank = 'VIP+';
        break;
      case 'VIP':
        rank = 'VIP';
        break;
      default:
        rank = player.monthlyPackageRank && player.monthlyPackageRank === 'SUPERSTAR' ? 'MVP++' : 'Default';
    }
  }
  return rank;
}
/**
 * @param {number} exp
 * @return {number} Level rounded to the nearest cent
 */
function getPlayerLevel (exp) {
  const base = 10000;
  const growth = 2500;
  const reversePqPrefix = -(base - 0.5 * growth) / growth;
  const reverseConst = reversePqPrefix * reversePqPrefix;
  const growthDivides2 = 2 / growth;
  const num = 1 + reversePqPrefix + Math.sqrt(reverseConst + growthDivides2 * exp);
  const level = Math.round(num * 100) / 100;
  return level;
}
/**
 * @description EXP to next player level.
 * @param {object} player
 * @returns {number}
 */
function xpToNextLevel (player) {
  const lvl = getPlayerLevel(player.networkExp);
  const xpToNext = (2500 * Math.floor(lvl)) + 5000;
  if (player.networkExp < 10000) return 10000;
  return xpToNext;
}
/**
 * @param {Player} player
 * @returns {number}
 */
function levelToXP (player) {
  let level = Number(Math.floor(getPlayerLevel(player.networkExp)));
  level = level - 1;
  const xp = 1250 * level ** 2 + 8750 * level;
  return xp;
}
/**
* Player Network level Progress
* @param {Object} player player data
* @returns {{xpToNext:number,currentXP:number,percent:number,remainingXP:number,percentRemaining:number}}
*/
function playerLevelProgress (player) {
  const xpFromLevel = levelToXP(player);
  let currentXP = (player.networkExp - xpFromLevel);
  const xpToNext = xpToNextLevel(player);
  const remainingXP = (xpToNext - currentXP) + 2500;
  currentXP = currentXP - 2500;
  const percent = (Math.round(((currentXP / xpToNext) * 100) * 100) / 100);
  const percentRemaining = Math.round((100 - percent) * 100) / 100;
  return {
    xpToNext,
    currentXP,
    remainingXP,
    percent,
    percentRemaining
  };
}
/**
 * @param {object} data
 * @return {Array<{name:string,link:string,id:string}>}
 */
function getSocialMedia (data) {
  if (!data) return null;
  const links = data.links;
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'HYPIXEL', 'DISCORD'];
  if (!links) return null;
  return Object.keys(links).map((x) => upperNames.indexOf(x)).filter((x) => x !== -1).map((x) => ({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}
/**
 *
 * @param {object} data
 * @returns {number[]}
 */
function parseClaimedRewards (data) {
  if (!data) return null;
  return Object.keys(data).map((x) => x.match(/levelingReward_(\d+)/)).filter((x) => x).map((x) => parseInt(x[1], 10));
}
/**
 * @typedef {string} PlayerRank
 * * `Default`
 * * `VIP`
 * * `VIP+`
 * * `MVP`
 * * `MVP+`
 * * `MVP++`
 * * `Game Master`
 * * `Admin`
 * * `YouTube`
 */
/**
 * @typedef {Object} PlayerSocialMedia
 * Player social media object
 * @property {string} name Twitter, YouTube, Instagram, Twitch, Hypixel, Discord
 * @property {string} link Link to social media
 * @property {string} id TWITTER, YOUTUBE, INSTRAGRAM, TWITCH, HYPIXEL, DISCORD
 */
/**
 * @typedef {Object|null} PlayerStats
 * Player stats for each mini-game. `null` if player has no stats.
 * <br>
 * Usage: `<Player>.stats.skywars`
 * @property {SkyWars|null} skywars SkyWars
 * @property {BedWars|null} bedwars BedWars
 * @property {UHC|null} uhc UHC
 * @property {SpeedUHC|null} speedUHC Speed UHC
 * @property {MurderMystery|null} murdermystery Murder Mystery
 * @property {Duels|null} duels Duels
 * @property {BuildBattle|null} buildbattle BuildBattle
 * @property {MegaWalls|null} megawalls MegaWalls
 * @property {CopsAndCrims|null} copsandcrims Cops and Crims
 * @property {TNTGames|null} tntgames The TNT Games
 * @property {SmashHeroes|null} smashheroes Smash Heroes
 * @property {VampireZ|null} vampirez VampireZ
 * @property {BlitzSurvivalGames|null} blitzsg Blitz Survival Games
 * @property {ArenaBrawl|null} arena Arena Brawl
 * @property {Arcade|null} arcade Arcade
 */
/**
 * @typedef {Object} RanksPurchaseTime
 * Time at which ranks were purchased. Beware, even if a player has MVP+(+), every value here *could* be null
 * @property {Date|null} VIP VIP rank
 * @property {Date|null} VIP_PLUS VIP+ rank
 * @property {Date|null} MVP MVP rank
 * @property {Date|null} MVP_PLUS MVP+ rank
 */
/**
 * @typedef {Object} LevelProgress
 * @property {number} xpToNext Total XP to a player's next level.
 * @property {number} remainingXP XP to the player's next level.
 * @property {number} currentXP XP the player current has.
 * @property {number} percent Player level progress as a percentage.
 * @property {number} percentRemaining Remaining percentage of the percent value.
 */
module.exports = Player;
