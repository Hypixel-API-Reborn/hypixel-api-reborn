import SkyBlockMemberSlayer from './SkyBlockMemberSlayer.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberSlayerClaimedLevels from './SkyBlockMemberSlayerClaimedLevels.js';
import type { LevelData } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberSlayer', () => {
  const data = new SkyBlockMemberSlayer({ stats: 'meow' }, 'zombie');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberSlayer);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.claimedLevels).toBeDefined();
  expectTypeOf(data.claimedLevels).toEqualTypeOf<SkyBlockMemberSlayerClaimedLevels>();
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
