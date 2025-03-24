import SkyblockInventoryItem from '../../SkyblockInventoryItem.js';
import { decode } from '../../../../Utils/SkyblockUtils.js';
import type { Armor, Equipment } from '../../../../Types/Skyblock.js';

class SkyblockMemberRiftInventory {
  enderChestPageIcons: [];
  getInventory: () => Promise<SkyblockInventoryItem[]>;
  getArmor: () => Promise<Armor>;
  getEnderChest: () => Promise<SkyblockInventoryItem[]>;
  getEquipment: () => Promise<Equipment>;
  constructor(data: Record<string, any>) {
    this.enderChestPageIcons = data?.ender_chest_page_icons || [];

    this.getInventory = async () => {
      let inventory = data?.inv_contents || {};
      if (!inventory) return [];
      try {
        inventory = await decode(inventory?.data);
        const edited = [];
        for (let i = 0; i < inventory.length; i++) {
          if (!inventory[i]?.id) continue;
          edited.push(new SkyblockInventoryItem(inventory[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };

    this.getArmor = async () => {
      const base64 = data?.inv_armor;
      const decoded = await decode(base64?.data);
      const armor = {
        helmet: decoded[3]?.id ? new SkyblockInventoryItem(decoded[3]) : null,
        chestplate: decoded[2]?.id ? new SkyblockInventoryItem(decoded[2]) : null,
        leggings: decoded[1]?.id ? new SkyblockInventoryItem(decoded[1]) : null,
        boots: decoded[0]?.id ? new SkyblockInventoryItem(decoded[0]) : null
      };
      return armor;
    };

    this.getEnderChest = async () => {
      let chest = data?.ender_chest_contents;
      if (!chest) return [];
      try {
        chest = await decode(chest?.data);
        const edited = [];
        for (let i = 0; i < chest.length; i++) {
          if (!chest[i]?.id) continue;
          edited.push(new SkyblockInventoryItem(chest[i]));
        }
        return edited;
      } catch {
        return [];
      }
    };

    this.getEquipment = async () => {
      let equipment = data?.equipment_contents;
      if (!equipment) {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
      try {
        equipment = await decode(equipment?.data);
        const playerEquipment = {
          gauntlet: equipment?.[3]?.id ? new SkyblockInventoryItem(equipment[3]) : null,
          belt: equipment?.[2]?.id ? new SkyblockInventoryItem(equipment[2]) : null,
          cloak: equipment?.[1]?.id ? new SkyblockInventoryItem(equipment[1]) : null,
          necklace: equipment?.[0]?.id ? new SkyblockInventoryItem(equipment[0]) : null
        };
        return playerEquipment;
      } catch {
        return { gauntlet: null, belt: null, cloak: null, necklace: null };
      }
    };
  }
}

export default SkyblockMemberRiftInventory;
