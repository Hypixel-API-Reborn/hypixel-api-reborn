import { recursive } from '../../Utils/RemoveSnakeCase.js';

class Pet {
  isFavorite: boolean;
  name: string | null;
  active: boolean;
  hunger: number;
  lastFed: number | null;
  lastFedAt: Date | null;
  thirst: number;
  lastDrank: number | null;
  lastDrankAt: Date | null;
  exercise: number;
  lastExercised: number | null;
  lastExercisedAt: Date | null;
  rawNickname: string;
  nickname: string;
  experience: number;

  constructor(name: string, data: Record<string, any>) {
    this.isFavorite = data?.vanityFavorites ? Boolean(data?.vanityFavorites.includes(name.toUpperCase())) : false;
    name = name.replace('pet_', '');
    this.name = recursive(name) || null;
    this.active = data?.currentPet === name.toUpperCase();
    const stats = data?.petStats?.[name.toUpperCase()] || {};
    this.hunger = stats?.HUNGER?.value || 0;
    this.lastFed = stats?.HUNGER?.timestamp || null;
    this.lastFedAt = this.lastFed ? new Date(this.lastFed) : null;
    this.thirst = stats?.THIRST?.value || 0;
    this.lastDrank = stats?.THIRST?.timestamp || null;
    this.lastDrankAt = this.lastDrank ? new Date(this.lastDrank) : null;
    this.exercise = stats?.EXERCISE?.value || 0;
    this.lastExercised = stats?.EXERCISE ? stats?.EXERCISE?.timestamp : null;
    this.lastExercisedAt = this.lastExercised ? new Date(this.lastExercised) : null;
    this.rawNickname = stats?.name || '';
    this.nickname = this.rawNickname.replace(/§([0-9]|[a-f])|§/gm, '');
    this.experience = stats?.experience || 0;
  }
}

export default Pet;
