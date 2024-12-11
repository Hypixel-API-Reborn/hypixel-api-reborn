import Divide from '../../../Utils/Divide.js';
import SkyWarsMode from './SkyWarsMode.js';
import SkyWarsModeStats from './SkyWarsModeStats.js';
import SkyWarsPackages from './SkyWarsPackages.js';
import type { SkyWarsPrestige } from '../../../Types/Player.js';

function getSkyWarsPrestige(level: number): SkyWarsPrestige {
  if (60 <= level) return 'Mythic';
  return (['Iron', 'Iron', 'Gold', 'Diamond', 'Emerald', 'Sapphire', 'Ruby', 'Crystal', 'Opal', 'Amethyst', 'Rainbow'][
    Math.floor(level / 5)
  ] || 'Iron') as SkyWarsPrestige;
}

function getSkyWarsLevel(xp: number): number {
  const totalXp = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  if (0 === xp) return 0;
  if (15000 <= xp) return Math.floor((xp - 15000) / 10000 + 12);
  const level = totalXp.findIndex((x) => 0 < x * 10 - xp);
  return -1 === level ? 0 : level;
}

function getSkyWarsLevelProgress(xp: number) {
  const totalXp: number[] = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  const xpToNextLvl: number[] = [0, 2, 5, 8, 10, 25, 50, 100, 150, 250, 400, 500];
  let percent;
  let xpToNextLevel;
  let currentLevelXp = xp;
  if (15000 <= xp) {
    currentLevelXp -= 15000;
    if (0 === currentLevelXp) return { currentLevelXp: 0, xpToNextLevel: 10000, percent: 0, xpNextLevel: 10000 };
    if (10000 < currentLevelXp) {
      do {
        currentLevelXp -= 10000;
      } while (10000 <= currentLevelXp);
    }
    xpToNextLevel = 10000 - currentLevelXp;
    percent = Math.round(currentLevelXp) / 100;
    const percentRemaining = Math.round((100 - percent) * 100) / 100;
    return { currentLevelXp, xpToNextLevel, percent, xpNextLevel: 10000, percentRemaining };
  }
  const totalXptoNextLevel = (xpToNextLvl?.[totalXp.findIndex((x) => 0 < x * 10 - xp)] || 0) * 10;
  for (let i = 0; i < xpToNextLvl.length; i++) {
    if (0 > currentLevelXp - (xpToNextLvl?.[i] || 0) * 10) break;
    currentLevelXp -= (xpToNextLvl?.[i] || 0) * 10;
  }
  xpToNextLevel = totalXptoNextLevel - currentLevelXp;
  percent = Math.round((currentLevelXp / totalXptoNextLevel) * 10000) / 100;
  return { currentLevelXp, xpToNextLevel, percent, xpNextLevel: totalXptoNextLevel };
}

class SkyWars {
  coins: number;
  souls: number;
  tokens: number;
  experience: number;
  level: number;
  levelProgress: any;
  levelFormatted: string | null;
  prestige: SkyWarsPrestige;
  opals: number;
  avarice: number;
  tenacity: number;
  shards: number;
  angelOfDeathLevel: number;
  killstreak: number;
  kills: number;
  voidKills: number;
  meleeKills: number;
  bowKills: number;
  mobKills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  gamesPlayed: number;
  survivedPlayers: number;
  chestsOpened: number;
  timePlayed: number;
  shard: number;
  longestBowShot: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  fastestWin: number;
  heads: number;
  blocksPlaced: number;
  blocksBroken: number;
  eggThrown: number;
  enderpearlsThrown: number;
  solo: SkyWarsModeStats;
  team: SkyWarsModeStats;
  mega: SkyWarsMode;
  megaDoubles: SkyWarsMode;
  lab: SkyWarsMode;
  packages: SkyWarsPackages;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || 0;
    this.souls = data?.souls || 0;
    this.tokens = data?.cosmetic_tokens || 0;
    this.experience = data?.skywars_experience || 0;
    this.level = getSkyWarsLevel(data?.skywars_experience);
    this.levelProgress = getSkyWarsLevelProgress(data?.skywars_experience);
    this.levelFormatted = data?.levelFormatted
      ? data?.levelFormatted
          ?.replace(/§l/gm, '**')
          ?.replace(/§([a-f]|[1-9])/gm, '')
          ?.replace(/§r/gm, '')
      : null;
    this.prestige = getSkyWarsPrestige(this.level);
    this.opals = data?.opals || 0;
    this.avarice = data?.avarice || 0;
    this.tenacity = data?.tenacity || 0;
    this.shards = data?.shard || 0;
    this.angelOfDeathLevel = data?.angel_of_death_level || 0;
    this.killstreak = data?.killstreak || 0;
    this.kills = data?.kills || 0;
    this.voidKills = data?.void_kills || 0;
    this.meleeKills = data?.melee_kills || 0;
    this.bowKills = data?.bow_kills || 0;
    this.mobKills = data?.mob_kills || 0;
    this.assists = data?.assists || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(data?.kills, data?.deaths);
    this.wins = data?.wins || 0;
    this.losses = data?.losses || 0;
    this.WLR = Divide(data?.wins, data?.losses);
    this.gamesPlayed = data?.games || 0;
    this.survivedPlayers = data?.survived_players || 0;
    this.chestsOpened = data?.chests_opened || 0;
    this.timePlayed = data?.time_played || 0;
    this.shard = data?.shard || 0;
    this.longestBowShot = data?.longest_bow_shot || 0;
    this.arrowsShot = data?.arrows_shot || 0;
    this.arrowsHit = data?.arrows_hit || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsShot);
    this.fastestWin = data?.fastest_win || 0;
    this.heads = data?.heads || 0;
    this.blocksPlaced = data?.blocks_placed || 0;
    this.blocksBroken = data?.blocks_broken || 0;
    this.eggThrown = data?.egg_thrown || 0;
    this.enderpearlsThrown = data?.enderpearls_thrown || 0;
    this.solo = new SkyWarsModeStats(data, 'solo');
    this.team = new SkyWarsModeStats(data, 'team');
    this.mega = new SkyWarsMode(data, 'mega');
    this.megaDoubles = new SkyWarsMode(data, 'mega_doubles');
    this.lab = new SkyWarsMode(data, 'lab');
    this.packages = new SkyWarsPackages(data?.packages || []);
  }
}

export default SkyWars;
