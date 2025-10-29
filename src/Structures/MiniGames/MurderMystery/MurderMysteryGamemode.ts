import type { MurderMysteryMapName, MurderMysteryMode } from '../../../Types/Player.ts';

class MurderMysteryGamemode {
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
  constructor(data: Record<string, any>, gamemode: MurderMysteryMode, map?: MurderMysteryMapName) {
    const key = `${gamemode}${map ? `_${map}` : ''}`;
    this.alphaWins = data?.[`alpha_wins_${key}`];
    this.bowKills = data?.[`bow_kills_${key}`];
    this.tokensPickedUp = data?.[`coins_pickedup_${key}`];
    this.deaths = data?.[`deaths_${key}`];
    this.detectiveWins = data?.[`detective_wins_${key}`];
    this.games = data?.[`games_${key}`];
    this.kills = data?.[`kills_${key}`];
    this.lastOneAlive = data?.[`last_one_alive_${key}`];
    this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${key}`];
    this.murdererWins = data?.[`murderer_wins_${key}`];
    this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${key}`];
    this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${key}`];
    this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${key}`];
    this.showdownPotg = data?.[`showdown_potg_${key}`];
    this.suicides = data?.[`suicides_${key}`];
    this.survivorWins = data?.[`survivor_wins_${key}`];
    this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${key}`];
    this.wasHero = data?.[`was_hero_${key}`];
    this.wins = data?.[`wins_${key}`];
  }
}

export default MurderMysteryGamemode;
