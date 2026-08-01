import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.js';
import SkyWarsTeamsKitsAttacking from './SkyWarsTeamsKitsAttacking.js';
import SkyWarsTeamsKitsDefending from './SkyWarsTeamsKitsDefending.js';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.js';
import SkyWarsTeamsKitsSupporting from './SkyWarsTeamsKitsSupporting.js';

class SkyWarsTeamsKits {
  mining: SkyWarsTeamsKitsMining;
  defending: SkyWarsTeamsKitsDefending;
  supporting: SkyWarsTeamsKitsSupporting;
  attacking: SkyWarsTeamsKitsAttacking;
  enderChest: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.mining = new SkyWarsTeamsKitsMining(data);
    this.defending = new SkyWarsTeamsKitsDefending(data);
    this.supporting = new SkyWarsTeamsKitsSupporting(data);
    this.attacking = new SkyWarsTeamsKitsAttacking(data);
    this.enderChest = new BaseSkyWarsMode(data, 'kit_enderchest_team_enderchest');
  }
}

export default SkyWarsTeamsKits;
