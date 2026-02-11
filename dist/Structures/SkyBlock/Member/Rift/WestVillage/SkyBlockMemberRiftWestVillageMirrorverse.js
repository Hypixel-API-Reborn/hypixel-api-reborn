class SkyBlockMemberRiftWestVillageMirrorverse {
    visitedRooms;
    upsideDownHard;
    claimedChestItems;
    claimedReward;
    constructor(data) {
        this.visitedRooms = data?.visited_rooms || [];
        this.upsideDownHard = data?.upside_down_hard || false;
        this.claimedChestItems = data?.claimed_chest_items || [];
        this.claimedReward = data?.claimed_reward || false;
    }
}
export default SkyBlockMemberRiftWestVillageMirrorverse;
//# sourceMappingURL=SkyBlockMemberRiftWestVillageMirrorverse.js.map