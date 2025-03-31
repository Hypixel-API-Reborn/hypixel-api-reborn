import SkyblockMemberRiftWizardTower from './SkyblockMemberRiftWizardTower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftWizardTower', () => {
  const data = new SkyblockMemberRiftWizardTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWizardTower);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWizardTower>();
});
