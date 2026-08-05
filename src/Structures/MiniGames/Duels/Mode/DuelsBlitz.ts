import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import type { DuelsModeBlitzKitId } from '../../../../Types/Player.ts';

class DuelsBlitz extends DuelsModeFull {
  selectedKit: DuelsModeBlitzKitId | 'UNKNOWN';
  constructor(private data: Record<string, any>) {
    super(data, 'blitz_duel');
    this.selectedKit = this.data?.blitz_duels_kit ?? 'UNKNOWN';
  }

  getKitLayout(kit: DuelsModeBlitzKitId | 'UNKNOWN' = this.selectedKit): InventoryLayout {
    return new InventoryLayout(this.data?.[`layout_blitz_duel_${kit}`] ?? {});
  }
}

export default DuelsBlitz;
