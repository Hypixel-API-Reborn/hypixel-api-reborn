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
    this.alphaWins = data?.[`alpha_wins_${key}`] || 0;
    this.bowKills = data?.[`bow_kills_${key}`] || 0;
    this.tokensPickedUp = data?.[`coins_pickedup_${key}`] || 0;
    this.deaths = data?.[`deaths_${key}`] || 0;
    this.detectiveWins = data?.[`detective_wins_${key}`] || 0;
    this.games = data?.[`games_${key}`] || 0;
    this.kills = data?.[`kills_${key}`] || 0;
    this.lastOneAlive = data?.[`last_one_alive_${key}`] || 0;
    this.longestTimeAsSurvivorSeconds = data?.[`longest_time_as_survivor_seconds_${key}`] || 0;
    this.murdererWins = data?.[`murderer_wins_${key}`] || 0;
    this.quickestDetectiveWinTimeSeconds = data?.[`quickest_detective_win_time_seconds_${key}`] || 0;
    this.quickestMurdererWinTimeSeconds = data?.[`quickest_murderer_win_time_seconds_${key}`] || 0;
    this.quickestShowdownWinTimeSeconds = data?.[`quickest_showdown_win_time_seconds_${key}`] || 0;
    this.showdownPotg = data?.[`showdown_potg_${key}`] || 0;
    this.suicides = data?.[`suicides_${key}`] || 0;
    this.survivorWins = data?.[`survivor_wins_${key}`] || 0;
    this.totalTimeSurvivedSeconds = data?.[`total_time_survived_seconds_${key}`] || 0;
    this.wasHero = data?.[`was_hero_${key}`] || 0;
    this.wins = data?.[`wins_${key}`] || 0;
  }
}

export default MurderMysteryGamemode;
