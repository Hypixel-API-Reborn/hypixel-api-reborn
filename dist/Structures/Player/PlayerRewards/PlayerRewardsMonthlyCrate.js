class PlayerRewardsMonthlyCrate {
    date;
    REGULAR;
    VIP;
    VIP_PLUS;
    MVP;
    MVP_PLUS;
    constructor(data, date) {
        this.date = date;
        this.REGULAR = data?.REGULAR || data?.NORMAL || false;
        this.VIP = data?.VIP || false;
        this.VIP_PLUS = data?.VIP_PLUS || false;
        this.MVP = data?.MVP || false;
        this.MVP_PLUS = data?.MVP_PLUS || false;
    }
}
export default PlayerRewardsMonthlyCrate;
//# sourceMappingURL=PlayerRewardsMonthlyCrate.js.map