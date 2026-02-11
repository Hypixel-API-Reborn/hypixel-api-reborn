class SkyBlockMemberCrimsonIsleKuudraPartyFinder {
    searchTier;
    groupBuildTier;
    groupBuildNote;
    groupBuildRequiredCombatLevel;
    constructor(data) {
        this.searchTier = data?.search_settings?.tier || 'UNKNOWN';
        this.groupBuildTier = data?.group_builder?.tier || 'UNKNOWN';
        this.groupBuildNote = data?.group_builder?.note || null;
        this.groupBuildRequiredCombatLevel = data?.group_builder?.combat_level_required || null;
    }
}
export default SkyBlockMemberCrimsonIsleKuudraPartyFinder;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleKuudraPartyFinder.js.map