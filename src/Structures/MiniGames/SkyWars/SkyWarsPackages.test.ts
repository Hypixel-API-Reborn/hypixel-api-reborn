import SkyWarsKits from './SkyWarsKits.js';
import SkyWarsPackages from './SkyWarsPackages.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsPackages', () => {
  const data = new SkyWarsPackages([]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsPackages);
  expectTypeOf(data).toEqualTypeOf<SkyWarsPackages>();
  expect(data.rawPackages).toBeDefined();
  expectTypeOf(data.rawPackages).toEqualTypeOf<Record<string, any>>();
  expect(data.cages).toBeDefined();
  expectTypeOf(data.cages).toEqualTypeOf<any>();
  expect(data.kits).toBeDefined();
  expect(data.kits).toBeInstanceOf(SkyWarsKits);
  expectTypeOf(data.kits).toEqualTypeOf<SkyWarsKits>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<any>();
});
