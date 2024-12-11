import SeasonBingo from './SeasonBingo.js';
import SeasonYear from './SeasonYear.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SeasonYear', () => {
  const data = new SeasonYear({ stats: 'meow' }, '100');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonYear);
  expectTypeOf(data).toEqualTypeOf<SeasonYear>();
  expect(data.year).toBeDefined();
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.season).toBeDefined();
  expectTypeOf(data.season).toEqualTypeOf<Record<string, any>>();
  expect(data.bingo).toBeDefined();
  expectTypeOf(data.bingo).toEqualTypeOf<SeasonBingo | null>();
  expect(data.adventRewards).toBeDefined();
  expectTypeOf(data.adventRewards).toEqualTypeOf<Record<string, number> | null>();
  expect(data.presents).toBeDefined();
  expectTypeOf(data.presents).toEqualTypeOf<Record<string, boolean> | null>();
});
