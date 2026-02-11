import SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';
class SkyBlockMemberPlayerStatsCandy {
    green;
    purple;
    total;
    batsSpawned;
    festivals;
    constructor(data) {
        this.green = data?.green_candy || 0;
        this.purple = data?.purple_candy || 0;
        this.total = this.green + this.purple;
        this.batsSpawned = data?.bats_spawned || {};
        this.festivals = Object.keys(data || {})
            .filter((key) => key.startsWith('spooky_festival_'))
            .map((key) => new SkyBlockMemberPlayerStatsSpookyFestival(data?.[key], Number(key.split('spooky_festival_')[1] || '0')))
            .sort((a, b) => a.year - b.year);
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberPlayerStatsCandy;
//# sourceMappingURL=SkyBlockMemberPlayerStatsCandy.js.map