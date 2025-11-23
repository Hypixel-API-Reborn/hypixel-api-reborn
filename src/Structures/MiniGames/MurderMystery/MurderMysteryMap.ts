import MurderMysteryGamemode from './MurderMysteryGamemode.js';
import type { MurderMysteryMapName } from '../../../Types/Player.js';

class MurderMysteryMap {
  alphaWins: number;
  bowKills: number;
  tokensPickedUp: number;
  deaths: number;
  detectiveWins: number;
  games: number;
  kills: number;
  lastOneAlive: number;
  longestTimeAsSurvivorSeconds: number;
  murdererWins: number;
  quickestDetectiveWinTimeSeconds: number;
  quickestMurdererWinTimeSeconds: number;
  quickestShowdownWinTimeSeconds: number;
  showdownPotg: number;
  suicides: number;
  survivorWins: number;
  totalTimeSurvivedSeconds: number;
  wasHero: number;
  wins: number;
  assassins: MurderMysteryGamemode;
  classic: MurderMysteryGamemode;
  doubleUp: MurderMysteryGamemode;
  hardcode: MurderMysteryGamemode;
  infection: MurderMysteryGamemode;
  showdown: MurderMysteryGamemode;
  constructor(data: Record<string, any>, map: MurderMysteryMapName) {
    this.alphaWins = data?.[`alpha_wins_${map}`] || 0;
    this.bowKills = data?.[`bow_kills_${map}`] || 0;
    this.tokensPickedUp = data?.[`coins_pickedup_${map}`] || 0;
    this.deaths = data?.[`deaths_${map}`] || 0;
    this.detectiveWins = data?.[`detective_wins_${map}`] || 0;
    this.games = data?.[`games_${map}`] || 0;
    this.kills = data?.[`kills_${map}`] || 0;
    this.lastOneAlive = data?.[`last_one_alive_${map}`] || 0;
    this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${map}`] || 0;
    this.murdererWins = data?.[`murderer_wins_${map}`] || 0;
    this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${map}`] || 0;
    this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${map}`] || 0;
    this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${map}`] || 0;
    this.showdownPotg = data?.[`showdown_potg_${map}`] || 0;
    this.suicides = data?.[`suicides_${map}`] || 0;
    this.survivorWins = data?.[`survivor_wins_${map}`] || 0;
    this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${map}`] || 0;
    this.wasHero = data?.[`was_hero_${map}`] || 0;
    this.wins = data?.[`wins_${map}`] || 0;
    this.assassins = new MurderMysteryGamemode(data, 'MURDER_ASSASSINS', map);
    this.classic = new MurderMysteryGamemode(data, 'MURDER_CLASSIC', map);
    this.doubleUp = new MurderMysteryGamemode(data, 'MURDER_DOUBLE_UP', map);
    this.hardcode = new MurderMysteryGamemode(data, 'MURDER_HARDCORE', map);
    this.infection = new MurderMysteryGamemode(data, 'MURDER_INFECTION', map);
    this.showdown = new MurderMysteryGamemode(data, 'MURDER_SHOWDOWN', map);
  }
}

export default MurderMysteryMap;
