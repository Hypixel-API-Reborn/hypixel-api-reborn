import SkyblockMemberRiftDreamFarm from './SkyblockMemberRiftDreamFarm.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftDreamFarm', () => {
  const data = new SkyblockMemberRiftDreamFarm({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftDreamFarm);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftDreamFarm>();
  expect(data.shaniaStage).toBeDefined();
  expectTypeOf(data.shaniaStage).toEqualTypeOf<number>();
  expect(data.caducousFeederUses).toBeDefined();
  expectTypeOf(data.caducousFeederUses).toEqualTypeOf<number[]>();
});
