import BowSpleef from './BowSpleef.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ColorString } from '../../../Types/Color.js';

test('BowSpleef', () => {
  const data = new BowSpleef({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BowSpleef);
  expectTypeOf(data).toEqualTypeOf<BowSpleef>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.tags).toBeDefined();
  expect(data.tags).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tags).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.prefixColor).toBeDefined();
  expectTypeOf(data.prefixColor).toEqualTypeOf<ColorString | 'Rainbow'>();
});
