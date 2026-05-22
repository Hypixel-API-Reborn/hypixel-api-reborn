import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import SkyBlockMemberSkillTrees from '../SkillTree/SkyBlockMemberSkillTrees.js';
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
