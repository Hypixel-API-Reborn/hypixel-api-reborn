import SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileCommunityUpgradesUpgrading', () => {
  const data = new SkyBlockProfileCommunityUpgradesUpgrading({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgradesUpgrading);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrading>();
  expect(data.tier).toBeDefined();
  expect(data.tier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.startedBy).toBeDefined();
  expect(data.startedBy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.startedBy).toEqualTypeOf<number>();
});
