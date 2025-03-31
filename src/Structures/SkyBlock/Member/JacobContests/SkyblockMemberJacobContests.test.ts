import SkyblockMemberJacobContest from './SkyblockMemberJacobContest.js';
import SkyblockMemberJacobContests from './SkyblockMemberJacobContests.js';
import SkyblockMemberJacobContestsMedals from './SkyblockMemberJacobContestsMedals.js';
import SkyblockMemberJacobContestsPerks from './SkyblockMemberJacobContestsPerks.js';
import SkyblockMemberJacobContestsUniqueBrackets from './SkyblockMemberJacobContestsUniqueBrackets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { JacobCrops } from '../../../../Types/Skyblock.js';

test('SkyblockMemberJacobContests', () => {
  const data = new SkyblockMemberJacobContests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberJacobContests);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberJacobContests>();
  expect(data.perks).toBeDefined();
  expectTypeOf(data.perks).toEqualTypeOf<SkyblockMemberJacobContestsPerks>();
  expect(data.medals).toBeDefined();
  expectTypeOf(data.medals).toEqualTypeOf<SkyblockMemberJacobContestsMedals>();
  expect(data.uniqueBrackets).toBeDefined();
  expectTypeOf(data.uniqueBrackets).toEqualTypeOf<SkyblockMemberJacobContestsUniqueBrackets>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<Record<keyof JacobCrops, number>>();
  expect(data.contests).toBeDefined();
  expectTypeOf(data.contests).toEqualTypeOf<Record<string, SkyblockMemberJacobContest>>();
});
