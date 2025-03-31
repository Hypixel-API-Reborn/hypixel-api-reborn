import SkyblockMemberRiftWyldWoods from './SkyblockMemberRiftWyldWoods.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftWyldWoods', () => {
  const data = new SkyblockMemberRiftWyldWoods({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWyldWoods);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWyldWoods>();
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
  expectTypeOf(data.bughunterStep).toEqualTypeOf<number>();
});
