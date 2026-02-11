class Soccer {
    goals;
    kicks;
    powerkicks;
    wins;
    constructor(data) {
        this.goals = data?.goals_soccer || 0;
        this.kicks = data?.kicks_soccer || 0;
        this.powerkicks = data?.powerkicks_soccer || 0;
        this.wins = data?.wins_soccer || 0;
    }
}
export default Soccer;
//# sourceMappingURL=Soccer.js.map