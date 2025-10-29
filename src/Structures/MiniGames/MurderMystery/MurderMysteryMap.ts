import MurderMysteryGamemode from './MurderMysteryGamemode.ts';
import type { MurderMysteryMapName } from '../../../Types/Player.ts';

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
    this.alphaWins = data?.[`alpha_wins_${map}`];
    this.bowKills = data?.[`bow_kills_${map}`];
    this.tokensPickedUp = data?.[`coins_pickedup_${map}`];
    this.deaths = data?.[`deaths_${map}`];
    this.detectiveWins = data?.[`detective_wins_${map}`];
    this.games = data?.[`games_${map}`];
    this.kills = data?.[`kills_${map}`];
    this.lastOneAlive = data?.[`last_one_alive_${map}`];
    this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${map}`];
    this.murdererWins = data?.[`murderer_wins_${map}`];
    this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${map}`];
    this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${map}`];
    this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${map}`];
    this.showdownPotg = data?.[`showdown_potg_${map}`];
    this.suicides = data?.[`suicides_${map}`];
    this.survivorWins = data?.[`survivor_wins_${map}`];
    this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${map}`];
    this.wasHero = data?.[`was_hero_${map}`];
    this.wins = data?.[`wins_${map}`];
    this.assassins = new MurderMysteryGamemode(data, 'MURDER_ASSASSINS', map);
    this.classic = new MurderMysteryGamemode(data, 'MURDER_CLASSIC', map);
    this.doubleUp = new MurderMysteryGamemode(data, 'MURDER_DOUBLE_UP', map);
    this.hardcode = new MurderMysteryGamemode(data, 'MURDER_HARDCORE', map);
    this.infection = new MurderMysteryGamemode(data, 'MURDER_INFECTION', map);
    this.showdown = new MurderMysteryGamemode(data, 'MURDER_SHOWDOWN', map);
  }
}

export default MurderMysteryMap;
