import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberJacobContestsMedals', () => {
  const data = new SkyBlockMemberJacobContestsMedals({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsMedals);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsMedals>();
  expect(data.bronze).toBeDefined();
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expectTypeOf(data.gold).toEqualTypeOf<number>();
});
