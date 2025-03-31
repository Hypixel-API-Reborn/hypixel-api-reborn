import SkyblockProfileCommunityUpgradesUpgrade from './SkyblockProfileCommunityUpgradesUpgrade.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CommunityUpgradesUpgrades } from '../../../../Types/Skyblock.js';

test('SkyblockProfileCommunityUpgradesUpgrade', () => {
  const data = new SkyblockProfileCommunityUpgradesUpgrade({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfileCommunityUpgradesUpgrade);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfileCommunityUpgradesUpgrade>();
  expect(data.upgrade).toBeDefined();
  expectTypeOf(data.upgrade).toEqualTypeOf<CommunityUpgradesUpgrades | 'UNKNOWN'>();
  expect(data.startedTimestamp).toBeDefined();
  expectTypeOf(data.startedTimestamp).toEqualTypeOf<number>();
  expect(data.startedAt).toBeDefined();
  expectTypeOf(data.startedAt).toEqualTypeOf<Date>();
});
