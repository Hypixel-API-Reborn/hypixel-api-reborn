import PlayerHousing from './PlayerHousing.ts';
import PlayerHousingGivenCookies from './PlayerHousingGivenCookies.ts';
import PlayerHousingPlayerSettings from './PlayerHousingPlayerSettings.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerHousingPlotSize, PlayerHousingTutorialStage } from '../../../Types/index.ts';

test('PlayerHousing', () => {
  const data = new PlayerHousing({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerHousing);
  expectTypeOf(data).toEqualTypeOf<PlayerHousing>();
  expect(data.allowedBlocks).toBeDefined();
  expectTypeOf(data.allowedBlocks).toEqualTypeOf<string[]>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<string[]>();
  expect(data.tutorialStage).toBeDefined();
  expectTypeOf(data.tutorialStage).toEqualTypeOf<PlayerHousingTutorialStage | 'UNKNOWN'>();
  expect(data.firstHouseJoinTimestamp).toBeDefined();
  expectTypeOf(data.firstHouseJoinTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstHouseJoinAt).toBeDefined();
  expectTypeOf(data.firstHouseJoinAt).toEqualTypeOf<Date | null>();
  expect(data.plotSize).toBeDefined();
  expectTypeOf(data.plotSize).toEqualTypeOf<PlayerHousingPlotSize | 'UNKNOWN'>();
  expect(data.playerSettings).toBeDefined();
  expect(data.playerSettings).toBeInstanceOf(PlayerHousingPlayerSettings);
  expectTypeOf(data.playerSettings).toEqualTypeOf<PlayerHousingPlayerSettings>();
  expect(data.givenCookies).toBeDefined();
  expectTypeOf(data.givenCookies).toEqualTypeOf<PlayerHousingGivenCookies[]>();
});
