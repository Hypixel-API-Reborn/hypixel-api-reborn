import BaseAchievement from './BaseAchievement.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BaseAchievement', () => {
  const data = new BaseAchievement('mrrp', { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BaseAchievement);
  expectTypeOf(data).toEqualTypeOf<BaseAchievement>();
  expect(data.codeName).toBeDefined();
  expectTypeOf(data.codeName).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.secret).toBeDefined();
  expectTypeOf(data.secret).toEqualTypeOf<boolean>();
  expect(data.legacy).toBeDefined();
  expectTypeOf(data.legacy).toEqualTypeOf<boolean>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.codeName);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
