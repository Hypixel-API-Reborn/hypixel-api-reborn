class PlayerCosmeticsPet {
    isFavorite;
    name;
    active;
    hunger;
    lastFed;
    lastFedAt;
    thirst;
    lastDrank;
    lastDrankAt;
    exercise;
    lastExercised;
    lastExercisedAt;
    nickname;
    experience;
    constructor(name, data) {
        this.isFavorite = data?.vanityFavorites ? Boolean(name.toUpperCase() === data?.vanityFavorites) : false;
        name = name.replace('pet_', '');
        this.name = name;
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
        this.nickname = stats?.name || '';
        this.experience = stats?.experience || 0;
    }
}
export default PlayerCosmeticsPet;
//# sourceMappingURL=PlayerCosmeticsPet.js.map