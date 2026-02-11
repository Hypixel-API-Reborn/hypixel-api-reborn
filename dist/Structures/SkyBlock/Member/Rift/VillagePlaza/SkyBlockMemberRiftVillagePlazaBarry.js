class SkyBlockMemberRiftVillagePlazaBarry {
    firstTalkToBarry;
    convinced;
    receivedReward;
    constructor(data) {
        this.firstTalkToBarry = data?.first_talk_to_barry || false;
        this.convinced = data?.convinced || [];
        this.receivedReward = data?.received_reward || false;
    }
}
export default SkyBlockMemberRiftVillagePlazaBarry;
//# sourceMappingURL=SkyBlockMemberRiftVillagePlazaBarry.js.map