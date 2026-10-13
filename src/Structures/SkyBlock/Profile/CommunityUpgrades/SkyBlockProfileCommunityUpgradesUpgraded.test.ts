import SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileCommunityUpgradesUpgraded', () => {
  const data = new SkyBlockProfileCommunityUpgradesUpgraded({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgradesUpgraded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgraded>();
  expect(data.tier).toBeDefined();
  expect(data.tier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.startedBy).toBeDefined();
  expectTypeOf(data.startedBy).toEqualTypeOf<string>();
  expect(data.claimedTimestamp).toBeDefined();
  expect(data.claimedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.claimedTimestamp).toEqualTypeOf<number>();
  expect(data.claimedAt).toBeDefined();
  expect(data.claimedAt).toBeInstanceOf(Date);
  expectTypeOf(data.claimedAt).toEqualTypeOf<Date>();
  expect(data.claimedBy).toBeDefined();
  expectTypeOf(data.claimedBy).toEqualTypeOf<string>();
  expect(data.fasttracked).toBeDefined();
  expectTypeOf(data.fasttracked).toEqualTypeOf<boolean>();
});
