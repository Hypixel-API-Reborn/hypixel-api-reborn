import SkyblockProfileCommunityUpgradesUpgraded from './SkyblockProfileCommunityUpgradesUpgraded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockProfileCommunityUpgradesUpgraded', () => {
  const data = new SkyblockProfileCommunityUpgradesUpgraded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfileCommunityUpgradesUpgraded);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfileCommunityUpgradesUpgraded>();
  expect(data.tier).toBeDefined();
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.startedBy).toBeDefined();
  expectTypeOf(data.startedBy).toEqualTypeOf<number>();
  expect(data.claimedTimestamp).toBeDefined();
  expectTypeOf(data.claimedTimestamp).toEqualTypeOf<number>();
  expect(data.claimedAt).toBeDefined();
  expectTypeOf(data.claimedAt).toEqualTypeOf<Date>();
  expect(data.claimedBy).toBeDefined();
  expectTypeOf(data.claimedBy).toEqualTypeOf<number>();
  expect(data.fasttracked).toBeDefined();
  expectTypeOf(data.fasttracked).toEqualTypeOf<boolean>();
});
