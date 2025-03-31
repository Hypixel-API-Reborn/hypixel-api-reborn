import SkyblockMemberChocolateFactoryHitmen from './SkyblockMemberChocolateFactoryHitmen.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberChocolateFactoryHitmen', () => {
  const data = new SkyblockMemberChocolateFactoryHitmen({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberChocolateFactoryHitmen);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberChocolateFactoryHitmen>();
  expect(data.rabbitHitmenSlots).toBeDefined();
  expectTypeOf(data.rabbitHitmenSlots).toEqualTypeOf<number>();
  expect(data.missedUncollectedEggs).toBeDefined();
  expectTypeOf(data.missedUncollectedEggs).toEqualTypeOf<number>();
  expect(data.eggSlotCooldownMark).toBeDefined();
  expectTypeOf(data.eggSlotCooldownMark).toEqualTypeOf<number>();
  expect(data.eggSlotCooldownMarkDate).toBeDefined();
  expectTypeOf(data.eggSlotCooldownMarkDate).toEqualTypeOf<Date>();
  expect(data.eggSlotCooldownExpire).toBeDefined();
  expectTypeOf(data.eggSlotCooldownExpire).toEqualTypeOf<number>();
  expect(data.eggSlotCooldownExpireDate).toBeDefined();
  expectTypeOf(data.eggSlotCooldownExpireDate).toEqualTypeOf<Date>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.rabbitHitmenSlots);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
