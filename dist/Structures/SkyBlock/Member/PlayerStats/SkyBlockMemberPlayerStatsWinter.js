class SkyBlockMemberPlayerStatsWinter {
    mostSnowballsHit;
    mostDamageDealt;
    mostMagmaDamageDealt;
    mostCannonballsHit;
    constructor(data) {
        this.mostSnowballsHit = data?.most_snowballs_hit || 0;
        this.mostDamageDealt = data?.most_damage_dealt || 0;
        this.mostMagmaDamageDealt = data?.most_magma_damage_dealt || 0;
        this.mostCannonballsHit = data?.most_cannonballs_hit || 0;
    }
}
export default SkyBlockMemberPlayerStatsWinter;
//# sourceMappingURL=SkyBlockMemberPlayerStatsWinter.js.map