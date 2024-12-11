import House from './House.js';
import { expect, expectTypeOf, test } from 'vitest';

test('House', () => {
  const data = new House({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(House);
  expectTypeOf(data).toEqualTypeOf<House>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.owner).toBeDefined();
  expectTypeOf(data.owner).toEqualTypeOf<string>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date | null>();
  expect(data.players).toBeDefined();
  expect(data.players).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.players).toEqualTypeOf<number>();
  expect(data.cookies).toBeDefined();
  expect(data.cookies).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.cookies).toEqualTypeOf<number>();
});
