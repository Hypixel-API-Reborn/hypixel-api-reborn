import Divide from '../../../Utils/Divide.js';

class CaptureTheWool {
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  killsWithWool: number;
  deathsWithWool: number;
  KDRatioWithWool: number;
  woolCaptured: number;
  woolStolen: number;
  woolCaptureStolenRatio: number;
  killsOnWoolholder: number;
  goldSpent: number;
  goldEarned: number;
  wins: number;
  losses: number;
  WLRatio: number;
  fastestWoolCapture: number;
  fastestWin: number;
  deathsToWoolholder: number;
  longestGame: number;
  mostGoldEarned: number;
  mostKillsAndAssists: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.stats?.kills || 0;
    this.assists = data?.stats?.assists || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.killsWithWool = data?.stats?.kills_with_wool || 0;
    this.deathsWithWool = data?.stats?.deaths_with_wool || 0;
    this.KDRatioWithWool = Divide(this.killsWithWool, this.deathsWithWool);
    this.woolCaptured = data?.stats?.wools_captured || 0;
    this.woolStolen = data?.stats?.wools_stolen || 0;
    this.woolCaptureStolenRatio = Divide(this.woolCaptured, this.woolStolen);
    this.killsOnWoolholder = data?.stats?.kills_on_woolholder || 0;
    this.goldSpent = data?.stats?.gold_spent || 0;
    this.goldEarned = data?.stats?.gold_earned || 0;
    this.wins = data?.stats?.participated_wins || 0;
    this.losses = data?.stats?.participated_losses || 0;
    this.WLRatio = Divide(this.wins, this.losses);
    this.fastestWoolCapture = data?.stats?.fastest_wool_capture || 0;
    this.fastestWin = data?.stats?.fastest_win || 0;
    this.deathsToWoolholder = data?.stats?.deaths_to_woolholder || 0;
    this.longestGame = data?.stats?.longest_game || 0;
    this.mostGoldEarned = data?.stats?.most_gold_earned || 0;
    this.mostKillsAndAssists = data?.stats?.most_kills_and_assists || 0;
  }
}

export default CaptureTheWool;
