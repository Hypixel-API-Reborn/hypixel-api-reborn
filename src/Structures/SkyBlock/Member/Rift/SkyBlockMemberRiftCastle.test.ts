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
  expect(data.fairyStep).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fairyStep).toEqualTypeOf<number>();
  expect(data.grubberStacks).toBeDefined();
  expect(data.grubberStacks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.grubberStacks).toEqualTypeOf<number>();
});
