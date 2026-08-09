import WoolWarsClass from './WoolWarsClass.js';
import WoolWarsSettings from './WoolWarsSettings.js';
import { Divide } from '../../../../Utils/index.js';
import type { WoolGamesWoolWarsClassName } from '../../../../Types/index.js';

class WoolWars {
  selectedClass: WoolGamesWoolWarsClassName | 'None';
  kills: number;
  assists: number;
  deaths: number;
  killDeathRatio: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  woolPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerupsGotten: number;
  settings: WoolWarsSettings;
  assault: WoolWarsClass;
  tank: WoolWarsClass;
  golem: WoolWarsClass;
  swordsman: WoolWarsClass;
  engineer: WoolWarsClass;
  archer: WoolWarsClass;
  constructor(data: Record<string, any>) {
    this.selectedClass = data?.selected_class ?? 'None';
    this.kills = data?.stats?.kills ?? 0;
    this.assists = data?.stats?.assists ?? 0;
    this.deaths = data?.stats?.deaths ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.gamesPlayed = data?.stats?.games_played ?? 0;
    this.wins = data?.stats?.wins ?? 0;
    this.losses = this.gamesPlayed - this.wins;
    this.winLossRatio = Divide(this.wins, this.losses);
    this.woolPlaced = data?.stats?.wool_placed ?? 0;
    this.blocksBroken = data?.stats?.blocks_broken ?? 0;
    this.placeBreakRatio = Divide(this.woolPlaced, this.blocksBroken);
    this.powerupsGotten = data?.powerups_gotten ?? 0;
    this.settings = new WoolWarsSettings(data?.settings ?? {});
    this.assault = new WoolWarsClass(data, 'ASSAULT');
    this.tank = new WoolWarsClass(data, 'TANK');
    this.golem = new WoolWarsClass(data, 'GOLEM');
    this.swordsman = new WoolWarsClass(data, 'SWORDSMAN');
    this.engineer = new WoolWarsClass(data, 'ENGINEER');
    this.archer = new WoolWarsClass(data, 'ARCHER');
  }
}

export default WoolWars;
