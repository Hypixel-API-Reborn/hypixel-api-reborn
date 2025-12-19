import SkyWarsKitsMythic from './SkyWarsKitsMythic.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWarsKitsMythic', () => {
  const data = new SkyWarsKitsMythic({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWarsKitsMythic);
  expectTypeOf(data).toEqualTypeOf<SkyWarsKitsMythic>();
  expect(data.autoEquipArmor).toBeDefined();
  expectTypeOf(data.autoEquipArmor).toEqualTypeOf<boolean>();
  expect(data.xp).toBeDefined();
  expect(data.xp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.xp).toEqualTypeOf<number>();
});
