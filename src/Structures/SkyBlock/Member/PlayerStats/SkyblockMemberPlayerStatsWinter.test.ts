import SkyblockMemberPlayerStatsWinter from './SkyblockMemberPlayerStatsWinter.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsWinter', () => {
  const data = new SkyblockMemberPlayerStatsWinter({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsWinter);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsWinter>();
  expect(data.mostSnowballsHit).toBeDefined();
  expectTypeOf(data.mostSnowballsHit).toEqualTypeOf<number>();
  expect(data.mostDamageDealt).toBeDefined();
  expectTypeOf(data.mostDamageDealt).toEqualTypeOf<number>();
  expect(data.mostMagmaDamageDealt).toBeDefined();
  expectTypeOf(data.mostMagmaDamageDealt).toEqualTypeOf<number>();
  expect(data.mostCannonballsHit).toBeDefined();
  expectTypeOf(data.mostCannonballsHit).toEqualTypeOf<number>();
});
