import SkyBlockCollection from './SkyBlockCollection.js';

class SkyBlockCollections {
  lastUpdated: number;
  lastUpdatedAt: Date;
  version: string;
  farming: SkyBlockCollection[];
  mining: SkyBlockCollection[];
  combat: SkyBlockCollection[];
  foraging: SkyBlockCollection[];
  fishing: SkyBlockCollection[];
  rift: SkyBlockCollection[];
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    this.version = data?.version || 'UNKNOWN';
    const farmingCollections = data?.collections?.FARMING?.items || {};
    this.farming = Object.keys(farmingCollections).map(
      (collection) => new SkyBlockCollection(farmingCollections?.[collection], collection)
    );
    const miningCollections = data?.collections?.MINING?.items || {};
    this.mining = Object.keys(miningCollections).map(
      (collection) => new SkyBlockCollection(miningCollections?.[collection], collection)
    );
    const combatCollections = data?.collections?.COMBAT?.items || {};
    this.combat = Object.keys(combatCollections).map(
      (collection) => new SkyBlockCollection(combatCollections?.[collection], collection)
    );
    const foragingCollections = data?.collections?.FORAGING?.items || {};
    this.foraging = Object.keys(foragingCollections).map(
      (collection) => new SkyBlockCollection(foragingCollections?.[collection], collection)
    );
    const fishingCollections = data?.collections?.FISHING?.items || {};
    this.fishing = Object.keys(fishingCollections).map(
      (collection) => new SkyBlockCollection(fishingCollections?.[collection], collection)
    );
    const riftCollections = data?.collections?.RIFT?.items || {};
    this.rift = Object.keys(riftCollections).map(
      (collection) => new SkyBlockCollection(riftCollections?.[collection], collection)
    );
  }

  toString(): string {
    return this.version;
  }
}

export default SkyBlockCollections;
