import SkyblockMemberMinion from './SkyblockMemberMinion.js';

function parse(data: string[]): { [key: string]: number[] } {
  const minionData: Record<string, number[]> = {};
  data
    .sort((a, b) => {
      if ((a.split('_')[0] || 'Unknown') < (b.split('_')[0] || 'Unknown')) return -1;
      if ((a.split('_')[0] || 'Unknown') > (b.split('_')[0] || 'Unknown')) return 1;
      return 0;
    })
    .forEach((minion) => {
      const minionName = minion.split('_')[0] || 'Unknown';
      if (undefined === minionData[minionName]) minionData[minionName] = [];
      minionData[minionName].push(Number(minion.split('_')[1] || '0'));
      minionData[minionName] = minionData[minionName].sort((a, b) => a - b);
    });
  return minionData;
}

class SkyblockMemberMinions {
  [key: string]: SkyblockMemberMinion;
  constructor(data: string[]) {
    const parsed = parse(data);
    if (!parsed) return;
    Object.keys(parsed).forEach((minion) => {
      if (undefined === parsed[minion]) return;
      this[minion.toLowerCase()] = new SkyblockMemberMinion(parsed[minion]);
    });
  }
}

export default SkyblockMemberMinions;
