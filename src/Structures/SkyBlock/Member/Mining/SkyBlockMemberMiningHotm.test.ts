import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
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
  expectTypeOf(data.tokensSpent).toEqualTypeOf<number>();
  expect(data.forge).toBeDefined();
  expectTypeOf(data.forge).toEqualTypeOf<SkyBlockMemberMiningHotmForge>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.level.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
