import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import { getDuelsTitle } from '../../../../Utils/Constants.ts';
import type { DuelsModeSkyWarsKitId } from '../../../../Types/Player.ts';

class DuelsSkyWars extends DuelsModeFull {
  doubles: DuelsMode;
  tournament: DuelsMode;
  selectedKit: DuelsModeSkyWarsKitId | 'UNKNOWN';
  constructor(private data: Record<string, any>) {
    super(data, 'sw_duel');
    this.doubles = new DuelsMode(this.data, 'sw_doubles');
    this.title = getDuelsTitle(this.wins + this.doubles.wins);
    this.tournament = new DuelsMode(this.data, 'sw_tournament');
    this.selectedKit = this.data?.sw_duels_kit_new3 ?? 'UNKNOWN';
  }

  getKitLayout(kit: DuelsModeSkyWarsKitId | 'UNKNOWN' = this.selectedKit): InventoryLayout {
    return new InventoryLayout(this.data?.[`layout_sw_duel_${kit}`] ?? {});
  }
}

export default DuelsSkyWars;
