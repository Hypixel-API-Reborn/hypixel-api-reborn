import SkyBlockMemberAccessoryBag from './AccessoryBag/SkyBlockMemberAccessoryBag.js';
import SkyBlockMemberBestiary from './Bestiary/SkyBlockMemberBestiary.js';
import SkyBlockMemberChocolateFactory from './ChocolateFactory/SkyBlockMemberChocolateFactory.js';
import SkyBlockMemberCrimsonIsle from './CrimsonIsle/SkyBlockMemberCrimsonIsle.js';
import SkyBlockMemberCurrencies from './SkyBlockMemberCurrencies.js';
import SkyBlockMemberDungeons from './Dungeons/SkyBlockMemberDungeons.js';
import SkyBlockMemberFairySouls from './SkyBlockMemberFairySouls.js';
import SkyBlockMemberInventories from './Inventories/SkyBlockMemberInventories.js';
import SkyBlockMemberJacobContests from './JacobContests/SkyBlockMemberJacobContests.js';
import SkyBlockMemberLeveling from './SkyBlockMemberLeveling.js';
import SkyBlockMemberMining from './Mining/SkyBlockMemberMining.js';
import SkyBlockMemberObjectives from './SkyBlockMemberObjectives.js';
import SkyBlockMemberPets from './Pets/SkyBlockMemberPets.js';
import SkyBlockMemberPlayerData from './PlayerData/SkyBlockMemberPlayerData.js';
import SkyBlockMemberPlayerStats from './PlayerStats/SkyBlockMemberPlayerStats.js';
import SkyBlockMemberProfile from './SkyBlockMemberProfile.js';
import SkyBlockMemberQuests from './Quests/SkyBlockMemberQuests.js';
import SkyBlockMemberRift from './Rift/SkyBlockMemberRift.js';
import SkyBlockMemberSlayers from './Slayers/SkyBlockMemberSlayers.js';
import type { SkyBlockArrow } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyBlockMember {
  uuid: UUID;
  accessoryBag: SkyBlockMemberAccessoryBag;
  bestiary: SkyBlockMemberBestiary;
  collections: Record<string, number>;
  currencies: SkyBlockMemberCurrencies;
  dungeons: SkyBlockMemberDungeons;
  chocolateFactory: SkyBlockMemberChocolateFactory;
  fairySouls: SkyBlockMemberFairySouls;
  soulflow: number;
  favoriteArrow: SkyBlockArrow;
  jacobContests: SkyBlockMemberJacobContests;
  leveling: SkyBlockMemberLeveling;
  mining: SkyBlockMemberMining;
  crimsonIsle: SkyBlockMemberCrimsonIsle;
  objectives: SkyBlockMemberObjectives;
  pets: SkyBlockMemberPets;
  playerData: SkyBlockMemberPlayerData;
  playerStats: SkyBlockMemberPlayerStats;
  profileStats: SkyBlockMemberProfile;
  quests: SkyBlockMemberQuests;
  slayers: SkyBlockMemberSlayers;
  rift: SkyBlockMemberRift;
  inventory: SkyBlockMemberInventories;
  constructor(uuid: string, data: Record<string, any>) {
    this.uuid = uuid;
    this.accessoryBag = new SkyBlockMemberAccessoryBag(data?.accessory_bag_storage || {});
    this.bestiary = new SkyBlockMemberBestiary(data?.bestiary || {});
    this.collections = data?.collection || {};
    this.currencies = new SkyBlockMemberCurrencies(data?.currencies || {});
    this.dungeons = new SkyBlockMemberDungeons(data?.dungeons || {});
    this.chocolateFactory = new SkyBlockMemberChocolateFactory(data?.events?.easter || {});
    this.fairySouls = new SkyBlockMemberFairySouls(data?.fairy_soul || {});
    this.soulflow = data?.item_data?.soulflow || 0;
    this.favoriteArrow = data?.item_data?.favorite_arrow || 'ARROW';
    this.jacobContests = new SkyBlockMemberJacobContests(data?.jacobs_contest || {});
    this.leveling = new SkyBlockMemberLeveling(data?.leveling || {});
    this.mining = new SkyBlockMemberMining({ ...(data?.mining_core || {}), ...(data?.forge || {}) });
    this.crimsonIsle = new SkyBlockMemberCrimsonIsle(data?.nether_island_player_data || {}, data?.trophy_fish || {});
    this.objectives = new SkyBlockMemberObjectives(data?.objectives || {});
    this.pets = new SkyBlockMemberPets({ ...(data?.pets_data || {}), ...(data?.player_stats?.pets || {}) });
    this.playerData = new SkyBlockMemberPlayerData(data?.player_data || {}, {
      farmingCap: this.jacobContests.perks.farmingLevelCap || 0,
      tamingCap: this.pets.petCare.petsSacrificed.length || 0
    });
    this.playerStats = new SkyBlockMemberPlayerStats(data?.player_stats || {});
    this.profileStats = new SkyBlockMemberProfile(data?.profile || {});
    this.quests = new SkyBlockMemberQuests(data?.quests || {});
    this.slayers = new SkyBlockMemberSlayers(data?.slayer || {});
    this.rift = new SkyBlockMemberRift(data?.rift || {});
    this.inventory = new SkyBlockMemberInventories(data?.inventory || {});
  }

  toString(): UUID {
    return this.uuid;
  }
}

export default SkyBlockMember;
