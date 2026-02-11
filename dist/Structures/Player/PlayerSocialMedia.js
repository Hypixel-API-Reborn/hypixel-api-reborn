class PlayerSocialMedia {
    discord;
    youtube;
    twitch;
    hypixel;
    twitter;
    instagram;
    tiktok;
    constructor(data) {
        this.discord = data?.DISCORD || null;
        this.youtube = data?.YOUTUBE || null;
        this.twitch = data?.TWITCH || null;
        this.hypixel = data?.HYPIXEL || null;
        this.twitter = data?.TWITTER || null;
        this.instagram = data?.INSTAGRAM || null;
        this.tiktok = data?.TIKTOK || null;
    }
}
export default PlayerSocialMedia;
//# sourceMappingURL=PlayerSocialMedia.js.map