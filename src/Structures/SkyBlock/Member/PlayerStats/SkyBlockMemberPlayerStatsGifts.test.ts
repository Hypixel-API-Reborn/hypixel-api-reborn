import SkyBlockMemberPlayerStatsGifts from './SkyBlockMemberPlayerStatsGifts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsGifts', () => {
  const data = new SkyBlockMemberPlayerStatsGifts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsGifts);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsGifts>();
  expect(data.received).toBeDefined();
  expect(data.received).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.received).toEqualTypeOf<number>();
  expect(data.given).toBeDefined();
  expect(data.given).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.given).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
