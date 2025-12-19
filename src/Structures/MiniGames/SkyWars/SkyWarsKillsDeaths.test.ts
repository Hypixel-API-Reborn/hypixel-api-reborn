import SkyWarsKillsDeaths from './SkyWarsKillsDeaths.js';
import SkyWarsKillsDeathsType from './SkyWarsKillsDeathsType.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsKillsDeaths', () => {
  const data = new SkyWarsKillsDeaths({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsKillsDeaths);
  expectTypeOf(data).toEqualTypeOf<SkyWarsKillsDeaths>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.total).toEqualTypeOf<SkyWarsKillsDeathsType>();
  expect(data.melee).toBeDefined();
  expect(data.melee).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.melee).toEqualTypeOf<SkyWarsKillsDeathsType>();
  expect(data.void).toBeDefined();
  expect(data.void).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.void).toEqualTypeOf<SkyWarsKillsDeathsType>();
  expect(data.bow).toBeDefined();
  expect(data.bow).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.bow).toEqualTypeOf<SkyWarsKillsDeathsType>();
  expect(data.mob).toBeDefined();
  expect(data.mob).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.mob).toEqualTypeOf<SkyWarsKillsDeathsType>();
  expect(data.fall).toBeDefined();
  expect(data.fall).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data.fall).toEqualTypeOf<SkyWarsKillsDeathsType>();
});
