import BedWarsSettings from './BedWarsSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BedWarsSettingsDeposit, BedWarsSettingsSlumberItemNotification } from '../../../Types/Player.js';

test('BedWarsSettings', () => {
  const data = new BedWarsSettings({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSettings);
  expectTypeOf(data).toEqualTypeOf<BedWarsSettings>();
  expect(data.deposit).toBeDefined();
  expectTypeOf(data.deposit).toEqualTypeOf<BedWarsSettingsDeposit>();
  expect(data.slumberItemNotification).toBeDefined();
  expectTypeOf(data.slumberItemNotification).toEqualTypeOf<BedWarsSettingsSlumberItemNotification>();
  expect(data.slumberWalletFull).toBeDefined();
  expectTypeOf(data.slumberWalletFull).toEqualTypeOf<boolean>();
  expect(data.trapRemoval).toBeDefined();
  expectTypeOf(data.trapRemoval).toEqualTypeOf<boolean>();
});
