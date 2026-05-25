export type UUID = string;
export type UserInput = string;
export const SortNames = ['a_to_z', 'z_to_a'] as const;
export type SortName = (typeof SortNames)[number];
