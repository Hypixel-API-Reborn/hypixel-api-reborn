import SkyBlockGardenVisitors from './SkyBlockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockGardenVisitors', () => {
  const data = new SkyBlockGardenVisitors({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGardenVisitors);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGardenVisitors>();
  expect(data.visited).toBeDefined();
  expectTypeOf(data.visited).toEqualTypeOf<Record<string, number>>();
  expect(data.completed).toBeDefined();
  expectTypeOf(data.completed).toEqualTypeOf<Record<string, number>>();
  expect(data.totalCompleted).toBeDefined();
  expectTypeOf(data.totalCompleted).toEqualTypeOf<number>();
  expect(data.uniqueNpcsServed).toBeDefined();
  expectTypeOf(data.uniqueNpcsServed).toEqualTypeOf<number>();
});
