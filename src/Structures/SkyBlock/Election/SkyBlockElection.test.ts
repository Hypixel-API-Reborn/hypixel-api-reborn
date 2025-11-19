import SkyBlockElection from './SkyBlockElection.js';
import SkyBlockElectionCandidate from './SkyBlockElectionCandidate.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockElection', () => {
  const data = new SkyBlockElection({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockElection);
  expectTypeOf(data).toEqualTypeOf<SkyBlockElection>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.candidates).toBeDefined();
  expectTypeOf(data.candidates).toEqualTypeOf<SkyBlockElectionCandidate[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.year);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
