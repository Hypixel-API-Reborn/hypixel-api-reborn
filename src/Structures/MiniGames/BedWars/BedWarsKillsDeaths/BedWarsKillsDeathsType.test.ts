import BedWarsKillsDeathsType from './BedWarsKillsDeathsType.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsKillsDeathsType', () => {
  const data = new BedWarsKillsDeathsType({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsKillsDeathsType);
  expectTypeOf(data).toEqualTypeOf<BedWarsKillsDeathsType>();
});
