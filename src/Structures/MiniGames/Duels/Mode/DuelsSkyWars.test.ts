import DuelsMode from './DuelsMode.ts';
import DuelsSkyWars from './DuelsSkyWars.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { DuelsModeSkyWarsKitId } from '../../../../Types/index.ts';

test('DuelsSkyWars', () => {
  const data = new DuelsSkyWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsSkyWars);
  expectTypeOf(data).toEqualTypeOf<DuelsSkyWars>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<DuelsMode>();
  expect(data.tournament).toBeDefined();
  expect(data.tournament).toBeInstanceOf(DuelsMode);
  expectTypeOf(data.tournament).toEqualTypeOf<DuelsMode>();
  expect(data.selectedKit).toBeDefined();
  expectTypeOf(data.selectedKit).toEqualTypeOf<DuelsModeSkyWarsKitId | 'UNKNOWN'>();
});
