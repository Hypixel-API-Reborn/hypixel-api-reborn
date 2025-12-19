import SkyWarsKillsDeathsType from './SkyWarsKillsDeathsType.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsKillsDeathsType', () => {
  const data = new SkyWarsKillsDeathsType({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsKillsDeathsType);
  expectTypeOf(data).toEqualTypeOf<SkyWarsKillsDeathsType>();
});
