class SkyBlockMemberRiftWestVillageCrazyKloon {
    selectedColors;
    talked;
    hackedTerminals;
    questComplete;
    constructor(data) {
        this.selectedColors = data?.selected_colors || {};
        this.talked = data?.talked || false;
        this.hackedTerminals = data?.hacked_terminals || [];
        this.questComplete = data?.quest_complete || false;
    }
}
export default SkyBlockMemberRiftWestVillageCrazyKloon;
//# sourceMappingURL=SkyBlockMemberRiftWestVillageCrazyKloon.js.map