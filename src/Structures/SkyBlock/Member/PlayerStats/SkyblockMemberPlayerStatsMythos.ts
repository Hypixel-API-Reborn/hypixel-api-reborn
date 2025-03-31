class SkyblockMemberPlayerStatsMythos {
  kills: number;
  burrowsDugNext: number;
  burrowsDugCombat: number;
  burrowsDugTreasure: number;
  burrowsChainsComplete: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills || 0;
    this.burrowsDugNext = data?.burrows_dug_next?.total || 0;
    this.burrowsDugCombat = data?.burrows_dug_combat?.total || 0;
    this.burrowsDugTreasure = data?.burrows_dug_treasure?.total || 0;
    this.burrowsChainsComplete = data?.burrows_chains_complete?.total || 0;
  }

  toString(): number {
    return this.kills;
  }
}

export default SkyblockMemberPlayerStatsMythos;
