import SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';

class SkyBlockMemberPlayerStatsCandy {
  green: number;
  purple: number;
  total: number;
  batsSpawned: Record<string, number>;
  festivals: SkyBlockMemberPlayerStatsSpookyFestival[];
  constructor(data: Record<string, any>) {
    this.green = data?.green_candy || 0;
    this.purple = data?.purple_candy || 0;
    this.total = this.green + this.purple;
    this.batsSpawned = data?.bats_spawned || {};
    this.festivals = Object.keys(data || {})
      .filter((key) => key.startsWith('spooky_festival_'))
      .map(
        (key) =>
          new SkyBlockMemberPlayerStatsSpookyFestival(data?.[key], Number(key.split('spooky_festival_')[1] || '0'))
      )
      .sort((a, b) => a.year - b.year);
  }

  toString(): number {
    return this.total;
  }
}

export default SkyBlockMemberPlayerStatsCandy;
