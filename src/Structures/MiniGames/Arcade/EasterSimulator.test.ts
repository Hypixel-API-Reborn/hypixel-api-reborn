import EasterSimulator from './EasterSimulator.js';
import { expect, expectTypeOf, test } from 'vitest';

test('EasterSimulator', () => {
  const data = new EasterSimulator({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(EasterSimulator);
  expectTypeOf(data).toEqualTypeOf<EasterSimulator>();
  expect(data.eggsFound).toBeDefined();
  expect(data.eggsFound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.eggsFound).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
