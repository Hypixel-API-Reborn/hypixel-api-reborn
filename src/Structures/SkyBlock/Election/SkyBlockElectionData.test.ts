import SkyBlockElection from './SkyBlockElection.js';
import SkyBlockElectionData from './SkyBlockElectionData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockElectionData', () => {
  const data = new SkyBlockElectionData({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockElectionData);
  expectTypeOf(data).toEqualTypeOf<SkyBlockElectionData>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.lastElectionResults).toBeDefined();
  expectTypeOf(data.lastElectionResults).toEqualTypeOf<SkyBlockElection>();
  expect(data.currentElection).toBeDefined();
  expectTypeOf(data.currentElection).toEqualTypeOf<SkyBlockElection | null>();
});
