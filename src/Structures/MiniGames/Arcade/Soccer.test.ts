import Soccer from './Soccer.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Soccer', () => {
  const data = new Soccer({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Soccer);
  expectTypeOf(data).toEqualTypeOf<Soccer>();
  expect(data.goals).toBeDefined();
  expect(data.goals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goals).toEqualTypeOf<number>();
  expect(data.kicks).toBeDefined();
  expect(data.kicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kicks).toEqualTypeOf<number>();
  expect(data.powerkicks).toBeDefined();
  expect(data.powerkicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.powerkicks).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
