import DuelsMode from './DuelsMode.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsMode', () => {
  const data = new DuelsMode({ stats: 'meow' }, 'bridge');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsMode);
  expectTypeOf(data).toEqualTypeOf<DuelsMode>();
  expect(data.duelEnabled).toBeDefined();
  expectTypeOf(data.duelEnabled).toEqualTypeOf<boolean>();
  expect(data.layout).toBeDefined();
  expect(data.layout).toBeInstanceOf(InventoryLayout);
  expectTypeOf(data.layout).toEqualTypeOf<InventoryLayout>();
});
