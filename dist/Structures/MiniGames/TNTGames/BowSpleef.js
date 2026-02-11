class BowSpleef {
    wins;
    tags;
    deaths;
    prefixColor;
    constructor(data) {
        this.wins = data?.wins_bowspleef || 0;
        this.tags = data?.tags_bowspleef || 0;
        this.deaths = data?.deaths_bowspleef || 0;
        this.prefixColor = data?.prefix_bowspleef || '';
    }
}
export default BowSpleef;
//# sourceMappingURL=BowSpleef.js.map