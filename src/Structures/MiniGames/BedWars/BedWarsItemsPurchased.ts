import ParseBedWarsMode from '../../../Utils/ParseBedWarsMode.js';

class BedWarsItemsPurchased {
  itemsPurchased: number;
  permanentItemsPurchased: number;
  constructor(data: Record<string, any>, mode?: string) {
    mode = ParseBedWarsMode(mode);
    this.itemsPurchased = data?.[`${mode}items_purchased_bedwars`] || 0;
    this.permanentItemsPurchased = data?.[`${mode}permanent_items_purchased_bedwars`] || 0;
  }
}

export default BedWarsItemsPurchased;
