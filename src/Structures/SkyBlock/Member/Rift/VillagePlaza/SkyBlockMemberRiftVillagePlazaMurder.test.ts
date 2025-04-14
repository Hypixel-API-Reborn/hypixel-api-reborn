import SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftVillagePlazaMurder', () => {
  const data = new SkyBlockMemberRiftVillagePlazaMurder({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaMurder);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaMurder>();
  expect(data.stepIndex).toBeDefined();
  expectTypeOf(data.stepIndex).toEqualTypeOf<number>();
  expect(data.roomClues).toBeDefined();
  expectTypeOf(data.roomClues).toEqualTypeOf<number[]>();
  expect(data.stepIndexPt2).toBeDefined();
  expectTypeOf(data.stepIndexPt2).toEqualTypeOf<number>();
  expect(data.stepIndexPt3).toBeDefined();
  expectTypeOf(data.stepIndexPt3).toEqualTypeOf<number>();
});
