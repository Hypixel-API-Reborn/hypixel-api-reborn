import ScubaSimulator from './ScubaSimulator.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ScubaSimulator', () => {
  const data = new ScubaSimulator({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ScubaSimulator);
  expectTypeOf(data).toEqualTypeOf<ScubaSimulator>();
  expect(data.itemsFound).toBeDefined();
  expect(data.itemsFound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.itemsFound).toEqualTypeOf<number>();
  expect(data.totalPoints).toBeDefined();
  expect(data.totalPoints).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalPoints).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
