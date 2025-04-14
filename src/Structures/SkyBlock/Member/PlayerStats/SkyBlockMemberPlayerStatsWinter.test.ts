import SkyBlockMemberPlayerStatsWinter from './SkyBlockMemberPlayerStatsWinter.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsWinter', () => {
  const data = new SkyBlockMemberPlayerStatsWinter({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsWinter);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsWinter>();
  expect(data.mostSnowballsHit).toBeDefined();
  expectTypeOf(data.mostSnowballsHit).toEqualTypeOf<number>();
  expect(data.mostDamageDealt).toBeDefined();
  expectTypeOf(data.mostDamageDealt).toEqualTypeOf<number>();
  expect(data.mostMagmaDamageDealt).toBeDefined();
  expectTypeOf(data.mostMagmaDamageDealt).toEqualTypeOf<number>();
  expect(data.mostCannonballsHit).toBeDefined();
  expectTypeOf(data.mostCannonballsHit).toEqualTypeOf<number>();
});
