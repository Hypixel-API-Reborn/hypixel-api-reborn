class SkyBlockMemberRiftBlackLagoon {
  talkedToEdwin: boolean;
  receivedSciencePaper: boolean;
  deliveredSciencePaper: boolean;
  completedStep: number;
  constructor(data: Record<string, any>) {
    this.talkedToEdwin = data?.talked_to_edwin || false;
    this.receivedSciencePaper = data?.received_science_paper || false;
    this.deliveredSciencePaper = data?.delivered_science_paper || false;
    this.completedStep = data?.completed_step || 0;
  }
}

export default SkyBlockMemberRiftBlackLagoon;
