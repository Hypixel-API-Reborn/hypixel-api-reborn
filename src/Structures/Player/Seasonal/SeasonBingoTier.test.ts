import SeasonBingoTier from './SeasonBingoTier.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SeasonBingoTier', () => {
  const data = new SeasonBingoTier({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonBingoTier);
  expectTypeOf(data).toEqualTypeOf<SeasonBingoTier>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<Record<string, number>>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<string[]>();
});
