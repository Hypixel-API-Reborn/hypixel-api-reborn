import SkyBlockMemberInventoriesBagsTalismanDecoded from './SkyBlockMemberInventoriesBagsTalismanDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesBagsTalismanDecoded', () => {
  /* eslint-disable camelcase */
  const data = new SkyBlockMemberInventoriesBagsTalismanDecoded([
    {
      id: 397,
      Count: 1,
      tag: {
        HideFlags: 254,
        display: {
          Lore: [
            '§7Costs §31⸎ Soulflow §7per 5s in combat:',
            '§3⁍ §7Gain §c+20⫽ Ferocity',
            '',
            '§7Enabled: §cOff',
            '§eRight-click to toggle!',
            '',
            '§a§l§ka§r §a§lUNCOMMON ACCESSORY §a§l§ka'
          ],
          Name: '§aHandy Blood Chalice'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          id: 'HANDY_BLOOD_CHALICE',
          uuid: 'dbb97f4b-9dd8-45fc-aca5-ff87d4ce3b2f',
          timestamp: [386, -1213683552]
        }
      },
      Damage: 3
    }
  ]);
  /* eslint-enable camelcase */
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesBagsTalismanDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesBagsTalismanDecoded>();
  expect(data.magicalPower).toBeDefined();
  expectTypeOf(data.magicalPower).toEqualTypeOf<number>();
});
