import SkyblockMemberRiftDeadCats from './SkyblockMemberRiftDeadCats.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberPet from '../Pets/SkyblockMemberPet.js';

test('SkyblockMemberRiftDeadCats', () => {
  const data = new SkyblockMemberRiftDeadCats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftDeadCats);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftDeadCats>();
  expect(data.talkedToJacquelle).toBeDefined();
  expectTypeOf(data.talkedToJacquelle).toEqualTypeOf<boolean>();
  expect(data.pickedUpDetector).toBeDefined();
  expectTypeOf(data.pickedUpDetector).toEqualTypeOf<boolean>();
  expect(data.foundCats).toBeDefined();
  expectTypeOf(data.foundCats).toEqualTypeOf<string[]>();
  expect(data.unlockedPet).toBeDefined();
  expectTypeOf(data.unlockedPet).toEqualTypeOf<boolean>();
  expect(data.montezuma).toBeDefined();
  expectTypeOf(data.montezuma).toEqualTypeOf<SkyblockMemberPet>();
});
