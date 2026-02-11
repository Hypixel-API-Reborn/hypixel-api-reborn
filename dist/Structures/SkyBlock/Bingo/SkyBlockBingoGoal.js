function parsePosition(position) {
    const x = (position % 5) + 1;
    const y = Math.floor(position / 5) + 1;
    return [x, y];
}
class SkyBlockBingoGoal {
    name;
    id;
    row;
    column;
    lore;
    progress;
    tiers;
    requiredAmount;
    type;
    constructor(data, position = 0) {
        this.id = data?.id || 'UNKNOWN';
        this.name = data?.name || 'UNKNOWN';
        const [row, column] = parsePosition(position);
        this.row = row;
        this.column = column;
        this.lore = data?.lore || 'UNKNOWN';
        this.progress = data?.progress || 0;
        this.tiers = Array.isArray(data.tiers) ? data.tiers.map((x) => parseInt(x, 10) || 0) : [];
        this.requiredAmount = parseInt(data.requiredAmount, 10) ?? null;
        this.type = this.tiers ? 'TIERED' : this.requiredAmount ? 'ONE_TIER' : 'ONE_TIME';
    }
    toString() {
        return this.id;
    }
}
export default SkyBlockBingoGoal;
//# sourceMappingURL=SkyBlockBingoGoal.js.map