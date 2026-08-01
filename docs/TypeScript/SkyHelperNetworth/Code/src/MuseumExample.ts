import HypixelAPIReborn from './HypixelAPIReborn';

async function Run() {
  const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');
  const selectedProfile = profiles.parsed.selectedProfile;
  // Check that the player has a selectedProfile.
  if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

  // Fetch the player's museum data
  const museum = await HypixelAPIReborn.getSkyBlockMuseum(selectedProfile.profileId);

  // Check that the player has API on.
  const museumProfile = museum.raw.data.members[selectedProfile.me.uuid];
  if (museumProfile === undefined) throw new Error('Player has museum API off.');

  console.log(museumProfile);
}

// Required because you can't just run async stuff.
Run();
