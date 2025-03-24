class SkyblockMemberRiftWestVillageCrazyKloon {
  selectedColors: Record<string, string>;
  talked: boolean;
  hackedTerminals: string[];
  questComplete: boolean;
  constructor(data: Record<string, any>) {
    this.selectedColors = data?.selected_colors;
    this.talked = data?.talked || false;
    this.hackedTerminals = data?.hacked_terminals || [];
    this.questComplete = data?.quest_complete || false;
  }
}

export default SkyblockMemberRiftWestVillageCrazyKloon;
