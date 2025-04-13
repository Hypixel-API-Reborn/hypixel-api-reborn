import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import SkyBlockMemberInventoriesEquipmentDecoded from './SkyBlockMemberInventoriesEquipmentDecoded.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberInventoriesEquipmentDecoded', () => {
  /* eslint-disable camelcase */
  const data = new SkyBlockMemberInventoriesEquipmentDecoded([
    {
      id: 397,
      Count: 1,
      tag: {
        ench: [],
        HideFlags: 254,
        display: {
          Lore: [
            '§7Strength: §c+20',
            '§7Crit Chance: §c+2% §9(+2%)',
            '§7Crit Damage: §c+4% §9(+4%)',
            '§7Health: §a+30',
            '§7Defense: §a+20',
            '§7Vitality: §a+4',
            '',
            '§9Quantum V',
            '§7Grants §4+4♨ Vitality §7on weekdays and',
            '§7§3+2☯ §7of a random §3Wisdom §7stat on',
            '§7weekends.',
            '',
            '§bDominance IX',
            '§7Gain §c+13.5% §7damage when at full',
            '§7health.',
            '§bMana Pool VIII',
            '§7Grants §b+160✎ Intelligence§7.',
            '',
            '§8Tiered Bonus: Molten Core (1/4)',
            '§7Gain §a5% §7damage resistance while',
            '§7fighting §6Kuudra§7.',
            '',
            '§6§l§ka§r §6§lLEGENDARY NECKLACE §6§l§ka'
          ],
          Name: '§6Menacing Molten Necklace'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          modifier: 'menacing',
          attributes: { dominance: 9, mana_pool: 8 },
          id: 'MOLTEN_NECKLACE',
          boss_tier: 2,
          enchantments: { quantum: 5 },
          uuid: 'c17f0a31-21ed-4a3c-9501-792fa2d67543',
          timestamp: [389, 817821856]
        }
      },
      Damage: 3
    },
    {
      id: 397,
      Count: 1,
      tag: {
        ench: [],
        HideFlags: 254,
        display: {
          Lore: [
            '§7Strength: §c+164',
            '§7Crit Chance: §c+3.62% §9(+2%)',
            '§7Crit Damage: §c+32.8% §9(+5%)',
            '§7Health: §a+124.64',
            '§7Speed: §a+32.8',
            '§7True Defense: §a+3.62',
            '',
            '§9Cayenne V§9, §9Prosperity V',
            '',
            '§7On teleport: Your next melee hit',
            '§7within §a5s §7deals §c10% §7more damage.',
            '',
            '§d§l§ka§r §d§lMYTHIC DUNGEON CLOAK §d§l§ka'
          ],
          Name: '§d⚚ Menacing Shadow Assassin Cloak §6✪✪✪✪✪§c➎'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          modifier: 'menacing',
          upgrade_level: 10,
          id: 'STARRED_SHADOW_ASSASSIN_CLOAK',
          enchantments: { prosperity: 5, cayenne: 5 },
          uuid: '019f544f-d5cc-45cd-9e01-a3074d3bf7d7',
          timestamp: [394, -1973901920]
        }
      },
      Damage: 3
    },
    {
      id: 397,
      Count: 1,
      tag: {
        HideFlags: 254,
        display: {
          Lore: [
            '§7Crit Chance: §c+2% §9(+2%)',
            '§7Crit Damage: §c+4% §9(+4%)',
            '§7Defense: §a+70',
            '',
            '§bDominance VIII',
            '§7Gain §c+12% §7damage when at full health.',
            '§bMana Pool VII',
            '§7Grants §b+140✎ Intelligence§7.',
            '',
            '§6Ability: Consolidated ',
            '§7§7Increases all explosion damage dealt by §a25%§7.',
            '',
            '§6§l§ka§r §6§lLEGENDARY BELT §6§l§ka'
          ],
          Name: '§6Menacing Implosion Belt'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          modifier: 'menacing',
          attributes: { dominance: 8, mana_pool: 7 },
          id: 'IMPLOSION_BELT',
          uuid: 'd485698e-9f43-4147-8569-02a5c81c5dd9',
          timestamp: [394, -1847901920]
        }
      },
      Damage: 3
    },
    {
      id: 397,
      Count: 1,
      tag: {
        HideFlags: 254,
        display: {
          Lore: [
            '§7Strength: §c+15',
            '§7Crit Chance: §c+2% §9(+2%)',
            '§7Crit Damage: §c+4% §9(+4%)',
            '§7Health: §a+20',
            '§7Defense: §a+10',
            '',
            '§bDominance VIII',
            '§7Gain §c+12% §7damage when at full health.',
            '§bMana Pool VII',
            '§7Grants §b+140✎ Intelligence§7.',
            '',
            '§6Ability: Contaminate',
            '§7Killing an enemy causes an explosion',
            '§7dealing §a10% §7of their total §c❤ Health',
            '§c§7as damage to all enemies within §a2',
            '§ablocks§7. Enemies in the blast radius',
            '§7will also be §6contaminated §7causing',
            '§7them to explode on death.',
            '',
            '§6§l§ka§r §6§lLEGENDARY GLOVES §6§l§ka'
          ],
          Name: '§6Menacing Gauntlet of Contagion'
        },
        ExtraAttributes: {
          rarity_upgrades: 1,
          modifier: 'menacing',
          attributes: { dominance: 8, mana_pool: 7 },
          id: 'GAUNTLET_OF_CONTAGION',
          uuid: 'd588304d-b0da-4fb8-bb07-0284b302ee13',
          timestamp: [394, -600921920]
        }
      },
      Damage: 3
    }
  ]);
  /* eslint-enable camelcase */
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberInventoriesEquipmentDecoded);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberInventoriesEquipmentDecoded>();
  expect(data.gauntlet).toBeDefined();
  expectTypeOf(data.gauntlet).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.belt).toBeDefined();
  expectTypeOf(data.belt).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.cloak).toBeDefined();
  expectTypeOf(data.cloak).toEqualTypeOf<SkyBlockInventoryItem | null>();
  expect(data.necklace).toBeDefined();
  expectTypeOf(data.necklace).toEqualTypeOf<SkyBlockInventoryItem | null>();
});
