import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsTeamsKitsAttacking from './SkyWarsTeamsKitsAttacking.ts';
import SkyWarsTeamsKitsDefending from './SkyWarsTeamsKitsDefending.ts';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.ts';
import SkyWarsTeamsKitsSupporting from './SkyWarsTeamsKitsSupporting.ts';

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
