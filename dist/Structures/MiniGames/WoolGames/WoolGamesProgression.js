class WoolGamesProgression {
    availableLayers;
    xp;
    exactLevel;
    level;
    constructor(data) {
        this.availableLayers = data?.available_layers || 0;
        this.xp = data?.experience || 0;
        this.exactLevel = this.convertXPToLevel(this.xp);
        this.level = Math.floor(this.exactLevel);
    }
    convertXPToLevel(exp) {
        const minimalExp = [0, 1e3, 3e3, 6e3, 1e4, 15e3];
        const baseLevel = minimalExp?.length;
        const baseExp = minimalExp[minimalExp?.length - 1] || 0;
        const expToLevel100 = 49e4;
        if (exp < baseExp)
            return minimalExp?.findIndex((x) => exp < x);
        const theoreticalLevel = (exp - baseExp) / 5e3 + baseLevel;
        if (theoreticalLevel > 100)
            return 100 + this.convertXPToLevel(exp - expToLevel100);
        return theoreticalLevel;
    }
}
export default WoolGamesProgression;
//# sourceMappingURL=WoolGamesProgression.js.map