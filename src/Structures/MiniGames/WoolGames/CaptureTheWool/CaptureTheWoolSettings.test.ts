import CaptureTheWoolSettings from './CaptureTheWoolSettings.js';
import { expect, expectTypeOf, test } from 'vitest';

test('CaptureTheWoolSettings', () => {
  const data = new CaptureTheWoolSettings({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(CaptureTheWoolSettings);
  expectTypeOf(data).toEqualTypeOf<CaptureTheWoolSettings>();
  expect(data.showTutorialBook).toBeDefined();
  expectTypeOf(data.showTutorialBook).toEqualTypeOf<boolean>();
  expect(data.showTips).toBeDefined();
  expectTypeOf(data.showTips).toEqualTypeOf<boolean>();
  expect(data.showTipHologram).toBeDefined();
  expectTypeOf(data.showTipHologram).toEqualTypeOf<boolean>();
  expect(data.showAllKillfeed).toBeDefined();
  expectTypeOf(data.showAllKillfeed).toEqualTypeOf<boolean>();
  expect(data.showEnemyWoolPickedUp).toBeDefined();
  expectTypeOf(data.showEnemyWoolPickedUp).toEqualTypeOf<boolean>();
  expect(data.showOwnWoolDropped).toBeDefined();
  expectTypeOf(data.showOwnWoolDropped).toEqualTypeOf<boolean>();
  expect(data.showOwnWoolPickedUp).toBeDefined();
  expectTypeOf(data.showOwnWoolPickedUp).toEqualTypeOf<boolean>();
  expect(data.showEnemyWoolDropped).toBeDefined();
  expectTypeOf(data.showEnemyWoolDropped).toEqualTypeOf<boolean>();
});
