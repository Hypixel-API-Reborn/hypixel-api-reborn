class CopsAndCrimsGun {
    gunName;
    damageIncrease;
    recoilReduction;
    reloadSpeedReduction;
    costReduction;
    kills;
    headShots;
    constructor(data, gunName) {
        this.gunName = gunName;
        this.damageIncrease = data?.[`${gunName}_damage_increase`] || 0;
        this.recoilReduction = data?.[`${gunName}_recoil_reduction`] || 0;
        this.reloadSpeedReduction = data?.[`${gunName}_reload_speed_reduction`] || 0;
        this.costReduction = data?.[`${gunName}_cost_reduction`] || 0;
        this.kills = data?.[`${gunName}Kills`] || data?.[`${gunName}_kills`] || 0;
        this.headShots = data?.[`${gunName}Headshots`] || 0;
    }
}
export default CopsAndCrimsGun;
//# sourceMappingURL=CopsAndCrimsGun.js.map