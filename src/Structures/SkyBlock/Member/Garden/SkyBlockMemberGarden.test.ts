import SkyBlockMemberGarden from './SkyBlockMemberGarden.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberGarden', () => {
  const data = new SkyBlockMemberGarden({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberGarden);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberGarden>();
  expect(data.copper).toBeDefined();
  expect(data.copper).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.copper).toEqualTypeOf<number>();
  expect(data.larvaConsumed).toBeDefined();
  expect(data.larvaConsumed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.larvaConsumed).toEqualTypeOf<number>();
  expect(data.analyzedGreenHouseCrops).toBeDefined();
  expectTypeOf(data.analyzedGreenHouseCrops).toEqualTypeOf<string[]>();
  expect(data.discoveredGreenHouseCrops).toBeDefined();
  expectTypeOf(data.discoveredGreenHouseCrops).toEqualTypeOf<string[]>();
});
