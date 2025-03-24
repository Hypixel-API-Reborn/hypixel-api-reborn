import SkyblockMemberAccessoryBag from './AccessoryBag/SkyblockMemberAccessoryBag.js';
import SkyblockMemberBestiary from './Bestiary/SkyblockMemberBestiary.js';
import SkyblockMemberChocolateFactory from './ChocolateFactory/SkyblockMemberChocolateFactory.js';
import SkyblockMemberCrimsonIsle from './CrimsonIsle/SkyblockMemberCrimsonIsle.js';
import SkyblockMemberCurrencies from './SkyblockMemberCurrencies.js';
import SkyblockMemberDungeons from './Dungeons/SkyblockMemberDungeons.js';
import SkyblockMemberFairySouls from './SkyblockMemberFairySouls.js';
import SkyblockMemberJacobContests from './JacobContests/SkyblockMemberJacobContests.js';
import SkyblockMemberLeveling from './SkyblockMemberLeveling.js';
import SkyblockMemberMining from './Mining/SkyblockMemberMining.js';
import SkyblockMemberObjectives from './SkyblockMemberObjectives.js';
import SkyblockMemberPets from './Pets/SkyblockMemberPets.js';
import SkyblockMemberPlayerData from './PlayerData/SkyblockMemberPlayerData.js';
import SkyblockMemberPlayerStats from './PlayerStats/SkyblockMemberPlayerStats.js';
import SkyblockMemberProfile from './SkyblockMemberProfile.js';
import SkyblockMemberQuests from './Quests/SkyblockMemberQuests.js';
import SkyblockMemberRift from './Rift/SkyblockMemberRift.js';
import SkyblockMemberSlayers from './Slayers/SkyblockMemberSlayers.js';
import type { SkyblockArrow } from '../../../Types/Skyblock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyblockMember {
  uuid: UUID;
  accessoryBag: SkyblockMemberAccessoryBag;
  bestiary: SkyblockMemberBestiary;
  collections: Record<string, number>;
  currencies: SkyblockMemberCurrencies;
  dungeons: SkyblockMemberDungeons;
  chocolateFactory: SkyblockMemberChocolateFactory;
  fairySouls: SkyblockMemberFairySouls;
  soulflow: number;
  favoriteArrow: SkyblockArrow;
  jacobContests: SkyblockMemberJacobContests;
  leveling: SkyblockMemberLeveling;
  mining: SkyblockMemberMining;
  crimsonIsle: SkyblockMemberCrimsonIsle;
  objectives: SkyblockMemberObjectives;
  pets: SkyblockMemberPets;
  playerData: SkyblockMemberPlayerData;
  playerStats: SkyblockMemberPlayerStats;
  profileStats: SkyblockMemberProfile;
  quests: SkyblockMemberQuests;
  slayers: SkyblockMemberSlayers;
  rift: SkyblockMemberRift;
  constructor(uuid: string, data: Record<string, any>) {
    this.uuid = uuid;
    this.accessoryBag = new SkyblockMemberAccessoryBag(data?.accessory_bag_storage || {});
    this.bestiary = new SkyblockMemberBestiary(data?.bestiary || {});
    this.collections = data?.collection || {};
    this.currencies = new SkyblockMemberCurrencies(data?.currencies || {});
    this.dungeons = new SkyblockMemberDungeons(data?.dungeons || {});
    this.chocolateFactory = new SkyblockMemberChocolateFactory(data?.events?.easter || {});
    this.fairySouls = new SkyblockMemberFairySouls(data?.fairy_soul || {});
    this.soulflow = data?.item_data?.soulflow || 0;
    this.favoriteArrow = data?.item_data?.favorite_arrow || 'ARROW';
    this.jacobContests = new SkyblockMemberJacobContests(data?.jacobs_contest || {});
    this.leveling = new SkyblockMemberLeveling(data?.leveling || {});
    this.mining = new SkyblockMemberMining({ ...(data?.mining_core || {}), ...(data?.forge || {}) });
    this.crimsonIsle = new SkyblockMemberCrimsonIsle(data?.nether_island_player_data || {}, data?.trophy_fish || {});
    this.objectives = new SkyblockMemberObjectives(data?.objectives || {});
    this.pets = new SkyblockMemberPets({ ...(data?.pets_data || {}), ...(data?.player_stats?.pets || {}) });
    this.playerData = new SkyblockMemberPlayerData(data?.player_data || {}, {
      farmingCap: this.jacobContests.perks.farmingLevelCap || 0,
      tamingCap: this.pets.petCare.petsSacrificed.length || 0
    });
    this.playerStats = new SkyblockMemberPlayerStats(data?.player_stats || {});
    this.profileStats = new SkyblockMemberProfile(data?.profile || {});
    this.quests = new SkyblockMemberQuests(data?.quests || {});
    this.slayers = new SkyblockMemberSlayers(data?.slayer || {});
    this.rift = new SkyblockMemberRift(data?.rift || {});
  }

  toString(): UUID {
    return this.uuid;
  }
}

export default SkyblockMember;
