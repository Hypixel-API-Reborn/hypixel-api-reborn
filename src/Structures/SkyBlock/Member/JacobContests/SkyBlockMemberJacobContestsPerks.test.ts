import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberJacobContestsPerks', () => {
  const data = new SkyBlockMemberJacobContestsPerks({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsPerks);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsPerks>();
  expect(data.doubleDrops).toBeDefined();
  expect(data.doubleDrops).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.doubleDrops).toEqualTypeOf<number>();
  expect(data.farmingLevelCap).toBeDefined();
  expect(data.farmingLevelCap).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmingLevelCap).toEqualTypeOf<number>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<boolean>();
});
