import {
  MemberStatsAuctions,
  MemberStatsCandy,
  MemberStatsFishing,
  MemberStatsGifts,
  MemberStatsMythos,
  MemberStatsPetMilestones
} from '../../Types/Skyblock.js';

class SkyblockMemberStats {
  candy: MemberStatsCandy;
  petMilestones: MemberStatsPetMilestones;
  highestCriticalDamage: number;
  highestDamage: number;
  glowingMusroomsBroken: number;
  kills: Record<string, number>;
  deaths: Record<string, number>;
  auctions: MemberStatsAuctions;
  gifts: MemberStatsGifts;
  itemsFished: MemberStatsFishing;
  mythos: MemberStatsMythos;
  constructor(data: Record<string, any>) {
    this.candy = {
      green: data?.candy_collected?.green_candy || 0,
      purple: data?.candy_collected?.purple_candy || 0,
      total: data?.candy_collected?.total || 0,
      festivals: []
    };
    Object.keys(data?.candy_collected || {}).forEach((year: string) => {
      if ('total' !== year && 'green_candy' !== year && 'purple_candy' !== year) {
        this.candy?.festivals?.push({
          year: Number(data?.candy_collected?.[`spooky_festival_${year}`] || '0'),
          collected: {
            green: data?.candy_collected?.[`spooky_festival_${year}`]?.green_candy || 0,
            purple: data?.candy_collected?.[`spooky_festival_${year}`]?.purple_candy || 0,
            total: data?.candy_collected?.[`spooky_festival_${year}`]?.total || 0
          }
        });
      }
    });
    this.petMilestones = {
      oresMinned: data?.pets?.milestones?.ores_mined || 0,
      seaCreaturesKilled: data?.pets?.milestones?.sea_creatures_killed || 0
    };
    this.highestCriticalDamage = data?.highest_critical_damage || 0;
    this.highestDamage = data?.highest_damage || 0;
    this.glowingMusroomsBroken = data?.glowing_mushrooms_broken || 0;
    this.kills = {
      total: Object.values(data?.kills || {})?.reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.kills || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.kills[b] - data?.kills[a])
        .map((key) => ({ [key]: data?.kills[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.deaths = {
      total: Object.values(data?.deaths || {})?.reduce((acc: any, curr) => acc + curr, 0) as number,
      ...Object.keys(data?.deaths || {})
        .filter((key) => 'total' !== key)
        .sort((a, b) => data?.deaths[b] - data?.deaths[a])
        .map((key) => ({ [key]: data?.deaths[key] }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    this.auctions = {
      bids: data?.auctions?.bids || 0,
      highestBid: data?.auctions?.highest_bid || 0,
      goldSpent: data?.auctions?.gold_spent || 0,
      goldEarnt: data?.auctions?.gold_earnt || 0,
      auctionsWon: data?.auctions?.won || 0,
      auctionsCompleted: data?.auctions?.completed || 0,
      auctionsCreated: data?.auctions?.created || 0,
      auctionFees: data?.auctions?.auction_fees || 0,
      auctionsWithOutBids: data?.auctions?.no_bids || 0,
      bought: {
        uncommon: data?.auctions?.total_bought?.uncommon || 0,
        common: data?.auctions?.total_bought?.common || 0,
        rare: data?.auctions?.total_bought?.rare || 0,
        epic: data?.auctions?.total_bought?.epic || 0,
        legendary: data?.auctions?.total_bought?.legendary || 0,
        special: data?.auctions?.total_bought?.special || 0,
        mythic: data?.auctions?.total_bought?.mythic || 0,
        total:
          data?.auctions?.total_bought?.uncommon ||
          0 + data?.auctions?.total_bought?.common ||
          0 + data?.auctions?.total_bought?.rare ||
          0 + data?.auctions?.total_bought?.epic ||
          0 + data?.auctions?.total_bought?.legendary ||
          0 + data?.auctions?.total_bought?.special ||
          0 + data?.auctions?.total_bought?.mythic ||
          0
      },
      sold: {
        uncommon: data?.auctions?.total_sold?.uncommon || 0,
        common: data?.auctions?.total_sold?.common || 0,
        rare: data?.auctions?.total_sold?.rare || 0,
        epic: data?.auctions?.total_sold?.epic || 0,
        legendary: data?.auctions?.total_sold?.legendary || 0,
        special: data?.auctions?.total_sold?.special || 0,
        mythic: data?.auctions?.total_sold?.mythic || 0,
        total:
          data?.auctions?.total_sold?.uncommon ||
          0 + data?.auctions?.total_sold?.common ||
          0 + data?.auctions?.total_sold?.rare ||
          0 + data?.auctions?.total_sold?.epic ||
          0 + data?.auctions?.total_sold?.legendary ||
          0 + data?.auctions?.total_sold?.special ||
          0 + data?.auctions?.total_sold?.mythic ||
          0
      }
    };
    this.gifts = { given: data?.gifts?.total_given || 0, received: data?.gifts?.total_received || 0 };
    this.itemsFished = {
      total: data?.items_fished?.total || 0,
      normal: data?.items_fished?.normal || 0,
      tresure: data?.items_fished?.treasure || 0,
      largeTresure: data?.items_fished?.large_treasure || 0
    };
    this.mythos = {
      kills: data?.mythos?.kills || 0,
      burrowsDugNext: {
        total: data?.mythos?.burrows_dug_next?.total || 0,
        common: data?.mythos?.burrows_dug_next?.common || 0
      },
      burrowsDugCombat: {
        total: data?.mythos?.burrows_dug_combat?.total || 0,
        common: data?.mythos?.burrows_dug_combat?.common || 0
      },
      burrowsDugTreasure: {
        total: data?.mythos?.burrows_dug_treasure?.total || 0,
        common: data?.mythos?.burrows_dug_treasure?.common || 0
      },
      burrowsDugComplate: {
        total: data?.mythos?.burrows_dug_complete?.total || 0,
        common: data?.mythos?.burrows_dug_complete?.common || 0
      }
    };
  }
}

export default SkyblockMemberStats;
