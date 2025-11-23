import type { BedWarsSettingsDeposit, BedWarsSettingsSlumberItemNotification } from '../../../Types/Player.js';

class BedWarsSettings {
  deposit: BedWarsSettingsDeposit;
  slumberItemNotification: BedWarsSettingsSlumberItemNotification;
  slumberWalletFull: boolean;
  trapRemoval: boolean;
  constructor(data: Record<string, any>) {
    this.deposit = data?.deposit || 'ENABLED';
    this.slumberItemNotification = data?.slumberItemNotification || 'CHAT_MESSAGES';
    this.slumberWalletFull = data?.slumberWalletFull || true;
    this.trapRemoval = data?.trapRemoval || false;
  }
}

export default BedWarsSettings;
