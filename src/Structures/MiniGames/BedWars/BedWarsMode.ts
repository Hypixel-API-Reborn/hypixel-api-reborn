import BedWarsBeds from './BedWarsBeds.js';
import Divide from '../../../Utils/Divide.js';
import type { BedWarsGamemodeName } from '../../../Types/Player.js';

class BedWarsMode {
  mode: BedWarsGamemodeName;
  winStreak: number;
  playedGames: number;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  finalKills: number;
  finalDeaths: number;
  beds: BedWarsBeds;
  KDR: number;
  WLR: number;
  FKDR: number;
  constructor(data: Record<string, any>, mode: BedWarsGamemodeName) {
    this.mode = mode;
    this.winStreak = data?.[`${mode}_winstreak`] || 0;
    this.playedGames = data?.[`${mode}_games_played_bedwars`] || 0;
    this.kills = data?.[`${mode}_kills_bedwars`] || 0;
    this.deaths = data?.[`${mode}_deaths_bedwars`] || 0;
    this.wins = data?.[`${mode}_wins_bedwars`] || 0;
    this.losses = data?.[`${mode}_losses_bedwars`] || 0;
    this.finalKills = data?.[`${mode}_final_kills_bedwars`] || 0;
    this.finalDeaths = data?.[`${mode}_final_deaths_bedwars`] || 0;
    this.beds = new BedWarsBeds(data, mode);
    this.KDR = Divide(data?.[`${mode}_kills_bedwars`], data?.[`${mode}_deaths_bedwars`]);
    this.WLR = Divide(data?.[`${mode}_wins_bedwars`], data?.[`${mode}_losses_bedwars`]);
    this.FKDR = Divide(data?.[`${mode}_final_kills_bedwars`], data?.[`${mode}_final_deaths_bedwars`]);
  }
}

export default BedWarsMode;
