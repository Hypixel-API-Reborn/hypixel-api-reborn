import SkyBlockMemberQuests from './SkyBlockMemberQuests.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.js';
import type SkyBlockMemberQuestsTrapper from './SkyBlockMemeberQuestsTrapper.js';

test('SkyBlockMemberQuests', () => {
  const data = new SkyBlockMemberQuests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuests);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuests>();
  expect(data.harp).toBeDefined();
  expectTypeOf(data.harp).toEqualTypeOf<SkyBlockMemberQuestsHarp>();
  expect(data.trapper).toBeDefined();
  expectTypeOf(data.trapper).toEqualTypeOf<SkyBlockMemberQuestsTrapper>();
});
