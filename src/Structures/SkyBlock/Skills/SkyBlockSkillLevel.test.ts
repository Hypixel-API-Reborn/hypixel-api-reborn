import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockSkillLevel', () => {
  const data = new SkyBlockSkillLevel({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockSkillLevel);
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkillLevel>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.totalExpRequired).toBeDefined();
  expect(data.totalExpRequired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalExpRequired).toEqualTypeOf<number>();
  expect(data.unlocks).toBeDefined();
  expectTypeOf(data.unlocks).toEqualTypeOf<string[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
