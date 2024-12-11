import PropHunt from './PropHunt.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PropHunt', () => {
  const data = new PropHunt({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PropHunt);
  expectTypeOf(data).toEqualTypeOf<PropHunt>();
  expect(data.winsAsSeeker).toBeDefined();
  expect(data.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.winsAsHider).toBeDefined();
  expect(data.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsAsHider).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
