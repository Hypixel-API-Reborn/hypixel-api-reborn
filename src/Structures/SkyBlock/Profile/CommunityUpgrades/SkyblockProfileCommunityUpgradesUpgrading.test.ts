import SkyblockProfileCommunityUpgradesUpgrading from './SkyblockProfileCommunityUpgradesUpgrading.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockProfileCommunityUpgradesUpgrading', () => {
  const data = new SkyblockProfileCommunityUpgradesUpgrading({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfileCommunityUpgradesUpgrading);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfileCommunityUpgradesUpgrading>();
  expect(data.tier).toBeDefined();
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.startedBy).toBeDefined();
  expectTypeOf(data.startedBy).toEqualTypeOf<number>();
});
