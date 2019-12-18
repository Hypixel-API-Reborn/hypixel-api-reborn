const { SkyWars, BedWars, UHC, SpeedUHC, MurderMystery, Duels } = require('./MGs')

class Player {
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        //General
        this.name = data.player.displayname;
        this.uuid = data.player.uuid;
        this.nicknameHistory = data.player.knownAliases;
        this.lastLogin = data.player.lastLogin;
        this.firstLogin = data.player.firstLogin;
        this.karma = data.player.karma
        this.totalExperience = data.player.networkExp;
        this.level = getPlayerLevel(this.totalExperience);
        this.isOnline = () => {
            return this.lastLogin > data.player.lastLogout ? true : false;
        }
        //Stats
        this.stats = {
            skywars: new SkyWars(data.player.stats.SkyWars),
            bedwars: new BedWars(data.player.stats.Bedwars),
            uhc: new UHC(data.player.stats.UHC),
            speedUHC: new SpeedUHC(data.player.stats.SpeedUHC),
            murdermystery: new MurderMystery(data.player.stats.MurderMystery),
            duels: new Duels(data.player.stats.Duels)
        }

    }
}
function getPlayerLevel(exp) {
    let BASE = 10000
    let GROWTH = 2500
    let REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
    let REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX
    let GROWTH_DIVIDES_2 = 2 / GROWTH;
    let num = 1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp)
    let level = Math.round(num * 100) / 100;
    return level
}
module.exports = Player;