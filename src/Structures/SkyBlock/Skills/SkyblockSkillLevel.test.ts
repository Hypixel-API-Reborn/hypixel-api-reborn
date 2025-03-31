import SkyblockSkillLevel from './SkyblockSkillLevel.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockSkillLevel', () => {
  const data = new SkyblockSkillLevel({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockSkillLevel);
  expectTypeOf(data).toEqualTypeOf<SkyblockSkillLevel>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.totalExpRequired).toBeDefined();
  expectTypeOf(data.totalExpRequired).toEqualTypeOf<number>();
  expect(data.unlocks).toBeDefined();
  expectTypeOf(data.unlocks).toEqualTypeOf<string[]>();
});
