class BedWarsChallenge {
    bestTime;
    timesCompleted;
    constructor(data, challenge) {
        this.bestTime = data?.challenge?.[`bw_challenge_${challenge}_best_time`] || 0;
        this.timesCompleted = data?.[`bw_challenge_${challenge}`] || 0;
    }
}
export default BedWarsChallenge;
//# sourceMappingURL=BedWarsChallenge.js.map