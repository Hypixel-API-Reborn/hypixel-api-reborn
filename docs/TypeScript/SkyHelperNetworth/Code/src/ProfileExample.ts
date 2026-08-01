import HypixelAPIReborn from './HypixelAPIReborn';

async function Run() {
  const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

  const selectedProfile = profiles.parsed.selectedProfile;
  // Check that the player has a selectedProfile.
  if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

  console.log(selectedProfile);
}

// Required because you can't just run async stuff.
Run();
