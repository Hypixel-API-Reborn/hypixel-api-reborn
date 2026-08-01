import Divide from '../../../Utils/Divide.js';

class BaseKillsDeathsType {
  kills: number;
  deaths: number;
  ratio: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills ?? 0;
    this.deaths = data?.deaths ?? 0;
    this.ratio = Divide(this.kills, this.deaths);
  }
}

export default BaseKillsDeathsType;
