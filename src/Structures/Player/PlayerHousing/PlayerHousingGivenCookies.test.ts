import PlayerHousingGivenCookies from './PlayerHousingGivenCookies.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerHousingGivenCookies', () => {
  const data = new PlayerHousingGivenCookies('meow', ['meow']);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerHousingGivenCookies);
  expectTypeOf(data).toEqualTypeOf<PlayerHousingGivenCookies>();
  expect(data.date).toBeDefined();
  expectTypeOf(data.date).toEqualTypeOf<string>();
  expect(data.houses).toBeDefined();
  expectTypeOf(data.houses).toEqualTypeOf<string[]>();
});
