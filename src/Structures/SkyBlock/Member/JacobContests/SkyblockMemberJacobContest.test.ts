import SkyblockMemberJacobContest from './SkyblockMemberJacobContest.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberJacobContest', () => {
  const data = new SkyblockMemberJacobContest({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberJacobContest);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberJacobContest>();
  expect(data.collected).toBeDefined();
  expectTypeOf(data.collected).toEqualTypeOf<number | null>();
  expect(data.claimedRewards).toBeDefined();
  expectTypeOf(data.claimedRewards).toEqualTypeOf<boolean | null>();
  expect(data.claimedPosition).toBeDefined();
  expectTypeOf(data.claimedPosition).toEqualTypeOf<number | null>();
  expect(data.claimedParticipants).toBeDefined();
  expectTypeOf(data.claimedParticipants).toEqualTypeOf<number | null>();
});
