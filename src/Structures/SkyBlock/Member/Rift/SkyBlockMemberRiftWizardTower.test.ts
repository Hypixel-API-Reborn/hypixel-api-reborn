import SkyBlockMemberRiftWizardTower from './SkyBlockMemberRiftWizardTower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWizardTower', () => {
  const data = new SkyBlockMemberRiftWizardTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWizardTower);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWizardTower>();
});
