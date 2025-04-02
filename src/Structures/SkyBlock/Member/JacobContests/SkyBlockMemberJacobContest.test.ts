import SkyBlockMemberJacobContest from './SkyBlockMemberJacobContest.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberJacobContest', () => {
  const data = new SkyBlockMemberJacobContest({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContest);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContest>();
  expect(data.collected).toBeDefined();
  expectTypeOf(data.collected).toEqualTypeOf<number | null>();
  expect(data.claimedRewards).toBeDefined();
  expectTypeOf(data.claimedRewards).toEqualTypeOf<boolean | null>();
  expect(data.claimedPosition).toBeDefined();
  expectTypeOf(data.claimedPosition).toEqualTypeOf<number | null>();
  expect(data.claimedParticipants).toBeDefined();
  expectTypeOf(data.claimedParticipants).toEqualTypeOf<number | null>();
});
