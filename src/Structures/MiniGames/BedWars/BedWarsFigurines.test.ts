import BedWarsFigurines from './BedWarsFigurines.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsFigurines', () => {
  const data = new BedWarsFigurines({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsFigurines);
  expectTypeOf(data).toEqualTypeOf<BedWarsFigurines>();
  expect(data.active).toBeDefined();
  expectTypeOf(data.active).toEqualTypeOf<string | 'UNKNOWN'>();
  expect(data.featuredCommon).toBeDefined();
  expectTypeOf(data.featuredCommon).toEqualTypeOf<string[]>();
  expect(data.featuredLegendary).toBeDefined();
  expectTypeOf(data.featuredLegendary).toEqualTypeOf<string[]>();
  expect(data.featuredRare).toBeDefined();
  expectTypeOf(data.featuredRare).toEqualTypeOf<string[]>();
});
