import SkyBlockMemberJacobContest from './SkyBlockMemberJacobContest.js';
import SkyBlockMemberJacobContests from './SkyBlockMemberJacobContests.js';
import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { JacobCrops } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberJacobContests', () => {
  const data = new SkyBlockMemberJacobContests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContests);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContests>();
  expect(data.perks).toBeDefined();
  expect(data.perks).toBeInstanceOf(SkyBlockMemberJacobContestsPerks);
  expectTypeOf(data.perks).toEqualTypeOf<SkyBlockMemberJacobContestsPerks>();
  expect(data.medals).toBeDefined();
  expect(data.medals).toBeInstanceOf(SkyBlockMemberJacobContestsMedals);
  expectTypeOf(data.medals).toEqualTypeOf<SkyBlockMemberJacobContestsMedals>();
  expect(data.uniqueBrackets).toBeDefined();
  expect(data.uniqueBrackets).toBeInstanceOf(SkyBlockMemberJacobContestsUniqueBrackets);
  expectTypeOf(data.uniqueBrackets).toEqualTypeOf<SkyBlockMemberJacobContestsUniqueBrackets>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<Record<keyof JacobCrops, number>>();
  expect(data.contests).toBeDefined();
  expectTypeOf(data.contests).toEqualTypeOf<Record<string, SkyBlockMemberJacobContest>>();
});
