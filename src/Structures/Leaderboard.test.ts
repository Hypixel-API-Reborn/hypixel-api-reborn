import Leaderboard from './Leaderboard.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Leaderboard', () => {
  const data = new Leaderboard({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Leaderboard);
  expectTypeOf(data).toEqualTypeOf<Leaderboard>();
  expect(data.path).toBeDefined();
  expectTypeOf(data.path).toEqualTypeOf<string>();
  expect(data.prefix).toBeDefined();
  expectTypeOf(data.prefix).toEqualTypeOf<string>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<string>();
  expect(data.location).toBeDefined();
  expectTypeOf(data.location).toEqualTypeOf<string>();
  expect(data.count).toBeDefined();
  expect(data.count).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.count).toEqualTypeOf<number>();
  expect(data.leaders).toBeDefined();
  expectTypeOf(data.leaders).toEqualTypeOf<string[]>();
});
