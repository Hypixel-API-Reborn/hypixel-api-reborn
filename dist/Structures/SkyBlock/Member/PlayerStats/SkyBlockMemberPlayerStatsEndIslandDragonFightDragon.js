class SkyBlockMemberPlayerStatsEndIslandDragonFightDragon {
    mostDamage;
    highestRank;
    fastestKill;
    amountSummoned;
    summoningEyesContributed;
    constructor(data, dragon) {
        this.mostDamage = data?.most_damage?.[dragon] || 0;
        this.highestRank = data?.highest_rank?.[dragon] || 0;
        this.fastestKill = data?.fastest_kill?.[dragon] || 0;
        this.amountSummoned = data?.amount_summoned?.[dragon] || 0;
        this.summoningEyesContributed = data?.summoning_eyes_contributed?.[dragon] || 0;
    }
    toString() {
        return this.amountSummoned;
    }
}
export default SkyBlockMemberPlayerStatsEndIslandDragonFightDragon;
//# sourceMappingURL=SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.js.map