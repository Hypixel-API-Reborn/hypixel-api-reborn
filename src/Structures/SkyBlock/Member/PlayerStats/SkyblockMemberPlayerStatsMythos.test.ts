import SkyblockMemberPlayerStatsMythos from './SkyblockMemberPlayerStatsMythos.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsMythos', () => {
  const data = new SkyblockMemberPlayerStatsMythos({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsMythos);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsMythos>();
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.burrowsDugNext).toBeDefined();
  expectTypeOf(data.burrowsDugNext).toEqualTypeOf<number>();
  expect(data.burrowsDugCombat).toBeDefined();
  expectTypeOf(data.burrowsDugCombat).toEqualTypeOf<number>();
  expect(data.burrowsDugTreasure).toBeDefined();
  expectTypeOf(data.burrowsDugTreasure).toEqualTypeOf<number>();
  expect(data.burrowsChainsComplete).toBeDefined();
  expectTypeOf(data.burrowsChainsComplete).toEqualTypeOf<number>();
});
