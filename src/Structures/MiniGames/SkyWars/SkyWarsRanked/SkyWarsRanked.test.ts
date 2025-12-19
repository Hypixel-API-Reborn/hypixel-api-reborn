import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsRanked from './SkyWarsRanked.js';
import SkyWarsRankedKits from './SkyWarsRankedKits.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsRanked', () => {
  const data = new SkyWarsRanked({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsRanked);
  expectTypeOf(data).toEqualTypeOf<SkyWarsRanked>();
  expect(data.normal).toBeDefined();
  expect(data.normal).toBeInstanceOf(SkyWarsMode);
  expectTypeOf(data.normal).toEqualTypeOf<SkyWarsMode>();
  expect(data.kits).toBeDefined();
  expect(data.kits).toBeInstanceOf(SkyWarsRankedKits);
  expectTypeOf(data.kits).toEqualTypeOf<SkyWarsRankedKits>();
});
