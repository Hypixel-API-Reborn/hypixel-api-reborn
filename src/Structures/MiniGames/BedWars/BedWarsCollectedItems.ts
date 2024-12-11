class BedWarsCollectedItems {
  iron: number;
  gold: number;
  diamond: number;
  emerald: number;
  constructor(data: Record<string, any>) {
    this.iron = data?.iron_resources_collected_bedwars || 0;
    this.gold = data?.gold_resources_collected_bedwars || 0;
    this.diamond = data?.diamond_resources_collected_bedwars || 0;
    this.emerald = data?.emerald_resources_collected_bedwars || 0;
  }
}

export default BedWarsCollectedItems;
