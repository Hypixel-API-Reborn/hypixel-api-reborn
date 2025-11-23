import BedWarsPrivateGameSettings from './BedWarsPrivateGameSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  BedWarsPrivateGameSettingsEventTime,
  BedWarsPrivateGameSettingsGameSpeed,
  BedWarsPrivateGameSettingsHealthBuff,
  BedWarsPrivateGameSettingsRespawnTime
} from '../../../Types/Player.js';

test('BedWarsPrivateGameSettings', () => {
  const data = new BedWarsPrivateGameSettings({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPrivateGameSettings);
  expectTypeOf(data).toEqualTypeOf<BedWarsPrivateGameSettings>();
  expect(data.bedInstaBreak).toBeDefined();
  expectTypeOf(data.bedInstaBreak).toEqualTypeOf<boolean>();
  expect(data.disableBlockProtection).toBeDefined();
  expectTypeOf(data.disableBlockProtection).toEqualTypeOf<boolean>();
  expect(data.eventTime).toBeDefined();
  expectTypeOf(data.eventTime).toEqualTypeOf<BedWarsPrivateGameSettingsEventTime>();
  expect(data.healthBuff).toBeDefined();
  expectTypeOf(data.healthBuff).toEqualTypeOf<BedWarsPrivateGameSettingsHealthBuff>();
  expect(data.lowGravity).toBeDefined();
  expectTypeOf(data.lowGravity).toEqualTypeOf<boolean>();
  expect(data.maxTeamUpgrades).toBeDefined();
  expectTypeOf(data.maxTeamUpgrades).toEqualTypeOf<boolean>();
  expect(data.noDiamonds).toBeDefined();
  expectTypeOf(data.noDiamonds).toEqualTypeOf<boolean>();
  expect(data.noEmeralds).toBeDefined();
  expectTypeOf(data.noEmeralds).toEqualTypeOf<boolean>();
  expect(data.oneHitOneKill).toBeDefined();
  expectTypeOf(data.oneHitOneKill).toEqualTypeOf<boolean>();
  expect(data.respawnTime).toBeDefined();
  expectTypeOf(data.respawnTime).toEqualTypeOf<BedWarsPrivateGameSettingsRespawnTime>();
  expect(data.speed).toBeDefined();
  expectTypeOf(data.speed).toEqualTypeOf<BedWarsPrivateGameSettingsGameSpeed>();
});
