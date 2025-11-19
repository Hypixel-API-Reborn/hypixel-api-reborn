import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberJacobContestsMedals', () => {
  const data = new SkyBlockMemberJacobContestsMedals({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsMedals);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsMedals>();
  expect(data.bronze).toBeDefined();
  expect(data.bronze).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expect(data.gold).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gold).toEqualTypeOf<number>();
});
