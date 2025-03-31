import SkyblockMuseumItem from './SkyblockMuseumItem.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockInventoryItem from '../SkyblockInventoryItem.js';

test('SkyblockMuseumItem', () => {
  const data = new SkyblockMuseumItem('meow', { stats: 'meow' }, []);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMuseumItem);
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseumItem>();
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
  expectTypeOf(data.items).toEqualTypeOf<SkyblockInventoryItem[]>();
});
