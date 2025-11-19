import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberCrimsonIsleTrophyFishFish', () => {
  const data = new SkyBlockMemberCrimsonIsleTrophyFishFish({ stats: 'meow' }, 'mrrp');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleTrophyFishFish);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleTrophyFishFish>();
  expect(data.bronze).toBeDefined();
  expect(data.bronze).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expect(data.gold).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gold).toEqualTypeOf<number>();
  expect(data.diamond).toBeDefined();
  expect(data.diamond).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diamond).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
