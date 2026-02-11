import PlayerAdventRewardsDay from './PlayerAdventRewardsDay.js';
class PlayerAdventRewards {
    year;
    day1;
    day2;
    day3;
    day4;
    day5;
    day6;
    day7;
    day8;
    day9;
    day10;
    day11;
    day12;
    day13;
    day14;
    day15;
    day16;
    day17;
    day18;
    day19;
    day20;
    day21;
    day22;
    day23;
    day24;
    day25;
    constructor(data, year) {
        this.year = Number(year);
        this.day1 = new PlayerAdventRewardsDay(data, '1');
        this.day2 = new PlayerAdventRewardsDay(data, '2');
        this.day3 = new PlayerAdventRewardsDay(data, '3');
        this.day4 = new PlayerAdventRewardsDay(data, '4');
        this.day5 = new PlayerAdventRewardsDay(data, '5');
        this.day6 = new PlayerAdventRewardsDay(data, '6');
        this.day7 = new PlayerAdventRewardsDay(data, '7');
        this.day8 = new PlayerAdventRewardsDay(data, '8');
        this.day9 = new PlayerAdventRewardsDay(data, '9');
        this.day10 = new PlayerAdventRewardsDay(data, '10');
        this.day11 = new PlayerAdventRewardsDay(data, '11');
        this.day12 = new PlayerAdventRewardsDay(data, '12');
        this.day13 = new PlayerAdventRewardsDay(data, '13');
        this.day14 = new PlayerAdventRewardsDay(data, '14');
        this.day15 = new PlayerAdventRewardsDay(data, '15');
        this.day16 = new PlayerAdventRewardsDay(data, '16');
        this.day17 = new PlayerAdventRewardsDay(data, '17');
        this.day18 = new PlayerAdventRewardsDay(data, '18');
        this.day19 = new PlayerAdventRewardsDay(data, '19');
        this.day20 = new PlayerAdventRewardsDay(data, '20');
        this.day21 = new PlayerAdventRewardsDay(data, '21');
        this.day22 = new PlayerAdventRewardsDay(data, '22');
        this.day23 = new PlayerAdventRewardsDay(data, '23');
        this.day24 = new PlayerAdventRewardsDay(data, '24');
        this.day25 = new PlayerAdventRewardsDay(data, '25');
    }
}
export default PlayerAdventRewards;
//# sourceMappingURL=PlayerAdventRewards.js.map