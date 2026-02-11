class OneInTheQuiver {
    bountyKills;
    bowKills;
    deaths;
    kills;
    swordKills;
    wins;
    constructor(data) {
        this.bountyKills = data?.bounty_kills_oneinthequiver || 0;
        this.bowKills = data?.bow_kills_oneinthequiver || 0;
        this.deaths = data?.deaths_oneinthequiver || 0;
        this.kills = data?.kills_oneinthequiver || 0;
        this.swordKills = data?.sword_kills_oneinthequiver || 0;
        this.wins = data?.wins_oneinthequiver || 0;
    }
}
export default OneInTheQuiver;
//# sourceMappingURL=OneInTheQuiver.js.map