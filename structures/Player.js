const { SkyWars, BedWars, UHC, SpeedUHC, MurderMystery, Duels, CrazyWalls } = require('./MiniGames/Import')

class Player {
    /**
     * 
     * @param {object} data 
     */
    constructor(data) {
        //General
        this.nickname = data['displayname'];
        this.uuid = data['uuid'];
        this.history = data['knownAliases'];
        this.rank = getRank(data)

        this.lastLogin = data['lastLogin'];
        this.firstLogin = data['firstLogin'];

        this.karma = data['karma'];
        this.achievementPoints = data['achievementPoints'];
        this.totalExperience = data['networkExp'];
        this.level = getPlayerLevel(this.totalExperience);
        this.socialmedia = getSocialMedia(data['socialMedia'])

        this.isOnline = () => {
            return this.lastLogin > data['lastLogout'] ? true : false;
        }
        
        //Stats
        this.stats = (data['stats'] ? {
            skywars: (data['stats']['SkyWars'] ? new SkyWars(data['stats']['SkyWars']) : null),
            bedwars: (data['stats']['Bedwars'] ? new BedWars(data['stats']['Bedwars']) : null),
            uhc: (data['stats']['UHC'] ? new UHC(data['stats']['UHC']) : null),
            speedUHC: (data['stats']['SpeedUHC'] ? new SpeedUHC(data['stats']['SpeedUHC']) : null),
            murdermystery: (data['stats']['MurderMystery'] ? new MurderMystery(data['stats']['MurderMystery']) : null),
            duels: (data['stats']['Duels'] ? new Duels(data['stats']['Duels']) : null),
            crazywalls: (data['stats']['TrueCombat'] ? new CrazyWalls(data['stats']['TrueCombat']) : null),
            // prototype: {
            //     thepit: (data['stats']['Pit'] ? new ThePit(data['stats']['Pit']) : null)
            // }
        } : null)

    }
}
/**
     * @async
     * @description Get player's rank 
     * @param {object} player 
     */
function getRank(player) {
        let rank;
        if (player.prefix) {
            rank = player.prefix.replace(/§[0-9|a-z]|\[|\]/g, "")
        }

        else if (player.rank && player.rank != 'NORMAL') {
            switch (player.rank) {
                case 'MODERATOR':
                    rank = "Moder";
                    break;
                case 'YOUTUBER':
                    rank = "YouTube";
                    break;
                case 'HELPER':
                    rank = "Helper";
                    break;
                case 'ADMIN':
                    rank = "Admin";
                    break;
            }
        }

        else switch (player.newPackageRank) {
            case 'MVP_PLUS':
                rank = player.monthlyPackageRank && player.monthlyPackageRank == 'SUPERSTAR' ? "MVP++" : "MVP+";
                break;
            case 'MVP':
                rank = "MVP";
                break;
            case 'VIP_PLUS':
                rank = "VIP+";
                break;
            case 'VIP':
                rank = "VIP";
                break;
            default:
                rank = "Default";
        }
        return rank
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
        if(links.DISCORD !== undefined) {
            media.push({name: 'Discord', link: links.DISCORD})
        }
    }
    return media
}
module.exports = Player;