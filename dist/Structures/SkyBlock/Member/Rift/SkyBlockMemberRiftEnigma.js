class SkyBlockMemberRiftEnigma {
    boughtCloak;
    foundSouls;
    claimedBonusIndex;
    constructor(data) {
        this.boughtCloak = data?.bought_cloak || false;
        this.foundSouls = data?.found_souls || [];
        this.claimedBonusIndex = data?.claimed_bonus_index || 0;
    }
}
export default SkyBlockMemberRiftEnigma;
//# sourceMappingURL=SkyBlockMemberRiftEnigma.js.map