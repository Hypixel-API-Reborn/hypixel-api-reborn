class MurderMysteryDescentItem {
  claimed: boolean;
  progress: number;
  constructor(data: Record<string, any>) {
    this.claimed = data?.claimed || false;
    this.progress = data?.progress || 0;
  }
}

export default MurderMysteryDescentItem;
