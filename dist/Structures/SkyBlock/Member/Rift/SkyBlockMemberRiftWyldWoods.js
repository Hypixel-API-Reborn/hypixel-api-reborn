class SkyBlockMemberRiftWyldWoods {
    talkedThreebrothers;
    siriusStartedQA;
    siriusQAChainDone;
    siriusCompletedQA;
    siriusClaimedDoubloon;
    bughunterStep;
    constructor(data) {
        this.talkedThreebrothers = data?.talked_threebrothers || [];
        this.siriusStartedQA = data?.sirius_started_q_a || false;
        this.siriusQAChainDone = data?.sirius_q_a_chain_done || false;
        this.siriusCompletedQA = data?.sirius_completed_q_a || false;
        this.siriusClaimedDoubloon = data?.sirius_claimed_doubloon || false;
        this.bughunterStep = data?.bughunter_step || 0;
    }
}
export default SkyBlockMemberRiftWyldWoods;
//# sourceMappingURL=SkyBlockMemberRiftWyldWoods.js.map