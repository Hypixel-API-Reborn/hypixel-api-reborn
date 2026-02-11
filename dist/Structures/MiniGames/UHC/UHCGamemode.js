import Divide from '../../../Utils/Divide.js';
class UHCGamemode {
    kills;
    deaths;
    KDR;
    wins;
    headsEaten;
    ultimatesCrafted;
    extraUltimatesCrafted;
    constructor(data, mode) {
        const modeName = mode ? `_${mode}` : '';
        this.kills = data?.[`kills${modeName}`] || 0;
        this.deaths = data?.[`deaths${modeName}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`wins${modeName}`] || 0;
        this.headsEaten = data?.[`heads_eaten${modeName}`] || 0;
        this.ultimatesCrafted = data?.[`ultimates_crafted${modeName}`] || 0;
        this.extraUltimatesCrafted = data?.[`extra_ultimates_crafted${modeName}`] || 0;
    }
}
export default UHCGamemode;
//# sourceMappingURL=UHCGamemode.js.map