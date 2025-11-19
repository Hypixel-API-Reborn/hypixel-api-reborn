import SkyBlockElectionCandidate from './SkyBlockElectionCandidate.js';
import SkyBlockElectionCandidatePerk from './SkyBlockElectionCandidatePerk.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockCandidateKeyBenefit, SkyBlockMayor } from '../../../Types/SkyBlock.js';

test('SkyBlockElectionCandidate', () => {
  const data = new SkyBlockElectionCandidate({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockElectionCandidate);
  expectTypeOf(data).toEqualTypeOf<SkyBlockElectionCandidate>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<SkyBlockMayor | 'UNKNOWN'>();
  expect(data.keyBenefit).toBeDefined();
  expectTypeOf(data.keyBenefit).toEqualTypeOf<SkyBlockCandidateKeyBenefit | 'UNKNOWN'>();
  expect(data.perks).toBeDefined();
  expectTypeOf(data.perks).toEqualTypeOf<SkyBlockElectionCandidatePerk[]>();
  expect(data.votesReceived).toBeDefined();
  expect(data.votesReceived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.votesReceived).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyBlockMayor | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyBlockMayor | 'UNKNOWN'>();
});
