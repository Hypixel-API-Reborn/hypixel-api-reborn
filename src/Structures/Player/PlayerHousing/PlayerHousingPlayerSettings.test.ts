import PlayerHousingPlayerSettings from './PlayerHousingPlayerSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerHousingSettingsTextInputType } from '../../../Types/Player.js';

test('PlayerHousingPlayerSettings', () => {
  const data = new PlayerHousingPlayerSettings({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerHousingPlayerSettings);
  expectTypeOf(data).toEqualTypeOf<PlayerHousingPlayerSettings>();
  expect(data.playerVisibility).toBeDefined();
  expectTypeOf(data.playerVisibility).toEqualTypeOf<number>();
  expect(data.showBorder).toBeDefined();
  expectTypeOf(data.showBorder).toEqualTypeOf<boolean>();
  expect(data.playJukeboxMusic).toBeDefined();
  expectTypeOf(data.playJukeboxMusic).toEqualTypeOf<boolean>();
  expect(data.showTips).toBeDefined();
  expectTypeOf(data.showTips).toEqualTypeOf<boolean>();
  expect(data.showProToolsParticles).toBeDefined();
  expectTypeOf(data.showProToolsParticles).toEqualTypeOf<boolean>();
  expect(data.showHousingPlusPrefix).toBeDefined();
  expectTypeOf(data.showHousingPlusPrefix).toEqualTypeOf<boolean>();
  expect(data.textInputType).toBeDefined();
  expectTypeOf(data.textInputType).toEqualTypeOf<PlayerHousingSettingsTextInputType | 'UNKNOWN'>();
});
