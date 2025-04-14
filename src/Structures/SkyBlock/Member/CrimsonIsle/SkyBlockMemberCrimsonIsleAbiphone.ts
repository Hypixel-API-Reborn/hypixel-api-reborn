import type {
  AbiphoneContact,
  AbiphoneContactSort,
  CrimsonIsleRingtone,
  RawAbiphoneData
} from '../../../../Types/SkyBlock.js';

class SkyBlockMemberCrimsonIsleAbiphone {
  contactData: Record<string, RawAbiphoneData>;
  activeContacts: AbiphoneContact[];
  ringtone: CrimsonIsleRingtone;
  sort: AbiphoneContactSort | 'UNKNOWN';
  games: Record<string, number>;
  operatorChip: Record<string, number>;
  trioContactAddons: number;
  hasUsedSiriusPersonalPhoneNumberItem: boolean;
  lastDyeCalledYear: number;
  constructor(data: Record<string, any>) {
    this.contactData = data?.contact_data || {};
    this.activeContacts = data?.active_contacts || [];
    this.ringtone = data?.selected_ringtone || 'DEFAULT';
    this.sort = data?.selected_sort || 'UNKNOWN';
    this.games = data?.games || {};
    this.operatorChip = data?.operator_chip || {};
    this.trioContactAddons = data?.trio_contact_addons || 0;
    this.hasUsedSiriusPersonalPhoneNumberItem = data?.has_used_sirius_personal_phone_number_item || false;
    this.lastDyeCalledYear = data?.last_dye_called_year || 0;
  }
}

export default SkyBlockMemberCrimsonIsleAbiphone;
