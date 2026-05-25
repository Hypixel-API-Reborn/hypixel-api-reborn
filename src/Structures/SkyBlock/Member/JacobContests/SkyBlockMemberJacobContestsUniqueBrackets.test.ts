import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { JacobCrop } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberJacobContestsUniqueBrackets', () => {
  const data = new SkyBlockMemberJacobContestsUniqueBrackets({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberJacobContestsUniqueBrackets);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberJacobContestsUniqueBrackets>();
  expect(data.bronze).toBeDefined();
  expectTypeOf(data.bronze).toEqualTypeOf<JacobCrop[]>();
  expect(data.silver).toBeDefined();
  expectTypeOf(data.silver).toEqualTypeOf<JacobCrop[]>();
  expect(data.gold).toBeDefined();
  expectTypeOf(data.gold).toEqualTypeOf<JacobCrop[]>();
  expect(data.platinum).toBeDefined();
  expectTypeOf(data.platinum).toEqualTypeOf<JacobCrop[]>();
  expect(data.diamond).toBeDefined();
  expectTypeOf(data.diamond).toEqualTypeOf<JacobCrop[]>();
});
