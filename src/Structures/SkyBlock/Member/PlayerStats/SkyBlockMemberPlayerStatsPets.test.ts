import SkyBlockMemberPlayerStatsPets from './SkyBlockMemberPlayerStatsPets.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsPets', () => {
  const data = new SkyBlockMemberPlayerStatsPets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsPets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsPets>();
  expect(data.oresMined).toBeDefined();
  expect(data.oresMined).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.oresMined).toEqualTypeOf<number>();
  expect(data.seaCreaturesKilled).toBeDefined();
  expect(data.seaCreaturesKilled).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.seaCreaturesKilled).toEqualTypeOf<number>();
  expect(data.totalExpGained).toBeDefined();
  expect(data.totalExpGained).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalExpGained).toEqualTypeOf<number>();
});
