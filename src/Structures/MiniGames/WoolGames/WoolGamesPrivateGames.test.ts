import WoolGamesPrivateGames from './WoolGamesPrivateGames.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  PrivateGameSettingsGameEventSpeed,
  PrivateGameSettingsHealthBuff,
  PrivateGameSettingsJumpBoost,
  PrivateGameSettingsSpeed,
  WoolGamesPrivateGameSettingsMapDestructibility,
  WoolGamesPrivateGameSettingsSpawnRate
} from '../../../Types/Player.js';

test('WoolGamesPrivateGames', () => {
  const data = new WoolGamesPrivateGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolGamesPrivateGames);
  expectTypeOf(data).toEqualTypeOf<WoolGamesPrivateGames>();
  expect(data.blockPlace).toBeDefined();
  expectTypeOf(data.blockPlace).toEqualTypeOf<boolean>();
  expect(data.respawnEnable).toBeDefined();
  expectTypeOf(data.respawnEnable).toEqualTypeOf<boolean>();
  expect(data.rainbowWool).toBeDefined();
  expectTypeOf(data.rainbowWool).toEqualTypeOf<boolean>();
  expect(data.lowGravity).toBeDefined();
  expectTypeOf(data.lowGravity).toEqualTypeOf<boolean>();
  expect(data.noBlockBreak).toBeDefined();
  expectTypeOf(data.noBlockBreak).toEqualTypeOf<boolean>();
  expect(data.gameEventSpeed).toBeDefined();
  expectTypeOf(data.gameEventSpeed).toEqualTypeOf<PrivateGameSettingsGameEventSpeed>();
  expect(data.oneHitOneKill).toBeDefined();
  expectTypeOf(data.oneHitOneKill).toEqualTypeOf<boolean>();
  expect(data.jumpBoost).toBeDefined();
  expectTypeOf(data.jumpBoost).toEqualTypeOf<PrivateGameSettingsJumpBoost>();
  expect(data.healthBuff).toBeDefined();
  expectTypeOf(data.healthBuff).toEqualTypeOf<PrivateGameSettingsHealthBuff>();
  expect(data.noPowerups).toBeDefined();
  expectTypeOf(data.noPowerups).toEqualTypeOf<boolean>();
  expect(data.noClass).toBeDefined();
  expectTypeOf(data.noClass).toEqualTypeOf<boolean>();
  expect(data.sheepSpawnRate).toBeDefined();
  expectTypeOf(data.sheepSpawnRate).toEqualTypeOf<WoolGamesPrivateGameSettingsSpawnRate>();
  expect(data.magicWoolSpawnRate).toBeDefined();
  expectTypeOf(data.magicWoolSpawnRate).toEqualTypeOf<WoolGamesPrivateGameSettingsSpawnRate>();
  expect(data.mapDestructibility).toBeDefined();
  expectTypeOf(data.mapDestructibility).toEqualTypeOf<WoolGamesPrivateGameSettingsMapDestructibility>();
  expect(data.noKits).toBeDefined();
  expectTypeOf(data.noKits).toEqualTypeOf<boolean>();
  expect(data.speed).toBeDefined();
  expectTypeOf(data.speed).toEqualTypeOf<PrivateGameSettingsSpeed>();
});
