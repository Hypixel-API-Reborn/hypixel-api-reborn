import PlayerSocialMedia from './PlayerSocialMedia.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UserInput } from '../../Types/Global.js';

test('PlayerSocialMedia', () => {
  const data = new PlayerSocialMedia({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerSocialMedia);
  expectTypeOf(data).toEqualTypeOf<PlayerSocialMedia>();
  expect(data.discord).toBeDefined();
  expectTypeOf(data.discord).toEqualTypeOf<UserInput | null>();
  expect(data.youtube).toBeDefined();
  expectTypeOf(data.youtube).toEqualTypeOf<UserInput | null>();
  expect(data.twitch).toBeDefined();
  expectTypeOf(data.twitch).toEqualTypeOf<UserInput | null>();
  expect(data.hypixel).toBeDefined();
  expectTypeOf(data.hypixel).toEqualTypeOf<UserInput | null>();
  expect(data.twitter).toBeDefined();
  expectTypeOf(data.twitter).toEqualTypeOf<UserInput | null>();
  expect(data.instagram).toBeDefined();
  expectTypeOf(data.instagram).toEqualTypeOf<UserInput | null>();
  expect(data.tiktok).toBeDefined();
  expectTypeOf(data.tiktok).toEqualTypeOf<UserInput | null>();
});
