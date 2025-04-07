import SkyBlockMuseumItem from './SkyBlockMuseumItem.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockInventoryItem from '../Inventory/SkyBlockInventoryItem.js';

test('SkyBlockMuseumItem', () => {
  const data = new SkyBlockMuseumItem('meow', { stats: 'meow' }, []);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMuseumItem);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseumItem>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.donated).toBeDefined();
  expectTypeOf(data.donated).toEqualTypeOf<number>();
  expect(data.donatedAt).toBeDefined();
  expectTypeOf(data.donatedAt).toEqualTypeOf<Date>();
  expect(data.featuredSlot).toBeDefined();
  expectTypeOf(data.featuredSlot).toEqualTypeOf<string | null>();
  expect(data.borrowing).toBeDefined();
  expectTypeOf(data.borrowing).toEqualTypeOf<boolean>();
  expect(data.items).toBeDefined();
  expectTypeOf(data.items).toEqualTypeOf<SkyBlockInventoryItem[]>();
});
