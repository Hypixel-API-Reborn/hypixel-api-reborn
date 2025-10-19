import HypixelAPIReborn from './HypixelAPIReborn';

const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

// Check that the profiles data is not Raw API Data.
if (profiles.isRaw()) throw new Error('Player data is Raw Data.');

const selectedProfile = profiles.selectedProfile;
// Check that the player has a selectedProfile.
if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

console.log(selectedProfile);

// Required because you can't just run async stuff.
Run();
