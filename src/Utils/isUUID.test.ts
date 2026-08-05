import isUUID from './isUUID.js';
import { expect, expectTypeOf, test } from 'vitest';

const valid = [
  'add71246c46e455c8345c129ea6f146c',
  '17ec71b4e5fa467481344b319a2958c3',
  '37501e7512b845ab8796e2baf9e9677a'
];
test('isUUID (valid and no dashes)', () => {
  valid.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(true);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});

const dashed = [
  'add71246-c46e-455c-8345-c129ea6f146c',
  '1ac8f319-1ac8-4c44-93ac-fcae2848cd9f',
  '337a48bf-57e9-44eb-8acb-83b885936e83'
];
test('isUUID (valid withn dashes)', () => {
  dashed.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(true);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});

const Invalid = ['invalid', 'hello why are you here?', ''];
test('isUUID (invalid)', () => {
  Invalid.forEach((uuid) => {
    expect(isUUID(uuid)).toBe(false);
    expectTypeOf(isUUID(uuid)).toBeBoolean();
  });
});
