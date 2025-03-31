import SkyblockSkill from './SkyblockSkill.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockSkillLevel from './SkyblockSkillLevel.js';

test('SkyblockSkill', () => {
  const data = new SkyblockSkill({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockSkill);
  expectTypeOf(data).toEqualTypeOf<SkyblockSkill>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.maxLevel).toBeDefined();
  expectTypeOf(data.maxLevel).toEqualTypeOf<number>();
  expect(data.levels).toBeDefined();
  expectTypeOf(data.levels).toEqualTypeOf<SkyblockSkillLevel[]>();
});
