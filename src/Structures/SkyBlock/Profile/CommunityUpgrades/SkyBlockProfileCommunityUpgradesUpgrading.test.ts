import SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileCommunityUpgradesUpgrading', () => {
  const data = new SkyBlockProfileCommunityUpgradesUpgrading({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgradesUpgrading);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrading>();
  expect(data.tier).toBeDefined();
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.startedBy).toBeDefined();
  expectTypeOf(data.startedBy).toEqualTypeOf<number>();
});
