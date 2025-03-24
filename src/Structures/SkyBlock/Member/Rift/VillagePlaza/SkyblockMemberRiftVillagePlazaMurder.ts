class SkyblockMemberRiftVillagePlazaMurder {
  stepIndex: number;
  roomClues: number[];
  stepIndexPt2: number;
  stepIndexPt3: number;
  constructor(data: Record<string, any>) {
    this.stepIndex = data?.step_index || 0;
    this.roomClues = data?.room_clues || [];
    this.stepIndexPt2 = data?.step_index_pt2 || 0;
    this.stepIndexPt3 = data?.step_index_pt3 || 0;
  }
}

export default SkyblockMemberRiftVillagePlazaMurder;
