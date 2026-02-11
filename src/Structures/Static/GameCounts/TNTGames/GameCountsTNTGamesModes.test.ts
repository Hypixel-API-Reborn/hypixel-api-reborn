import GameCountsTNTGamesModes from './GameCountsTNTGamesModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsTNTGamesModes', () => {
  const data = new GameCountsTNTGamesModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsTNTGamesModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsTNTGamesModes>();
  expect(data.PVPRun).toBeDefined();
  expect(data.PVPRun).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.PVPRun).toEqualTypeOf<number>();
  expect(data.TNTTag).toBeDefined();
  expect(data.TNTTag).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.TNTTag).toEqualTypeOf<number>();
  expect(data.TNTRun).toBeDefined();
  expect(data.TNTRun).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.TNTRun).toEqualTypeOf<number>();
  expect(data.bowSpleef).toBeDefined();
  expect(data.bowSpleef).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowSpleef).toEqualTypeOf<number>();
  expect(data.capture).toBeDefined();
  expect(data.capture).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.capture).toEqualTypeOf<number>();
});
