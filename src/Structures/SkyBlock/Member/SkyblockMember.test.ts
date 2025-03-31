import SkyblockMember from './SkyblockMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberAccessoryBag from './AccessoryBag/SkyblockMemberAccessoryBag.js';
import type SkyblockMemberBestiary from './Bestiary/SkyblockMemberBestiary.js';
import type SkyblockMemberChocolateFactory from './ChocolateFactory/SkyblockMemberChocolateFactory.js';
import type SkyblockMemberCrimsonIsle from './CrimsonIsle/SkyblockMemberCrimsonIsle.js';
import type SkyblockMemberCurrencies from './SkyblockMemberCurrencies.js';
import type SkyblockMemberDungeons from './Dungeons/SkyblockMemberDungeons.js';
import type SkyblockMemberFairySouls from './SkyblockMemberFairySouls.js';
import type SkyblockMemberJacobContests from './JacobContests/SkyblockMemberJacobContests.js';
import type SkyblockMemberLeveling from './SkyblockMemberLeveling.js';
import type SkyblockMemberMining from './Mining/SkyblockMemberMining.js';
import type SkyblockMemberObjectives from './SkyblockMemberObjectives.js';
import type SkyblockMemberPets from './Pets/SkyblockMemberPets.js';
import type SkyblockMemberPlayerData from './PlayerData/SkyblockMemberPlayerData.js';
import type SkyblockMemberPlayerStats from './PlayerStats/SkyblockMemberPlayerStats.js';
import type SkyblockMemberProfile from './SkyblockMemberProfile.js';
import type SkyblockMemberQuests from './Quests/SkyblockMemberQuests.js';
import type SkyblockMemberRift from './Rift/SkyblockMemberRift.js';
import type SkyblockMemberSlayers from './Slayers/SkyblockMemberSlayers.js';
import type { SkyblockArrow } from '../../../Types/Skyblock.js';
import type { UUID } from '../../../Types/Global.js';

test('SkyblockMember', () => {
  const data = new SkyblockMember('meow', { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMember);
  expectTypeOf(data).toEqualTypeOf<SkyblockMember>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<UUID>();
  expect(data.accessoryBag).toBeDefined();
  expectTypeOf(data.accessoryBag).toEqualTypeOf<SkyblockMemberAccessoryBag>();
  expect(data.bestiary).toBeDefined();
  expectTypeOf(data.bestiary).toEqualTypeOf<SkyblockMemberBestiary>();
  expect(data.collections).toBeDefined();
  expectTypeOf(data.collections).toEqualTypeOf<Record<string, number>>();
  expect(data.currencies).toBeDefined();
  expectTypeOf(data.currencies).toEqualTypeOf<SkyblockMemberCurrencies>();
  expect(data.dungeons).toBeDefined();
  expectTypeOf(data.dungeons).toEqualTypeOf<SkyblockMemberDungeons>();
  expect(data.chocolateFactory).toBeDefined();
  expectTypeOf(data.chocolateFactory).toEqualTypeOf<SkyblockMemberChocolateFactory>();
  expect(data.fairySouls).toBeDefined();
  expectTypeOf(data.fairySouls).toEqualTypeOf<SkyblockMemberFairySouls>();
  expect(data.soulflow).toBeDefined();
  expectTypeOf(data.soulflow).toEqualTypeOf<number>();
  expect(data.favoriteArrow).toBeDefined();
  expectTypeOf(data.favoriteArrow).toEqualTypeOf<SkyblockArrow>();
  expect(data.jacobContests).toBeDefined();
  expectTypeOf(data.jacobContests).toEqualTypeOf<SkyblockMemberJacobContests>();
  expect(data.leveling).toBeDefined();
  expectTypeOf(data.leveling).toEqualTypeOf<SkyblockMemberLeveling>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkyblockMemberMining>();
  expect(data.crimsonIsle).toBeDefined();
  expectTypeOf(data.crimsonIsle).toEqualTypeOf<SkyblockMemberCrimsonIsle>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<SkyblockMemberObjectives>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyblockMemberPets>();
  expect(data.playerData).toBeDefined();
  expectTypeOf(data.playerData).toEqualTypeOf<SkyblockMemberPlayerData>();
  expect(data.playerStats).toBeDefined();
  expectTypeOf(data.playerStats).toEqualTypeOf<SkyblockMemberPlayerStats>();
  expect(data.profileStats).toBeDefined();
  expectTypeOf(data.profileStats).toEqualTypeOf<SkyblockMemberProfile>();
  expect(data.quests).toBeDefined();
  expectTypeOf(data.quests).toEqualTypeOf<SkyblockMemberQuests>();
  expect(data.slayers).toBeDefined();
  expectTypeOf(data.slayers).toEqualTypeOf<SkyblockMemberSlayers>();
  expect(data.rift).toBeDefined();
  expectTypeOf(data.rift).toEqualTypeOf<SkyblockMemberRift>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => UUID>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.uuid);
  expectTypeOf(data.toString()).toEqualTypeOf<UUID>();
});
