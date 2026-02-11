import SkyBlockMemberRiftGallerySecuredTrophy from './SkyBlockMemberRiftGallerySecuredTrophy.js';
class SkyBlockMemberRiftGallery {
    eliseStep;
    securedTrophies;
    sentTrophyDialogues;
    constructor(data) {
        this.eliseStep = data?.elise_step || 0;
        this.securedTrophies = (data?.sent_trophy_dialogues || []).map((trophy) => {
            new SkyBlockMemberRiftGallerySecuredTrophy(trophy);
        });
        this.sentTrophyDialogues = data?.sent_trophy_dialogues || [];
    }
}
export default SkyBlockMemberRiftGallery;
//# sourceMappingURL=SkyBlockMemberRiftGallery.js.map