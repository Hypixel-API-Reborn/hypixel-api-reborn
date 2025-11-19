import SantaSimulator from './SantaSimulator.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SantaSimulator', () => {
  const data = new SantaSimulator({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SantaSimulator);
  expectTypeOf(data).toEqualTypeOf<SantaSimulator>();
  expect(data.delivered).toBeDefined();
  expect(data.delivered).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.delivered).toEqualTypeOf<number>();
  expect(data.spotted).toBeDefined();
  expect(data.spotted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.spotted).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
