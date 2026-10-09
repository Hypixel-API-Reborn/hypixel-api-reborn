import SkyBlockMuseum from './SkyBlockMuseum.ts';
import SkyBlockMuseumMember from './SkyBlockMuseumMember.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID } from '../../../Types/index.ts';

test('SkyBlockMuseum', () => {
  const data = new SkyBlockMuseum({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMuseum);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMuseum>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<Record<UUID, SkyBlockMuseumMember>>();
});
