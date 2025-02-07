import WarlordsClass from './WarlordsClass.js';
import { expect, expectTypeOf, test } from 'vitest';

test('WarlordsClass', () => {
  const data = new WarlordsClass({ stats: 'meow' }, 'aquamancer');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WarlordsClass);
  expectTypeOf(data).toEqualTypeOf<WarlordsClass>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.damage).toBeDefined();
  expect(data.damage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.damage).toEqualTypeOf<number>();
  expect(data.heal).toBeDefined();
  expect(data.heal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.heal).toEqualTypeOf<number>();
  expect(data.damagePrevented).toBeDefined();
  expect(data.damagePrevented).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.damagePrevented).toEqualTypeOf<number>();
});
