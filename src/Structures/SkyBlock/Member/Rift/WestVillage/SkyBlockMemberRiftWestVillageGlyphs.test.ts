import SkyBlockMemberRiftWestVillageGlyphs from './SkyBlockMemberRiftWestVillageGlyphs.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWestVillageGlyphs', () => {
  const data = new SkyBlockMemberRiftWestVillageGlyphs({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillageGlyphs);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillageGlyphs>();
  expect(data.claimedWand).toBeDefined();
  expectTypeOf(data.claimedWand).toEqualTypeOf<boolean>();
  expect(data.currentGlyphDelivered).toBeDefined();
  expectTypeOf(data.currentGlyphDelivered).toEqualTypeOf<boolean>();
  expect(data.currentGlyphCompleted).toBeDefined();
  expectTypeOf(data.currentGlyphCompleted).toEqualTypeOf<boolean>();
  expect(data.currentGlyph).toBeDefined();
  expectTypeOf(data.currentGlyph).toEqualTypeOf<number>();
  expect(data.completed).toBeDefined();
  expectTypeOf(data.completed).toEqualTypeOf<boolean>();
  expect(data.claimedBracelet).toBeDefined();
  expectTypeOf(data.claimedBracelet).toEqualTypeOf<boolean>();
});
