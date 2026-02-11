import PlayerCosmeticsPet from './PlayerCosmeticsPet.js';
import PlayerCosmeticsPetsConsumables from './PlayerCosmeticsPetsConsumables.js';
class PlayerCosmeticsPets {
    lastJourney;
    lastJourneyAt;
    consumables;
    pets;
    constructor(data, pets) {
        this.lastJourney = data.petJourneyTimestamp || null;
        this.lastJourneyAt = this.lastJourney ? new Date(this.lastJourney) : null;
        this.consumables = new PlayerCosmeticsPetsConsumables(data?.petConsumables || {});
        this.pets = pets.map((petName) => new PlayerCosmeticsPet(petName, data));
    }
}
export default PlayerCosmeticsPets;
//# sourceMappingURL=PlayerCosmeticsPets.js.map