import Divide from '../../../Utils/Divide.js';

class QuakecraftMode {
  wins: number;
  kills: number;
  deaths: number;
  KDR: number;
  killStreaks: number;
  distanceTraveled: number;
  shotsFired: number;
  headShots: number;
  constructor(data: Record<string, any>, gamemode?: 'teams') {
    const mode = gamemode ? `_${gamemode}` : '';
    this.wins = data?.[`wins${mode}`] || 0;
    this.kills = data?.[`kills${mode}`] || 0;
    this.deaths = data?.[`deaths${mode}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.killStreaks = data?.[`killstreaks${mode}`] || 0;
    this.distanceTraveled = data?.[`distance_travelled${mode}`] || 0;
    this.shotsFired = data?.[`shots_fired${mode}`] || 0;
    this.headShots = data?.[`headshots${mode}`] || 0;
  }
}

export default QuakecraftMode;
