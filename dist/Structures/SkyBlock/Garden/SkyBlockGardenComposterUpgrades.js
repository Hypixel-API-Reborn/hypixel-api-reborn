class SkyBlockGardenComposterUpgrades {
    speed;
    multiDrop;
    fuelCap;
    organicMatterCap;
    costReduction;
    constructor(data) {
        this.speed = data?.speed || 0;
        this.multiDrop = data?.multi_drop || 0;
        this.fuelCap = data?.fuel_cap || 0;
        this.organicMatterCap = data?.organic_matter_cap || 0;
        this.costReduction = data?.cost_reduction || 0;
    }
}
export default SkyBlockGardenComposterUpgrades;
//# sourceMappingURL=SkyBlockGardenComposterUpgrades.js.map