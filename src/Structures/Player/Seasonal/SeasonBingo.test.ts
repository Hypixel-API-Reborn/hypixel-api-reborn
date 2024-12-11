import SeasonBingo from './SeasonBingo.js';
import SeasonBingoTier from './SeasonBingoTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SeasonBingo', () => {
  const data = new SeasonBingo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonBingo);
  expectTypeOf(data).toEqualTypeOf<SeasonBingo>();
  expect(data.easy).toBeDefined();
  expectTypeOf(data.easy).toEqualTypeOf<SeasonBingoTier | null>();
  expect(data.medium).toBeDefined();
  expectTypeOf(data.medium).toEqualTypeOf<SeasonBingoTier | null>();
  expect(data.hard).toBeDefined();
  expectTypeOf(data.hard).toEqualTypeOf<SeasonBingoTier | null>();
});
