const {SkyWars, BedWars} = require('./MiniGames')

class Player {
    /**
     * 
     * @param {object} data 
     */
    constructor (data) {
        //General
        this.name = data.player.displayname;
        this.uuid = data.player.uuid;
        this.nameHistory = data.player.knownAliases;
        this.lastLogin = data.player.lastLogin;
        this.firstLogin = data.player.firstLogin;
        this.karma = data.player.karma
        this.isOnline = () => {
            return data.player.lastLogin > data.player.lastLogout ? true : false;
        }
        this.stats = {
            skywars: new SkyWars(data.player.stats.SkyWars),
            bedwars: new BedWars(data.player.stats.Bedwars)
        }

    }
}
module.exports = Player;