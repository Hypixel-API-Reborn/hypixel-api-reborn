import type { ArcadePartyGamesGame } from '../../../../Types/Player.ts';

class PartyGamesGame {
  bestScore: number;
  bestTime: number;
  kills: number;
  roundWins: number;
  totalScore: number;
  constructor(data: Record<string, any>, game: ArcadePartyGamesGame) {
    this.bestScore = data?.[`${game}_best_score_party`] || 0;
    this.bestTime = data?.[`${game}_best_time_party`] || 0;
    this.kills = data?.[`${game}_kills_party`] || 0;
    this.roundWins = data?.[`${game}_round_wins_party`] || 0;
    this.totalScore = data?.[`${game}_total_score_party`] || 0;
  }
}

export default PartyGamesGame;
