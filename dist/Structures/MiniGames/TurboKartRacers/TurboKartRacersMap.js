class TurboKartRacersMap {
    map;
    plays;
    boxPickups;
    bronzeTrophies;
    silverTrophies;
    goldTrophies;
    constructor(data, mapName) {
        this.map = mapName;
        this.plays = data?.[`${mapName}_plays`] || 0;
        this.boxPickups = data?.[`box_pickups_${mapName}`] || 0;
        this.bronzeTrophies = data?.[`bronze_trophy_${mapName}`] || 0;
        this.silverTrophies = data?.[`silver_trophy_${mapName}`] || 0;
        this.goldTrophies = data?.[`gold_trophy_${mapName}`] || 0;
    }
}
export default TurboKartRacersMap;
//# sourceMappingURL=TurboKartRacersMap.js.map