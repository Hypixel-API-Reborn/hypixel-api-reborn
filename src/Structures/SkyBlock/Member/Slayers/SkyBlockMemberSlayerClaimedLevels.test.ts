import SkyBlockMemberSlayerClaimedLevels from './SkyBlockMemberSlayerClaimedLevels.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberSlayerClaimedLevels', () => {
  const data = new SkyBlockMemberSlayerClaimedLevels({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberSlayerClaimedLevels);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberSlayerClaimedLevels>();
  expect(data.level1).toBeDefined();
  expectTypeOf(data.level1).toEqualTypeOf<boolean>();
  expect(data.level2).toBeDefined();
  expectTypeOf(data.level2).toEqualTypeOf<boolean>();
  expect(data.level3).toBeDefined();
  expectTypeOf(data.level3).toEqualTypeOf<boolean>();
  expect(data.level4).toBeDefined();
  expectTypeOf(data.level4).toEqualTypeOf<boolean>();
  expect(data.level5).toBeDefined();
  expectTypeOf(data.level5).toEqualTypeOf<boolean>();
  expect(data.level6).toBeDefined();
  expectTypeOf(data.level6).toEqualTypeOf<boolean>();
  expect(data.level7).toBeDefined();
  expectTypeOf(data.level7).toEqualTypeOf<boolean>();
  expect(data.level8).toBeDefined();
  expectTypeOf(data.level8).toEqualTypeOf<boolean>();
  expect(data.level9).toBeDefined();
  expectTypeOf(data.level9).toEqualTypeOf<boolean>();
});
