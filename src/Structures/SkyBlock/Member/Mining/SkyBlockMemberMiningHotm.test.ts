import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.ts';
import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.ts';
import SkyBlockMemberSkillTrees from '../SkillTree/SkyBlockMemberSkillTrees.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningHotm', () => {
  const data = new SkyBlockMemberMiningHotm({ stats: 'meow' }, new SkyBlockMemberSkillTrees({ stats: 'meow' }));
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningHotm);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningHotm>();
  expect(data.forge).toBeDefined();
  expect(data.forge).toBeInstanceOf(SkyBlockMemberMiningHotmForge);
  expectTypeOf(data.forge).toEqualTypeOf<SkyBlockMemberMiningHotmForge>();
});
