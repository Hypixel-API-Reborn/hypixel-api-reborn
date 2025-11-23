class BedWarsSlumberPhaseThree {
  completedQuests: number;
  constructor(data: Record<string, any>) {
    this.completedQuests = data?.completed_quests || 0;
  }
}

export default BedWarsSlumberPhaseThree;
