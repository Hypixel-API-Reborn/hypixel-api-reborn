import SkyBlockGemstone from './SkyBlockGemstone.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockGemstoneQuality } from '../../Types/SkyBlock.js';

test('SkyBlockGemstone', () => {
  const data = new SkyBlockGemstone({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGemstone);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGemstone>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<string>();
  expect(data.quality).toBeDefined();
  expectTypeOf(data.quality).toEqualTypeOf<SkyBlockGemstoneQuality | 'UNKNOWN'>();
});
