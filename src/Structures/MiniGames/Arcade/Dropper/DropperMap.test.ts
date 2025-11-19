import DropperMap from './DropperMap.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DropperMap', () => {
  const data = new DropperMap({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DropperMap);
  expectTypeOf(data).toEqualTypeOf<DropperMap>();
  expect(data.bestTime).toBeDefined();
  expect(data.bestTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestTime).toEqualTypeOf<number>();
  expect(data.completions).toBeDefined();
  expect(data.completions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.completions).toEqualTypeOf<number>();
});
