import HypixelAPIReborn from './HypixelAPIReborn';

async function Run() {
  const player = await HypixelAPIReborn.getPlayer('kathund');

  // Check that the player data is not Raw API Data..
  if (player.isRaw()) throw new Error('Player data is Raw Data.');

  console.log(player);
}

// Required because you can't just run async stuff.
Run();
