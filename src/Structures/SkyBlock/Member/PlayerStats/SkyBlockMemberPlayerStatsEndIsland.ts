import SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';

class SkyBlockMemberPlayerStatsEndIsland {
  dragonFight: SkyBlockMemberPlayerStatsEndIslandDragonFight;
  summoningEyesCollected: number;
  specialZealotLootCollected: number;
  constructor(data: Record<string, any>) {
    this.dragonFight = new SkyBlockMemberPlayerStatsEndIslandDragonFight(data?.dragon_fight || {});
    this.summoningEyesCollected = data?.summoning_eyes_collected || 0;
    this.specialZealotLootCollected = data?.special_zealot_loot_collected || 0;
  }
}

export default SkyBlockMemberPlayerStatsEndIsland;
