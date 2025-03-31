import SkyblockMemberMiningHotm from './SkyblockMemberMiningHotm.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberMiningHotmForge from './SkyblockMemberMiningHotmForge.js';
import type { SkillLevelData } from '../../../../Types/Skyblock.js';

test('SkyblockMemberMiningHotm', () => {
  const data = new SkyblockMemberMiningHotm({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberMiningHotm);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberMiningHotm>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.nodes).toBeDefined();
  expectTypeOf(data.nodes).toEqualTypeOf<Record<string, number | boolean>>();
  expect(data.tokensSpent).toBeDefined();
  expectTypeOf(data.tokensSpent).toEqualTypeOf<number>();
  expect(data.forge).toBeDefined();
  expectTypeOf(data.forge).toEqualTypeOf<SkyblockMemberMiningHotmForge>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
