import Divide from '../../../Utils/Divide.js';
import QuakecraftMode from './QuakecraftMode.js';
class Quakecraft {
    coins;
    solo;
    teams;
    wins;
    kills;
    deaths;
    KDR;
    killStreaks;
    distanceTraveled;
    shotsFired;
    headShots;
    instantRespawn;
    killPrefixColor;
    showPrefix;
    killSound;
    barrel;
    case;
    muzzle;
    sight;
    trigger;
    constructor(data) {
        this.coins = data?.coins || data?.tokens || 0;
        this.solo = new QuakecraftMode(data);
        this.teams = new QuakecraftMode(data, 'teams');
        this.wins = this.solo?.wins + this.teams?.wins;
        this.kills = this.solo?.kills + this.teams?.kills;
        this.deaths = this.solo?.deaths + this.teams?.deaths;
        this.KDR = Divide(this.kills, this.deaths);
        this.killStreaks = this.solo?.killStreaks + this.teams?.killStreaks;
        this.distanceTraveled = this.solo?.distanceTraveled + this.teams?.distanceTraveled;
        this.shotsFired = this.solo?.shotsFired + this.teams?.shotsFired;
        this.headShots = this.solo?.headShots + this.teams?.headShots;
        this.instantRespawn = data?.instantRespawn || false;
        this.killPrefixColor = data?.selectedKillPrefix || '';
        this.showPrefix = data?.showKillPrefix || false;
        this.killSound = data?.killsound || 'None';
        this.barrel = data?.barrel || 'None';
        this.case = data?.case || 'None';
        this.muzzle = data?.muzzle || 'None';
        this.sight = data?.sight || 'None';
        this.trigger = data?.trigger || 'None';
    }
}
export default Quakecraft;
//# sourceMappingURL=Quakecraft.js.map