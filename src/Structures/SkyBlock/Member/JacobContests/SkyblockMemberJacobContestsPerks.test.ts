import SkyblockMemberJacobContestsPerks from './SkyblockMemberJacobContestsPerks.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberJacobContestsPerks', () => {
  const data = new SkyblockMemberJacobContestsPerks({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberJacobContestsPerks);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberJacobContestsPerks>();
  expect(data.doubleDrops).toBeDefined();
  expectTypeOf(data.doubleDrops).toEqualTypeOf<number>();
  expect(data.farmingLevelCap).toBeDefined();
  expectTypeOf(data.farmingLevelCap).toEqualTypeOf<number>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<boolean>();
});
