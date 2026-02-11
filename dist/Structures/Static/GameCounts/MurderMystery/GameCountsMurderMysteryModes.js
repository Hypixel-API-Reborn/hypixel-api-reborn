class GameCountsMurderMysteryModes {
    doubleUp;
    infection;
    assassins;
    classic;
    constructor(data) {
        this.doubleUp = data?.MURDER_DOUBLE_UP || 0;
        this.infection = data?.MURDER_INFECTION || 0;
        this.assassins = data?.MURDER_ASSASSINS || 0;
        this.classic = data?.MURDER_CLASSIC || 0;
    }
}
export default GameCountsMurderMysteryModes;
//# sourceMappingURL=GameCountsMurderMysteryModes.js.map