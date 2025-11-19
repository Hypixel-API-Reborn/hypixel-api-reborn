import LeaderboardSettings from './LeaderboardSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BuildBattleLeaderboardSettingsMode, LeaderboardSettingsResetType } from '../../../Types/Player.js';

test('LeaderboardSettings', () => {
  const data = new LeaderboardSettings<BuildBattleLeaderboardSettingsMode>({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(LeaderboardSettings<BuildBattleLeaderboardSettingsMode>);
  expectTypeOf(data).toEqualTypeOf<LeaderboardSettings<BuildBattleLeaderboardSettingsMode>>();
  expect(data.mode).toBeDefined();
  expectTypeOf(data.mode).toEqualTypeOf<BuildBattleLeaderboardSettingsMode | 'UNKNOWN'>();
  expect(data.resetType).toBeDefined();
  expectTypeOf(data.resetType).toEqualTypeOf<LeaderboardSettingsResetType | 'UNKNOWN'>();
});
