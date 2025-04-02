import SkyBlockMemberBestiary from './SkyBlockMemberBestiary.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberBestiary', () => {
  const data = new SkyBlockMemberBestiary({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberBestiary);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberBestiary>();
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<Record<string, number>>();
  expect(data.deaths).toBeDefined();
  expectTypeOf(data.deaths).toEqualTypeOf<Record<string, number>>();
  expect(data.lastClaimedMilestone).toBeDefined();
  expectTypeOf(data.lastClaimedMilestone).toEqualTypeOf<number>();
});
