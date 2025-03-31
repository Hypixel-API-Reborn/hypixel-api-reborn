import SkyblockMemberCrimsonIsleMatriarch from './SkyblockMemberCrimsonIsleMatriarch.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberCrimsonIsleMatriarch', () => {
  const data = new SkyblockMemberCrimsonIsleMatriarch({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleMatriarch);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleMatriarch>();
  expect(data.pearlsCollected).toBeDefined();
  expectTypeOf(data.pearlsCollected).toEqualTypeOf<number>();
  expect(data.lastAttempt).toBeDefined();
  expectTypeOf(data.lastAttempt).toEqualTypeOf<number>();
  expect(data.recentRefreshes).toBeDefined();
  expectTypeOf(data.recentRefreshes).toEqualTypeOf<number[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.pearlsCollected);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
