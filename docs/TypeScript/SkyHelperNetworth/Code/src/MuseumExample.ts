import HypixelAPIReborn from './HypixelAPIReborn';

async function Run() {
  const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

  // Check that the profiles data is not Raw API Data.
  if (profiles.isRaw()) throw new Error('Player data is Raw Data.');

  const selectedProfile = profiles.selectedProfile;
  // Check that the player has a selectedProfile.
  if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

  // Fetch the player's museum data
  const museum = await HypixelAPIReborn.getSkyBlockMuseum(selectedProfile.profileId, { raw: true });

  // Check that the requested data is raw.
  if (!museum.isRaw()) throw new Error('Museum data is not Raw Data.');

  // Check that the player has API on.
  const museumProfile = museum.data.members[selectedProfile.me.uuid];
  if (museumProfile === undefined) throw new Error('Player has museum API off.');

  console.log(museumProfile);
}

// Required because you can't just run async stuff.
Run();
