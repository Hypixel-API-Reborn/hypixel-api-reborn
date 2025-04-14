import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { JacobCrops } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberJacobContestsUniqueBrackets', () => {
  const data = new SkyBlockMemberJacobContestsUniqueBrackets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsUniqueBrackets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsUniqueBrackets>();
  expect(data.bronze).toBeDefined();
  expectTypeOf(data.bronze).toEqualTypeOf<JacobCrops[]>();
  expect(data.silver).toBeDefined();
  expectTypeOf(data.silver).toEqualTypeOf<JacobCrops[]>();
  expect(data.gold).toBeDefined();
  expectTypeOf(data.gold).toEqualTypeOf<JacobCrops[]>();
  expect(data.platinum).toBeDefined();
  expectTypeOf(data.platinum).toEqualTypeOf<JacobCrops[]>();
  expect(data.diamond).toBeDefined();
  expectTypeOf(data.diamond).toEqualTypeOf<JacobCrops[]>();
});
