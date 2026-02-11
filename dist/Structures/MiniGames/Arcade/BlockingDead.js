class BlockingDead {
    headShots;
    kills;
    wins;
    constructor(data) {
        this.headShots = data?.headshots_dayone || 0;
        this.kills = data?.kills_dayone || 0;
        this.wins = data?.wins_dayone || 0;
    }
}
export default BlockingDead;
//# sourceMappingURL=BlockingDead.js.map