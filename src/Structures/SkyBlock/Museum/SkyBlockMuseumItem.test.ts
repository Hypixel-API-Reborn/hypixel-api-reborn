import SkyBlockInventoryItem from '../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMuseumItem from './SkyBlockMuseumItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMuseumItem', () => {
  const data = new SkyBlockMuseumItem('mrrp', { stats: 'meow' }, []);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMuseumItem);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseumItem>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.donated).toBeDefined();
  expect(data.donated).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.donated).toEqualTypeOf<number>();
  expect(data.donatedAt).toBeDefined();
  expect(data.donatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.donatedAt).toEqualTypeOf<Date>();
  expect(data.featuredSlot).toBeDefined();
  expectTypeOf(data.featuredSlot).toEqualTypeOf<string | null>();
  expect(data.borrowing).toBeDefined();
  expectTypeOf(data.borrowing).toEqualTypeOf<boolean>();
  expect(data.items).toBeDefined();
  expectTypeOf(data.items).toEqualTypeOf<SkyBlockInventoryItem[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
