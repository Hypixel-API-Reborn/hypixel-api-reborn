import SkyblockElection from './SkyblockElection.js';
import SkyblockElectionData from './SkyblockElectionData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockElectionData', () => {
  const data = new SkyblockElectionData({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockElectionData);
  expectTypeOf(data).toEqualTypeOf<SkyblockElectionData>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.lastElectionResults).toBeDefined();
  expectTypeOf(data.lastElectionResults).toEqualTypeOf<SkyblockElection>();
  expect(data.currentElection).toBeDefined();
  expectTypeOf(data.currentElection).toEqualTypeOf<SkyblockElection | null>();
});
