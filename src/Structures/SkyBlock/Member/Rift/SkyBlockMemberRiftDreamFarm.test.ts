import SkyBlockMemberRiftDreamFarm from './SkyBlockMemberRiftDreamFarm.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftDreamFarm', () => {
  const data = new SkyBlockMemberRiftDreamFarm({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftDreamFarm);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftDreamFarm>();
  expect(data.shaniaStage).toBeDefined();
  expectTypeOf(data.shaniaStage).toEqualTypeOf<number>();
  expect(data.caducousFeederUses).toBeDefined();
  expectTypeOf(data.caducousFeederUses).toEqualTypeOf<number[]>();
});
