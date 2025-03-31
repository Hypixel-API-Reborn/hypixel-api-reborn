import SkyblockMemberJacobContestsMedals from './SkyblockMemberJacobContestsMedals.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberJacobContestsMedals', () => {
  const data = new SkyblockMemberJacobContestsMedals({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberJacobContestsMedals);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberJacobContestsMedals>();
  expect(data.bronze).toBeDefined();
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expectTypeOf(data.gold).toEqualTypeOf<number>();
});
