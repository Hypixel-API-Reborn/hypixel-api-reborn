import Divide from '../../../Utils/Divide.js';
import MurderMysteryModeStats from './MurderMysteryModeStats.js';

class MurderMystery {
  tokens: number;
  goldPickedUp: number;
  playedGames: number;
  kills: number;
  thrownKnifeKills: number;
  knifeKills: number;
  trapKills: number;
  bowKills: number;
  killsAsMurderer: number;
  deaths: number;
  KDR: number;
  winsAsMurderer: number;
  winsAsDetective: number;
  winsAsHero: number;
  fastestWinAsMurderer: number;
  fastestWinAsDetective: number;
  totalTimeSurvived: number;
  wins: number;
  suicides: number;
  classic: MurderMysteryModeStats;
  assassins: MurderMysteryModeStats;
  doubleUp: MurderMysteryModeStats;
  infection: MurderMysteryModeStats;
  constructor(data: Record<string, any>) {
    this.tokens = data?.coins || data?.tokens || 0;
    this.goldPickedUp = data?.coins_pickedup || 0;
    this.playedGames = data?.games || 0;
    this.kills = data?.kills || 0;
    this.thrownKnifeKills = data?.thrown_knife_kills || 0;
    this.knifeKills = data?.knife_kills || 0;
    this.trapKills = data?.trap_kills || 0;
    this.bowKills = data?.bow_kills || 0;
    this.killsAsMurderer = data?.kills_as_murderer || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.winsAsMurderer = data?.murderer_wins || 0;
    this.winsAsDetective = data?.detective_wins || 0;
    this.winsAsHero = data?.was_hero || 0;
    this.fastestWinAsMurderer = data?.quickest_murderer_win_time_seconds || 0;
    this.fastestWinAsDetective = data?.quickest_detective_win_time_seconds || 0;
    this.totalTimeSurvived = data?.total_time_survived_seconds || 0;
    this.wins = data?.wins || 0;
    this.suicides = data?.suicides || 0;
    this.classic = new MurderMysteryModeStats(data, 'MURDER_CLASSIC');
    this.assassins = new MurderMysteryModeStats(data, 'MURDER_ASSASSINS');
    this.doubleUp = new MurderMysteryModeStats(data, 'MURDER_DOUBLE_UP');
    this.infection = new MurderMysteryModeStats(data, 'MURDER_INFECTION');
  }
}

export default MurderMystery;
