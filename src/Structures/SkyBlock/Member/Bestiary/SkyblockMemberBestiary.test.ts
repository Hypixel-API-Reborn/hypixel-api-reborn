import SkyblockMemberBestiary from './SkyblockMemberBestiary.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberBestiary', () => {
  const data = new SkyblockMemberBestiary({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberBestiary);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberBestiary>();
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<Record<string, number>>();
  expect(data.deaths).toBeDefined();
  expectTypeOf(data.deaths).toEqualTypeOf<Record<string, number>>();
  expect(data.lastClaimedMilestone).toBeDefined();
  expectTypeOf(data.lastClaimedMilestone).toEqualTypeOf<number>();
});
