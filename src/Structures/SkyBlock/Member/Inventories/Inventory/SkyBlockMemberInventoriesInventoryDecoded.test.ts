import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesInventoryDecoded', () => {
  /* eslint-disable camelcase */
  const data = new SkyBlockMemberInventoriesInventoryDecoded([
    {
      id: 272,
      Count: 1,
      tag: {
        ench: [],
        Unbreakable: 1,
        HideFlags: 254,
        display: {
          Lore: [
            '§7Gear Score: §d5000',
            '§7Damage: §c+3,496.48 §e(+30)',
            '§7Strength: §c+2,328.8 §e(+30) §6[+5] §9(+220)',
            '§7Crit Damage: §c+1,010.24% §d(+24%)',
            '§7Magic Find: §a+10.86',
            '§7Swing Range: §a+2.12',
            ' §6[§8⚔§6] §6[§8⚔§6]',
            '',
            '§d§l§d§lChimera V§9, §9Champion X§9, §9Cleave VI',
            '§9Critical VII§9, §9Cubism V§9, §9Divine Gift III',
            '§9Dragon Hunter V§9, §9Ender Slayer VII§9, §9Execute VI',
            '§9Experience IV§9, §9Fire Aspect III§9, §9Giant Killer VII',
            '§9Impaling III§9, §9Lethality VI§9, §9Looting IV',
            '§9Luck VII§9, §9Scavenger V§9, §9Sharpness VII',
            '§9Smoldering III§9, §9Syphon V§9, §9Tabasco III',
            '§9Thunderlord VII§9, §9Triple-Strike V§9, §9Vampirism VI',
            '§9Venomous VI',
            '',
            '§c◆ Blood Rune III',
            '',
            '§7§7§oThat thing was too big to be called a',
            '§7§osword, it was more like a large hunk',
            '§7§oof stone.',
            '',
            '§fKills: §6403,954',
            '',
            '§9Withered Bonus',
            '§7Grants §a+1 §c❁ Strength §7per',
            '§7§cCatacombs §7level.',
            '',
            '§8§l* §8Co-op Soulbound §8§l*',
            '§d§l§ka§r §d§lMYTHIC DUNGEON LONGSWORD §d§l§ka'
          ],
          Name: '§dWithered Dark Claymore §6✪✪✪✪✪§c➎'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          stats_book: 403954,
          runes: { BLOOD_2: 3 },
          modifier: 'withered',
          art_of_war_count: 1,
          upgrade_level: 10,
          enchantments: {
            impaling: 3,
            champion: 10
          },
          uuid: '89dd6816-0a32-4dcf-808b-ba558c793c91',
          hot_potato_count: 15,
          gems: {
            COMBAT_0: 'PERFECT',
            unlocked_slots: ['COMBAT_0', 'COMBAT_1'],
            COMBAT_1_gem: 'ONYX',
            COMBAT_0_gem: 'ONYX',
            COMBAT_1: 'PERFECT'
          },
          champion_combat_xp: 263299217.60781735,
          id: 'DARK_CLAYMORE',
          donated_museum: 1,
          timestamp: [389, -126385440]
        }
      },
      Damage: 0
    }
  ]);
  /* eslint-enable camelcase */
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesInventoryDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesInventoryDecoded>();
  expect(data.items).toBeDefined();
  expectTypeOf(data.items).toEqualTypeOf<SkyBlockInventoryItem[]>();
});
