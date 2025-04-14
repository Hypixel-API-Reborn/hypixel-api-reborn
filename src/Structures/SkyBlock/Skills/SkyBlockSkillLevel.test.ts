import SkyBlockSkillLevel from './SkyBlockSkillLevel.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockSkillLevel', () => {
  const data = new SkyBlockSkillLevel({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockSkillLevel);
  expectTypeOf(data).toEqualTypeOf<SkyBlockSkillLevel>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.totalExpRequired).toBeDefined();
  expectTypeOf(data.totalExpRequired).toEqualTypeOf<number>();
  expect(data.unlocks).toBeDefined();
  expectTypeOf(data.unlocks).toEqualTypeOf<string[]>();
});
