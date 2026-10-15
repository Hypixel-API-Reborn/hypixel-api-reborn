import { ParseModeBefore } from '../../../Utils/index.ts';
import type { BedWarsModeId } from '../../../Types/index.ts';

class BedWarsItemsPurchased {
  itemsPurchased: number;
  permanentItemsPurchased: number;
  constructor(data: Record<string, any>, mode?: BedWarsModeId) {
    mode = ParseModeBefore(mode) as BedWarsModeId;
    this.itemsPurchased = data?.[`${mode}items_purchased_bedwars`] ?? 0;
    this.permanentItemsPurchased = data?.[`${mode}permanent_items_purchased_bedwars`] ?? 0;
  }
}

export default BedWarsItemsPurchased;
