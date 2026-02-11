class MurderMysteryFavorites {
    animatedHat;
    deathCry;
    gesture;
    gravestone;
    killNote;
    knifeSkin;
    lastWords;
    projectileTrail;
    victoryDance;
    constructor(data) {
        this.animatedHat = data?.animated_hat || [];
        this.deathCry = data?.deathcry || [];
        this.gesture = data?.gesture || [];
        this.gravestone = data?.gravestone || [];
        this.killNote = data?.kill_note || [];
        this.knifeSkin = data?.knife_skin || [];
        this.lastWords = data?.last_words || [];
        this.projectileTrail = data?.projectile_trail || [];
        this.victoryDance = data?.victory_dance || [];
    }
}
export default MurderMysteryFavorites;
//# sourceMappingURL=MurderMysteryFavorites.js.map