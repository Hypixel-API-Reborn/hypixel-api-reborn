import SkyBlockSkill from './SkyBlockSkill.js';
import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';
import { expect, expectTypeOf, test } from 'vitest';

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
  expect(data.maxLevel).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.maxLevel).toEqualTypeOf<number>();
  expect(data.levels).toBeDefined();
  expectTypeOf(data.levels).toEqualTypeOf<SkyBlockSkillLevel[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
