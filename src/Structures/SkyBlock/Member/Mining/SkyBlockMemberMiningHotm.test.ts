import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkillLevelData } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberMiningHotm', () => {
  const data = new SkyBlockMemberMiningHotm({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningHotm);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningHotm>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkillLevelData>();
  expect(data.nodes).toBeDefined();
  expectTypeOf(data.nodes).toEqualTypeOf<Record<string, number | boolean>>();
  expect(data.tokensSpent).toBeDefined();
  expect(data.tokensSpent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokensSpent).toEqualTypeOf<number>();
  expect(data.forge).toBeDefined();
  expect(data.forge).toBeInstanceOf(SkyBlockMemberMiningHotmForge);
  expectTypeOf(data.forge).toEqualTypeOf<SkyBlockMemberMiningHotmForge>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
