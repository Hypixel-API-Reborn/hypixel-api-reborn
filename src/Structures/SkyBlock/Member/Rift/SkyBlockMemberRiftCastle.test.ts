import SkyBlockMemberRiftCastle from './SkyBlockMemberRiftCastle.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftCastle', () => {
  const data = new SkyBlockMemberRiftCastle({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftCastle);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftCastle>();
  expect(data.unlockedPathwaySkip).toBeDefined();
  expectTypeOf(data.unlockedPathwaySkip).toEqualTypeOf<boolean>();
  expect(data.fairyStep).toBeDefined();
  expectTypeOf(data.fairyStep).toEqualTypeOf<number>();
  expect(data.grubberStacks).toBeDefined();
  expectTypeOf(data.grubberStacks).toEqualTypeOf<number>();
});
