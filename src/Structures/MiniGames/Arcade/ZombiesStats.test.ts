import ZombieStats from './ZombiesStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ZombieStats', () => {
  const data = new ZombieStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ZombieStats);
  expectTypeOf(data).toEqualTypeOf<ZombieStats>();
  expect(data.bestRound).toBeDefined();
  expect(data.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestRound).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.doorsOpened).toBeDefined();
  expect(data.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.doorsOpened).toEqualTypeOf<number>();
  expect(data.fastestRound10).toBeDefined();
  expect(data.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestRound10).toEqualTypeOf<number>();
  expect(data.fastestRound20).toBeDefined();
  expect(data.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestRound20).toEqualTypeOf<number>();
  expect(data.fastestRound30).toBeDefined();
  expect(data.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestRound30).toEqualTypeOf<number>();
  expect(data.playersRevived).toBeDefined();
  expect(data.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playersRevived).toEqualTypeOf<number>();
  expect(data.timesKnockedDown).toBeDefined();
  expect(data.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.roundsSurvived).toBeDefined();
  expect(data.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundsSurvived).toEqualTypeOf<number>();
  expect(data.windowsRepaired).toBeDefined();
  expect(data.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.windowsRepaired).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.zombieKills).toBeDefined();
  expect(data.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombieKills).toEqualTypeOf<number>();
});