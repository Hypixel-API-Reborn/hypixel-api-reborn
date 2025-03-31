import SkyblockElectionCandidate from './SkyblockElectionCandidate.js';
import SkyblockElectionCandidatePerk from './SkyblockElectionCandidatePerk.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockCandidateKeyBenefit, SkyblockMayor } from '../../../Types/Skyblock.js';

test('SkyblockElectionCandidate', () => {
  const data = new SkyblockElectionCandidate({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockElectionCandidate);
  expectTypeOf(data).toEqualTypeOf<SkyblockElectionCandidate>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<SkyblockMayor | 'UNKNOWN'>();
  expect(data.keyBenefit).toBeDefined();
  expectTypeOf(data.keyBenefit).toEqualTypeOf<SkyblockCandidateKeyBenefit | 'UNKNOWN'>();
  expect(data.perks).toBeDefined();
  expectTypeOf(data.perks).toEqualTypeOf<SkyblockElectionCandidatePerk[]>();
  expect(data.votesReceived).toBeDefined();
  expectTypeOf(data.votesReceived).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyblockMayor | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyblockMayor | 'UNKNOWN'>();
});
