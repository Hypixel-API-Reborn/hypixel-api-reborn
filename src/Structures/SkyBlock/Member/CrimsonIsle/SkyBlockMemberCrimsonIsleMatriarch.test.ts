import SkyBlockMemberCrimsonIsleMatriarch from './SkyBlockMemberCrimsonIsleMatriarch.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberCrimsonIsleMatriarch', () => {
  const data = new SkyBlockMemberCrimsonIsleMatriarch({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleMatriarch);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleMatriarch>();
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
