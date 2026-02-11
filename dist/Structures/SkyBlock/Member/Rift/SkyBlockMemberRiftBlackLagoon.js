class SkyBlockMemberRiftBlackLagoon {
    talkedToEdwin;
    receivedSciencePaper;
    deliveredSciencePaper;
    completedStep;
    constructor(data) {
        this.talkedToEdwin = data?.talked_to_edwin || false;
        this.receivedSciencePaper = data?.received_science_paper || false;
        this.deliveredSciencePaper = data?.delivered_science_paper || false;
        this.completedStep = data?.completed_step || 0;
    }
}
export default SkyBlockMemberRiftBlackLagoon;
//# sourceMappingURL=SkyBlockMemberRiftBlackLagoon.js.map