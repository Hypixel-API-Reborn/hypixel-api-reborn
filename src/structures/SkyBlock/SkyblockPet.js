class SkyblockPet {
    constructor(data){
        this.petUuid = data.uuid;
        this.name = data.type;
        this.experience = data.exp;
        this.isEquipped = data.active;
        this.rarity = data.tier;
        this.heldItem = data.heldItem;
        this.candyUsed = data.candyUsed;
        this.skin = data.skin;
    }
}

module.exports = SkyblockPet;