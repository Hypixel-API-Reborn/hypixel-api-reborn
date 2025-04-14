import SkyBlockMemberPlayerStatsGifts from './SkyBlockMemberPlayerStatsGifts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsGifts', () => {
  const data = new SkyBlockMemberPlayerStatsGifts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsGifts);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsGifts>();
  expect(data.received).toBeDefined();
  expectTypeOf(data.received).toEqualTypeOf<number>();
  expect(data.given).toBeDefined();
  expectTypeOf(data.given).toEqualTypeOf<number>();
});
