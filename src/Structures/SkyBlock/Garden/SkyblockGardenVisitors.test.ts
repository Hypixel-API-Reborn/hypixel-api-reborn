import SkyblockGardenVisitors from './SkyblockGardenVisitors.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockGardenVisitors', () => {
  const data = new SkyblockGardenVisitors({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenVisitors);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenVisitors>();
  expect(data.visited).toBeDefined();
  expectTypeOf(data.visited).toEqualTypeOf<Record<string, number>>();
  expect(data.completed).toBeDefined();
  expectTypeOf(data.completed).toEqualTypeOf<Record<string, number>>();
  expect(data.totalCompleted).toBeDefined();
  expectTypeOf(data.totalCompleted).toEqualTypeOf<number>();
  expect(data.uniqueNpcsServed).toBeDefined();
  expectTypeOf(data.uniqueNpcsServed).toEqualTypeOf<number>();
});
