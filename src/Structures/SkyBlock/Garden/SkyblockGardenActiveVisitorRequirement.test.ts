import SkyblockGardenActiveVisitorRequirement from './SkyblockGardenActiveVisitorRequirement.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockGardenActiveVisitorRequirement', () => {
  const data = new SkyblockGardenActiveVisitorRequirement({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenActiveVisitorRequirement);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenActiveVisitorRequirement>();
  expect(data.originalItem).toBeDefined();
  expectTypeOf(data.originalItem).toEqualTypeOf<string>();
  expect(data.originalAmount).toBeDefined();
  expectTypeOf(data.originalAmount).toEqualTypeOf<number>();
  expect(data.item).toBeDefined();
  expectTypeOf(data.item).toEqualTypeOf<string>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.amount);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
