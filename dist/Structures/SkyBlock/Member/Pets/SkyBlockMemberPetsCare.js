class SkyBlockMemberPetsCare {
    coinsSpent;
    petsSacrificed;
    constructor(data) {
        this.coinsSpent = data?.coins_spent || 0;
        this.petsSacrificed = data?.pet_types_sacrificed || [];
    }
    toString() {
        return this.coinsSpent;
    }
}
export default SkyBlockMemberPetsCare;
//# sourceMappingURL=SkyBlockMemberPetsCare.js.map