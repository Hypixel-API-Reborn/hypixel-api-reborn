import SkyblockNews from './SkyblockNews.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockNews', () => {
  const data = new SkyblockNews({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockNews);
  expectTypeOf(data).toEqualTypeOf<SkyblockNews>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<string>();
  expect(data.link).toBeDefined();
  expectTypeOf(data.link).toEqualTypeOf<string>();
  expect(data.date).toBeDefined();
  expectTypeOf(data.date).toEqualTypeOf<Date | null>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string | null>();
});
