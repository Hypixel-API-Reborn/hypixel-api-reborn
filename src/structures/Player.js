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

const Color = require('./Color');
const Game = require('./Game');

class Player {
  constructor (data) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.history = data.knownAliases;
    this.rank = getRank(data);
    this.mcVersion = data.mcVersionRp || null;
    this.lastLogin = data.lastLogin || null;
    this.firstLogin = data.firstLogin || null;
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    if (this.rank === 'MVP+' || this.rank === 'MVP++') {
      this.plusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    } else {
      this.plusColor = null;
    }
    this.guild = data.guild ? data.guild : null;
    this.karma = data.karma || 0;
    this.achievementPoints = data.achievementPoints || 0;
    this.totalExperience = data.networkExp || 0;
    this.level = getPlayerLevel(this.totalExperience) || 0;
    this.socialmedia = getSocialMedia(data.socialMedia) || [];

    this.giftsSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    this.giftsReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;

    this.isOnline = this.lastLogin > data.lastLogout;

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

  const media = [];
  if (!links) return;
  if (links.TWITTER !== undefined) {
    media.push({ name: 'Twitter', link: links.TWITTER });
  }
  if (links.YOUTUBE !== undefined) {
    media.push({ name: 'YouTube', link: links.YOUTUBE });
  }
  if (links.INSTAGRAM !== undefined) {
    media.push({ name: 'Instagram', link: links.INSTAGRAM });
  }
  if (links.TWITCH !== undefined) {
    media.push({ name: 'Twitch', link: links.TWITCH });
  }
  if (links.MIXER !== undefined) {
    media.push({ name: 'Mixer', link: links.MIXER });
  }
  if (links.HYPIXEL !== undefined) {
    media.push({ name: 'Hypixel', link: links.HYPIXEL });
  }
  if (links.DISCORD !== undefined) {
    media.push({ name: 'Discord', link: links.DISCORD });
  }
  return media;
}
module.exports = Player;
