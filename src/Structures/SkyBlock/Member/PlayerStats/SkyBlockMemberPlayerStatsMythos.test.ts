import SkyBlockMemberPlayerStatsMythos from './SkyBlockMemberPlayerStatsMythos.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsMythos', () => {
  const data = new SkyBlockMemberPlayerStatsMythos({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsMythos);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsMythos>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.burrowsDugNext).toBeDefined();
  expect(data.burrowsDugNext).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.burrowsDugNext).toEqualTypeOf<number>();
  expect(data.burrowsDugCombat).toBeDefined();
  expect(data.burrowsDugCombat).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.burrowsDugCombat).toEqualTypeOf<number>();
  expect(data.burrowsDugTreasure).toBeDefined();
  expect(data.burrowsDugTreasure).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.burrowsDugTreasure).toEqualTypeOf<number>();
  expect(data.burrowsChainsComplete).toBeDefined();
  expect(data.burrowsChainsComplete).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.burrowsChainsComplete).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.kills);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
