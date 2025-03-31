import SkyblockMemberRiftWestVillageCrazyKloon from './SkyblockMemberRiftWestVillageCrazyKloon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftWestVillageCrazyKloon', () => {
  const data = new SkyblockMemberRiftWestVillageCrazyKloon({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWestVillageCrazyKloon);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWestVillageCrazyKloon>();
  expect(data.selectedColors).toBeDefined();
  expectTypeOf(data.selectedColors).toEqualTypeOf<Record<string, string>>();
  expect(data.talked).toBeDefined();
  expectTypeOf(data.talked).toEqualTypeOf<boolean>();
  expect(data.hackedTerminals).toBeDefined();
  expectTypeOf(data.hackedTerminals).toEqualTypeOf<string[]>();
  expect(data.questComplete).toBeDefined();
  expectTypeOf(data.questComplete).toEqualTypeOf<boolean>();
});
