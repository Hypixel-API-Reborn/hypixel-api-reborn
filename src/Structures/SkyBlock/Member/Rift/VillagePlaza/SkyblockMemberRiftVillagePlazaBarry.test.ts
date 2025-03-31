import SkyblockMemberRiftVillagePlazaBarry from './SkyblockMemberRiftVillagePlazaBarry.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftVillagePlazaBarry', () => {
  const data = new SkyblockMemberRiftVillagePlazaBarry({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftVillagePlazaBarry);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftVillagePlazaBarry>();
  expect(data.firstTalkToBarry).toBeDefined();
  expectTypeOf(data.firstTalkToBarry).toEqualTypeOf<boolean>();
  expect(data.convinced).toBeDefined();
  expectTypeOf(data.convinced).toEqualTypeOf<boolean>();
  expect(data.receivedReward).toBeDefined();
  expectTypeOf(data.receivedReward).toEqualTypeOf<boolean>();
});
