import InventoryLayout from '../../Shared/InventoryLayout.js';
import SheepWarsLayout from './SheepWarsLayout.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SheepWarsLayout', () => {
  const data = new SheepWarsLayout({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SheepWarsLayout);
  expectTypeOf(data).toEqualTypeOf<SheepWarsLayout>();
  expect(data.opened).toBeDefined();
  expectTypeOf(data.opened).toEqualTypeOf<boolean>();
  expect(data.layout).toBeDefined();
  expect(data.layout).toBeInstanceOf(InventoryLayout);
  expectTypeOf(data.layout).toEqualTypeOf<InventoryLayout>();
});
