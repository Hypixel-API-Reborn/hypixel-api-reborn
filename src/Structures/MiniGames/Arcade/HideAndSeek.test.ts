import HideAndSeek from './HideAndSeek.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HideAndSeek', () => {
  const data = new HideAndSeek({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HideAndSeek);
  expectTypeOf(data).toEqualTypeOf<HideAndSeek>();
  expect(data.hiderWins).toBeDefined();
  expect(data.hiderWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hiderWins).toEqualTypeOf<number>();
  expect(data.partyPooperHiderWins).toBeDefined();
  expect(data.partyPooperHiderWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.partyPooperHiderWins).toEqualTypeOf<number>();
  expect(data.partyPooperSeekerWins).toBeDefined();
  expect(data.partyPooperSeekerWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.partyPooperSeekerWins).toEqualTypeOf<number>();
  expect(data.propHuntHiderWins).toBeDefined();
  expect(data.propHuntHiderWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.propHuntHiderWins).toEqualTypeOf<number>();
  expect(data.propHuntSeekerWins).toBeDefined();
  expect(data.propHuntSeekerWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.propHuntSeekerWins).toEqualTypeOf<number>();
  expect(data.seekerWins).toBeDefined();
  expect(data.seekerWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.seekerWins).toEqualTypeOf<number>();
});
