class WoolWarsSettings {
    preroundBow;
    preroundPotion;
    constructor(data) {
        this.preroundBow = data?.preround_bow ?? false;
        this.preroundPotion = data?.preround_potion ?? false;
    }
}
export default WoolWarsSettings;
//# sourceMappingURL=WoolWarsSettings.js.map