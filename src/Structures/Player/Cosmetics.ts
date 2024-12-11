import Pets from './Pets.js';
import { RemoveSnakeCaseString } from '../../Utils/RemoveSnakeCase.js';

class Cosmetics {
  cosmetics: string[];
  currentGadget: string | null;
  pets: Pets;
  suits: string[];
  hats: string[];
  gadgets: string[];
  morphs: string[];
  cloaks: string[];
  taunts: string[];
  rankColors: string[];
  particlePacks: string[];
  clickfx: string[];
  constructor(data: Record<string, any>) {
    this.cosmetics = data?.vanityMeta?.packages || [];
    this.currentGadget = data?.currentGadget || null;
    this.pets = new Pets(
      data,
      this.cosmetics.filter((x) => x.startsWith('pet_'))
    );
    this.suits =
      this.cosmetics.filter((x) => x.startsWith('suit_')).map((x) => RemoveSnakeCaseString(x.replace('suit_', ''))) ||
      [];
    this.hats =
      this.cosmetics.filter((x) => x.startsWith('hat_')).map((x) => RemoveSnakeCaseString(x.replace('hat_', ''))) || [];
    this.gadgets =
      this.cosmetics
        .filter((x) => x.startsWith('gadget_'))
        .map((x) => RemoveSnakeCaseString(x.replace('gadget_', ''))) || [];
    this.morphs =
      this.cosmetics.filter((x) => x.startsWith('morph_')).map((x) => RemoveSnakeCaseString(x.replace('morph_', ''))) ||
      [];
    this.cloaks =
      this.cosmetics.filter((x) => x.startsWith('cloak_')).map((x) => RemoveSnakeCaseString(x.replace('cloak_', ''))) ||
      [];
    this.taunts =
      this.cosmetics.filter((x) => x.startsWith('taunt_')).map((x) => RemoveSnakeCaseString(x.replace('taunt_', ''))) ||
      [];
    this.rankColors =
      this.cosmetics
        .filter((x) => x.startsWith('rankcolor_'))
        .map((x) => RemoveSnakeCaseString(x.replace('rankcolor_', ''))) || [];
    this.particlePacks =
      this.cosmetics
        .filter((x) => x.startsWith('particlepack_'))
        .map((x) => RemoveSnakeCaseString(x.replace('particlepack_', ''))) || [];
    this.clickfx =
      this.cosmetics
        .filter((x) => x.startsWith('clickeffects_'))
        .map((x) => RemoveSnakeCaseString(x.replace('clickeffects_', ''))) || [];
  }
}
export default Cosmetics;
