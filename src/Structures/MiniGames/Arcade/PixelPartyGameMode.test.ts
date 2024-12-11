import PixelPartyGameMode from './PixelPartyGameMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PixelPartyGameMode', () => {
  const data = new PixelPartyGameMode({ stats: 'meow' }, 'hyper');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PixelPartyGameMode);
  expectTypeOf(data).toEqualTypeOf<PixelPartyGameMode>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.roundsPlayed).toBeDefined();
  expect(data.roundsPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundsPlayed).toEqualTypeOf<number>();
  expect(data.powerUpsCollected).toBeDefined();
  expect(data.powerUpsCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.powerUpsCollected).toEqualTypeOf<number>();
});
