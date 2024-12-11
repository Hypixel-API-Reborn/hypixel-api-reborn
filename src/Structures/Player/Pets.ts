import Pet from './Pet.js';
import PetConsumables from './PetConsumables.js';

class Pets {
  pets: Pet[];
  lastJourneyTimestamp: number | null;
  lastJourneyAt: Date | null;
  petConsumables: PetConsumables;
  constructor(data: Record<string, any>, pets: string[]) {
    this.pets = pets.map((x) => new Pet(x, data));
    this.lastJourneyTimestamp = data.petJourneyTimestamp || null;
    this.lastJourneyAt = this.lastJourneyTimestamp ? new Date(this.lastJourneyTimestamp) : null;
    this.petConsumables = new PetConsumables(data?.petConsumables || {});
  }
}

export default Pets;
