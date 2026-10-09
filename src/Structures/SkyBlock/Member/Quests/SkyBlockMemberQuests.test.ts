import SkyBlockMemberQuests from './SkyBlockMemberQuests.ts';
import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.ts';
import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.ts';
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
