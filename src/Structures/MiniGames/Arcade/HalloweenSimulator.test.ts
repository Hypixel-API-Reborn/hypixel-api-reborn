import HalloweenSimulator from './HalloweenSimulator.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HalloweenSimulator', () => {
  const data = new HalloweenSimulator({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HalloweenSimulator);
  expectTypeOf(data).toEqualTypeOf<HalloweenSimulator>();
  expect(data.candyFound).toBeDefined();
  expect(data.candyFound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.candyFound).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
