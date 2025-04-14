import Divide from '../../../Utils/Divide.js';
import WoolWarsClass from './WoolWarsClass.js';
import type { WoolWarsClassNames } from '../../../Types/Player.js';

class WoolWars {
  selectedClass: WoolWarsClassNames | 'None';
  wins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDRatio: number;
  gamesPlayed: number;
  woolsPlaced: number;
  blocksBroken: number;
  placeBreakRatio: number;
  powerUps: number;
  assault: WoolWarsClass;
  tank: WoolWarsClass;
  golem: WoolWarsClass;
  swordsman: WoolWarsClass;
  engineer: WoolWarsClass;
  archer: WoolWarsClass;
  constructor(data: Record<string, any>) {
    this.selectedClass = data?.selected_class || 'None';
    this.wins = data?.stats?.wins || 0;
    this.kills = data?.stats?.kills || 0;
    this.assists = data?.stats?.assists || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.gamesPlayed = data?.stats?.games_played || 0;
    this.woolsPlaced = data?.stats?.wool_placed || 0;
    this.blocksBroken = data?.stats?.blocks_broken || 0;
    this.placeBreakRatio = Divide(this.woolsPlaced, this.blocksBroken);
    this.powerUps = data?.powerups_gotten || 0;
    this.assault = new WoolWarsClass(data?.stats?.classes, 'ASSAULT');
    this.tank = new WoolWarsClass(data?.stats?.classes, 'TANK');
    this.golem = new WoolWarsClass(data?.stats?.classes, 'GOLEM');
    this.swordsman = new WoolWarsClass(data?.stats?.classes, 'SWORDSMAN');
    this.engineer = new WoolWarsClass(data?.stats?.classes, 'ENGINEER');
    this.archer = new WoolWarsClass(data?.stats?.classes, 'ARCHER');
  }
}

export default WoolWars;
