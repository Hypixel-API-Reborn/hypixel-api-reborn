import SkyBlockMemberRiftWizardTower from './SkyBlockMemberRiftWizardTower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWizardTower', () => {
  const data = new SkyBlockMemberRiftWizardTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWizardTower);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWizardTower>();
  expect(data.wizardQuestStep).toBeDefined();
  expect(data.wizardQuestStep).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wizardQuestStep).toEqualTypeOf<number>();
  expect(data.crumbsLaidOut).toBeDefined();
  expect(data.crumbsLaidOut).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.crumbsLaidOut).toEqualTypeOf<number>();
});
