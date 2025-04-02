import SkyBlockMemberCrimsonIsleTrophyFish from './SkyBlockMemberCrimsonIsleTrophyFish.js';
import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleTrophyFishRank } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberCrimsonIsleTrophyFish', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberCrimsonIsleTrophyFish();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.gusher).toBeDefined();
  expectTypeOf(data.gusher).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.blobfish).toBeDefined();
  expectTypeOf(data.blobfish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.lavaHorse).toBeDefined();
  expectTypeOf(data.lavaHorse).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.goldenFish).toBeDefined();
  expectTypeOf(data.goldenFish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.volcanicStonefish).toBeDefined();
  expectTypeOf(data.volcanicStonefish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.slugfish).toBeDefined();
  expectTypeOf(data.slugfish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.vanille).toBeDefined();
  expectTypeOf(data.vanille).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish1).toBeDefined();
  expectTypeOf(data.obfuscatedFish1).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish2).toBeDefined();
  expectTypeOf(data.obfuscatedFish2).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.obfuscatedFish3).toBeDefined();
  expectTypeOf(data.obfuscatedFish3).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.sulphurSkitter).toBeDefined();
  expectTypeOf(data.sulphurSkitter).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.skeletonFish).toBeDefined();
  expectTypeOf(data.skeletonFish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.manaRay).toBeDefined();
  expectTypeOf(data.manaRay).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.flyfish).toBeDefined();
  expectTypeOf(data.flyfish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.steamingHotFlounder).toBeDefined();
  expectTypeOf(data.steamingHotFlounder).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.soulFish).toBeDefined();
  expectTypeOf(data.soulFish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.karateFish).toBeDefined();
  expectTypeOf(data.karateFish).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.moldfin).toBeDefined();
  expectTypeOf(data.moldfin).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleTrophyFishRank>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.rank);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
});

test('SkyBlockMemberCrimsonIsleTrophyFish getTrophyFishRank (Bronze)', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFish({ rewards: [1] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Bronze');
});

test('SkyBlockMemberCrimsonIsleTrophyFish getTrophyFishRank (Diamond)', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFish({ rewards: [1, 2, 3, 4] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Diamond');
});

test('SkyBlockMemberCrimsonIsleTrophyFish getTrophyFishRank (Gold)', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFish({ rewards: [1, 2, 3] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Gold');
});

test('SkyBlockMemberCrimsonIsleTrophyFish getTrophyFishRank (Silver)', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFish({ rewards: [1, 2] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Silver');
});

test('SkyBlockMemberCrimsonIsleTrophyFish getTrophyFishRank (Bronze)', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFish({ rewards: [1] });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleTrophyFishRank>();
  expect(data.rank).toBe('Bronze');
});
