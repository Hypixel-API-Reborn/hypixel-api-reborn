import MurderMysteryKnifeSkinPrestigeXp from './MurderMysteryKnifeSkinPrestigeXp.js';
class MurderMysteryKnifeSkinPrestige {
    usePrestige;
    xp;
    constructor(data) {
        this.usePrestige = data?.usePrestige || [];
        this.xp = new MurderMysteryKnifeSkinPrestigeXp(data?.xp || {});
    }
}
export default MurderMysteryKnifeSkinPrestige;
//# sourceMappingURL=MurderMysteryKnifeSkinPrestige.js.map