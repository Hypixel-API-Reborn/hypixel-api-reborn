import SkyBlockMemberPlayerStatsFishing from './SkyBlockMemberPlayerStatsFishing.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsFishing', () => {
  const data = new SkyBlockMemberPlayerStatsFishing({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsFishing);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsFishing>();
  expect(data.seaCreaturesKills).toBeDefined();
  expectTypeOf(data.seaCreaturesKills).toEqualTypeOf<number>();
  expect(data.normal).toBeDefined();
  expectTypeOf(data.normal).toEqualTypeOf<number>();
  expect(data.treasure).toBeDefined();
  expectTypeOf(data.treasure).toEqualTypeOf<number>();
  expect(data.largeTreasure).toBeDefined();
  expectTypeOf(data.largeTreasure).toEqualTypeOf<number>();
  expect(data.trophyFish).toBeDefined();
  expectTypeOf(data.trophyFish).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
});
