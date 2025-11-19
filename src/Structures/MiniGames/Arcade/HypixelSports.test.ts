import HypixelSports from './HypixelSports.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HypixelSports', () => {
  const data = new HypixelSports({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HypixelSports);
  expectTypeOf(data).toEqualTypeOf<HypixelSports>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
