import SkyBlockMemberRiftWyldWoods from './SkyBlockMemberRiftWyldWoods.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWyldWoods', () => {
  const data = new SkyBlockMemberRiftWyldWoods({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWyldWoods);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWyldWoods>();
  expect(data.talkedThreebrothers).toBeDefined();
  expectTypeOf(data.talkedThreebrothers).toEqualTypeOf<string[]>();
  expect(data.siriusStartedQA).toBeDefined();
  expectTypeOf(data.siriusStartedQA).toEqualTypeOf<boolean>();
  expect(data.siriusQAChainDone).toBeDefined();
  expectTypeOf(data.siriusQAChainDone).toEqualTypeOf<boolean>();
  expect(data.siriusCompletedQA).toBeDefined();
  expectTypeOf(data.siriusCompletedQA).toEqualTypeOf<boolean>();
  expect(data.siriusClaimedDoubloon).toBeDefined();
  expectTypeOf(data.siriusClaimedDoubloon).toEqualTypeOf<boolean>();
  expect(data.bughunterStep).toBeDefined();
  expect(data.bughunterStep).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bughunterStep).toEqualTypeOf<number>();
});
