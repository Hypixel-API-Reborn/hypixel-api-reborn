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
  expectTypeOf(data.startedTimestamp).toEqualTypeOf<number>();
  expect(data.startedAt).toBeDefined();
  expectTypeOf(data.startedAt).toEqualTypeOf<Date>();
});
