import SkyBlockMemberPlayerStatsAuctions from './SkyBlockMemberPlayerStatsAuctions.js';
import SkyBlockMemberPlayerStatsCandy from './SkyBlockMemberPlayerStatsCandy.js';
import SkyBlockMemberPlayerStatsEndIsland from './SkyBlockMemberPlayerStatsEndIsland.js';
import SkyBlockMemberPlayerStatsFishing from './SkyBlockMemberPlayerStatsFishing.js';
import SkyBlockMemberPlayerStatsGifts from './SkyBlockMemberPlayerStatsGifts.js';
import SkyBlockMemberPlayerStatsMythos from './SkyBlockMemberPlayerStatsMythos.js';
import SkyBlockMemberPlayerStatsWinter from './SkyBlockMemberPlayerStatsWinter.js';

class SkyBlockMemberPlayerStats {
  fishing: SkyBlockMemberPlayerStatsFishing;
  glowingMushroomsBroken: number;
  highestDamage: number;
  highestCriticalDamage: number;
  kills: Record<string, number>;
  deaths: Record<string, number>;
  auctions: SkyBlockMemberPlayerStatsAuctions;
  candy: SkyBlockMemberPlayerStatsCandy;
  gifts: SkyBlockMemberPlayerStatsGifts;
  mythos: SkyBlockMemberPlayerStatsMythos;
  winter: SkyBlockMemberPlayerStatsWinter;
  endIsland: SkyBlockMemberPlayerStatsEndIsland;
  races: Record<string, number | Record<string, number>>;
  constructor(data: Record<string, any>) {
    this.fishing = new SkyBlockMemberPlayerStatsFishing({
      seaCreatureKills: data?.sea_creature_kills || 0,
      ...(data?.items_fished || {})
    });
    this.glowingMushroomsBroken = data?.glowing_mushrooms_broken || 0;
    this.highestDamage = data?.highest_damage || 0;
    this.highestCriticalDamage = data?.highest_critical_damage || 0;
    this.kills = {
      total: Object.values(data?.kills || {}).reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.kills || {})
        .filter((key) => key !== 'total')
        .sort((a, b) => data?.kills[b] - data?.kills[a])
        .map((key) => ({ [key]: data?.kills[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.deaths = {
      total: Object.values(data?.deaths || {}).reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.deaths || {})
        .filter((key) => key !== 'total')
        .sort((a, b) => data?.deaths[b] - data?.deaths[a])
        .map((key) => ({ [key]: data?.deaths[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.auctions = new SkyBlockMemberPlayerStatsAuctions(data?.auctions || {});
    this.candy = new SkyBlockMemberPlayerStatsCandy({
      ...(data?.candy_collected || {}),
      ...(data?.spooky?.bats_spawned || {})
    });
    this.gifts = new SkyBlockMemberPlayerStatsGifts(data?.gifts || {});
    this.mythos = new SkyBlockMemberPlayerStatsMythos(data?.mythos || {});
    this.winter = new SkyBlockMemberPlayerStatsWinter(data?.winter || {});
    this.endIsland = new SkyBlockMemberPlayerStatsEndIsland(data?.end_island || {});
    this.races = data?.races || {};
  }
}

export default SkyBlockMemberPlayerStats;
