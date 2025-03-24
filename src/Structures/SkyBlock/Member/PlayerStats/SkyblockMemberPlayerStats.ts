import SkyblockMemberPlayerStatsAuctions from './SkyblockMemberPlayerStatsAuctions.js';
import SkyblockMemberPlayerStatsCandy from './SkyblockMemberPlayerStatsCandy.js';
import SkyblockMemberPlayerStatsEndIsland from './SkyblockMemberPlayerStatsEndIsland.js';
import SkyblockMemberPlayerStatsFishing from './SkyblockMemberPlayerStatsFishing.js';
import SkyblockMemberPlayerStatsGifts from './SkyblockMemberPlayerStatsGifts.js';
import SkyblockMemberPlayerStatsMythos from './SkyblockMemberPlayerStatsMythos.js';
import SkyblockMemberPlayerStatsWinter from './SkyblockMemberPlayerStatsWinter.js';

class SkyblockMemberPlayerStats {
  fishing: SkyblockMemberPlayerStatsFishing;
  glowingMushroomsBroken: number;
  highestDamage: number;
  highestCriticalDamage: number;
  kills: Record<string, number>;
  deaths: Record<string, number>;
  auctions: SkyblockMemberPlayerStatsAuctions;
  candy: SkyblockMemberPlayerStatsCandy;
  gifts: SkyblockMemberPlayerStatsGifts;
  mythos: SkyblockMemberPlayerStatsMythos;
  winter: SkyblockMemberPlayerStatsWinter;
  endIsland: SkyblockMemberPlayerStatsEndIsland;
  races: Record<string, number | Record<string, number>>;
  constructor(data: Record<string, any>) {
    this.fishing = new SkyblockMemberPlayerStatsFishing({
      seaCreatureKills: data?.sea_creature_kills || 0,
      ...(data?.items_fished || {})
    });
    this.glowingMushroomsBroken = data?.glowing_mushrooms_broken || 0;
    this.highestDamage = data?.highest_damage || 0;
    this.highestCriticalDamage = data?.highest_critical_damage || 0;
    this.kills = {
      total: Object.values(data?.kills || {}).reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.kills || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.kills[b] - data?.kills[a])
        .map((key) => ({ [key]: data?.kills[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.deaths = {
      total: Object.values(data?.deaths || {}).reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.deaths || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.deaths[b] - data?.deaths[a])
        .map((key) => ({ [key]: data?.deaths[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.auctions = new SkyblockMemberPlayerStatsAuctions(data?.auctions || {});
    this.candy = new SkyblockMemberPlayerStatsCandy({
      ...(data?.candy_collected || {}),
      ...(data?.spooky?.bats_spawned || {})
    });
    this.gifts = new SkyblockMemberPlayerStatsGifts(data?.gifts || {});
    this.mythos = new SkyblockMemberPlayerStatsMythos(data?.mythos || {});
    this.winter = new SkyblockMemberPlayerStatsWinter(data?.winter || {});
    this.endIsland = new SkyblockMemberPlayerStatsEndIsland(data?.end_island || {});
    this.races = data?.races || {};
  }
}

export default SkyblockMemberPlayerStats;
