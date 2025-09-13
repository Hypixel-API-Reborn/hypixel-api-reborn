class PlayerRankPurchase {
  vip: number | null;
  vipAt: Date | null;
  vipPlus: number | null;
  vipPlusAt: Date | null;
  mvp: number | null;
  mvpAt: Date | null;
  mvpPlus: number | null;
  mvpPlusAt: Date | null;
  constructor(data: Record<string, any>) {
    this.vip = data?.levelUp_VIP || null;
    this.vipAt = this.vip ? new Date(this.vip) : null;
    this.vipPlus = data?.levelUp_VIP_PLUS || null;
    this.vipPlusAt = this.vipPlus ? new Date(this.vipPlus) : null;
    this.mvp = data?.levelUp_MVP || null;
    this.mvpAt = this.mvp ? new Date(this.mvp) : null;
    this.mvpPlus = data?.levelUp_MVP_PLUS || null;
    this.mvpPlusAt = this.mvpPlus ? new Date(this.mvpPlus) : null;
  }
}

export default PlayerRankPurchase;
