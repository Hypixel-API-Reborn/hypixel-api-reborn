import BedWarsKillsDeathsType from './BedWarsKillsDeathsType.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsKillsDeathsType', () => {
  const data = new BedWarsKillsDeathsType({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsKillsDeathsType);
  expectTypeOf(data).toEqualTypeOf<BedWarsKillsDeathsType>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.ratio).toBeDefined();
  expect(data.ratio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ratio).toEqualTypeOf<number>();
});
