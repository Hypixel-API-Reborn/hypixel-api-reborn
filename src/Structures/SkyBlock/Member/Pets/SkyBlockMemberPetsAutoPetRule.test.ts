import SkyBlockMemberPetsAutoPetRule from './SkyBlockMemberPetsAutoPetRule.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID, UserInput } from '../../../../Types/Global.js';

test('SkyBlockMemberPetsAutoPetRule', () => {
  const data = new SkyBlockMemberPetsAutoPetRule({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPetsAutoPetRule);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPetsAutoPetRule>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<UUID>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<UserInput | 'UNKNOWN'>();
  expect(data.uniqueId).toBeDefined();
  expectTypeOf(data.uniqueId).toEqualTypeOf<string>();
  expect(data.exceptions).toBeDefined();
  expectTypeOf(data.exceptions).toEqualTypeOf<Record<string, any>[]>();
  expect(data.disabled).toBeDefined();
  expectTypeOf(data.disabled).toEqualTypeOf<boolean>();
  expect(data.data).toBeDefined();
  expectTypeOf(data.data).toEqualTypeOf<Record<string, any>>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.id);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
