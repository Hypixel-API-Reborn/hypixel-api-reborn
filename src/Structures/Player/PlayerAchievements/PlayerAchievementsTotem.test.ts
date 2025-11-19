import PlayerAchievementsTotem from './PlayerAchievementsTotem.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerAchievementsTotemColors, PlayerAchievementsTotemParts } from '../../../Types/Player.js';

test('PlayerAchievementsTotem', () => {
  const data = new PlayerAchievementsTotem({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAchievementsTotem);
  expectTypeOf(data).toEqualTypeOf<PlayerAchievementsTotem>();
  expect(data.canCustomize).toBeDefined();
  expectTypeOf(data.canCustomize).toEqualTypeOf<boolean>();
  expect(data.allowedMaxHeight).toBeDefined();
  expect(data.allowedMaxHeight).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.allowedMaxHeight).toEqualTypeOf<number>();
  expect(data.unlockedParts).toBeDefined();
  expectTypeOf(data.unlockedParts).toEqualTypeOf<PlayerAchievementsTotemParts[]>();
  expect(data.selectedParts).toBeDefined();
  expectTypeOf(data.selectedParts).toEqualTypeOf<Record<string, PlayerAchievementsTotemParts>>();
  expect(data.unlockedColors).toBeDefined();
  expectTypeOf(data.unlockedColors).toEqualTypeOf<PlayerAchievementsTotemColors[]>();
  expect(data.selectedColors).toBeDefined();
  expectTypeOf(data.selectedColors).toEqualTypeOf<Record<string, PlayerAchievementsTotemColors>>();
});
