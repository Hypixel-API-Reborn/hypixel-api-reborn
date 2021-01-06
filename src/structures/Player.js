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
const getRecentGames = require('../API/getRecentGames');
const Color = require('./Color');
const Game = require('./Game');
const { recursive } = require('../utils/removeSnakeCase');
/**
 * Player class
 * @param {object} data Player data
 */
class Player {
  constructor (data, fakethis) {
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
     * Timestamp when player last logged in
     * @type {number}
     */
    this.firstLoginTimestamp = data.firstLogin || null;
    /**
     * Timestamp when player last logged in as Date
     * @type {Date}
     */
    this.firstLogin = data.firstLogin ? new Date(data.firstLogin) : null;
    /**
     * Player's recently played game
     * @type {Game|null}
     */
    this.lastLoginTimestamp = data.lastLogin || null;
    /**
     * Timestamp when player first logged in
     * @type {number}
     */
    this.lastLogin = data.lastLogin ? new Date(data.lastLogin) : null;
    /**
     * Timestamp when player last logged out as Date
     * @type {Date}
     */
    this.lastLogoutTimestamp = data.lastLogout || null;
    /**
     * Timestamp when player first logged in as Date
     * @type {Date}
     */
    this.lastLogout = data.lastLogout ? new Date(data.lastLogout) : null;
    /**
     * Recently played game
     * @type {Game|null}
     */
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    if (this.rank === 'MVP+' || this.rank === 'MVP++') {
    /**
     * Player's plus color (must be a MVP+ rank)
     * @type {Color|null}
     */
      this.plusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    } else {
      this.plusColor = null;
    }
    /**
     * Player's guild. Guild option must be `true`
     * @type {Guild}
     */
    this.guild = data.guild ? data.guild : null;
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
     * Amount of gifts sent
     * @type {number}
     */
    this.giftsSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    /**
     * Amount of gifts received
     * @type {number}
     */
    this.giftsReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;
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
     * Player recent games
     * @returns {Promise<Array<RecentGame>>}
     */
    this.getRecentGames = function () {
      return getRecentGames.call(fakethis, this.uuid, this);
    };
    /**
     * Player stats for each mini-game
     * @type {PlayerStats}
     */
    this.stats = (data.stats ? {
      skywars: (data.stats.SkyWars ? new SkyWars(data.stats.SkyWars) : null),
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
      arena: (data.stats.Arena ? new ArenaBrawl(data.stats.Arena) : null)
    } : null);
  }
}

/**
* @async
* @description Get player's rank
* @param {object} player
* @returns {string}
*/
function getRank (player) {
  let rank;
  if (player.prefix) {
    rank = player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '');
  } else if (player.rank && player.rank !== 'NORMAL') {
    switch (player.rank) {
      case 'MODERATOR':
        rank = 'Moderator';
        break;
      case 'YOUTUBER':
        rank = 'YouTube';
        break;
      case 'HELPER':
        rank = 'Helper';
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
 * @returns {number}
 */
function getPlayerLevel (exp) {
  const BASE = 10000;
  const GROWTH = 2500;
  const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
  const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
  const GROWTH_DIVIDES_2 = 2 / GROWTH;
  const num = 1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp);
  const level = Math.round(num * 100) / 100;
  return level;
}

/**
 * @param {object} data
 * @returns {Array<{name:string,link:string,id:string}>}
 */
function getSocialMedia (data) {
  if (!data) return null;
  const links = data.links;
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'HYPIXEL', 'DISCORD'];
  if (!links) return;
  return Object.keys(links).map(x => upperNames.indexOf(x)).filter(x => x !== -1).map(x => ({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}
/**
 * @typedef {string} PlayerRank
 * * `Default`
 * * `VIP`
 * * `VIP+`
 * * `MVP`
 * * `MVP+`
 * * `MVP++`
 * * `Helper`
 * * `Moderator`
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
 */
module.exports = Player;
