import SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileCommunityUpgradesUpgraded', () => {
  const data = new SkyBlockProfileCommunityUpgradesUpgraded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgradesUpgraded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgraded>();
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
