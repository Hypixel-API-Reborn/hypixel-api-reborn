import SkyblockElection from './SkyblockElection.js';
import SkyblockElectionCandidate from './SkyblockElectionCandidate.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockElection', () => {
  const data = new SkyblockElection({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockElection);
  expectTypeOf(data).toEqualTypeOf<SkyblockElection>();
  expect(data.year).toBeDefined();
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.candidates).toBeDefined();
  expectTypeOf(data.candidates).toEqualTypeOf<SkyblockElectionCandidate[]>();
  data.candidates.forEach((candidate) => {
    expect(candidate).toBeDefined();
    expect(candidate).toBeInstanceOf(SkyblockElectionCandidate);
    expectTypeOf(candidate).toEqualTypeOf<SkyblockElectionCandidate>();
  });
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.year);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
