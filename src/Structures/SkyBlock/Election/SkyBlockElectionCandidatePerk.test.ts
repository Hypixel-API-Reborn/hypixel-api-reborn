import SkyBlockElectionCandidatePerk from './SkyBlockElectionCandidatePerk.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockElectionCandidatePerk', () => {
  const data = new SkyBlockElectionCandidatePerk({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockElectionCandidatePerk);
  expectTypeOf(data).toEqualTypeOf<SkyBlockElectionCandidatePerk>();
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
