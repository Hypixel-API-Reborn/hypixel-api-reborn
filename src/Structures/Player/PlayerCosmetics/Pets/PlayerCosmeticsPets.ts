import PlayerCosmeticsPet from './PlayerCosmeticsPet.js';
import PlayerCosmeticsPetsConsumables from './PlayerCosmeticsPetsConsumables.js';

class PlayerCosmeticsPets {
  lastJourney: number | null;
  lastJourneyAt: Date | null;
  consumables: PlayerCosmeticsPetsConsumables;
  pets: PlayerCosmeticsPet[];
  constructor(data: Record<string, any>, pets: string[]) {
    this.lastJourney = data.petJourneyTimestamp || null;
    this.lastJourneyAt = this.lastJourney ? new Date(this.lastJourney) : null;
    this.consumables = new PlayerCosmeticsPetsConsumables(data?.petConsumables || {});
    this.pets = pets.map((petName) => new PlayerCosmeticsPet(petName, data));
  }
}

export default PlayerCosmeticsPets;
