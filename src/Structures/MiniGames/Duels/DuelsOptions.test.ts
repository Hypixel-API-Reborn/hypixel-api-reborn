import DuelsOptions from './DuelsOptions.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DuelsRematchOption } from '../../../Types/Player.js';

test('DuelsOptions', () => {
  const data = new DuelsOptions({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsOptions);
  expectTypeOf(data).toEqualTypeOf<DuelsOptions>();
  expect(data.challengesEnabled).toBeDefined();
  expectTypeOf(data.challengesEnabled).toEqualTypeOf<boolean>();
  expect(data.chatEnabled).toBeDefined();
  expectTypeOf(data.chatEnabled).toEqualTypeOf<boolean>();
  expect(data.kitMenu).toBeDefined();
  expectTypeOf(data.kitMenu).toEqualTypeOf<boolean>();
  expect(data.showLeaderboard).toBeDefined();
  expectTypeOf(data.showLeaderboard).toEqualTypeOf<boolean>();
  expect(data.showMapDetail).toBeDefined();
  expectTypeOf(data.showMapDetail).toEqualTypeOf<boolean>();
  expect(data.rematch).toBeDefined();
  expectTypeOf(data.rematch).toEqualTypeOf<DuelsRematchOption>();
});
