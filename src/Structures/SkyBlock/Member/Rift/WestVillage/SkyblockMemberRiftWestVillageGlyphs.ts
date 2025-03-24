class SkyblockMemberRiftWestVillageGlyphs {
  claimedWand: boolean;
  currentGlyphDelivered: boolean;
  currentGlyphCompleted: boolean;
  currentGlyph: number;
  completed: boolean;
  claimedBracelet: boolean;
  constructor(data: Record<string, any>) {
    this.claimedWand = data?.claimed_wand || false;
    this.currentGlyphDelivered = data?.current_glyph_delivered || false;
    this.currentGlyphCompleted = data?.current_glyph_completed || false;
    this.currentGlyph = data?.current_glyph || 0;
    this.completed = data?.completed || false;
    this.claimedBracelet = data?.claimed_bracelet || false;
  }
}

export default SkyblockMemberRiftWestVillageGlyphs;
