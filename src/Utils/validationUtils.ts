import type { UUID } from '../Types/Global.ts';

export function removeDashesFromUUID(uuid: UUID): UUID {
  return uuid.replace(/-/g, '').toLowerCase();
}

export function addDashesFromUUID(uuid: UUID): UUID {
  return removeDashesFromUUID(uuid).replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}

export function isUUID(uuid: string): boolean {
  const regexp = /^[0-9a-f]{32}$/i;
  return regexp.test(removeDashesFromUUID(uuid));
}

export function isGuildId(id: string): boolean {
  return id.length === 24;
}

export function isValidJSON(obj: any) {
  return typeof obj === 'object' && JSON.stringify(obj)[0] === '{';
}
