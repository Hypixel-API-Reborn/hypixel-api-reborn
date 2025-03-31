import SkyblockMuseumMember from './SkyblockMuseumMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMuseumItem from './SkyblockMuseumItem.js';

test('SkyblockMuseumMember', () => {
  const data = new SkyblockMuseumMember({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMuseumMember);
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseumMember>();
  expect(data.value).toBeDefined();
  expectTypeOf(data.value).toEqualTypeOf<number>();
  expect(data.appraisal).toBeDefined();
  expectTypeOf(data.appraisal).toEqualTypeOf<boolean>();
  expect(data.rawItems).toBeDefined();
  expectTypeOf(data.rawItems).toEqualTypeOf<Record<string, any>>();
  expect(data.getItems).toBeDefined();
  expectTypeOf(data.getItems).toEqualTypeOf<() => Promise<SkyblockMuseumItem[]>>();
});
