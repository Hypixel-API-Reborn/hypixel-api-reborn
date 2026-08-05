import isGuildId from './isGuildId.js';
import { expect, expectTypeOf, test } from 'vitest';

const valid = ['5b8dd8cb0cf24573ab84c9ad', '656618008ea8c9dca6f3668d', '5ba94ed50cf2cc24cf043706'];
test('isGuildId (valid)', () => {
  valid.forEach((id) => {
    expect(isGuildId(id)).toBe(true);
    expectTypeOf(isGuildId(id)).toBeBoolean();
  });
});

const Invalid = ['invalid', 'hello why are you here?', ''];
test('isGuildId (invalid)', () => {
  Invalid.forEach((uuid) => {
    expect(isGuildId(uuid)).toBe(false);
    expectTypeOf(isGuildId(uuid)).toBeBoolean();
  });
});
