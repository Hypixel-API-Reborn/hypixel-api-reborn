import Divide from '../../../Utils/Divide.js';
import type { MurderMysteryModes } from '../../../Types/Player.js';

class MurderMysteryModeStats {
  goldPickedUp: number;
  kills: number;
  thrownKnifeKills: number;
  knifeKills: number;
  bowKills: number;
  trapKills: number;
  deaths: number;
  suicides: number;
  KDR: number;
  wins: number;
  winsAsDetective: number;
  winsAsMurderer: number;
  winsAsHero: number;
  playedGames: number;
  constructor(data: Record<string, any>, gamemode: MurderMysteryModes) {
    this.goldPickedUp = data?.[`coins_pickedup_${gamemode}`] || 0;
    this.kills = data?.[`kills_${gamemode}`] || 0;
    this.thrownKnifeKills = data?.[`thrown_knife_kills_${gamemode}`] || 0;
    this.knifeKills = data?.[`knife_kills_${gamemode}`] || 0;
    this.bowKills = data?.[`bow_kills_${gamemode}`] || 0;
    this.trapKills = data?.[`trap_kills_${gamemode}`] || 0;
    this.deaths = data?.[`deaths_${gamemode}`] || 0;
    this.suicides = data?.[`suicides_${gamemode}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${gamemode}`] || 0;
    this.winsAsDetective = data?.[`detective_wins_${gamemode}`] || 0;
    this.winsAsMurderer = data?.[`murderer_wins_${gamemode}`] || 0;
    this.winsAsHero = data?.[`was_hero_${gamemode}`] || 0;
    this.playedGames = data?.[`games_${gamemode}`] || 0;
  }
}

export default MurderMysteryModeStats;
