import SkyblockProfileCommunityUpgrades from './SkyblockProfileCommunityUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockProfileCommunityUpgradesUpgraded from './SkyblockProfileCommunityUpgradesUpgraded.js';
import type SkyblockProfileCommunityUpgradesUpgrading from './SkyblockProfileCommunityUpgradesUpgrading.js';

test('SkyblockProfileCommunityUpgrades', () => {
  const data = new SkyblockProfileCommunityUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfileCommunityUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfileCommunityUpgrades>();
  expect(data.currentlyUpgrading).toBeDefined();
  expectTypeOf(data.currentlyUpgrading).toEqualTypeOf<SkyblockProfileCommunityUpgradesUpgrading | null>();
  expect(data.upgrades).toBeDefined();
  expectTypeOf(data.upgrades).toEqualTypeOf<SkyblockProfileCommunityUpgradesUpgraded[]>();
});
