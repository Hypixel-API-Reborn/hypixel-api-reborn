class SkyBlockMemberRiftWestVillageGlyphs {
    claimedWand;
    currentGlyphDelivered;
    currentGlyphCompleted;
    currentGlyph;
    completed;
    claimedBracelet;
    constructor(data) {
        this.claimedWand = data?.claimed_wand || false;
        this.currentGlyphDelivered = data?.current_glyph_delivered || false;
        this.currentGlyphCompleted = data?.current_glyph_completed || false;
        this.currentGlyph = data?.current_glyph || 0;
        this.completed = data?.completed || false;
        this.claimedBracelet = data?.claimed_bracelet || false;
    }
}
export default SkyBlockMemberRiftWestVillageGlyphs;
//# sourceMappingURL=SkyBlockMemberRiftWestVillageGlyphs.js.map