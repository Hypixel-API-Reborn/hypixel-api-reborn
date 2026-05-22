class SkyBlockMemberGarden {
    copper;
    larvaConsumed;
    analyzedGreenHouseCrops;
    discoveredGreenHouseCrops;
    constructor(data) {
        this.copper = data?.copper || 0;
        this.larvaConsumed = data?.larva_consumed || 0;
        this.analyzedGreenHouseCrops = data?.analyzed_greenhouse_crops || [];
        this.discoveredGreenHouseCrops = data?.discovered_greenhouse_crops || [];
    }
}
export default SkyBlockMemberGarden;
//# sourceMappingURL=SkyBlockMemberGarden.js.map