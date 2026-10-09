import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsTeamsKits from './SkyWarsTeamsKits.ts';
import SkyWarsTeamsKitsAttacking from './SkyWarsTeamsKitsAttacking.ts';
import SkyWarsTeamsKitsDefending from './SkyWarsTeamsKitsDefending.ts';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.ts';
import SkyWarsTeamsKitsSupporting from './SkyWarsTeamsKitsSupporting.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsTeamsKits', () => {
  const data = new SkyWarsTeamsKits({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsTeamsKits);
  expectTypeOf(data).toEqualTypeOf<SkyWarsTeamsKits>();
  expect(data.mining).toBeDefined();
  expect(data.mining).toBeInstanceOf(SkyWarsTeamsKitsMining);
  expectTypeOf(data.mining).toEqualTypeOf<SkyWarsTeamsKitsMining>();
  expect(data.defending).toBeDefined();
  expect(data.defending).toBeInstanceOf(SkyWarsTeamsKitsDefending);
  expectTypeOf(data.defending).toEqualTypeOf<SkyWarsTeamsKitsDefending>();
  expect(data.supporting).toBeDefined();
  expect(data.supporting).toBeInstanceOf(SkyWarsTeamsKitsSupporting);
  expectTypeOf(data.supporting).toEqualTypeOf<SkyWarsTeamsKitsSupporting>();
  expect(data.attacking).toBeDefined();
  expect(data.attacking).toBeInstanceOf(SkyWarsTeamsKitsAttacking);
  expectTypeOf(data.attacking).toEqualTypeOf<SkyWarsTeamsKitsAttacking>();
  expect(data.enderChest).toBeDefined();
  expect(data.enderChest).toBeInstanceOf(BaseSkyWarsMode);
  expectTypeOf(data.enderChest).toEqualTypeOf<BaseSkyWarsMode>();
});
