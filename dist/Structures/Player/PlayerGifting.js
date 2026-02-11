class PlayerGifting {
    bundlesReceived;
    bundlesGiven;
    milestones;
    giftsGiven;
    ranksGiven;
    ranksGivenMilestones;
    constructor(data) {
        this.bundlesReceived = data.realBundlesReceived || 0;
        this.bundlesGiven = data.realBundlesGiven || 0;
        this.milestones = (data.milestones || []).reverse();
        this.giftsGiven = data.giftsGiven || 0;
        this.ranksGiven = data.ranksGiven || 0;
        this.ranksGivenMilestones = (data.rankgiftingmilestones || []).reverse();
    }
}
export default PlayerGifting;
//# sourceMappingURL=PlayerGifting.js.map