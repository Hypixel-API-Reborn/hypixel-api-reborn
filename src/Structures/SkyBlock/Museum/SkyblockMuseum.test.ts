import SkyblockMuseum from './SkyblockMuseum.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMuseumMember from './SkyblockMuseumMember.js';
import type { UUID } from '../../../Types/Global.js';

test('SkyblockMuseum', () => {
  const data = new SkyblockMuseum({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMuseum);
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<Record<UUID, SkyblockMuseumMember>>();
});
