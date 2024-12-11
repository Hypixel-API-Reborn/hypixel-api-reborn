import Divide from '../../../Utils/Divide.js';
import SpeedUHCMode from './SpeedUHCMode.js';

class SpeedUHC {
  coins: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  winstreak: number;
  killstreak: number;
  blocksBroken: number;
  blocksPlaced: number;
  quits: number;
  itemsEnchanted: number;
  assists: number;
  solo: SpeedUHCMode;
  soloNormal: SpeedUHCMode;
  soloInsane: SpeedUHCMode;
  team: SpeedUHCMode;
  teamNormal: SpeedUHCMode;
  teamInsane: SpeedUHCMode;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = data?.kills || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.losses = data?.losses || 0;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames = data?.games || 0;
    this.winstreak = data?.win_streak || 0;
    this.killstreak = data?.killstreak || 0;
    this.blocksBroken = data?.blocks_broken || 0;
    this.blocksPlaced = data?.blocks_placed || 0;
    this.quits = data?.quits || 0;
    this.itemsEnchanted = data?.items_enchanted || 0;
    this.assists = data?.assists || 0;
    this.solo = new SpeedUHCMode(data, 'solo');
    this.soloNormal = new SpeedUHCMode(data, 'solo_normal');
    this.soloInsane = new SpeedUHCMode(data, 'solo_insane');
    this.team = new SpeedUHCMode(data, 'team');
    this.teamNormal = new SpeedUHCMode(data, 'team_normal');
    this.teamInsane = new SpeedUHCMode(data, 'team_insane');
  }
}

export default SpeedUHC;
