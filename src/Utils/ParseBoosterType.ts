import type { BoosterType } from '../Types/Booster.js';

export default function ParseBoosterType(data: Record<string, any>): BoosterType {
  if (data.stacked === true) return 'STACKED';
  if (!data.stacked) return 'QUEUED';
  return 'ACTIVE';
}
