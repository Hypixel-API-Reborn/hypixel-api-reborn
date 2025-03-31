import SkyblockGemstone from './SkyblockGemstone.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockGemstoneQuality } from '../../Types/Skyblock.js';

test('SkyblockGemstone', () => {
  const data = new SkyblockGemstone({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGemstone);
  expectTypeOf(data).toEqualTypeOf<SkyblockGemstone>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<string>();
  expect(data.quality).toBeDefined();
  expectTypeOf(data.quality).toEqualTypeOf<SkyblockGemstoneQuality | 'UNKNOWN'>();
});
