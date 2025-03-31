import SkyblockMemberRiftCastle from './SkyblockMemberRiftCastle.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftCastle', () => {
  const data = new SkyblockMemberRiftCastle({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftCastle);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftCastle>();
  expect(data.unlockedPathwaySkip).toBeDefined();
  expectTypeOf(data.unlockedPathwaySkip).toEqualTypeOf<boolean>();
  expect(data.fairyStep).toBeDefined();
  expectTypeOf(data.fairyStep).toEqualTypeOf<number>();
  expect(data.grubberStacks).toBeDefined();
  expectTypeOf(data.grubberStacks).toEqualTypeOf<number>();
});
