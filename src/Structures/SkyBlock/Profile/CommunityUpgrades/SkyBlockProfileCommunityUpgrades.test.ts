import SkyBlockProfileCommunityUpgrades from './SkyBlockProfileCommunityUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.js';
import type SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.js';

test('SkyBlockProfileCommunityUpgrades', () => {
  const data = new SkyBlockProfileCommunityUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
  expect(data.currentlyUpgrading).toBeDefined();
  expectTypeOf(data.currentlyUpgrading).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrading | null>();
  expect(data.upgrades).toBeDefined();
  expectTypeOf(data.upgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgraded[]>();
});
