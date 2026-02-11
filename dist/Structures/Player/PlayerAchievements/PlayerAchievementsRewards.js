class PlayerAchievementsRewards {
    constructor(data) {
        Object.keys(data)
            .filter((key) => key.startsWith('for_points_'))
            .map((key) => ({ [key.replace('for_points_', '')]: data[key] }))
            .sort((a, b) => {
            const keyA = Object.keys(a)?.[0] || '';
            const keyB = Object.keys(b)?.[0] || '';
            return parseInt(keyA) - parseInt(keyB);
        })
            .forEach((item) => {
            const key = Object.keys(item)?.[0] || 'UNKNOWN';
            this[key] = item[key];
        });
    }
}
export default PlayerAchievementsRewards;
//# sourceMappingURL=PlayerAchievementsRewards.js.map