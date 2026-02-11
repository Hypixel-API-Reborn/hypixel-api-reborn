class Challenge {
    id;
    name;
    rewards;
    constructor(data) {
        this.id = data.id || 'UNKNOWN';
        this.name = data.name || 'UNKNOWN';
        this.rewards = data.rewards || [];
    }
}
export default Challenge;
//# sourceMappingURL=Challenge.js.map