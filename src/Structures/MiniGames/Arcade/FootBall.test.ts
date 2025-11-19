import FootBall from './FootBall.js';
import { expect, expectTypeOf, test } from 'vitest';

test('FootBall', () => {
  const data = new FootBall({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(FootBall);
  expectTypeOf(data).toEqualTypeOf<FootBall>();
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
