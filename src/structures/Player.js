const SkyWars = require('./MiniGames/SkyWars');
const BedWars = require('./MiniGames/BedWars');
const UHC = require('./MiniGames/UHC');
const SpeedUHC = require('./MiniGames/SpeedUHC');
const MurderMystery = require('./MiniGames/MurderMystery');
const Duels = require('./MiniGames/Duels');
const CrazyWalls = require('./MiniGames/CrazyWalls');
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

class Player {
  constructor (data, fakethis) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.history = data.knownAliases;
    this.rank = getRank(data);
    this.mcVersion = data.mcVersionRp || null;
    this.lastLoginTimestamp = data.lastLogin || null;
    this.firstLoginTimestamp = data.firstLogin || null;
    this.lastLogin = data.lastLogin ? new Date(data.lastLogin) : null;
    this.lastLogout = data.lastLogout ? new Date(data.lastLogout) : null;
    this.lastLogoutTimestamp = data.lastLogout || null;
    this.firstLogin = data.firstLogin ? new Date(data.firstLogin) : null;
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    if (this.rank === 'MVP+' || this.rank === 'MVP++') {
      this.plusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    } else {
      this.plusColor = null;
    }
    this.guild = data.guild ? data.guild : null;
    this.karma = data.karma || 0;
    this.achievements = recursive(data.achievements);
    this.achievementPoints = data.achievementPoints || 0;
    this.totalExperience = data.networkExp || 0;
    this.level = getPlayerLevel(this.totalExperience) || 0;
    this.socialMedia = getSocialMedia(data.socialMedia) || [];
    this.giftsSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    this.giftsReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;

    this.isOnline = this.lastLoginTimestamp > this.lastLogoutTimestamp;
    this.getRecentGames = function () {
      return getRecentGames.call(fakethis, this.uuid, this);
    };

    this.stats = (data.stats ? {
      skywars: (data.stats.SkyWars ? new SkyWars(data.stats.SkyWars) : null),
      bedwars: (data.stats.Bedwars ? new BedWars(data.stats.Bedwars) : null),
      uhc: (data.stats.UHC ? new UHC(data.stats.UHC) : null),
      speedUHC: (data.stats.SpeedUHC ? new SpeedUHC(data.stats.SpeedUHC) : null),
      murdermystery: (data.stats.MurderMystery ? new MurderMystery(data.stats.MurderMystery) : null),
      duels: (data.stats.Duels ? new Duels(data.stats.Duels) : null),
      crazywalls: (data.stats.TrueCombat ? new CrazyWalls(data.stats.TrueCombat) : null),
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
        rank = 'Default';
    }
  }
  return rank;
}
/**
 *
 * @param {number} exp
 *
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
 *
 * @param {object} data
 *
 * @returns {Array}
 */

function getSocialMedia (data) {
  if (!data) return null;
  const links = data.links;
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Mixer', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'MIXER', 'HYPIXEL', 'DISCORD'];
  if (!links) return;
  return Object.keys(links).map(x => upperNames.indexOf(x)).filter(x => x !== -1).map(x => ({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}
module.exports = Player;
