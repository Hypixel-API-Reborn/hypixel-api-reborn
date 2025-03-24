class SkyblockMemberProfile {
  firstJoin: number;
  firstJoinDate: Date;
  personalBankUpgrade: number;
  bankAccount: number;
  hasCookie: boolean;
  constructor(data: Record<string, any>) {
    this.firstJoin = data?.first_join || 0;
    this.firstJoinDate = new Date(this.firstJoin);
    this.personalBankUpgrade = data?.personal_bank_upgrade || 0;
    this.bankAccount = data?.bank_account || 0;
    this.hasCookie = data?.cookie_buff_active || false;
  }
}

export default SkyblockMemberProfile;
