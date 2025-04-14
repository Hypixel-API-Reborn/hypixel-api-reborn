import SkyBlockMemberChocolateFactoryEmployees from './SkyBlockMemberChocolateFactoryEmployees.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryEmployees', () => {
  const data = new SkyBlockMemberChocolateFactoryEmployees({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryEmployees);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryEmployees>();
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
