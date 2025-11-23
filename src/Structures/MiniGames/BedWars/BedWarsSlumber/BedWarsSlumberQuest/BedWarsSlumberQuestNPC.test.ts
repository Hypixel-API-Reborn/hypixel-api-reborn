import BedWarsSlumberQuestNPC from './BedWarsSlumberQuestNPC.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberQuestNPC', () => {
  const data = new BedWarsSlumberQuestNPC({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberQuestNPC);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberQuestNPC>();
  expect(data.doorMan).toBeDefined();
  expectTypeOf(data.doorMan).toEqualTypeOf<boolean>();
  expect(data.fredericFernton).toBeDefined();
  expectTypeOf(data.fredericFernton).toEqualTypeOf<boolean>();
  expect(data.generalDaku).toBeDefined();
  expectTypeOf(data.generalDaku).toEqualTypeOf<boolean>();
  expect(data.hostessKatrina).toBeDefined();
  expectTypeOf(data.hostessKatrina).toEqualTypeOf<boolean>();
  expect(data.hotelReceptionist).toBeDefined();
  expectTypeOf(data.hotelReceptionist).toEqualTypeOf<boolean>();
  expect(data.johnIndigos).toBeDefined();
  expectTypeOf(data.johnIndigos).toEqualTypeOf<boolean>();
  expect(data.ladySaichi).toBeDefined();
  expectTypeOf(data.ladySaichi).toEqualTypeOf<boolean>();
  expect(data.ticketMachine).toBeDefined();
  expectTypeOf(data.ticketMachine).toEqualTypeOf<boolean>();
});
