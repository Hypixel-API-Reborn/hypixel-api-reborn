class BedWarsFigurines {
    active;
    featuredCommon;
    featuredLegendary;
    featuredRare;
    constructor(data) {
        this.active = data?.active || 'UNKNOWN';
        this.featuredCommon = data?.featured?.COMMON || [];
        this.featuredLegendary = data?.featured?.LEGENDARY || [];
        this.featuredRare = data?.featured?.RARE || [];
    }
}
export default BedWarsFigurines;
//# sourceMappingURL=BedWarsFigurines.js.map