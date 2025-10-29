import type {
  MurderMysteryAnimatedHatRaw,
  MurderMysteryDeathCryRaw,
  MurderMysteryGestureRaw,
  MurderMysteryGravestoneRaw,
  MurderMysteryKillNoteRaw,
  MurderMysteryKnifeSkinRaw,
  MurderMysteryLastWordsRaw,
  MurderMysteryProjectileTrailRaw,
  MurderMysteryVictoryDanceRaw
} from '../../../Types/Player.ts';

class MurderMysteryFavorites {
  animatedHat: MurderMysteryAnimatedHatRaw[];
  deathCry: MurderMysteryDeathCryRaw[];
  gesture: MurderMysteryGestureRaw[];
  gravestone: MurderMysteryGravestoneRaw[];
  killNote: MurderMysteryKillNoteRaw[];
  knifeSkin: MurderMysteryKnifeSkinRaw[];
  lastWords: MurderMysteryLastWordsRaw[];
  projectileTrail: MurderMysteryProjectileTrailRaw[];
  victoryDance: MurderMysteryVictoryDanceRaw[];
  constructor(data: Record<string, any>) {
    this.animatedHat = data?.animated_hat || [];
    this.deathCry = data?.deathcry || [];
    this.gesture = data?.gesture || [];
    this.gravestone = data?.gravestone || [];
    this.killNote = data?.kill_note || [];
    this.knifeSkin = data?.knife_skin || [];
    this.lastWords = data?.last_words || [];
    this.projectileTrail = data?.projectile_trail || [];
    this.victoryDance = data?.victory_dance || [];
  }
}

export default MurderMysteryFavorites;
