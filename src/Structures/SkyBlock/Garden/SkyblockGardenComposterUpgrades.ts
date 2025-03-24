class SkyblockGardenComposterUpgrades {
  speed: number;
  multiDrop: number;
  fuelCap: number;
  organicMatterCap: number;
  costReduction: number;
  constructor(data: Record<string, any>) {
    this.speed = data?.speed || 0;
    this.multiDrop = data?.multi_drop || 0;
    this.fuelCap = data?.fuel_cap || 0;
    this.organicMatterCap = data?.organic_matter_cap || 0;
    this.costReduction = data?.cost_reduction || 0;
  }
}

export default SkyblockGardenComposterUpgrades;
