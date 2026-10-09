import PlayerSeasonalChristmasYear from './PlayerSeasonalChristmasYear.ts';
import PlayerSeasonalChristmasYearAdventRewards from './PlayerSeasonalChristmasYearAdventRewards.ts';
import PlayerSeasonalChristmasYearLeveling from './PlayerSeasonalChristmasYearLeveling.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerSeasonalChristmasYear', () => {
  const data = new PlayerSeasonalChristmasYear({ stats: 'meow' }, 100);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerSeasonalChristmasYear);
  expectTypeOf(data).toEqualTypeOf<PlayerSeasonalChristmasYear>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.adventRewards).toBeDefined();
  expect(data.adventRewards).toBeInstanceOf(PlayerSeasonalChristmasYearAdventRewards);
  expectTypeOf(data.adventRewards).toEqualTypeOf<PlayerSeasonalChristmasYearAdventRewards>();
  expect(data.presents).toBeDefined();
  expectTypeOf(data.presents).toEqualTypeOf<Record<string, boolean>>();
  expect(data.leveling).toBeDefined();
  expect(data.leveling).toBeInstanceOf(PlayerSeasonalChristmasYearLeveling);
  expectTypeOf(data.leveling).toEqualTypeOf<PlayerSeasonalChristmasYearLeveling>();
});
