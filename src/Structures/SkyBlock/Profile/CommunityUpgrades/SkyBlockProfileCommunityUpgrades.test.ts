import SkyBlockProfileCommunityUpgrades from './SkyBlockProfileCommunityUpgrades.ts';
import SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.ts';
import SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileCommunityUpgrades', () => {
  const data = new SkyBlockProfileCommunityUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
  expect(data.currentlyUpgrading).toBeDefined();
  expectTypeOf(data.currentlyUpgrading).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrading | null>();
  expect(data.upgrades).toBeDefined();
  expectTypeOf(data.upgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgraded[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyBlockProfileCommunityUpgradesUpgrading | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.currentlyUpgrading);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrading | null>();
});
