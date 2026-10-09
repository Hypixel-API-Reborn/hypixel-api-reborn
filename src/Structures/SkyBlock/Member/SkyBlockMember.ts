import SkyBlockMemberAccessoryBag from './AccessoryBag/SkyBlockMemberAccessoryBag.ts';
import SkyBlockMemberBestiary from './Bestiary/SkyBlockMemberBestiary.ts';
import SkyBlockMemberChocolateFactory from './ChocolateFactory/SkyBlockMemberChocolateFactory.ts';
import SkyBlockMemberCrimsonIsle from './CrimsonIsle/SkyBlockMemberCrimsonIsle.ts';
import SkyBlockMemberCurrencies from './SkyBlockMemberCurrencies.ts';
import SkyBlockMemberDungeons from './Dungeons/SkyBlockMemberDungeons.ts';
import SkyBlockMemberFairySouls from './SkyBlockMemberFairySouls.ts';
import SkyBlockMemberGarden from './Garden/SkyBlockMemberGarden.ts';
import SkyBlockMemberInventories from './Inventories/SkyBlockMemberInventories.ts';
import SkyBlockMemberJacobContests from './JacobContests/SkyBlockMemberJacobContests.ts';
import SkyBlockMemberLeveling from './SkyBlockMemberLeveling.ts';
import SkyBlockMemberMining from './Mining/SkyBlockMemberMining.ts';
import SkyBlockMemberObjectives from './SkyBlockMemberObjectives.ts';
import SkyBlockMemberPets from './Pets/SkyBlockMemberPets.ts';
import SkyBlockMemberPlayerData from './PlayerData/SkyBlockMemberPlayerData.ts';
import SkyBlockMemberPlayerStats from './PlayerStats/SkyBlockMemberPlayerStats.ts';
import SkyBlockMemberProfile from './SkyBlockMemberProfile.ts';
import SkyBlockMemberQuests from './Quests/SkyBlockMemberQuests.ts';
import SkyBlockMemberRift from './Rift/SkyBlockMemberRift.ts';
import SkyBlockMemberSkillTrees from './SkillTree/SkyBlockMemberSkillTrees.ts';
import SkyBlockMemberSlayers from './Slayers/SkyBlockMemberSlayers.ts';
import type { SkyBlockArrow, UUID } from '../../../Types/index.ts';

class SkyBlockMember {
  uuid: UUID;
  accessoryBag: SkyBlockMemberAccessoryBag;
  bestiary: SkyBlockMemberBestiary;
  collections: Record<string, number>;
  currencies: SkyBlockMemberCurrencies;
  dungeons: SkyBlockMemberDungeons;
  chocolateFactory: SkyBlockMemberChocolateFactory;
  garden: SkyBlockMemberGarden;
  skillTrees: SkyBlockMemberSkillTrees;
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
    this.accessoryBag = new SkyBlockMemberAccessoryBag(data?.accessory_bag_storage ?? {});
    this.bestiary = new SkyBlockMemberBestiary(data?.bestiary ?? {});
    this.collections = data?.collection ?? {};
    this.currencies = new SkyBlockMemberCurrencies(data?.currencies ?? {});
    this.dungeons = new SkyBlockMemberDungeons(data?.dungeons ?? {});
    this.chocolateFactory = new SkyBlockMemberChocolateFactory(data?.events?.easter ?? {});
    this.garden = new SkyBlockMemberGarden(data?.garden_player_data ?? {});
    this.skillTrees = new SkyBlockMemberSkillTrees(data?.skill_tree ?? {});
    this.fairySouls = new SkyBlockMemberFairySouls(data?.fairy_soul ?? {});
    this.soulflow = data?.item_data?.soulflow ?? 0;
    this.favoriteArrow = data?.item_data?.favorite_arrow ?? 'ARROW';
    this.jacobContests = new SkyBlockMemberJacobContests(data?.jacobs_contest ?? {});
    this.leveling = new SkyBlockMemberLeveling(data?.leveling ?? {});
    this.mining = new SkyBlockMemberMining({ ...(data?.mining_core ?? {}), ...(data?.forge ?? {}) }, this.skillTrees);
    this.crimsonIsle = new SkyBlockMemberCrimsonIsle(data?.nether_island_player_data ?? {}, data?.trophy_fish ?? {});
    this.objectives = new SkyBlockMemberObjectives(data?.objectives ?? {});
    this.pets = new SkyBlockMemberPets({ ...(data?.pets_data ?? {}), ...(data?.player_stats?.pets ?? {}) });
    this.playerData = new SkyBlockMemberPlayerData(data?.player_data ?? {}, {
      farmingCap: this.jacobContests.perks.farmingLevelCap ?? 0,
      tamingCap: this.pets.petCare.petsSacrificed.length ?? 0,
      foragingCap: data?.player_data?.experience?.SKILL_FORAGING_extra_level_cap ?? 0
    });
    this.playerStats = new SkyBlockMemberPlayerStats(data?.player_stats ?? {});
    this.profileStats = new SkyBlockMemberProfile(data?.profile ?? {});
    this.quests = new SkyBlockMemberQuests(data?.quests ?? {}, data?.foraging?.songs?.harp);
    this.slayers = new SkyBlockMemberSlayers(data?.slayer ?? {});
    this.rift = new SkyBlockMemberRift(data?.rift ?? {});
    this.inventory = new SkyBlockMemberInventories(data);
  }

  toString(): UUID {
    return this.uuid;
  }
}

export default SkyBlockMember;
