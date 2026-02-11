import type { BedWarsSettingsDeposit, BedWarsSettingsSlumberItemNotification } from '../../../Types/Player.js';
declare class BedWarsSettings {
    deposit: BedWarsSettingsDeposit;
    slumberItemNotification: BedWarsSettingsSlumberItemNotification;
    slumberWalletFull: boolean;
    trapRemoval: boolean;
    constructor(data: Record<string, any>);
}
export default BedWarsSettings;
//# sourceMappingURL=BedWarsSettings.d.ts.map