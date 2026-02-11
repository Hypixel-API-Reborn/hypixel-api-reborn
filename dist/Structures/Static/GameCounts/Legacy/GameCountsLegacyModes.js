class GameCountsLegacyModes {
    vampireZ;
    walls;
    quakecraft;
    gingerbread;
    paintball;
    arena;
    constructor(data) {
        this.vampireZ = data?.VAMPIREZ || 0;
        this.walls = data?.WALLS || 0;
        this.quakecraft = data?.QUAKECRAFT || 0;
        this.gingerbread = data?.GINGERBREAD || 0;
        this.paintball = data?.PAINTBALL || 0;
        this.arena = data?.ARENA || 0;
    }
}
export default GameCountsLegacyModes;
//# sourceMappingURL=GameCountsLegacyModes.js.map