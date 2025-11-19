import type { BoosterType } from '../Types/Booster.ts';

export default function ParseBoosterType(data: Record<string, any>): BoosterType {
  if (data.stacked === true) return 'STACKED';
  if (!data.stacked) return 'QUEUED';
  return 'ACTIVE';
}
