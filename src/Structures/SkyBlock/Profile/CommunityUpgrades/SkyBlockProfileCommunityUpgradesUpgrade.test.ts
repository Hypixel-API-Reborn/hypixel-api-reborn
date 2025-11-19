import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CommunityUpgradesUpgrades } from '../../../../Types/SkyBlock.js';

test('SkyBlockProfileCommunityUpgradesUpgrade', () => {
  const data = new SkyBlockProfileCommunityUpgradesUpgrade({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileCommunityUpgradesUpgrade);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileCommunityUpgradesUpgrade>();
  expect(data.upgrade).toBeDefined();
  expectTypeOf(data.upgrade).toEqualTypeOf<CommunityUpgradesUpgrades | 'UNKNOWN'>();
  expect(data.startedTimestamp).toBeDefined();
  expect(data.startedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.startedTimestamp).toEqualTypeOf<number>();
  expect(data.startedAt).toBeDefined();
  expect(data.startedAt).toBeInstanceOf(Date);
  expectTypeOf(data.startedAt).toEqualTypeOf<Date>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CommunityUpgradesUpgrades | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.upgrade);
  expectTypeOf(data.toString()).toEqualTypeOf<CommunityUpgradesUpgrades | 'UNKNOWN'>();
});
