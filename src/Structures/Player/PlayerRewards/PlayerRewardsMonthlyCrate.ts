class PlayerRewardsMonthlyCrate {
  date: string;
  REGULAR: boolean;
  VIP: boolean;
  VIP_PLUS: boolean;
  MVP: boolean;
  MVP_PLUS: boolean;
  constructor(data: Record<string, any>, date: string) {
    this.date = date;
    this.REGULAR = data?.REGULAR || data?.NORMAL || false;
    this.VIP = data?.VIP || false;
    this.VIP_PLUS = data?.VIP_PLUS || false;
    this.MVP = data?.MVP || false;
    this.MVP_PLUS = data?.MVP_PLUS || false;
  }
}

export default PlayerRewardsMonthlyCrate;
