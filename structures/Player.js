const { SkyWars, BedWars, UHC, SpeedUHC, MurderMystery, Duels, CrazyWalls } = require('./MiniGames/Import')
const fetch = require('node-fetch')

class Player {
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        //General
        this.nickname = data.displayname;
        this.uuid = data.uuid;
        this.history = data.knownAliases;

        this.lastLogin = data.lastLogin;
        this.firstLogin = data.firstLogin;

        this.karma = data.karma;
        this.achievementPoints = data.achievementPoints;
        this.totalExperience = data.networkExp;
        this.level = getPlayerLevel(this.totalExperience);
        this.socialmedia = getSocialMedia(data.socialMedia)

        this.isOnline = () => {
            return this.lastLogin > data.lastLogout ? true : false;
        }
        //Stats
        this.stats = {
            skywars: new SkyWars(data.stats.SkyWars),
            bedwars: new BedWars(data.stats.Bedwars),
            uhc: new UHC(data.stats.UHC),
            speedUHC: new SpeedUHC(data.stats.SpeedUHC),
            murdermystery: new MurderMystery(data.stats.MurderMystery),
            duels: new Duels(data.stats.Duels),
            crazywalls: new CrazyWalls(data.stats.TrueCombat),
            skyblock: `https://sky.lea.moe/stats/` + this.nickname
        }

    }
}
/**
 * 
 * @param {number} exp 
 */
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

/**
 * 
 * @param {object} data 
 */
function getSocialMedia(data) {
    if (!data) return null;

    let links = data.links;

    if (!links) return null;
    let media = [];
    if (!links) return;

    if (links) {
        if (links.TWITTER !== undefined) {
            media.push({ name: `Twitter`, link: links.TWITTER })
        }
        if (links.YOUTUBE !== undefined) {
            media.push({ name: `YouTube`, link: links.YOUTUBE })
        }
        if (links.INSTAGRAM !== undefined) {
            media.push({name: `Instagram`, link: links.INSTAGRAM })
        }
        if (links.TWITCH !== undefined) {
            media.push({name: `Twitch`, link: links.TWITCH })
        }
        if (links.MIXER !== undefined) {
            media.push({name: `Mixer`, link: links.MIXER })
        }
        if (links.HYPIXEL !== undefined) {
            media.push({name: `Hypixel`, link: links.HYPIXEL })
        }
    }
    return media
}
module.exports = Player;