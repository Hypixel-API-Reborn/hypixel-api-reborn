import SkyblockMemberQuests from './SkyblockMemberQuests.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberQuestsHarp from './SkyblockMemberQuestsHarp.js';
import type SkyblockMemberQuestsTrapper from './SkyblockMemeberQuestsTrapper.js';

test('SkyblockMemberQuests', () => {
  const data = new SkyblockMemberQuests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberQuests);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberQuests>();
  expect(data.harp).toBeDefined();
  expectTypeOf(data.harp).toEqualTypeOf<SkyblockMemberQuestsHarp>();
  expect(data.trapper).toBeDefined();
  expectTypeOf(data.trapper).toEqualTypeOf<SkyblockMemberQuestsTrapper>();
});
