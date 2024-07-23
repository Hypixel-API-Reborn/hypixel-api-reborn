/* eslint-disable */
const { client } = require('./tests/Client.js');

async function run() {
  // const player = await client.getSkyblockMember('add71246c46e455c8345c129ea6f146c', { getGarden: true });
  // const profile = player.get('Watermelon');
  // console.log(profile.garden.cropMilestones);
  const player = await client.getPlayer('50c8b946a7b74fd39ed6bb760acdc682');
  console.log(player.stats.duels);
}

run();
