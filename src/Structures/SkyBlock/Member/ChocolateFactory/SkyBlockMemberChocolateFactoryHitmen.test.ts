import SkyBlockMemberChocolateFactoryHitmen from './SkyBlockMemberChocolateFactoryHitmen.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryHitmen', () => {
  const data = new SkyBlockMemberChocolateFactoryHitmen({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryHitmen);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryHitmen>();
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
