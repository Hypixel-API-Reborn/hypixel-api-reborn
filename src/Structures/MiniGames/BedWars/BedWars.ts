import BedWarsBeds from './BedWarsBeds.js';
import BedWarsCollectedItems from './BedWarsCollectedItems.js';
import BedWarsDreamStats from './BedWarsDreamStats.js';
import BedWarsMode from './BedWarsMode.js';
import BedWarsPracticeStats from './Practice/BedWarsPracticeStats.js';
import Divide from '../../../Utils/Divide.js';
import type { BedWarsPrestige } from '../../../Types/Player.js';

function getBedWarsLevel(xp: number): number {
  let level = Math.floor(xp / 487000) * 100;
  xp = xp % 487000;
  if (500 > xp) return level + xp / 500;
  level++;
  if (1500 > xp) return level + (xp - 500) / 1000;
  level++;
  if (3500 > xp) return level + (xp - 1500) / 2000;
  level++;
  if (7000 > xp) return level + (xp - 3500) / 3500;
  level++;
  xp -= 7000;
  return level + xp / 5000;
}

const prestiges: BedWarsPrestige[] = [
  'Stone',
  'Iron',
  'Gold',
  'Diamond',
  'Emerald',
  'Sapphire',
  'Ruby',
  'Crystal',
  'Opal',
  'Amethyst',
  'Rainbow',
  'Iron Prime',
  'Gold Prime',
  'Diamond Prime',
  'Emerald Prime',
  'Sapphire Prime',
  'Ruby Prime',
  'Crystal Prime',
  'Opal Prime',
  'Amethyst Prime',
  'Mirror',
  'Light',
  'Dawn',
  'Dusk',
  'Air',
  'Wind',
  'Nebula',
  'Thunder',
  'Earth',
  'Water',
  'Fire',
  'Sunrise',
  'Eclipse',
  'Gamma',
  'Majestic',
  'Andesine',
  'Marine',
  'Element',
  'Galaxy',
  'Atomic',
  'Sunset',
  'Time',
  'Winter',
  'Obsidian',
  'Spring',
  'Ice',
  'Summer',
  'Spinel',
  'Autumn',
  'Mystic',
  'Eternal'
];

function getPrestige(level: number): BedWarsPrestige {
  const index = Math.floor(level / 100);
  if (index > prestiges.length - 1) return prestiges[prestiges.length - 1] || 'Eternal';
  return prestiges[index] || 'Stone';
}

class BedWars {
  tokens: number;
  level: number;
  experience: number;
  prestige: BedWarsPrestige;
  playedGames: number;
  wins: number;
  winStreak: number;
  kills: number;
  finalKills: number;
  losses: number;
  deaths: number;
  finalDeaths: number;
  collectedItemsTotal: BedWarsCollectedItems;
  beds: BedWarsBeds;
  KDR: number;
  FKDR: number;
  WLR: number;
  solo: BedWarsMode;
  doubles: BedWarsMode;
  threes: BedWarsMode;
  fours: BedWarsMode;
  '4v4': BedWarsMode;
  dream: BedWarsDreamStats;
  castle: BedWarsMode;
  oneBlock: BedWarsMode;
  practice: BedWarsPracticeStats;
  slumberTickets: number;
  totalSlumberTicket: number;
  constructor(data: Record<string, any>) {
    this.tokens = data?.coins || data?.tokens || 0;
    this.level = data?.Experience ? getBedWarsLevel(data?.Experience) : 0;
    this.experience = data?.Experience || 0;
    this.prestige = getPrestige(this.level);
    this.playedGames = data?.games_played_bedwars || 0;
    this.wins = data?.wins_bedwars || 0;
    this.winStreak = data?.winstreak || 0;
    this.kills = data?.kills_bedwars || 0;
    this.finalKills = data?.final_kills_bedwars || 0;
    this.losses = data?.losses_bedwars || 0;
    this.deaths = data?.deaths_bedwars || 0;
    this.finalDeaths = data?.final_deaths_bedwars || 0;
    this.collectedItemsTotal = new BedWarsCollectedItems(data);
    this.beds = new BedWarsBeds(data);
    this.KDR = Divide(this.kills, this.deaths);
    this.FKDR = Divide(this.finalKills, this.finalDeaths);
    this.WLR = Divide(this.wins, this.losses);
    this.solo = new BedWarsMode(data, 'eight_one');
    this.doubles = new BedWarsMode(data, 'eight_two');
    this.threes = new BedWarsMode(data, 'four_three');
    this.fours = new BedWarsMode(data, 'four_four');
    this['4v4'] = new BedWarsMode(data, 'two_four');
    this.dream = new BedWarsDreamStats(data);
    this.castle = new BedWarsMode(data, 'castle');
    this.oneBlock = new BedWarsMode(data, 'eight_one_oneblock');
    this.practice = new BedWarsPracticeStats(data);
    this.slumberTickets = data?.slumber?.tickets || 0;
    this.totalSlumberTicket = data?.slumber?.total_tickets || 0;
  }
}

export default BedWars;
