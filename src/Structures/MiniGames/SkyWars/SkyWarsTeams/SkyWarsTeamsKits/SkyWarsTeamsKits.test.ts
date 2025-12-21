import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.js';
import SkyWarsTeamsKits from './SkyWarsTeamsKits.js';
import SkyWarsTeamsKitsAttacking from './SkyWarsTeamsKitsAttacking.js';
import SkyWarsTeamsKitsDefending from './SkyWarsTeamsKitsDefending.js';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.js';
import SkyWarsTeamsKitsSupporting from './SkyWarsTeamsKitsSupporting.js';
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
