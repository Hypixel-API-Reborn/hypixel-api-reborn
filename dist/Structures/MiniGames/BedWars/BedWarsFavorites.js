class BedWarsFavorites {
    streakSlots;
    hotbarSlots;
    shopSlots;
    shopSlots2;
    bedDestroy;
    deathcry;
    figurine;
    glyph;
    islandTopper;
    killEffect;
    killMessages;
    npcSkin;
    projectileTrail;
    sprays;
    startingWeapon;
    victoryDance;
    woodSkin;
    constructor(data) {
        this.streakSlots = (data?.fav_streak_slots || '').split(',');
        this.hotbarSlots = (data?.favorite_slots || '').split(',');
        this.shopSlots = (data?.favourites_1 || '').split(',');
        this.shopSlots2 = (data?.favourites_2 || '').split(',');
        this.bedDestroy = data?.favorites?.beddestroy || [];
        this.deathcry = data?.favorites?.deathcry || [];
        this.figurine = data?.favorites?.figurine || [];
        this.glyph = data?.favorites?.glyph || [];
        this.islandTopper = data?.favorites?.islandtopper || [];
        this.killEffect = data?.favorites?.killeffect || [];
        this.killMessages = data?.favorites?.killmessages || [];
        this.npcSkin = data?.favorites?.npcskin || [];
        this.projectileTrail = data?.favorites?.projectiletrail || [];
        this.sprays = data?.favorites?.sprays || [];
        this.startingWeapon = data?.favorites?.starting_weapon || [];
        this.victoryDance = data?.favorites?.victorydance || [];
        this.woodSkin = data?.favorites?.woodSkin || [];
    }
}
export default BedWarsFavorites;
//# sourceMappingURL=BedWarsFavorites.js.map