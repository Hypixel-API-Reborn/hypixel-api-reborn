import Football from './Football.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Football', () => {
  const data = new Football({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Football);
  expectTypeOf(data).toEqualTypeOf<Football>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.goals).toBeDefined();
  expect(data.goals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goals).toEqualTypeOf<number>();
  expect(data.kicks).toBeDefined();
  expect(data.kicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kicks).toEqualTypeOf<number>();
  expect(data.powerKicks).toBeDefined();
  expect(data.powerKicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.powerKicks).toEqualTypeOf<number>();
});
