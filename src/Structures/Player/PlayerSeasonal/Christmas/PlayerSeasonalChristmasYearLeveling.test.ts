import PlayerSeasonalChristmasYearLeveling from './PlayerSeasonalChristmasYearLeveling.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerSeasonalChristmasYearLeveling', () => {
  const data = new PlayerSeasonalChristmasYearLeveling({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerSeasonalChristmasYearLeveling);
  expectTypeOf(data).toEqualTypeOf<PlayerSeasonalChristmasYearLeveling>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
});
