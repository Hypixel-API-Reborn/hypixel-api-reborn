import SkyBlockNews from './SkyBlockNews.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockNews', () => {
  const data = new SkyBlockNews({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockNews);
  expectTypeOf(data).toEqualTypeOf<SkyBlockNews>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<string>();
  expect(data.link).toBeDefined();
  expectTypeOf(data.link).toEqualTypeOf<string>();
  expect(data.date).toBeDefined();
  expectTypeOf(data.date).toEqualTypeOf<Date | null>();
  expect(data.version).toBeDefined();
  expectTypeOf(data.version).toEqualTypeOf<string | null>();
});
