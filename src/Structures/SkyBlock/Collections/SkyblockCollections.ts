import SkyblockCollection from './SkyblockCollection.js';

class SkyblockCollections {
  lastUpdated: number;
  lastUpdatedAt: Date;
  version: string;
  farming: SkyblockCollection[];
  mining: SkyblockCollection[];
  combat: SkyblockCollection[];
  foraging: SkyblockCollection[];
  fishing: SkyblockCollection[];
  rift: SkyblockCollection[];
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    this.version = data?.version || 'UNKNOWN';
    const farmingCollections = data?.collections?.FARMING?.items || {};
    this.farming = Object.keys(farmingCollections).map(
      (collection) => new SkyblockCollection(farmingCollections?.[collection], collection)
    );
    const miningCollections = data?.collections?.MINING?.items || {};
    this.mining = Object.keys(miningCollections).map(
      (collection) => new SkyblockCollection(miningCollections?.[collection], collection)
    );
    const combatCollections = data?.collections?.COMBAT?.items || {};
    this.combat = Object.keys(combatCollections).map(
      (collection) => new SkyblockCollection(combatCollections?.[collection], collection)
    );
    const foragingCollections = data?.collections?.FORAGING?.items || {};
    this.foraging = Object.keys(foragingCollections).map(
      (collection) => new SkyblockCollection(foragingCollections?.[collection], collection)
    );
    const fishingCollections = data?.collections?.FISHING?.items || {};
    this.fishing = Object.keys(fishingCollections).map(
      (collection) => new SkyblockCollection(fishingCollections?.[collection], collection)
    );
    const riftCollections = data?.collections?.RIFT?.items || {};
    this.rift = Object.keys(riftCollections).map(
      (collection) => new SkyblockCollection(riftCollections?.[collection], collection)
    );
  }

  toString(): string {
    return this.version;
  }
}

export default SkyblockCollections;
