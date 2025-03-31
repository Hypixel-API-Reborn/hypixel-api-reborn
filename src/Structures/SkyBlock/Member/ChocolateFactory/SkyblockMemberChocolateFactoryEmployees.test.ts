import SkyblockMemberChocolateFactoryEmployees from './SkyblockMemberChocolateFactoryEmployees.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberChocolateFactoryEmployees', () => {
  const data = new SkyblockMemberChocolateFactoryEmployees({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberChocolateFactoryEmployees);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberChocolateFactoryEmployees>();
  expect(data.bro).toBeDefined();
  expectTypeOf(data.bro).toEqualTypeOf<number>();
  expect(data.cousin).toBeDefined();
  expectTypeOf(data.cousin).toEqualTypeOf<number>();
  expect(data.sis).toBeDefined();
  expectTypeOf(data.sis).toEqualTypeOf<number>();
  expect(data.father).toBeDefined();
  expectTypeOf(data.father).toEqualTypeOf<number>();
  expect(data.grandma).toBeDefined();
  expectTypeOf(data.grandma).toEqualTypeOf<number>();
  expect(data.dog).toBeDefined();
  expectTypeOf(data.dog).toEqualTypeOf<number>();
  expect(data.uncle).toBeDefined();
  expectTypeOf(data.uncle).toEqualTypeOf<number>();
});
