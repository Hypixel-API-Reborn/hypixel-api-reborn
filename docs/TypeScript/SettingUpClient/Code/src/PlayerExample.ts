import HypixelAPIReborn from './HypixelAPIReborn';

async function Run() {
  const player = await HypixelAPIReborn.getPlayer('kathund');

  console.log(player);
}

// Required because you can't just run async stuff.
Run();
