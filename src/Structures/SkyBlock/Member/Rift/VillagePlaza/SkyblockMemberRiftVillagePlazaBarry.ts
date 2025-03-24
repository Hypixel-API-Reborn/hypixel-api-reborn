class SkyblockMemberRiftVillagePlazaBarry {
  firstTalkToBarry: boolean;
  convinced: boolean;
  receivedReward: boolean;
  constructor(data: Record<string, any>) {
    this.firstTalkToBarry = data?.first_talk_to_barry || false;
    this.convinced = data?.convinced || [];
    this.receivedReward = data?.received_reward || false;
  }
}

export default SkyblockMemberRiftVillagePlazaBarry;
