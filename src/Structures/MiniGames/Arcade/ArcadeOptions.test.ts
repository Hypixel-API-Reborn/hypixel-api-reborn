import ArcadeOptions from './ArcadeOptions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ArcadeOptions', () => {
  const data = new ArcadeOptions({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ArcadeOptions);
  expectTypeOf(data).toEqualTypeOf<ArcadeOptions>();
  expect(data.showAllKillFeed).toBeDefined();
  expectTypeOf(data.showAllKillFeed).toEqualTypeOf<boolean>();
  expect(data.showEnemyWoolDropped).toBeDefined();
  expectTypeOf(data.showEnemyWoolDropped).toEqualTypeOf<boolean>();
  expect(data.showEnemyWoolPickedUp).toBeDefined();
  expectTypeOf(data.showEnemyWoolPickedUp).toEqualTypeOf<boolean>();
  expect(data.showOwnWoolDropped).toBeDefined();
  expectTypeOf(data.showOwnWoolDropped).toEqualTypeOf<boolean>();
  expect(data.showOwnWoolPickedUp).toBeDefined();
  expectTypeOf(data.showOwnWoolPickedUp).toEqualTypeOf<boolean>();
  expect(data.showTipHologram).toBeDefined();
  expectTypeOf(data.showTipHologram).toEqualTypeOf<boolean>();
  expect(data.showTips).toBeDefined();
  expectTypeOf(data.showTips).toEqualTypeOf<boolean>();
  expect(data.showTutorialBook).toBeDefined();
  expectTypeOf(data.showTutorialBook).toEqualTypeOf<boolean>();
});
