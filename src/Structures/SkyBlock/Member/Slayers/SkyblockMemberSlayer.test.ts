import SkyblockMemberSlayer from './SkyblockMemberSlayer.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberSlayerClaimedLevels from './SkyblockMemberSlayerClaimedLevels.js';
import type { LevelData } from '../../../../Types/Skyblock.js';

test('SkyblockMemberSlayer', () => {
  const data = new SkyblockMemberSlayer({ stats: 'meow' }, 'zombie');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberSlayer);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.claimedLevels).toBeDefined();
  expectTypeOf(data.claimedLevels).toEqualTypeOf<SkyblockMemberSlayerClaimedLevels>();
  expect(data.tier0Kills).toBeDefined();
  expectTypeOf(data.tier0Kills).toEqualTypeOf<number>();
  expect(data.tier1Kills).toBeDefined();
  expectTypeOf(data.tier1Kills).toEqualTypeOf<number>();
  expect(data.tier2Kills).toBeDefined();
  expectTypeOf(data.tier2Kills).toEqualTypeOf<number>();
  expect(data.tier3Kills).toBeDefined();
  expectTypeOf(data.tier3Kills).toEqualTypeOf<number>();
  expect(data.tier4Kills).toBeDefined();
  expectTypeOf(data.tier4Kills).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<LevelData>();
});
