import BedWarsItemsPurchased from './BedWarsItemsPurchased.js';
import ParseBedWarsMode from '../../../Utils/ParseBedWarsMode.js';
import type { BedWarsModeId } from '../../../Types/Player.js';

class BedWarsResourcesCollected {
  total: number;
  emerald: number;
  diamond: number;
  gold: number;
  iron: number;
  wrappedPresent: number;
  bed: number;
  itemsPurchased: BedWarsItemsPurchased;
  constructor(data: Record<string, any>, mode?: BedWarsModeId) {
    mode = ParseBedWarsMode(mode) as BedWarsModeId;
    this.total = data?.[`${mode}resources_collected_bedwars`] || 0;
    this.emerald = data?.[`${mode}emerald_resources_collected_bedwars`] || 0;
    this.diamond = data?.[`${mode}diamond_resources_collected_bedwars`] || 0;
    this.gold = data?.[`${mode}gold_resources_collected_bedwars`] || 0;
    this.iron = data?.[`${mode}iron_resources_collected_bedwars`] || 0;
    this.wrappedPresent = data?.[`${mode}wrapped_present_resources_collected_bedwars`] || 0;
    this.bed = data?.[`${mode}bed_resources_collected_bedwars`] || 0;
    this.itemsPurchased = new BedWarsItemsPurchased(data, mode);
  }
}

export default BedWarsResourcesCollected;
