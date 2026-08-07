import { expect, expectTypeOf, test } from 'vitest';
import { isGuildId, isUUID } from './index.js';

const validUUIDs = [
  'add71246c46e455c8345c129ea6f146c',
  '17ec71b4e5fa467481344b319a2958c3',
  '37501e7512b845ab8796e2baf9e9677a'
];
test('isUUID (valid and no dashes)', () => {
  validUUIDs.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(true);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});

const validDashedUUIDs = [
  'add71246-c46e-455c-8345-c129ea6f146c',
  '1ac8f319-1ac8-4c44-93ac-fcae2848cd9f',
  '337a48bf-57e9-44eb-8acb-83b885936e83'
];
test('isUUID (valid withn dashes)', () => {
  validDashedUUIDs.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(true);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});

const invalidUUIDs = ['invalid', 'hello why are you here?', ''];
test('isUUID (invalid)', () => {
  invalidUUIDs.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(false);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});

const validGuildIds = ['5b8dd8cb0cf24573ab84c9ad', '656618008ea8c9dca6f3668d', '5ba94ed50cf2cc24cf043706'];
test('isGuildId (valid)', () => {
  validGuildIds.forEach((id) => {
    expect(isGuildId(id)).toBe(true);
    expectTypeOf(isGuildId(id)).toBeBoolean();
  });
});

const invalidGuildIds = ['invalid', 'hello why are you here?', ''];
test('isGuildId (invalid)', () => {
  invalidGuildIds.forEach((uuid) => {
    expect(isGuildId(uuid)).toBe(false);
    expectTypeOf(isGuildId(uuid)).toBeBoolean();
  });
});
