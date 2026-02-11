class DragonWars {
    kills;
    wins;
    constructor(data) {
        this.kills = data?.kills_dragonwars2 || 0;
        this.wins = data?.wins_dragonwars2 || 0;
    }
}
export default DragonWars;
//# sourceMappingURL=DragonWars.js.map