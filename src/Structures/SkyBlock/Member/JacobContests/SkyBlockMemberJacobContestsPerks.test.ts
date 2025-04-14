import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberJacobContestsPerks', () => {
  const data = new SkyBlockMemberJacobContestsPerks({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsPerks);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsPerks>();
  expect(data.doubleDrops).toBeDefined();
  expectTypeOf(data.doubleDrops).toEqualTypeOf<number>();
  expect(data.farmingLevelCap).toBeDefined();
  expectTypeOf(data.farmingLevelCap).toEqualTypeOf<number>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<boolean>();
});
