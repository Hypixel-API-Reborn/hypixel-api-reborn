import CaptureTheWool from './CaptureTheWool.js';
import SheepWars from './SheepWars.js';
import WoolWars from './WoolWars.js';
class WoolGames {
    layers;
    xp;
    exactLevel;
    level;
    coins;
    ownedCosmetics;
    privateGamesConfig;
    playtime;
    woolWars;
    captureTheWool;
    sheepWars;
    constructor(data) {
        this.layers = data?.progression?.available_layers || 0;
        this.xp = data?.progression?.experience || 0;
        this.exactLevel = this.convertXPToLevel(this.xp);
        this.level = Math?.floor(this.exactLevel);
        this.coins = data?.coins || data?.tokens || 0;
        this.ownedCosmetics = data?.packages || [];
        this.privateGamesConfig = data?.privategames || {};
        this.playtime = data?.playtime || 0;
        this.woolWars = new WoolWars(data?.wool_wars);
        this.captureTheWool = new CaptureTheWool(data?.capture_the_wool);
        this.sheepWars = new SheepWars(data?.sheep_wars);
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
export default WoolGames;
//# sourceMappingURL=WoolGames.js.map