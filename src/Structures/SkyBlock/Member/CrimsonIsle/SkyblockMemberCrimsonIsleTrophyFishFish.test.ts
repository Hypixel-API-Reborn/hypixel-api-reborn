import SkyblockMemberCrimsonIsleTrophyFishFish from './SkyblockMemberCrimsonIsleTrophyFishFish.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberCrimsonIsleTrophyFishFish', () => {
  const data = new SkyblockMemberCrimsonIsleTrophyFishFish({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleTrophyFishFish);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleTrophyFishFish>();
  expect(data.bronze).toBeDefined();
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expectTypeOf(data.gold).toEqualTypeOf<number>();
  expect(data.diamond).toBeDefined();
  expectTypeOf(data.diamond).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
