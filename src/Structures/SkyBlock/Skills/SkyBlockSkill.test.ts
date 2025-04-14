import SkyBlockSkill from './SkyBlockSkill.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockSkillLevel from './SkyBlockSkillLevel.js';

test('SkyBlockSkill', () => {
  const data = new SkyBlockSkill({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockSkill);
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkill>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.maxLevel).toBeDefined();
  expectTypeOf(data.maxLevel).toEqualTypeOf<number>();
  expect(data.levels).toBeDefined();
  expectTypeOf(data.levels).toEqualTypeOf<SkyBlockSkillLevel[]>();
});
