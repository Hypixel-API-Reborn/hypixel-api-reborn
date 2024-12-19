import SocialMedia from './SocialMedia.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SocialMediaId } from '../../Types/Player.js';

test('SocialMedia', () => {
  const data = new SocialMedia({ id: 'DISCORD', link: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SocialMedia);
  expectTypeOf(data).toEqualTypeOf<SocialMedia>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<SocialMediaId>();
  expect(data.link).toBeDefined();
  expectTypeOf(data.link).toEqualTypeOf<string>();
});
