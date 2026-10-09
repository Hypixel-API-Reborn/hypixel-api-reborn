import SkyBlockMemberJacobContest from './SkyBlockMemberJacobContest.ts';
import SkyBlockMemberJacobContests from './SkyBlockMemberJacobContests.ts';
import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.ts';
import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.ts';
import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { JacobCrop } from '../../../../Types/index.ts';

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
  expectTypeOf(data.personalBests).toEqualTypeOf<Record<JacobCrop, number>>();
  expect(data.contests).toBeDefined();
  expectTypeOf(data.contests).toEqualTypeOf<Record<string, SkyBlockMemberJacobContest>>();
});
