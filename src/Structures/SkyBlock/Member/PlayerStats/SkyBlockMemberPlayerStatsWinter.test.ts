import SkyBlockMemberPlayerStatsWinter from './SkyBlockMemberPlayerStatsWinter.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsWinter', () => {
  const data = new SkyBlockMemberPlayerStatsWinter({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsWinter);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsWinter>();
  expect(data.mostSnowballsHit).toBeDefined();
  expect(data.mostSnowballsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mostSnowballsHit).toEqualTypeOf<number>();
  expect(data.mostDamageDealt).toBeDefined();
  expect(data.mostDamageDealt).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mostDamageDealt).toEqualTypeOf<number>();
  expect(data.mostMagmaDamageDealt).toBeDefined();
  expect(data.mostMagmaDamageDealt).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mostMagmaDamageDealt).toEqualTypeOf<number>();
  expect(data.mostCannonballsHit).toBeDefined();
  expect(data.mostCannonballsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mostCannonballsHit).toEqualTypeOf<number>();
});
