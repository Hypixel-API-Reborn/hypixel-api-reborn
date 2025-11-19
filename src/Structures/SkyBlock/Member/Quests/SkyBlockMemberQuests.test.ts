import SkyBlockMemberQuests from './SkyBlockMemberQuests.js';
import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.js';
import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberQuests', () => {
  const data = new SkyBlockMemberQuests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuests);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuests>();
  expect(data.harp).toBeDefined();
  expect(data.harp).toBeInstanceOf(SkyBlockMemberQuestsHarp);
  expectTypeOf(data.harp).toEqualTypeOf<SkyBlockMemberQuestsHarp>();
  expect(data.trapper).toBeDefined();
  expect(data.trapper).toBeInstanceOf(SkyBlockMemberQuestsTrapper);
  expectTypeOf(data.trapper).toEqualTypeOf<SkyBlockMemberQuestsTrapper>();
});
