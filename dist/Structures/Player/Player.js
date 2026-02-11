import Guild from '../Guild/Guild.js';
import House from '../House.js';
import PlayerAchievements from './PlayerAchievements/PlayerAchievements.js';
import PlayerAdventRewards from './PlayerAdventRewards/PlayerAdventRewards.js';
import PlayerCosmetics from './PlayerCosmetics/PlayerCosmetics.js';
import PlayerGifting from './PlayerGifting.js';
import PlayerHousing from './PlayerHousing/PlayerHousing.js';
import PlayerParkour from './PlayerParkour.js';
import PlayerQuests from './PlayerQuests/PlayerQuests.js';
import PlayerRankPurchase from './PlayerRankPurchase.js';
import PlayerRewards from './PlayerRewards/PlayerRewards.js';
import PlayerScorpiusBribe from './PlayerScorpiusBribe.js';
import PlayerSocialMedia from './PlayerSocialMedia.js';
import PlayerStats from './PlayerStats.js';
import RecentGame from '../RecentGame.js';
class Player {
    nickname;
    uuid;
    rank;
    firstLoginAt;
    lastLoginAt;
    lastLogoutAt;
    achievements;
    karma;
    stats;
    level;
    claimedCenturyCakeAt;
    language;
    cosmetics;
    rankPurchase;
    challenges;
    quests;
    rewards;
    parkour;
    channel;
    skyBlockFreeCookieAt;
    housing;
    adventRewards;
    gifting;
    socialMedia;
    scorpiusBribes;
    guild;
    houses;
    recentGames;
    constructor(data, extra) {
        this.nickname = data?.displayname || 'UNKNOWN';
        this.uuid = data?.uuid || 'UNKNOWN';
        this.rank = this.getRank(data);
        this.firstLoginAt = data?.firstLogin ? new Date(data?.firstLogin) : null;
        this.lastLoginAt = data?.lastLogin ? new Date(data?.lastLogin) : null;
        this.lastLogoutAt = data?.lastLogout ? new Date(data?.lastLogout) : null;
        this.achievements = new PlayerAchievements(data || {});
        this.karma = data?.karma || 0;
        this.stats = new PlayerStats(data?.stats || {});
        this.level = this.getPlayerLevelProgress(data?.networkExp || 0);
        this.claimedCenturyCakeAt = data?.claimed_century_cake ? new Date(data?.claimed_century_cake) : null;
        this.language = data?.userLanguage || 'ENGLISH';
        this.cosmetics = new PlayerCosmetics(data || {});
        this.rankPurchase = new PlayerRankPurchase(data || {});
        this.challenges = data?.challenges || {};
        this.quests = new PlayerQuests(data?.quests || {}, data?.questSettings?.autoActivate || false);
        this.rewards = new PlayerRewards(data || {});
        this.parkour = Object.keys(data?.parkourCompletions || {}).map((location) => new PlayerParkour(data?.parkourCompletions || {}, data?.parkourCheckpointBests || {}, location));
        this.channel = data?.channel || 'ALL';
        this.skyBlockFreeCookieAt = data?.skyblock_free_cookie ? new Date(data?.skyblock_free_cookie) : null;
        this.housing = new PlayerHousing(data?.housingMeta || {});
        this.adventRewards = Object.keys(data)
            .filter((key) => key.startsWith('adventRewards'))
            .map((adventReward) => new PlayerAdventRewards(data[adventReward], adventReward.split('adventRewards')[1] || 'UNKNOWN'));
        this.gifting = new PlayerGifting(data?.giftingMeta || {});
        this.socialMedia = new PlayerSocialMedia(data?.socialMedia?.links || {});
        this.scorpiusBribes =
            Object.keys(data)
                .filter((key) => key.startsWith('scorpius_bribe_'))
                .map((bribe) => new PlayerScorpiusBribe(data[bribe], bribe.split('scorpius_bribe_')[1] || 'UNKNOWN')) || [];
        this.guild = extra.guild || null;
        this.houses = extra.houses || null;
        this.recentGames = extra.recentGames || null;
    }
    getRank(player) {
        if (player.prefix) {
            switch (player.prefix.replace(/§[0-9|a-z]|\[|\]/g, '')) {
                case 'EVENTS':
                    return 'Events';
                case 'MOJANG':
                    return 'Mojang';
                case 'PIG+++':
                    return 'PIG+++';
                case 'INNIT':
                    return 'Innit';
                default:
                    return null;
            }
        }
        else if (player.rank) {
            switch (player.rank) {
                case 'STAFF':
                    return 'Staff';
                case 'YOUTUBER':
                    return 'YouTube';
                default:
                    return null;
            }
        }
        else {
            switch (player.newPackageRank) {
                case 'MVP_PLUS':
                    return player.monthlyPackageRank !== 'SUPERSTAR' ? 'MVP+' : 'MVP++';
                case 'MVP':
                    return 'MVP';
                case 'VIP_PLUS':
                    return 'VIP+';
                case 'VIP':
                    return 'VIP';
                default:
                    return null;
            }
        }
    }
    getPlayerLevel(exp) {
        const base = 10000;
        const growth = 2500;
        const reversePqPrefix = -(base - 0.5 * growth) / growth;
        const reverseConst = reversePqPrefix * reversePqPrefix;
        const growthDivides2 = 2 / growth;
        const num = 1 + reversePqPrefix + Math.sqrt(reverseConst + growthDivides2 * exp);
        const level = Math.round(num * 100) / 100;
        return level;
    }
    xpToNextLevel(xp) {
        const lvl = this.getPlayerLevel(xp);
        const xpToNext = 2500 * Math.floor(lvl) + 5000;
        if (xp < 10000)
            return 10000;
        return xpToNext;
    }
    levelToXP(xp) {
        let level = Number(Math.floor(this.getPlayerLevel(xp)));
        level = level - 1;
        return 1250 * level ** 2 + 8750 * level;
    }
    getPlayerLevelProgress(totalXp) {
        const xpFromLevel = this.levelToXP(totalXp);
        let currentXP = totalXp - xpFromLevel;
        const xpToNext = this.xpToNextLevel(totalXp);
        const remainingXP = xpToNext - currentXP + 2500;
        currentXP = currentXP - 2500;
        const percent = Math.round((currentXP / xpToNext) * 100 * 100) / 100;
        const percentRemaining = Math.round((100 - percent) * 100) / 100;
        return {
            level: this.getPlayerLevel(totalXp),
            totalXp,
            xpToNext,
            remainingXP,
            currentXP,
            percent,
            percentRemaining
        };
    }
    isRaw() {
        return false;
    }
}
export default Player;
//# sourceMappingURL=Player.js.map