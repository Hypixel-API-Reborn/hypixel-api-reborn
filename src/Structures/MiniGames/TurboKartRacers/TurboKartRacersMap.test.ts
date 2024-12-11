import TurboKartRacersMap from './TurboKartRacersMap.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { TurboKartRacersMaps } from '../../../Types/Player.js';

test('TurboKartRacers', () => {
  const data = new TurboKartRacersMap({ stats: 'meow' }, 'retro');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(TurboKartRacersMap);
  expectTypeOf(data).toEqualTypeOf<TurboKartRacersMap>();
  expect(data.map).toBeDefined();
  expectTypeOf(data.map).toEqualTypeOf<TurboKartRacersMaps>();
  expect(data.plays).toBeDefined();
  expect(data.plays).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.plays).toEqualTypeOf<number>();
  expect(data.boxPickups).toBeDefined();
  expect(data.boxPickups).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.boxPickups).toEqualTypeOf<number>();
  expect(data.bronzeTrophies).toBeDefined();
  expect(data.bronzeTrophies).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bronzeTrophies).toEqualTypeOf<number>();
  expect(data.silverTrophies).toBeDefined();
  expect(data.silverTrophies).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silverTrophies).toEqualTypeOf<number>();
  expect(data.goldTrophies).toBeDefined();
  expect(data.goldTrophies).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goldTrophies).toEqualTypeOf<number>();
});
