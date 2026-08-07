import SkyWarsKillsDeathsType from './SkyWarsKillsDeathsType.js';
import { ParseModeAfter } from '../../../Utils/index.js';
import type { SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.js';

class SkyWarsKillsDeaths {
  total: SkyWarsKillsDeathsType;
  melee: SkyWarsKillsDeathsType;
  void: SkyWarsKillsDeathsType;
  bow: SkyWarsKillsDeathsType;
  mob: SkyWarsKillsDeathsType;
  fall: SkyWarsKillsDeathsType;
  constructor(data: Record<string, any>, mode?: SkyWarsModeId | SkyWarsKitId) {
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    this.total = new SkyWarsKillsDeathsType(data, '', mode);
    this.melee = new SkyWarsKillsDeathsType(data, 'melee', mode);
    this.void = new SkyWarsKillsDeathsType(data, 'void', mode);
    this.bow = new SkyWarsKillsDeathsType(data, 'bow', mode);
    this.mob = new SkyWarsKillsDeathsType(data, 'mob', mode);
    this.fall = new SkyWarsKillsDeathsType(data, 'fall', mode);
  }
}

export default SkyWarsKillsDeaths;
