import SkyBlockMuseumMember from './SkyBlockMuseumMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMuseumItem from './SkyBlockMuseumItem.js';

test('SkyBlockMuseumMember', () => {
  const data = new SkyBlockMuseumMember({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMuseumMember);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseumMember>();
  expect(data.value).toBeDefined();
  expectTypeOf(data.value).toEqualTypeOf<number>();
  expect(data.appraisal).toBeDefined();
  expectTypeOf(data.appraisal).toEqualTypeOf<boolean>();
  expect(data.rawItems).toBeDefined();
  expectTypeOf(data.rawItems).toEqualTypeOf<Record<string, any>>();
  expect(data.getItems).toBeDefined();
  expectTypeOf(data.getItems).toEqualTypeOf<() => Promise<SkyBlockMuseumItem[]>>();
});
