import SkyBlockMuseum from './SkyBlockMuseum.js';
import SkyBlockMuseumMember from './SkyBlockMuseumMember.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID } from '../../../Types/Global.js';

test('SkyBlockMuseum', () => {
  const data = new SkyBlockMuseum({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMuseum);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseum>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<Record<UUID, SkyBlockMuseumMember>>();
});
