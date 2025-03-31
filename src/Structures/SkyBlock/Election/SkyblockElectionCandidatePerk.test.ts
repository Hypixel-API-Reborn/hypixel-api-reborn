import SkyblockElectionCandidatePerk from './SkyblockElectionCandidatePerk.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockElectionCandidatePerk', () => {
  const data = new SkyblockElectionCandidatePerk({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockElectionCandidatePerk);
  expectTypeOf(data).toEqualTypeOf<SkyblockElectionCandidatePerk>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.minister).toBeDefined();
  expectTypeOf(data.minister).toEqualTypeOf<boolean>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
