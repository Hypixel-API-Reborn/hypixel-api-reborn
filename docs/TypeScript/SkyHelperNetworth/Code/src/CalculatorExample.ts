import HypixelAPIReborn from './HypixelAPIReborn';
import { ProfileNetworthCalculator } from 'skyhelper-networth';

async function Run() {
  const profiles = await HypixelAPIReborn.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');

  // Check that the player has a selectedProfile.
  const selectedProfile = profiles.raw.rawData.profiles.find(
    (profile: Record<string, any>) => profile.selected === true
  );
  if (selectedProfile === undefined) throw new Error("Player doesn't have a skyblock profile selected.");

  // Fetch the player's museum data
  const museum = await HypixelAPIReborn.getSkyBlockMuseum(selectedProfile.profileId);

  // Check that the player has API on.
  const museumProfile = museum.raw.rawData.members[selectedProfile.me.uuid];
  if (museumProfile === undefined) throw new Error('Player has museum API off.');

  // Create the Networth calculator
  const networthCalculator = new ProfileNetworthCalculator(
    selectedProfile,
    museumProfile,
    selectedProfile.banking.balance
  );
  console.log(networthCalculator);
}

// Required because you can't just run async stuff.
Run();
