import SkyblockMemberCrimsonIsleTrophyFish from './SkyblockMemberCrimsonIsleTrophyFish.js';
import SkyblockMemberCrimsonIsleTrophyFishFish from './SkyblockMemberCrimsonIsleTrophyFishFish.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleTrophyFishRank } from '../../../../Types/Skyblock.js';

test('SkyblockMemberCrimsonIsleTrophyFish', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberCrimsonIsleTrophyFish();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.gusher).toBeDefined();
  expectTypeOf(data.gusher).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.blobfish).toBeDefined();
  expectTypeOf(data.blobfish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.lavaHorse).toBeDefined();
  expectTypeOf(data.lavaHorse).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.goldenFish).toBeDefined();
  expectTypeOf(data.goldenFish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.volcanicStonefish).toBeDefined();
  expectTypeOf(data.volcanicStonefish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.slugfish).toBeDefined();
  expectTypeOf(data.slugfish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.vanille).toBeDefined();
  expectTypeOf(data.vanille).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish1).toBeDefined();
  expectTypeOf(data.obfuscatedFish1).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish2).toBeDefined();
  expectTypeOf(data.obfuscatedFish2).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish3).toBeDefined();
  expectTypeOf(data.obfuscatedFish3).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.sulphurSkitter).toBeDefined();
  expectTypeOf(data.sulphurSkitter).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.skeletonFish).toBeDefined();
  expectTypeOf(data.skeletonFish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.manaRay).toBeDefined();
  expectTypeOf(data.manaRay).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.flyfish).toBeDefined();
  expectTypeOf(data.flyfish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.steamingHotFlounder).toBeDefined();
  expectTypeOf(data.steamingHotFlounder).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.soulFish).toBeDefined();
  expectTypeOf(data.soulFish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.karateFish).toBeDefined();
  expectTypeOf(data.karateFish).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.moldfin).toBeDefined();
  expectTypeOf(data.moldfin).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleTrophyFishRank>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.rank);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
});

test('SkyblockMemberCrimsonIsleTrophyFish getTrophyFishRank (Bronze)', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFish({ rewards: [1] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Bronze');
});

test('SkyblockMemberCrimsonIsleTrophyFish getTrophyFishRank (Diamond)', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFish({ rewards: [1, 2, 3, 4] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Diamond');
});

test('SkyblockMemberCrimsonIsleTrophyFish getTrophyFishRank (Gold)', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFish({ rewards: [1, 2, 3] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Gold');
});

test('SkyblockMemberCrimsonIsleTrophyFish getTrophyFishRank (Silver)', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFish({ rewards: [1, 2] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Silver');
});

test('SkyblockMemberCrimsonIsleTrophyFish getTrophyFishRank (Bronze)', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFish({ rewards: [1] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Bronze');
});
