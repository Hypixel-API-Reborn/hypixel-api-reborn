export const BoosterTypes = ['STACKED', 'QUEUED', 'ACTIVE'] as const;
export type BoosterType = (typeof BoosterTypes)[number];
