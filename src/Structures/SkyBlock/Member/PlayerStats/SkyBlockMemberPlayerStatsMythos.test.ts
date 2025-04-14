import SkyBlockMemberPlayerStatsMythos from './SkyBlockMemberPlayerStatsMythos.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsMythos', () => {
  const data = new SkyBlockMemberPlayerStatsMythos({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsMythos);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsMythos>();
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
