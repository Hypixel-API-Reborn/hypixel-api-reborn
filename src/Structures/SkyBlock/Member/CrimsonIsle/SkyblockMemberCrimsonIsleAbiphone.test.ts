import SkyblockMemberCrimsonIsleAbiphone from './SkyblockMemberCrimsonIsleAbiphone.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  AbiphoneContact,
  AbiphoneContactSort,
  CrimsonIsleRingtone,
  RawAbiphoneData
} from '../../../../Types/Skyblock.js';

test('SkyblockMemberCrimsonIsleAbiphone', () => {
  const data = new SkyblockMemberCrimsonIsleAbiphone({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleAbiphone);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleAbiphone>();
  expect(data.contactData).toBeDefined();
  expectTypeOf(data.contactData).toEqualTypeOf<Record<string, RawAbiphoneData>>();
  expect(data.activeContacts).toBeDefined();
  expectTypeOf(data.activeContacts).toEqualTypeOf<AbiphoneContact[]>();
  expect(data.ringtone).toBeDefined();
  expectTypeOf(data.ringtone).toEqualTypeOf<CrimsonIsleRingtone>();
  expect(data.sort).toBeDefined();
  expectTypeOf(data.sort).toEqualTypeOf<AbiphoneContactSort | 'UNKNOWN'>();
  expect(data.games).toBeDefined();
  expectTypeOf(data.games).toEqualTypeOf<Record<string, number>>();
  expect(data.operatorChip).toBeDefined();
  expectTypeOf(data.operatorChip).toEqualTypeOf<Record<string, number>>();
  expect(data.trioContactAddons).toBeDefined();
  expectTypeOf(data.trioContactAddons).toEqualTypeOf<number>();
  expect(data.hasUsedSiriusPersonalPhoneNumberItem).toBeDefined();
  expectTypeOf(data.hasUsedSiriusPersonalPhoneNumberItem).toEqualTypeOf<boolean>();
  expect(data.lastDyeCalledYear).toBeDefined();
  expectTypeOf(data.lastDyeCalledYear).toEqualTypeOf<number>();
});
